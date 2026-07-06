import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

const areas = [
  {
    title: "AI Validation Infrastructure",
    text: "Building structured evidence and human evaluation processes that help organisations understand whether AI systems are ready for real-world deployment.",
  },
  {
    title: "Enterprise Deployment Readiness",
    text: "Helping organisations move from AI exploration to AI deployment with the governance, evaluation and oversight structures that real work demands.",
  },
  {
    title: "Human Evaluation and Judgement",
    text: "Studying how human reviewers, domain experts and frontline workers provide the evaluation layer that automated systems cannot replicate.",
  },
];

export default function About() {
  return (
    <SiteLayout>
      {/* @section: about-hero */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">About</p>
          <h1 className="font-serif-display text-5xl leading-[1.02] md:text-7xl">Technology changes the world when people choose to trust it.</h1>
          <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>People often ask how I ended up building a company focused on AI deployment and human evaluation.</p>
            <p>The answer didn't begin with artificial intelligence.</p>
            <p>It began much earlier, with a simple observation that followed me throughout my career.</p>
            <p>Technology rarely succeeds because it is technically impressive.</p>
            <p>It succeeds because people decide it deserves a place in their work, their organisations and their lives.</p>
            <p>That observation has shaped almost every important decision I have made.</p>
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

      {/* @section: about-story */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <div className="max-w-4xl border-t border-border pt-10">

          {/* How I Got Here */}
          <h2 className="font-serif-display text-3xl leading-tight md:text-4xl">How I Got Here</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>My background combines engineering with business and economics, but I have never seen those disciplines as separate.</p>
            <p>Engineering taught me how systems are built.</p>
            <p>Business taught me why organisations adopt them.</p>
            <p>Working across early-stage startups taught me how uncertainty shapes decisions.</p>
            <p>Working inside global organisations, including IBM and KDDI, showed me what happens when technology must operate at enterprise scale.</p>
            <p>Across every environment, the same pattern kept appearing.</p>
            <p>The technical challenge was rarely the hardest part.</p>
            <p>The human challenge usually was.</p>
          </div>

          {/* A Global Perspective */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">A Global Perspective</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>Living and working across different parts of the world has been one of the most influential parts of my education.</p>
            <p>Different countries adopt technology differently.</p>
            <p>Different organisations define risk differently.</p>
            <p>Different cultures place trust in different kinds of evidence.</p>
            <p>Those experiences convinced me that technology cannot be understood only through engineering.</p>
            <p>It must also be understood through people.</p>
            <p>That perspective continues to shape how I think about artificial intelligence today.</p>
          </div>

          {/* The Question I Keep Coming Back To */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">The Question I Keep Coming Back To</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>Artificial intelligence has become remarkably capable.</p>
            <p>We can compare models.</p>
            <p>Measure benchmarks.</p>
            <p>Evaluate reasoning.</p>
            <p>Optimise performance.</p>
            <p>Yet one question remains surprisingly difficult.</p>
            <p>When should people trust an AI system enough to use it in real decisions?</p>
            <p>That question cannot be answered by technical performance alone.</p>
            <p>It requires understanding context.</p>
            <p>Human judgement.</p>
            <p>Risk.</p>
            <p>Expertise.</p>
            <p>Organisational behaviour.</p>
            <p>Those are the questions that increasingly define my work.</p>
          </div>

          {/* Why TaskHived Exists */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">Why TaskHived Exists</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>TaskHived grew out of this belief.</p>
            <p>As AI becomes part of everyday decision-making, organisations need more than technical evaluation.</p>
            <p>They need structured ways to understand how people interact with AI.</p>
            <p>Where human judgement improves outcomes.</p>
            <p>Where intervention remains necessary.</p>
            <p>How confidence should be interpreted.</p>
            <p>How evidence should be gathered before deployment.</p>
            <p>TaskHived is my attempt to build infrastructure that helps answer those questions through structured human evaluation and deployment readiness.</p>
            <p>The company is one expression of a much broader mission.</p>
          </div>

          {/* How I Think */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">How I Think</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>I don't believe the future belongs only to increasingly capable AI systems.</p>
            <p>Nor do I believe it belongs to humans working separately from technology.</p>
            <p>The future will belong to organisations that understand how human intelligence and artificial intelligence complement one another.</p>
            <p>Machine intelligence brings speed, scale and consistency.</p>
            <p>Human intelligence brings judgement, context, ethics, creativity and experience.</p>
            <p>The challenge is not deciding which one should win.</p>
            <p>The challenge is designing systems where both become stronger together.</p>
            <p>That is the problem I hope to spend the coming decades working on.</p>
          </div>

          {/* Looking Ahead */}
          <h2 className="mt-14 font-serif-display text-3xl leading-tight md:text-4xl">Looking Ahead</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>Artificial intelligence will reshape nearly every profession.</p>
            <p>It will influence how governments make decisions, how businesses operate and how individuals work.</p>
            <p>The choices we make during this transition will affect far more than technology.</p>
            <p>They will influence education.</p>
            <p>Employment.</p>
            <p>Institutions.</p>
            <p>Trust.</p>
            <p>Opportunity.</p>
            <p>My hope is to contribute to that future by helping organisations build AI systems that people can understand, evaluate and ultimately trust.</p>
          </div>

          {/* Final CTA */}
          <div className="mt-14 rounded-2xl border border-border bg-card p-8">
            <p className="font-serif-display text-2xl leading-snug text-foreground md:text-3xl">If these ideas resonate with your work, I'd love to continue the conversation.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Whether you're exploring AI deployment, governance, human evaluation or the future relationship between people and intelligent systems, I'm always interested in thoughtful discussions.</p>
            <a
              href="mailto:priya@taskhived.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* @section: about-beyond-work */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="max-w-4xl border-t border-border pt-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Beyond the work</p>
          <h2 className="font-serif-display text-3xl leading-tight md:text-5xl">110 countries. Five continents. One consistent question: what does it mean to trust?</h2>
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
