import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

const areas = [
  {
    title: "AI Validation & Governance",
    text: "Building the evidence, processes, and oversight structures that make Agentic AI systems genuinely deployable, not just impressive in demos.",
  },
  {
    title: "Enterprise Deployment Strategy",
    text: "Translating AI capability into operating models that survive real use. From pilot to production, with the right controls in place.",
  },
  {
    title: "Marketing Psychology & Narrative",
    text: "Understanding how organisations actually adopt AI, and how to close the gap between technical confidence and institutional trust.",
  },
];

export default function About() {
  return (
    <SiteLayout>
      {/* @section: about-hero */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">About Priya Darshani</p>
          <h1 className="font-serif-display text-5xl leading-[1.02] md:text-7xl">I help enterprises understand whether their AI is ready to trust.</h1>
          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Priya Darshani is CEO and co-founder of TaskHived, an AI validation infrastructure company for enterprises deploying Agentic AI systems. TaskHived was built to close a specific gap: organisations are building AI capability faster than they are building the capacity to trust it.
            </p>
            <p>
              Her background spans strategy consulting, enterprise technology at IBM and KDDI, and marketing psychology. She works at the intersection of how AI systems actually perform and how organisations actually make decisions about them. She advises enterprises across regulated industries on AI governance, deployment readiness, and the trust infrastructure that responsible AI requires.
            </p>
            <p>
              Her perspective is direct. AI does not become valuable because it scores well on a benchmark. It becomes valuable when people can evaluate it, govern it, and trust it inside real work. The discipline of building that trust is what she writes and talks about.
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
              I have travelled to 110 countries, and that has shaped how I think about people, systems, trust, and technology. Across cultures, I have seen that intelligence is not just technical. It is human, contextual, emotional, and deeply shaped by lived experience.
            </p>
            <p>
              That belief sits at the heart of my work in AI: building systems that are not only powerful, but responsible, understandable, and worthy of trust.
            </p>
            <p>
              Outside of work, meditation is an important part of how I stay grounded. It influences how I approach leadership, decision-making, and the kind of technology I want to help build. Technology that serves people, not the other way around.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
