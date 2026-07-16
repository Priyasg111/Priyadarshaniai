import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { SiteLayout } from "@/components/SiteLayout";
import SubstackFeed from "@/components/SubstackFeed";
import { WhitepaperGateModal, useWhitepaperGate } from "@/components/WhitepaperGateModal";
import { posts } from "@/data/posts";
import { useSEO } from "@/hooks/useSEO";

export default function Writing() {
  useSEO({
    title: 'Essays | Priya Darshani',
    description: 'Long-form essays by Priya Darshani exploring how organisations evaluate, trust and deploy artificial intelligence.',
    canonical: 'https://priyadarshani.ai/writing',
    ogTitle: 'Essays | Priya Darshani',
    ogDescription: 'Long-form essays exploring how organisations evaluate, trust and deploy artificial intelligence.',
    ogImage: 'https://priyadarshani.ai/images/priya-headshot.jpg',
    ogType: 'website',
  });

  const { open, setOpen, triggerDownload } = useWhitepaperGate();

  return (
    <SiteLayout>
      {open && <WhitepaperGateModal onClose={() => setOpen(false)} />}

      {/* @section: essays-header */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Essays</p>
          <h1 className="font-serif-display text-5xl leading-tight md:text-7xl">Essays</h1>
          <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-muted-foreground">
            <p>A collection of long-form writing exploring how organisations evaluate, trust and deploy artificial intelligence.</p>
          </div>
        </div>
      </section>

      {/* @section: essays-featured */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Featured Essay</p>
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4">
                <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Coming Soon
                </span>
              </div>
              <h2 className="font-serif-display text-3xl leading-tight md:text-5xl">The Missing Infrastructure for AI</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Why the future of AI won't be determined by better models, but by better human judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* @section: essays-whitepaper */}
      <section className="mx-auto max-w-7xl px-5 pb-10 md:px-8 md:pb-12">
        <div className="rounded-2xl border border-primary/30 bg-card p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">White Paper</p>
              <h2 className="font-serif-display text-2xl leading-tight md:text-3xl">
                Deploying AI in Regulated Industries Without Breaking Compliance
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                A 10-Week Framework for Financial Services, Healthcare, Telco, and Regulated Enterprise. A structured guide to AI validation infrastructure, governance, and deployment readiness in high-stakes environments.
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                onClick={triggerDownload}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
              >
                <ArrowDownToLine className="h-4 w-4" /> Download White Paper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* @section: essays-list */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-8 border-t border-border pt-8">
          <h2 className="font-serif-display text-3xl md:text-5xl">Latest Essays</h2>
        </div>
        {/* SubstackFeed: RSS placeholder — renders null until connected to live feed */}
        <SubstackFeed />
        <div className="grid gap-5 lg:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <a
            href="https://substack.com/@priya289311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
          >
            View all essays on Substack <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* @section: essays-subscribe */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Subscribe</p>
            <h2 className="font-serif-display text-3xl leading-tight md:text-5xl">Subscribe</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Receive new essays exploring human judgement, AI deployment, enterprise trust and decision-making.
            </p>
            <div className="mt-8">
              <a
                href="https://substack.com/@priya289311"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
              >
                Subscribe on Substack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* @section: essays-reddit */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
        <p className="text-sm text-muted-foreground">
          Discussing these ideas in the open? Join the conversation on{" "}
          <a
            href="https://www.reddit.com/r/DeployableAI/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition hover:underline"
          >
            r/DeployableAI
          </a>
        </p>
      </section>
    </SiteLayout>
  );
}
