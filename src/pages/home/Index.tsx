import { ArrowDownToLine, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { PostCard } from "@/components/PostCard";
import { SiteLayout } from "@/components/SiteLayout";
import { WhitepaperGateModal, useWhitepaperGate } from "@/components/WhitepaperGateModal";
import { posts } from "@/data/posts";

const writingThemes = [
  "AI Validation Infrastructure",
  "Agentic AI Governance",
  "Human Evaluation",
  "Deployment Readiness",
];

const Index = () => {
  const { open, setOpen, triggerDownload } = useWhitepaperGate();

  return (
    <SiteLayout>
      {open && <WhitepaperGateModal onClose={() => setOpen(false)} />}

      {/* @section: home-hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.5fr] md:px-8 md:py-28 lg:gap-20">
          <div className="flex max-w-4xl flex-col justify-center">
            <h1 className="font-serif-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              AI capability is moving faster than AI trust.
            </h1>
            <div className="mt-8 space-y-4 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              <p>I'm Priya Darshani, CEO and co-founder of TaskHived, an AI validation infrastructure company for enterprises deploying Agentic AI systems.</p>
              <p>My work focuses on a specific problem: organisations are building AI capability faster than they are building the capacity to evaluate, govern, and trust it inside real work.</p>
            </div>
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
                alt="Priya Darshani, CEO and Co-founder of TaskHived"
                className="relative h-64 w-64 rounded-full border border-border object-cover p-2 md:h-80 md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* @section: home-founder-thesis */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-primary">My thesis</p>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,680px)_1fr]">
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>I write about AI validation, deployment readiness, human judgment, governance, and the trust infrastructure required for responsible AI adoption.</p>
              <p>Before TaskHived, my background spanned strategy consulting, enterprise technology at IBM and KDDI, and marketing psychology. That combination shaped how I think about AI: not only as a technical system, but as something organisations must understand, measure, explain, and trust before they can responsibly deploy it.</p>
              <p>I've travelled to 110 countries, which has deeply shaped how I think about culture, behaviour, risk, and decision-making. Meditation is also central to my life. It keeps me grounded in the belief that intelligence is not only about speed, scale, or automation. It is also about awareness, judgment, and responsibility.</p>
            </div>
            <blockquote className="flex items-center border-l-2 border-primary pl-8 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-8">
              <p className="font-serif-display text-2xl leading-snug text-foreground lg:text-3xl">
                AI does not become valuable because it performs well in a demo or scores well on a benchmark. It becomes valuable when people can evaluate it, govern it, and trust it inside real work. That is the discipline I write about.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* @section: home-building-taskhived */}
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Building TaskHived</p>
          <h2 className="font-serif-display text-3xl leading-tight md:text-5xl">Validation infrastructure for enterprise Agentic AI</h2>
          <div className="mt-8 grid gap-6 text-lg leading-8 text-muted-foreground lg:grid-cols-3">
            <p>I co-founded TaskHived to build validation infrastructure for enterprises deploying Agentic AI systems.</p>
            <p>As AI systems become more autonomous, the question is no longer only whether they can generate useful outputs. The question is whether organisations can understand how they behave, where they fail, when they need human oversight, and whether they are ready to be trusted in real workflows.</p>
            <p>TaskHived focuses on structured human evaluation, behavioural testing, deployment-readiness evidence, and the trust infrastructure required to move AI from prototype to responsible adoption.</p>
          </div>
          <a
            href="https://taskhived.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
          >
            Learn more at taskhived.com <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* @section: home-writing-themes */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Writing themes</p>
          <div className="flex flex-wrap gap-3">
            {writingThemes.map((theme) => (
              <span key={theme} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* @section: home-featured-essays */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Featured essays</p>
            <h2 className="font-serif-display text-3xl md:text-5xl">Writing on AI validation, governance, and trust.</h2>
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

      {/* @section: home-whitepaper-cta */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-start gap-3 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">White Paper</p>
            <p className="mt-1 font-serif-display text-xl md:text-2xl">Deploying AI in Regulated Industries Without Breaking Compliance</p>
          </div>
          <button
            type="button"
            onClick={triggerDownload}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowDownToLine className="h-4 w-4" /> Download
          </button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
