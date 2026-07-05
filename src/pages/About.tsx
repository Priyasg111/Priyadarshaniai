import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

const areas = [
  {
    title: "Strategy & AI Governance",
    text: "Translating AI ambition into decisions, controls, and evidence leaders can use.",
  },
  {
    title: "Marketing Psychology",
    text: "Understanding how people decide, trust, adopt, resist, and change behaviour.",
  },
  {
    title: "Enterprise Deployment",
    text: "Helping teams move from pilots to operating models that can survive real use.",
  },
];

export default function About() {
  return (
    <SiteLayout>
      {/* @section: about-hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1fr_0.52fr] md:px-8 md:py-24 lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">About Priya Darshani</p>
          <h1 className="font-serif-display text-5xl leading-[1.02] md:text-7xl">I help enterprises understand whether their AI is ready to trust.</h1>
          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              Priya Darshani is CEO and co-founder of TaskHived. Her work focuses on AI validation, governance, and the trust infrastructure enterprises need before they can deploy AI responsibly.
            </p>
            <p>
              She brings experience from McKinsey, IBM, and KDDI, with a background spanning strategy consulting, enterprise technology, and marketing psychology. Based in Singapore, she works at the point where business judgement, human behaviour, and AI systems meet.
            </p>
            <p>
              Her perspective is practical. AI does not become valuable because it is impressive in a demo. It becomes valuable when people can evaluate it, govern it, improve it, and trust it inside real work.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/pdarshani/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="https://taskhived.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary">
              TaskHived <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="md:pt-14">
          <img src="/images/headshot_1.jpeg" alt="Priya Darshani" className="aspect-[4/5] w-full rounded-2xl border border-border object-cover" />
        </div>
      </section>

      {/* @section: about-focus-areas */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-5 border-t border-border pt-10 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/70">
              <h2 className="font-serif-display text-2xl">{area.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{area.text}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
