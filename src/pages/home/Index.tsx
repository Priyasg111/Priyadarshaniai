import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PostCard } from "@/components/PostCard";
import { SiteLayout } from "@/components/SiteLayout";
import { featuredHomePost, posts } from "@/data/posts";

const Index = () => {
  return (
    <SiteLayout>
      {/* @section: home-hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.55fr] md:px-8 md:py-28 lg:gap-20">
          <div className="flex max-w-4xl flex-col justify-center">
            <h1 className="font-serif-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              On AI, trust, and what it means to deploy responsibly.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I write about AI validation, enterprise deployment readiness, and the infrastructure trust requires. Strategy consultant. Co-founder, TaskHived. Based in Singapore.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/writing" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">
                Read the writing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                About Priya
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-primary/30" aria-hidden="true" />
              <img
                src="/images/priya-headshot.jpg"
                alt="Priya Darshani"
                className="relative h-64 w-64 rounded-full border border-border object-cover p-2 md:h-80 md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* @section: featured-article */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Featured article</p>
            <h2 className="font-serif-display text-3xl md:text-5xl">AI deployment readiness</h2>
          </div>
        </div>
        <PostCard post={featuredHomePost} large />
      </section>

      {/* @section: latest-writing-grid */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-10 flex flex-col justify-between gap-4 border-t border-border pt-10 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Latest writing</p>
            <h2 className="font-serif-display text-3xl md:text-5xl">Notes on validation, governance, and trust.</h2>
          </div>
          <Link to="/writing" className="inline-flex items-center text-sm font-medium text-primary">
            View all writing <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
