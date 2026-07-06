import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { getArticle } from "@/data/posts";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return <Navigate to="/writing" replace />;
  }

  return (
    <SiteLayout>
      {/* @section: article-header */}
      <article>
        <header className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <Link to="/writing" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Writing
          </Link>
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">{article.date}</p>
            <h1 className="font-serif-display text-5xl leading-[1.02] md:text-7xl">{article.title}</h1>
            <p className="mt-6 text-sm text-muted-foreground">
              Priya Darshani · {article.date}
              {article.updatedDate && (
                <span className="ml-3 text-muted-foreground/60">· Updated: {article.updatedDate}</span>
              )}
            </p>
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
            <p className="mb-10 text-xl leading-9 text-foreground/90">{article.excerpt}</p>
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 border-t border-border py-10 first:border-t-0 first:pt-0">
                <h2 className="mb-5 font-serif-display text-3xl leading-tight md:text-4xl">{section.title}</h2>
                <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
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
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
