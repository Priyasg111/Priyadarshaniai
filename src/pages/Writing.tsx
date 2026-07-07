import { ArrowDownToLine } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { SiteLayout } from "@/components/SiteLayout";
import { WhitepaperGateModal, useWhitepaperGate } from "@/components/WhitepaperGateModal";
import { posts } from "@/data/posts";
import { useSEO } from "@/hooks/useSEO";

export default function Writing() {
  useSEO({
    title: 'Writing | Priya Darshani',
    description: 'Essays by Priya Darshani on trust, human judgement, AI deployment readiness, enterprise AI adoption and how organisations build confidence in AI systems.',
    canonical: 'https://priyadarshani.ai/writing',
    ogTitle: 'Writing | Priya Darshani',
    ogDescription: 'Essays on trust, judgement and the future of AI deployment.',
    ogImage: 'https://priyadarshani.ai/images/priya-headshot.jpg',
    ogType: 'website',
  });

  const featured = posts.find((post) => post.featured) ?? posts[0];
  const { open, setOpen, triggerDownload } = useWhitepaperGate();

  return (
    <SiteLayout>
      {open && <WhitepaperGateModal onClose={() => setOpen(false)} />}

      {/* @section: writing-header */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Writing</p>
          <h1 className="font-serif-display text-5xl leading-tight md:text-7xl">Essays on trust, judgement and the future of AI deployment.</h1>
          <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-muted-foreground">
            <p>I write about the questions that organisations face as artificial intelligence moves from impressive demonstrations to real-world decisions. My work explores trust, human judgement, deployment readiness, enterprise adoption and how organisations build confidence in AI.</p>
          </div>
        </div>
      </section>

      {/* @section: writing-featured */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <PostCard post={featured} large />
      </section>

      {/* @section: writing-whitepaper */}
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

      {/* @section: writing-list */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-8 border-t border-border pt-8">
          <h2 className="font-serif-display text-3xl md:text-5xl">All articles</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* @section: writing-substack */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Newsletter</p>
            <h2 className="font-serif-display text-3xl leading-tight md:text-5xl">Stay in the conversation.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I write about trust, human judgement and the future of AI deployment. New essays go out via Substack — no noise, no product updates, just the ideas.
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

      {/* @section: writing-reddit */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
        <p className="text-sm text-muted-foreground">
          Discussing these ideas in the open? Join the conversation on Reddit.{" "}
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
