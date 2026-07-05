import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

const areas = [
  {
    title: "AI Validation Infrastructure",
    text: "Building the evidence, processes, and oversight structures that make Agentic AI systems genuinely deployable, not just impressive in demos.",
  },
  {
    title: "Enterprise Deployment Readiness",
    text: "Translating AI capability into operating models that survive real use. From pilot to production, with the right controls in place.",
  },
  {
    title: "Human Evaluation & Judgment",
    text: "Understanding how human reviewers, domain experts, and frontline workers provide the evaluation layer that automated systems cannot replace.",
  },
];

export default function About() {
  return (
    <SiteLayout>
      {/* @section: about-hero */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Priya Darshani</p>
          <h1 className="font-serif-display text-5xl leading-[1.02] md:text-7xl">CEO and co-founder of TaskHived. Building AI validation infrastructure for enterprises deploying Agentic AI systems.</h1>
          <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              Priya Darshani is CEO and co-founder of TaskHived, an AI validation infrastructure company for enterprises deploying Agentic AI systems.
            </p>
            <p>
              TaskHived was built to close a specific gap: organisations are adopting AI faster than they are building the capacity to evaluate, govern, and trust it.
            </p>
            <p>
              Priya's background spans strategy consulting, enterprise technology at IBM and KDDI, and marketing psychology. Her work sits at the intersection of AI system behaviour, organisational decision-making, governance, and deployment readiness.
            </p>
            <p>
              She is especially interested in how enterprises move from AI demos to AI systems that can be evaluated, monitored, improved, and trusted in real-world environments.
            </p>
            <p className="font-medium text-foreground/80">
              Her perspective is direct: AI does not become valuable because it scores well on a benchmark. It becomes valuable when people can evaluate it, govern it, and trust it inside real work. The discipline of building that trust is what she writes and talks about.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/pdarshani/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
            >
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://taskhived.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              TaskHived <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* @section: about-focus-areas */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <div className="grid gap-5 border-t border-border pt-10 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/70">
              <h2 className="font-serif-display text-2xl">{area.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{area.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* @section: about-beyond-work */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="max-w-4xl border-t border-border pt-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Beyond the work</p>
          <h2 className="font-serif-display text-3xl leading-tight md:text-5xl">110 countries. One consistent question: what does it mean to trust?</h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Priya has travelled to 110 countries, an experience that has shaped how she thinks about people, culture, systems, and trust. It reinforced a belief that sits at the centre of her work: intelligence is never purely technical. It is contextual, behavioural, and deeply human.
            </p>
            <p>
              Meditation is also central to her life and leadership. It keeps her grounded in the responsibility of building technology that serves people, rather than simply accelerating systems.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
