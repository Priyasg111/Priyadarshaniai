import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { getArticle } from "@/data/posts";
import { useSEO } from "@/hooks/useSEO";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);

  const ogImage = article?.heroImage
    ? `https://priyadarshani.ai${article.heroImage.startsWith('/') ? '' : '/'}${article.heroImage}`
    : 'https://priyadarshani.ai/images/priya-headshot.jpg';

  const publicationDate = article?.datePublished || article?.date;
  const modificationDate = article?.updatedDate || publicationDate;
  const description = article?.metaDescription || article?.excerpt ||
    'Long-form essays exploring how organisations evaluate, trust and deploy artificial intelligence.';

  useSEO(
    article
      ? {
          title: `${article.title} | Priya Darshani`,
          description,
          canonical: `https://priyadarshani.ai/writing/${article.slug}`,
          ogTitle: article.title,
          ogDescription: description,
          ogImage,
          ogType: 'article',
          articlePublishedTime: publicationDate,
          articleModifiedTime: modificationDate,
          robots: 'index, follow',
          author: article.author || 'Priya Darshani',
          keywords: article.keywords,
          twitterCard: 'summary_large_image',
        }
      : {
          title: 'Essays | Priya Darshani',
          description: 'Long-form essays exploring how organisations evaluate, trust and deploy artificial intelligence.',
          canonical: 'https://priyadarshani.ai/writing',
        }
  );

  // Inject BlogPosting JSON-LD, replaced on each article navigation
  useEffect(() => {
    if (!article) return;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": description,
      "image": [ogImage],
      "keywords": article.keywords?.join(", "),
      "author": {
        "@type": "Person",
        "name": "Priya Darshani",
        "url": "https://priyadarshani.ai/about",
        "jobTitle": "Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "TaskHived",
          "url": "https://taskhived.com",
        },
        "description": "Researching how organisations evaluate, trust and deploy artificial intelligence responsibly.",
      },
      "publisher": {
        "@type": "Person",
        "name": "Priya Darshani",
        "url": "https://priyadarshani.ai",
      },
      "datePublished": publicationDate,
      "dateModified": modificationDate,
      "url": `https://priyadarshani.ai/writing/${article.slug}`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://priyadarshani.ai/writing/${article.slug}`,
      },
      "isPartOf": {
        "@type": "Blog",
        "name": "Essays by Priya Darshani",
        "url": "https://priyadarshani.ai/writing",
      },
    };

    const duplicateSchemas = Array.from(document.querySelectorAll('#article-jsonld')) as HTMLScriptElement[];
    let el = duplicateSchemas[0] || null;
    duplicateSchemas.slice(1).forEach((duplicate) => duplicate.remove());
    if (!el) {
      el = document.createElement('script');
      el.id = 'article-jsonld';
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(jsonLd, null, 2);

    return () => {
      // Remove on unmount so it doesn't linger on non-article pages
      const existing = document.getElementById('article-jsonld');
      if (existing) existing.remove();
    };
  }, [article, description, modificationDate, ogImage, publicationDate]);

  if (!article) {
    return <Navigate to="/writing" replace />;
  }

  return (
    <SiteLayout>
      {/* @section: article-header */}
      <article>
        <header className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <Link to="/writing" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Essays
          </Link>
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">{article.date}</p>
            <h1 className="font-serif-display text-5xl leading-[1.02] md:text-7xl">{article.title}</h1>
            {/* @section: article-author-byline */}
            <div className="mt-6 flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground">Priya Darshani</p>
              {article.authorDescription ? (
                <p className="text-xs text-muted-foreground">{article.authorDescription}</p>
              ) : (
                <>
                  <p className="text-xs text-muted-foreground">Founder, TaskHived</p>
                  <p className="text-xs text-muted-foreground">Researching how organisations evaluate, trust and deploy artificial intelligence.</p>
                </>
              )}
              {article.updatedDate && (
                <p className="mt-1 text-xs text-muted-foreground/60">{article.date} · Updated: {article.updatedDate}</p>
              )}
              {!article.updatedDate && (
                <p className="mt-1 text-xs text-muted-foreground/60">{article.date}</p>
              )}
            </div>
          </div>
        </header>

        {/* @section: article-hero-image */}
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <img
            src={article.heroImage}
            alt={`Hero image for ${article.title}`}
            className="h-[300px] w-full rounded-2xl border border-border object-cover md:h-[520px]"
          />
        </div>

        {/* @section: article-body-with-toc */}
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[220px_minmax(0,760px)_1fr] lg:py-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-border pl-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Contents</p>
              <nav className="flex flex-col gap-3">
                {article.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="text-sm leading-5 text-muted-foreground transition hover:text-primary">
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="max-w-none">
            {article.showExcerpt !== false && (
              <p className="mb-10 text-xl leading-9 text-foreground/90">{article.excerpt}</p>
            )}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 border-t border-border py-10 first:border-t-0 first:pt-0">
                <h2 className="mb-5 font-serif-display text-3xl leading-tight md:text-4xl">{section.title}</h2>
                <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-lg md:leading-9 [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4">
                  {section.paragraphs.map((paragraph) => (
                    section.html ? (
                      <p key={paragraph.slice(0, 40)} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ) : (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    )
                  ))}
                </div>
                {section.quote && (
                  <blockquote className="my-8 border-l-2 border-primary pl-6 font-serif-display text-2xl leading-snug text-foreground md:text-3xl">
                    "{section.quote}"
                  </blockquote>
                )}
                {section.midImage && (
                  <div className="mt-8">
                    <img
                      src={section.midImage}
                      alt={section.midImageAlt ?? "Editorial illustration"}
                      className="h-64 w-full rounded-xl border border-border object-cover md:h-80"
                    />
                  </div>
                )}
              </section>
            ))}

            {/* @section: article-substack-cta */}
            <div className="mt-14 border-t border-border pt-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Continue reading</p>
              <a
                href="https://substack.com/@priya289311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary transition hover:underline"
              >
                View all essays on Substack
              </a>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
