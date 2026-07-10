import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import vm from "node:vm";

const SITE_URL = "https://priyadarshani.ai";
const AUTHOR_NAME = "Priya Darshani";
const AUTHOR_URL = `${SITE_URL}/about`;
const FEED_TITLE = "Priya Darshani Essays";
const FEED_DESCRIPTION = "Essays by Priya Darshani on AI validation, enterprise deployment, governance, trust, and human judgement.";
const DEFAULT_CATEGORY = "AI Validation";
const DEFAULT_READ_TIME = "Essay";

const monthIndex = new Map([
  ["jan", 0], ["january", 0],
  ["feb", 1], ["february", 1],
  ["mar", 2], ["march", 2],
  ["apr", 3], ["april", 3],
  ["may", 4],
  ["jun", 5], ["june", 5],
  ["jul", 6], ["july", 6],
  ["aug", 7], ["august", 7],
  ["sep", 8], ["sept", 8], ["september", 8],
  ["oct", 9], ["october", 9],
  ["nov", 10], ["november", 10],
  ["dec", 11], ["december", 11],
]);

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function cdata(value = "") {
  return `<![CDATA[${String(value).replace(/]]>/g, "]] >")}]]>`;
}

function absoluteUrl(pathOrUrl = "") {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

function parseContentDate(value, fallback = new Date()) {
  if (!value) return fallback;
  const raw = String(value).trim();
  const exact = raw.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (exact) {
    const month = monthIndex.get(exact[1].toLowerCase());
    if (month !== undefined) {
      return new Date(Date.UTC(Number(exact[3]), month, Number(exact[2]), 0, 0, 0));
    }
  }

  const monthYear = raw.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYear) {
    const month = monthIndex.get(monthYear[1].toLowerCase());
    if (month !== undefined) {
      return new Date(Date.UTC(Number(monthYear[2]), month, 1, 0, 0, 0));
    }
  }

  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

function isoDateOnly(date) {
  return date.toISOString().slice(0, 10);
}

function toRfc822(date) {
  return date.toUTCString();
}

function loadContent() {
  const sourcePath = resolve(process.cwd(), "src/data/posts.ts");
  let code = readFileSync(sourcePath, "utf-8");

  code = code
    .replace(/export type [\s\S]*?};\n/g, "")
    .replace(/export const getArticle[\s\S]*$/g, "")
    .replace(/export const posts\s*:\s*Post\[\]\s*=/, "const posts =")
    .replace(/export const featuredHomePost\s*:\s*Post\s*=/, "const featuredHomePost =")
    .replace(/export const articles\s*:\s*Record<string, Article>\s*=/, "const articles =")
    .replace(/export const/g, "const");

  const context = { __CONTENT__: null };
  vm.createContext(context);
  vm.runInContext(`${code}\n__CONTENT__ = { posts, featuredHomePost, articles };`, context, {
    filename: sourcePath,
    timeout: 1000,
  });

  return context.__CONTENT__;
}

function articleHtml(article) {
  const parts = [];
  parts.push(`<p>${escapeXml(article.excerpt)}</p>`);
  for (const section of article.sections ?? []) {
    parts.push(`<h2 id="${escapeXml(section.id)}">${escapeXml(section.title)}</h2>`);
    for (const paragraph of section.paragraphs ?? []) {
      parts.push(`<p>${escapeXml(paragraph)}</p>`);
    }
    if (section.quote) {
      parts.push(`<blockquote>${escapeXml(section.quote)}</blockquote>`);
    }
    if (section.midImage) {
      parts.push(`<figure><img src="${escapeXml(absoluteUrl(section.midImage))}" alt="${escapeXml(section.midImageAlt ?? section.title)}" /></figure>`);
    }
  }
  return parts.join("\n");
}

function normalizeArticle(article) {
  const published = parseContentDate(article.date);
  const updated = article.updatedDate ? parseContentDate(article.updatedDate, published) : published;
  const canonicalUrl = `${SITE_URL}/writing/${article.slug}`;
  const imageUrl = absoluteUrl(article.heroImage || article.image);
  const category = article.category || DEFAULT_CATEGORY;
  const author = article.author || AUTHOR_NAME;
  const readTime = article.readTime || DEFAULT_READ_TIME;
  const contentHtml = articleHtml(article);

  return {
    ...article,
    canonicalUrl,
    imageUrl,
    category,
    author,
    readTime,
    published,
    updated,
    contentHtml,
  };
}

function getArticles() {
  const { articles } = loadContent();
  return Object.values(articles)
    .map(normalizeArticle)
    .sort((a, b) => b.published.getTime() - a.published.getTime());
}

function rssXml(articles) {
  const latestDate = articles.reduce((latest, article) => (
    article.updated.getTime() > latest.getTime() ? article.updated : latest
  ), new Date(0));

  const items = articles.map((article) => `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(article.canonicalUrl)}</link>
      <guid isPermaLink="true">${escapeXml(article.canonicalUrl)}</guid>
      <pubDate>${toRfc822(article.published)}</pubDate>
      <dc:creator>${escapeXml(article.author)}</dc:creator>
      <author>${escapeXml(article.author)}</author>
      <category>${escapeXml(article.category)}</category>
      <description>${cdata(article.excerpt)}</description>
      <content:encoded>${cdata(article.contentHtml)}</content:encoded>
      <media:content url="${escapeXml(article.imageUrl)}" medium="image" />
      <media:thumbnail url="${escapeXml(article.imageUrl)}" />
      <enclosure url="${escapeXml(article.imageUrl)}" type="image/jpeg" length="0" />
      <atom:link href="${escapeXml(article.canonicalUrl)}" rel="alternate" type="text/html" />
      <dcterms:modified>${article.updated.toISOString()}</dcterms:modified>
      <source url="${SITE_URL}/feed.xml">${escapeXml(FEED_TITLE)}</source>
      <priya:readingTime>${escapeXml(article.readTime)}</priya:readingTime>
      <priya:canonicalUrl>${escapeXml(article.canonicalUrl)}</priya:canonicalUrl>
      <priya:updatedDate>${escapeXml(article.updatedDate || article.date)}</priya:updatedDate>
    </item>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:dcterms="http://purl.org/dc/terms/"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:priya="https://priyadarshani.ai/ns/rss">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/writing</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${toRfc822(latestDate)}</lastBuildDate>
    <generator>priyadarshani.ai build-time feed generator</generator>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <atom:link href="${SITE_URL}/feed.json" rel="alternate" type="application/feed+json" />
    <image>
      <url>${SITE_URL}/favicon.png</url>
      <title>${escapeXml(FEED_TITLE)}</title>
      <link>${SITE_URL}/writing</link>
    </image>
${items}
  </channel>
</rss>
`;
}

function jsonFeed(articles) {
  return `${JSON.stringify({
    version: "https://jsonfeed.org/version/1.1",
    title: FEED_TITLE,
    home_page_url: `${SITE_URL}/writing`,
    feed_url: `${SITE_URL}/feed.json`,
    description: FEED_DESCRIPTION,
    language: "en",
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    items: articles.map((article) => ({
      id: article.canonicalUrl,
      url: article.canonicalUrl,
      external_url: article.canonicalUrl,
      title: article.title,
      content_html: article.contentHtml,
      summary: article.excerpt,
      image: article.imageUrl,
      banner_image: article.imageUrl,
      date_published: article.published.toISOString(),
      date_modified: article.updated.toISOString(),
      authors: [{ name: article.author, url: AUTHOR_URL }],
      tags: [article.category, article.readTime].filter(Boolean),
      _priyadarshani: {
        slug: article.slug,
        canonical_url: article.canonicalUrl,
        reading_time: article.readTime,
        updated_date: article.updatedDate || article.date,
      },
    })),
  }, null, 2)}\n`;
}

function sitemapXml(articles) {
  const staticRoutes = [
    { loc: `${SITE_URL}/`, lastmod: "2026-07-10", changefreq: "monthly", priority: "1.0" },
    { loc: `${SITE_URL}/about`, lastmod: "2026-07-10", changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/writing`, lastmod: "2026-07-10", changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/taskhived`, lastmod: "2026-07-10", changefreq: "monthly", priority: "0.7" },
  ];

  const articleRoutes = articles.map((article) => ({
    loc: article.canonicalUrl,
    lastmod: isoDateOnly(article.updated),
    changefreq: "monthly",
    priority: article.featured ? "0.8" : "0.7",
  }));

  const entries = [...staticRoutes, ...articleRoutes]
    .map((route) => `  <url>
    <loc>${escapeXml(route.loc)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function writeGeneratedFile(relativePath, content) {
  const destinations = [
    resolve(process.cwd(), "public", relativePath),
    resolve(process.cwd(), "dist", relativePath),
  ];

  for (const destination of destinations) {
    if (destination.includes(`${process.cwd()}/dist`) && !existsSync(resolve(process.cwd(), "dist"))) {
      continue;
    }
    mkdirSync(dirname(destination), { recursive: true });
    writeFileSync(destination, content, "utf-8");
    console.log(`[content-feeds] wrote ${relativePath} -> ${destination}`);
  }
}

function run() {
  const articles = getArticles();
  writeGeneratedFile("feed.xml", rssXml(articles));
  writeGeneratedFile("feed.json", jsonFeed(articles));
  writeGeneratedFile("sitemap.xml", sitemapXml(articles));
  console.log(`[content-feeds] generated feeds and sitemap from ${articles.length} articles in src/data/posts.ts`);
}

run();
