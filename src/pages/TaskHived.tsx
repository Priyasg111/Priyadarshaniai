import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export default function TaskHived() {
  return (
    <SiteLayout>
      {/* @section: taskhived-hero */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">TaskHived</p>
          <h1 className="font-serif-display text-5xl leading-[1.02] md:text-7xl">Building evidence for trustworthy AI deployment.</h1>
          <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>Artificial intelligence has reached a point where technical capability is no longer the only question organisations need to answer.</p>
            <p>Most enterprise leaders no longer ask:</p>
            <p className="font-medium text-foreground/80">Can AI do this?</p>
            <p>Instead they increasingly ask:</p>
            <p className="font-medium text-foreground/80">Should this system be trusted to do this?</p>
            <p>That distinction changes everything.</p>
            <p>Technical performance is only one part of deployment.</p>
            <p>Real-world adoption depends on evidence that organisations can understand, evaluate and defend.</p>
            <p>That is the problem TaskHived exists to solve.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://taskhived.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
            >
              Visit TaskHived <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* @section: taskhived-story */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <div className="max-w-4xl border-t border-border pt-10">

          {/* Why We Started */}
          <h2 className="font-serif-display text-3xl leading-tight md:text-4xl">Why We Started</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>As AI systems move into healthcare, legal services, finance, education, government and other high-impact environments, the consequences of poor decisions become increasingly significant.</p>
            <p>Technical benchmarks tell us how a model performs under controlled conditions.</p>
            <p>Real deployment introduces entirely different questions.</p>
            <p>How should human judgement influence outcomes?</p>
            <p>When should people intervene?</p>
            <p>How should disagreement be handled?</p>
            <p>What evidence should exist before an organisation places trust in an AI system?</p>
            <p>These questions require more than model evaluation.</p>
            <p>They require structured human judgement.</p>
          </div>

          {/* Our Perspective */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">Our Perspective</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>We believe organisations need better evidence before deployment.</p>
            <p>Not only evidence about models.</p>
            <p>Evidence about how people interact with those models.</p>
            <p>How consistently experts evaluate outputs.</p>
            <p>How confidence changes across different situations.</p>
            <p>How judgement improves decision quality.</p>
            <p>How human oversight contributes to safer deployment.</p>
            <p>Rather than replacing human expertise, we believe AI should make expert judgement more scalable, more consistent and easier to understand.</p>
          </div>

          {/* What TaskHived Is Building */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">What TaskHived Is Building</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>TaskHived is building infrastructure that helps organisations generate structured evidence about AI performance in real-world contexts.</p>
            <p>Our work combines human evaluation, deployment readiness, expert judgement and measurable evaluation frameworks.</p>
            <p>The goal is not simply to score AI systems.</p>
            <p>The goal is to help organisations understand whether those systems are ready to support meaningful decisions.</p>
            <p>Over time, we hope this evidence becomes part of how organisations evaluate trust before deployment.</p>
          </div>

          {/* The Long-Term Vision */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">The Long-Term Vision</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>Artificial intelligence will increasingly become part of everyday organisational decision-making.</p>
            <p>The future will not depend only on building better models.</p>
            <p>It will depend on building better relationships between people and those models.</p>
            <p>That means understanding where human judgement adds value.</p>
            <p>Where oversight remains essential.</p>
            <p>Where confidence should be questioned.</p>
            <p>Where deployment requires additional evidence.</p>
            <p>Our ambition is to help make those decisions more measurable, more transparent and more trustworthy.</p>
          </div>

          {/* Human Intelligence Infrastructure */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">Human Intelligence Infrastructure</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>One way we describe this work is Human Intelligence Infrastructure.</p>
            <p>Just as modern organisations rely on technical infrastructure to build and deploy software, we believe they will increasingly require infrastructure that supports human judgement alongside artificial intelligence.</p>
            <p>Human Intelligence Infrastructure is our way of describing the systems, processes and evidence that allow organisations to combine human expertise with machine capability in a structured and scalable way.</p>
            <p>This is not about slowing AI down.</p>
            <p>It is about helping organisations deploy AI with greater confidence.</p>
          </div>

          {/* Looking Forward */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">Looking Forward</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>TaskHived is still at the beginning of its journey.</p>
            <p>Many of the questions we care about remain open.</p>
            <p>That is exactly what makes the work meaningful.</p>
            <p>As AI continues to evolve, we hope to contribute practical tools, research and ideas that help organisations make better decisions about when and how AI should be trusted.</p>
            <p>We see this as a long-term problem worth solving.</p>
          </div>

          {/* Final CTA */}
          <div className="mt-14 rounded-2xl border border-border bg-card p-8">
            <p className="font-serif-display text-2xl leading-snug text-foreground md:text-3xl">If your organisation is exploring trustworthy AI deployment, human evaluation or evidence-based AI governance, we'd love to continue the conversation.</p>
            <a
              href="https://taskhived.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
            >
              Explore TaskHived <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
