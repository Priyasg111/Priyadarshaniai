// Indexable-route prerender for the CSR (vite + react + BrowserRouter) client workspace.
//
// Runs after `vite build` from apps/client. It SSR-renders the home route and
// every published article route into dist so crawlers and social clients receive
// real content and page-specific metadata. The client hydrates the markup back
// into the normal CSR app.
import { mkdirSync, readFileSync, writeFileSync, rmSync } from "fs";
import { dirname, relative, resolve, sep } from "path";
import React from "react";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = _traverse.default ?? _traverse;
const generate = _generate.default ?? _generate;

const ROOT_RE = /<div\s+id=["']root["'][^>]*>([\s\S]*?)<\/div>/;
const RESERVED_GLOBALS = new Set(["undefined", "globalThis", "global", "window", "self"]);
const SKIPPED = Symbol("prerender skipped");
const SRC_EXT_RE = /\.[cm]?[jt]sx?$/;

function warnAndSkip(msg, err) {
  console.warn(`[prerender] skipped: ${msg}`);
  if (err) console.warn(err?.stack || String(err));
  return SKIPPED;
}

function installBrowserGlobals(window) {
  Object.defineProperty(globalThis, "window", { value: window, writable: true, configurable: true });
  Object.defineProperty(globalThis, "self", { value: window, writable: true, configurable: true });

  for (const key of Reflect.ownKeys(window)) {
    if (typeof key !== "string" || RESERVED_GLOBALS.has(key)) {
      continue;
    }

    const sourceDescriptor = Object.getOwnPropertyDescriptor(window, key);
    const targetDescriptor = Object.getOwnPropertyDescriptor(globalThis, key);

    if (!sourceDescriptor || targetDescriptor) {
      continue;
    }

    try {
      Object.defineProperty(globalThis, key, {
        configurable: true,
        enumerable: sourceDescriptor.enumerable,
        get: () => window[key],
        set: (value) => {
          window[key] = value;
        },
      });
    } catch {}
  }

  if (typeof globalThis.matchMedia !== "function") {
    Object.defineProperty(globalThis, "matchMedia", {
      value: () => ({
        matches: false,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
      }),
      writable: true,
      configurable: true,
    });
  }
}

function isUppercaseName(name) {
  return typeof name === "string" && /^[A-Z]/.test(name);
}

function calleeName(callee) {
  if (t.isIdentifier(callee)) {
    return callee.name;
  }

  if (t.isMemberExpression(callee) && !callee.computed && t.isIdentifier(callee.property)) {
    return callee.property.name;
  }

  return "";
}

function callExpression(objectName, propertyName, args = []) {
  return t.callExpression(
    t.memberExpression(t.identifier(objectName), t.identifier(propertyName)),
    args
  );
}

function createCatchBody(componentName) {
  return t.blockStatement([
    t.expressionStatement(
      callExpression("console", "warn", [
        t.stringLiteral(`[prerender] skipped failed component: ${componentName}`),
        t.identifier("error"),
      ])
    ),
    t.returnStatement(t.nullLiteral()),
  ]);
}

function wrapStatements(statements, componentName) {
  return [
    t.tryStatement(
      t.blockStatement(statements),
      t.catchClause(t.identifier("error"), createCatchBody(componentName))
    ),
  ];
}

function isAlreadyWrapped(body) {
  return body.body.length === 1 && t.isTryStatement(body.body[0]);
}

function wrapFunctionBody(fn, componentName) {
  if (!fn.body) {
    return false;
  }

  if (t.isBlockStatement(fn.body)) {
    if (isAlreadyWrapped(fn.body)) {
      return false;
    }

    fn.body.body = wrapStatements(fn.body.body, componentName);
    return true;
  }

  const expression = fn.body;
  fn.body = t.blockStatement(wrapStatements([t.returnStatement(expression)], componentName));
  return true;
}

function wrapClassRender(classNode, componentName) {
  let rewrites = 0;

  for (const member of classNode.body.body) {
    if (
      (t.isClassMethod(member) || t.isClassPrivateMethod(member)) &&
      t.isIdentifier(member.key) &&
      member.key.name === "render" &&
      member.body &&
      !isAlreadyWrapped(member.body)
    ) {
      member.body.body = wrapStatements(member.body.body, componentName);
      rewrites += 1;
    }
  }

  return rewrites;
}

function shouldTransformSource(cwd, id) {
  const cleanId = id.split("?", 1)[0];
  if (!SRC_EXT_RE.test(cleanId)) {
    return false;
  }

  const srcDir = resolve(cwd, "src");
  const rel = relative(srcDir, cleanId);
  return Boolean(rel && !rel.startsWith("..") && !rel.split(sep).includes("node_modules"));
}

function createPrerenderSafeRenderPlugin(cwd) {
  return {
    name: "prerender-safe-render",
    enforce: "pre",
    transform(code, id) {
      if (!shouldTransformSource(cwd, id)) {
        return null;
      }

      let ast;
      try {
        ast = parse(code, {
          sourceType: "module",
          plugins: ["typescript", "jsx", "classProperties", "classPrivateProperties", "classPrivateMethods"],
        });
      } catch (error) {
        console.warn(`[prerender] safe render transform skipped ${id}`, error);
        return null;
      }

      let rewrites = 0;

      traverse(ast, {
        FunctionDeclaration(path) {
          const name = path.node.id?.name;
          if (isUppercaseName(name) && wrapFunctionBody(path.node, name)) {
            rewrites += 1;
          }
        },

        VariableDeclarator(path) {
          if (!t.isIdentifier(path.node.id) || !isUppercaseName(path.node.id.name) || !path.node.init) {
            return;
          }

          const name = path.node.id.name;
          const init = path.node.init;

          if ((t.isFunctionExpression(init) || t.isArrowFunctionExpression(init)) && wrapFunctionBody(init, name)) {
            rewrites += 1;
            return;
          }

          if (t.isClassExpression(init)) {
            rewrites += wrapClassRender(init, name);
          }
        },

        ClassDeclaration(path) {
          const name = path.node.id?.name;
          if (isUppercaseName(name)) {
            rewrites += wrapClassRender(path.node, name);
          }
        },

        CallExpression(path) {
          const name = calleeName(path.node.callee);
          if (name !== "memo" && name !== "forwardRef") {
            return;
          }

          const component = path.node.arguments[0];
          if (!component || (!t.isFunctionExpression(component) && !t.isArrowFunctionExpression(component))) {
            return;
          }

          const declarator = path.findParent((parentPath) => parentPath.isVariableDeclarator());
          const declaratorName = declarator?.isVariableDeclarator() && t.isIdentifier(declarator.node.id)
            ? declarator.node.id.name
            : "AnonymousComponent";
          const componentName = component.id?.name ?? declaratorName;

          if (wrapFunctionBody(component, componentName)) {
            rewrites += 1;
          }
        },
      });

      if (!rewrites) {
        return null;
      }

      return {
        code: generate(ast, { retainLines: true, sourceMaps: false }, code).code,
        map: null,
      };
    },
  };
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceOrInsertHeadTag(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function articleTemplate(template, item) {
  const canonical = item.url;
  const description = item._metadata?.meta_description || item.summary;
  const keywords = Array.isArray(item.tags) ? item.tags.join(", ") : "";
  const image = item.banner_image || item.image;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: item.title,
    description,
    image: [image],
    keywords,
    author: {
      "@type": "Person",
      name: "Priya Darshani",
      url: "https://priyadarshani.ai/about",
      jobTitle: "Founder",
      worksFor: {
        "@type": "Organization",
        name: "TaskHived",
        url: "https://taskhived.com",
      },
      description: "Researching how organisations evaluate, trust and deploy artificial intelligence responsibly.",
    },
    publisher: {
      "@type": "Person",
      name: "Priya Darshani",
      url: "https://priyadarshani.ai",
    },
    datePublished: item.date_published,
    dateModified: item.date_modified,
    url: canonical,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    isPartOf: {
      "@type": "Blog",
      name: "Essays by Priya Darshani",
      url: "https://priyadarshani.ai/writing",
    },
  };

  let html = template;
  html = replaceOrInsertHeadTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(`${item.title} | Priya Darshani`)}</title>`);
  html = replaceOrInsertHeadTag(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(description)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+name=["']author["'][^>]*>/i, `<meta name="author" content="Priya Darshani" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+name=["']keywords["'][^>]*>/i, `<meta name="keywords" content="${escapeHtml(keywords)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+name=["']robots["'][^>]*>/i, `<meta name="robots" content="index, follow" />`);
  html = replaceOrInsertHeadTag(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(item.title)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="article" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${escapeHtml(canonical)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${escapeHtml(image)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+name=["']twitter:card["'][^>]*>/i, `<meta name="twitter:card" content="summary_large_image" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(item.title)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+property=["']article:published_time["'][^>]*>/i, `<meta property="article:published_time" content="${escapeHtml(item.date_published)}" />`);
  html = replaceOrInsertHeadTag(html, /<meta\s+property=["']article:modified_time["'][^>]*>/i, `<meta property="article:modified_time" content="${escapeHtml(item.date_modified)}" />`);
  const articleJsonLd = `<script id="article-jsonld" type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`;
  html = html.replace("</head>", `    ${articleJsonLd}\n  </head>`);
  return html.replace('src="./app-config.js"', 'src="/app-config.js"');
}

async function run() {
  const cwd = process.cwd();
  const htmlPath = resolve(cwd, "dist/index.html");

  let template;
  try {
    template = readFileSync(htmlPath, "utf-8");
  } catch (e) {
    return warnAndSkip(`cannot read ${htmlPath}`, e);
  }
  if (!ROOT_RE.test(template)) {
    return warnAndSkip("no <div id=\"root\"> in dist/index.html (self-contained HTML?)");
  }

  // Idempotent: if #root already holds baked markup (e.g. the npm postbuild hook
  // ran AND the build pipeline also invokes this script), do nothing. A second
  // pass would re-match the non-greedy ROOT_RE against nested markup and corrupt
  // the HTML.
  const existing = template.match(ROOT_RE);
  if (existing && existing[1].trim()) {
    console.log("[prerender] skipped: #root already prerendered");
    return SKIPPED;
  }

  let window = null;
  try {
    const { build } = await import("vite");
    const { default: reactPlugin } = await import("@vitejs/plugin-react");
    const { componentTagger } = await import("lovable-tagger");
    await build({
      configFile: false,
      logLevel: "error",
      plugins: [createPrerenderSafeRenderPlugin(cwd), componentTagger(), reactPlugin()],
      resolve: { alias: { "@": resolve(cwd, "src") } },
      build: {
        ssr: true,
        rollupOptions: {
          input: "./src/App.tsx",
          external: ["react", "react-dom", "react-dom/server"],
          output: { format: "es", entryFileNames: "App.js" },
        },
        outDir: "dist-ssr",
        emptyOutDir: true,
      },
      ssr: { noExternal: true },
    });

    const { Window } = await import("happy-dom");
    window = new Window({
      url: "http://localhost:3000",
      settings: {
        disableJavaScriptFileLoading: true,
        disableJavaScriptEvaluation: true,
        disableCSSFileLoading: true,
      },
    });
    installBrowserGlobals(window);

    const { renderToString } = await import("react-dom/server");
    const { default: App } = await import(`${resolve(cwd, "dist-ssr/App.js")}?prerender=${Date.now()}`);

    const renderRoute = (pathname) => {
      window.history.replaceState({}, "", pathname);
      const html = renderToString(React.createElement(App));
      if (!html.trim()) throw new Error(`empty SSR output for ${pathname}`);
      return html;
    };

    const homeHtml = renderRoute("/");
    const renderedHome = template.replace(ROOT_RE, `<div id="root">${homeHtml}</div>`);
    writeFileSync(htmlPath, renderedHome);

    const feed = JSON.parse(readFileSync(resolve(cwd, "dist/feed.json"), "utf-8"));
    const articleItems = Array.isArray(feed.items) ? feed.items : [];
    for (const item of articleItems) {
      const pathname = new URL(item.url).pathname;
      const articleHtml = renderRoute(pathname);
      const articlePage = articleTemplate(
        template.replace(ROOT_RE, `<div id="root">${articleHtml}</div>`),
        item
      );
      const outputPath = resolve(cwd, `dist${pathname}/index.html`);
      mkdirSync(dirname(outputPath), { recursive: true });
      writeFileSync(outputPath, articlePage);
    }

    console.log(`[prerender] home page and ${articleItems.length} article pages baked into dist`);
  } catch (e) {
    return warnAndSkip("render failed", e);
  } finally {
    try { if (window?.happyDOM) await window.happyDOM.close(); } catch {}
    try { rmSync(resolve(cwd, "dist-ssr"), { recursive: true, force: true }); } catch {}
  }
}

run().then(() => process.exit(0)).catch(() => process.exit(0));
