import { PostCard } from "@/components/PostCard";
import { SiteLayout } from "@/components/SiteLayout";
import { posts } from "@/data/posts";

export default function Writing() {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const remaining = posts.filter((post) => post.slug !== featured.slug);

  return (
    <SiteLayout>
      {/* @section: writing-header */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Writing</p>
          <h1 className="font-serif-display text-5xl leading-tight md:text-7xl">Clear thinking on AI validation, enterprise trust, and deployment readiness.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Essays from Priya Darshani on the practical work of moving AI from compelling prototypes to systems enterprises can trust.
          </p>
        </div>
      </section>

      {/* @section: writing-featured */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <PostCard post={featured} large />
      </section>

      {/* @section: writing-list */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-8 border-t border-border pt-8">
          <h2 className="font-serif-display text-3xl md:text-5xl">All articles</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
          {remaining.length === 0 ? null : null}
        </div>
      </section>
    </SiteLayout>
  );
}
