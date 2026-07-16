import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const SITE_URL = "https://priyadarshani.ai";
const SITE_TITLE = "Priya Darshani Essays";
const SITE_DESCRIPTION = "Essays by Priya Darshani on AI validation, human judgement, deployment readiness, and trust in artificial intelligence.";
const AUTHOR = {
  name: "Priya Darshani",
  url: `${SITE_URL}/about`,
};

const INPUT = resolve(process.cwd(), "src/data/posts.ts");
const PUBLIC_DIR = resolve(process.cwd(), "public");
const DIST_DIR = resolve(process.cwd(), "dist");
const OUTPUT_TARGETS = [PUBLIC_DIR, DIST_DIR];

function stripTypeBlocks(source) {
  return source
    .replace(/export\s+type\s+Post\s*=\s*\{[\s\S]*?\};\s*/g, "")
    .replace(/export\s+type\s+ArticleSection\s*=\s*\{[\s\S]*?\};\s*/g, "")
    .replace(/export\s+type\s+Article\s*=\s*Post\s*&\s*\{[\s\S]*?\};\s*/g, "")
    .replace(/export\s+const\s+getArticle[\s\S]*$/g, "")
    .replace(/export\s+const\s+/g, "const ")
    .replace(/const\s+(posts|featuredHomePost|articles)\s*:\s*[^=\n]+=/g, "const $1 =");
}

function loadContentData() {
  const source = readFileSync(INPUT, "utf-8");
  const executable = `${stripTypeBlocks(source)}\n\nglobalThis.__CONTENT_FEED_DATA__ = { posts, featuredHomePost, articles };`;
  const context = vm.createContext({ globalThis: {} });
  vm.runInContext(executable, context, { filename: INPUT, timeout: 1000 });
  const data = context.globalThis.__CONTENT_FEED_DATA__;
  if (!data?.articles || typeof data.articles !== "object") {
    throw new Error("Unable to load articles from src/data/posts.ts");
  }
  return data;
}

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function cdata(value = "") {
  return `<![CDATA[${String(value).replace(/\]\]>/g, "]]]]><![CDATA[>")}]]>`;
}

function slugUrl(slug) {
  return `${SITE_URL}/writing/${slug}`;
}

function absoluteAssetUrl(path) {
  if (!path) return `${SITE_URL}/images/priya-headshot.jpg`;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

function parseDate(value) {
  if (!value) return null;
  const raw = String(value).trim();
  const monthYear = raw.match(/^([A-Za-z]{3,9})\s+(\d{4})$/);
  const normalized = monthYear ? `${monthYear[1]} 1, ${monthYear[2]}` : raw;
  const parsed = new Date(normalized);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed;
}

function isoDate(value, fallback) {
  const parsed = parseDate(value) || parseDate(fallback) || new Date();
  return parsed.toISOString();
}

function rfc822Date(value, fallback) {
  return new Date(isoDate(value, fallback)).toUTCString();
}

function sitemapDate(value, fallback) {
  return isoDate(value, fallback).slice(0, 10);
}

function plainText(article) {
  const sectionText = (article.sections || [])
    .flatMap((section) => [section.title, ...(section.paragraphs || []), section.quote].filter(Boolean));
  return [article.title, article.excerpt, ...sectionText].filter(Boolean).join("\n\n");
}

function computedReadTime(article) {
  if (article.readTime) return article.readTime;
  const words = plainText(article).trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function articleCategories(article) {
  const categories = new Set([article.category || "AI Validation", "Essays"]);
  if (/deploy|deployment/i.test(`${article.title} ${article.excerpt}`)) categories.add("Deployment Readiness");
  if (/trust/i.test(`${article.title} ${article.excerpt}`)) categories.add("AI Trust");
  return Array.from(categories);
}

function articleHtml(article) {
  const published = escapeXml(article.date);
  const updated = escapeXml(article.updatedDate || article.date);
  const readTime = escapeXml(computedReadTime(article));
  const image = absoluteAssetUrl(article.heroImage || article.image);
  const sections = (article.sections || [])
    .map((section) => {
      const paragraphs = (section.paragraphs || [])
        .map((paragraph) => `<p>${section.html ? paragraph : escapeXml(paragraph)}</p>`)
        .join("\n");
      const quote = section.quote ? `\n<blockquote>${escapeXml(section.quote)}</blockquote>` : "";
      const midImage = section.midImage
        ? `\n<figure><img src="${escapeXml(absoluteAssetUrl(section.midImage))}" alt="${escapeXml(section.midImageAlt || section.title)}" /></figure>`
        : "";
      return `<section id="${escapeXml(section.id)}">\n<h2>${escapeXml(section.title)}</h2>\n${paragraphs}${quote}${midImage}\n</section>`;
    })
    .join("\n");

  const excerpt = article.showExcerpt === false ? "" : `\n<p>${escapeXml(article.excerpt)}</p>`;
  return `<article>\n<header>\n<h1>${escapeXml(article.title)}</h1>\n<p>By ${escapeXml(article.author || AUTHOR.name)} · Published ${published} · Updated ${updated} · ${readTime}</p>${excerpt}\n<figure><img src="${escapeXml(image)}" alt="${escapeXml(`Hero image for ${article.title}`)}" /></figure>\n</header>\n${sections}\n</article>`;
}

function sortArticles(articles) {
  return Object.values(articles).sort((a, b) => {
    const bDate = parseDate(b.date)?.getTime() ?? 0;
    const aDate = parseDate(a.date)?.getTime() ?? 0;
    return bDate - aDate || a.title.localeCompare(b.title);
  });
}

function generateRss(items) {
  const latest = items.reduce((max, item) => {
    const time = parseDate(item.updatedDate || item.date)?.getTime() ?? 0;
    return Math.max(max, time);
  }, 0);

  const rssItems = items.map((article) => {
    const url = slugUrl(article.slug);
    const image = absoluteAssetUrl(article.heroImage || article.image);
    const categories = articleCategories(article).map((category) => `      <category>${escapeXml(category)}</category>`).join("\n");
    const html = articleHtml(article);
    return `    <item>\n      <title>${escapeXml(article.title)}</title>\n      <link>${escapeXml(url)}</link>\n      <guid isPermaLink="true">${escapeXml(url)}</guid>\n      <description>${cdata(article.excerpt)}</description>\n      <content:encoded>${cdata(html)}</content:encoded>\n      <dc:creator>${escapeXml(article.author || AUTHOR.name)}</dc:creator>\n      <pubDate>${rfc822Date(article.date)}</pubDate>\n      <atom:updated>${isoDate(article.updatedDate || article.date, article.date)}</atom:updated>\n      <priya:updatedDate>${escapeXml(article.updatedDate || article.date)}</priya:updatedDate>\n      <priya:readingTime>${escapeXml(computedReadTime(article))}</priya:readingTime>\n      <priya:canonicalUrl>${escapeXml(url)}</priya:canonicalUrl>\n${categories}\n      <media:content url="${escapeXml(image)}" medium="image" />\n      <media:thumbnail url="${escapeXml(image)}" />\n      <enclosure url="${escapeXml(image)}" type="image/jpeg" />\n    </item>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"\n  xmlns:atom="http://www.w3.org/2005/Atom"\n  xmlns:content="http://purl.org/rss/1.0/modules/content/"\n  xmlns:dc="http://purl.org/dc/elements/1.1/"\n  xmlns:media="http://search.yahoo.com/mrss/"\n  xmlns:priya="https://priyadarshani.ai/feed/ns#">\n  <channel>\n    <title>${escapeXml(SITE_TITLE)}</title>\n    <link>${escapeXml(SITE_URL)}</link>\n    <atom:link href="${escapeXml(`${SITE_URL}/feed.xml`)}" rel="self" type="application/rss+xml" />\n    <description>${escapeXml(SITE_DESCRIPTION)}</description>\n    <language>en</language>\n    <lastBuildDate>${new Date(latest || Date.now()).toUTCString()}</lastBuildDate>\n    <generator>priyadarshani.ai content feed generator</generator>\n${rssItems}\n  </channel>\n</rss>\n`;
}

function generateJsonFeed(items) {
  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: SITE_TITLE,
    home_page_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.json`,
    description: SITE_DESCRIPTION,
    authors: [AUTHOR],
    language: "en",
    items: items.map((article) => {
      const url = slugUrl(article.slug);
      const image = absoluteAssetUrl(article.heroImage || article.image);
      return {
        id: url,
        url,
        external_url: url,
        title: article.title,
        summary: article.excerpt,
        content_html: articleHtml(article),
        content_text: plainText(article),
        image,
        banner_image: image,
        tags: articleCategories(article),
        authors: [{ name: article.author || AUTHOR.name, url: AUTHOR.url }],
        date_published: isoDate(article.date),
        date_modified: isoDate(article.updatedDate || article.date, article.date),
        _metadata: {
          reading_time: computedReadTime(article),
          canonical_url: url,
        },
      };
    }),
  };
  return `${JSON.stringify(feed, null, 2)}\n`;
}

function generateSitemap(items) {
  const staticRoutes = [
    { loc: `${SITE_URL}/`, lastmod: new Date().toISOString().slice(0, 10) },
    { loc: `${SITE_URL}/writing`, lastmod: new Date().toISOString().slice(0, 10) },
    { loc: `${SITE_URL}/about`, lastmod: new Date().toISOString().slice(0, 10) },
    { loc: `${SITE_URL}/taskhived`, lastmod: new Date().toISOString().slice(0, 10) },
  ];
  const articleRoutes = items.map((article) => ({
    loc: slugUrl(article.slug),
    lastmod: sitemapDate(article.updatedDate || article.date, article.date),
  }));
  const urls = [...staticRoutes, ...articleRoutes];
  const body = urls.map((entry) => `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>\n  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function run() {
  const data = loadContentData();
  const items = sortArticles(data.articles);
  const rss = generateRss(items);
  const jsonFeed = generateJsonFeed(items);
  const sitemap = generateSitemap(items);

  for (const targetDir of OUTPUT_TARGETS) {
    mkdirSync(targetDir, { recursive: true });
    writeFileSync(resolve(targetDir, "feed.xml"), rss);
    writeFileSync(resolve(targetDir, "feed.json"), jsonFeed);
    writeFileSync(resolve(targetDir, "sitemap.xml"), sitemap);
  }

  console.log(`[content-feeds] wrote ${items.length} RSS items, ${items.length} JSON feed items, and ${items.length + 4} sitemap URLs to ${OUTPUT_TARGETS.length} output targets`);
}

run();
