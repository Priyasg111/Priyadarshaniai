export type Post = {
  title: string;
  slug: string;
  date: string;
  updatedDate?: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  midImage?: string;
  midImageAlt?: string;
};

export type Article = Post & {
  heroImage: string;
  sections: ArticleSection[];
};

export const posts: Post[] = [
  {
    title: "The AI Trust Gap: Why Capability Is Moving Faster Than Confidence",
    slug: "ai-trust-gap-capability-faster-than-confidence",
    date: "Mar 14, 2025",
    image: "/images/art_a_2.jpeg",
    excerpt:
      "AI validation is not a technical checkpoint. It is the discipline that decides whether an organisation can trust a system enough to put it in front of customers, employees, and regulators.",
  },
  {
    title: "Why Human Judgment Still Matters in AI Evaluation",
    slug: "why-human-judgment-matters-ai-evaluation",
    date: "Jul 08, 2025",
    image: "/images/art_c_1.jpeg",
    excerpt:
      "Automated benchmarks are useful. They cannot tell you whether an AI system behaves well inside the messy reality of enterprise work.",
  },
  {
    title: "What Enterprises Should Measure Before Deploying AI Agents",
    slug: "what-enterprises-should-measure-before-deploying-ai-agents",
    date: "Sep 22, 2025",
    image: "/images/art_d_2.jpeg",
    excerpt:
      "Validation is not a pass-or-fail stamp. It is a structured way to understand performance, limits, risk, and readiness across real use cases.",
  },
  {
    title: "Agentic AI Needs Validation Infrastructure, Not Just Governance Documents",
    slug: "agentic-ai-needs-validation-infrastructure",
    date: "Nov 11, 2025",
    updatedDate: "Jul 2026",
    image: "/images/art_e_2.jpeg",
    excerpt:
      "The honest version of AI validation starts with uncomfortable questions. What can fail, who notices, and what happens next?",
  },
  {
    title: "Why Regulated Industries Cannot Treat AI Validation as a Checkbox",
    slug: "regulated-industries-ai-validation-not-a-checkbox",
    date: "Apr 09, 2026",
    updatedDate: "Jul 2026",
    image: "/images/article_5.jpeg",
    excerpt:
      "In regulated environments, the cost of a poorly deployed AI system is not just operational. It is reputational, legal, and deeply human. That changes what deployment readiness actually requires.",
    featured: true,
  },
  {
    title: "The Difference Between AI Safety, AI Security, and AI Trust",
    slug: "difference-ai-safety-security-trust",
    date: "Jan 20, 2026",
    image: "/images/art_f_1.jpeg",
    excerpt:
      "Strategy, AI validation, behavioural science, enterprise deployment, governance, and trust. These are the six lenses I keep returning to.",
  },
];

export const featuredHomePost: Post = {
  title: "From AI Demo to Deployment: What Readiness Actually Requires",
  slug: "from-ai-demo-to-deployment-readiness",
  date: "May 19, 2025",
  image: "/images/art_b_1.jpeg",
  excerpt:
    "Most enterprises don't have an AI problem. They have a trust problem. The gap between what AI systems can do and what organisations are prepared to deploy is widening, and the cost of that gap is real.",
};

export const articles: Record<string, Article> = {
  /* ─── Article A ─── */
  "ai-trust-gap-capability-faster-than-confidence": {
    ...posts[0],
    heroImage: "/images/art_a_1.jpeg",
    sections: [
      {
        id: "the-gap",
        title: "The gap no one wants to talk about",
        paragraphs: [
          "Every enterprise AI programme has a moment where the demo ends and the hard questions begin. The system worked beautifully in the controlled environment. Now someone asks: can we actually put this in front of customers? The silence that follows is not a technical problem. It is a trust problem.",
          "AI validation exists to close that gap. Not by proving a system is perfect, but by building enough structured evidence that leaders can make deliberate, defensible decisions about deployment. The goal is not to eliminate risk. It is to understand risk clearly enough to act on it responsibly.",
        ],
        quote: "Validation is the bridge between what AI can do and what an organisation is prepared to trust.",
      },
      {
        id: "not-testing",
        title: "Validation is not testing",
        paragraphs: [
          "There is a persistent confusion between testing and validation. Testing checks whether a system does what it was designed to do. Validation asks whether the system should be doing it at all, in this context, for these users, with these consequences.",
          "A model that passes every benchmark can still fail in production. It can be accurate on average while being catastrophically wrong on the edge cases that matter most. It can perform well in one business unit and introduce unacceptable risk in another. Testing tells you the system works. Validation tells you whether deploying it is the right call.",
          "This distinction matters because it shifts validation from a technical function to a strategic one. The people who should be involved are not only engineers. They include business owners, risk leaders, legal counsel, and the frontline workers who will rely on the output.",
        ],
        midImage: "/images/art_a_2.jpeg",
        midImageAlt: "Abstract technology pattern representing interconnected data systems",
      },
      {
        id: "continuous-trust-layer",
        title: "A continuous trust layer, not a one-time audit",
        paragraphs: [
          "The most dangerous framing in enterprise AI is treating validation as a gate you pass through once before launch. Real systems change. Data drifts. Business processes evolve. User behaviour shifts in ways nobody anticipated. A system that was deployment-ready in Q1 may be producing unreliable outputs by Q3, and nobody will notice until something goes wrong.",
          "The building blocks of ongoing trust are data integrity, human evaluation, and contextual accuracy. Data integrity asks whether the system is seeing the same quality and distribution of information it was validated against. Human evaluation brings domain experts and frontline users into the loop to catch what automated metrics miss. Contextual accuracy tracks whether the system's outputs remain appropriate as the surrounding business context changes.",
        ],
        quote: "A system that was deployment-ready in Q1 may be producing unreliable outputs by Q3. The evidence base must keep pace.",
      },
      {
        id: "building-into-the-dna",
        title: "Build it in, don't bolt it on",
        paragraphs: [
          "Organisations that treat validation as an afterthought pay for it twice. First when they delay launch because the evidence base is too thin to satisfy risk and legal. Second when something goes wrong post-deployment because the ongoing monitoring was never properly designed.",
          "The teams that get this right design validation into the architecture of their AI programmes from the beginning. They define what good looks like before they build. They build human evaluation into the workflow rather than treating it as a last resort. They instrument their systems to surface the signals that matter, not just the signals that are easy to measure.",
          "This is not about slowing AI down. It is about building the kind of evidence that lets leaders move faster with more confidence. Deployment readiness is not a constraint on AI ambition. It is what makes AI ambition sustainable.",
        ],
      },
    ],
  },

  /* ─── Article B ─── */
  "from-ai-demo-to-deployment-readiness": {
    ...featuredHomePost,
    heroImage: "/images/art_b_1.jpeg",
    sections: [
      {
        id: "trust-not-capability",
        title: "The real problem is trust, not capability",
        paragraphs: [
          "Enterprise AI investment is accelerating. The gap between what gets built and what gets deployed is accelerating faster. Most organisations have more AI capability sitting in pilot programmes than they have running in production. The bottleneck is rarely the technology. It is the confidence to act on it.",
          "Deployment readiness is the discipline of building that confidence systematically. It asks not just whether the system works, but whether the organisation is prepared to operate it, govern it, monitor it, and respond when it behaves unexpectedly. Those are not technical questions. They are strategic and operational ones.",
        ],
        quote: "The bottleneck is no longer imagination. It is the organisational readiness to trust.",
      },
      {
        id: "what-readiness-means",
        title: "What deployment readiness actually means in practice",
        paragraphs: [
          "Deployment readiness is not a score. It is a decision discipline. It asks whether the evidence base is sufficient to support a deployment decision at a specific level of risk, in a specific operational context, with a specific set of users and consequences.",
          "A customer support assistant has a different readiness bar than a clinical decision support tool. A system with a human in the loop has a different bar than one that operates autonomously. Treating these as the same problem produces frameworks that are either too cautious to be useful or too permissive to be safe.",
        ],
        midImage: "/images/art_b_2.jpeg",
        midImageAlt: "Data server infrastructure representing scale and deployment complexity",
      },
      {
        id: "five-failure-modes",
        title: "The five failure modes enterprises hit when they rush",
        paragraphs: [
          "The first failure mode is capability-confidence mismatch. Teams assume a high benchmark score translates into deployment confidence. It does not. Benchmarks measure performance on a defined task. Deployment confidence requires understanding performance on the actual task, in the actual environment, with the actual users.",
          "The second is governance lag. The AI programme moves faster than the organisation's risk, legal, and compliance functions can keep up. By the time governance catches up, the project is either delayed significantly or deployed with gaps that only become visible after something goes wrong.",
          "The third is evaluation theatre. Teams run human evaluation because it is required, not because it is designed to surface real issues. Evaluators are not given sufficient context, clear criteria, or the authority to raise concerns that will actually delay a launch.",
          "The fourth is silent drift. The system is validated at launch but never re-validated as data, users, and business processes change. Performance degrades gradually and no one is monitoring the right signals.",
          "The fifth is the accountability vacuum. Nobody in the organisation has clear ownership of the AI system post-launch. When something goes wrong, it is not clear who is responsible for investigating, deciding, and acting.",
        ],
        quote: "Evaluation theatre is worse than no evaluation. It creates false confidence while leaving the real risks unexamined.",
      },
      {
        id: "proper-validation-layer",
        title: "What a proper pre-deployment validation layer looks like",
        paragraphs: [
          "A proper pre-deployment validation layer has three components: structured evidence, human evaluation, and governance clarity. Structured evidence documents what the system was tested against, what it was not tested against, where it performed well, and where it did not. Human evaluation brings domain expertise and operational context into the assessment, not just technical metrics. Governance clarity establishes who owns the deployment decision, what evidence is required, and what happens if the system underperforms after launch.",
          "The cost of getting this right upfront is real but predictable. The cost of getting it wrong is also real, and far less predictable. It includes delayed deployments, post-launch failures, regulatory exposure, and the erosion of internal trust in AI programmes that makes every future initiative harder to move through the organisation.",
          "The organisations that build this capability now will deploy more, faster, and with less risk than those that treat validation as a friction to be minimised. That is the practical case for doing this properly.",
        ],
      },
    ],
  },

  /* ─── Article C ─── */
  "why-human-judgment-matters-ai-evaluation": {
    ...posts[1],
    heroImage: "/images/art_c_1.jpeg",
    sections: [
      {
        id: "ai-cannot-evaluate-itself",
        title: "Why AI cannot fully evaluate itself",
        paragraphs: [
          "Automated evaluation has made enormous progress. Modern benchmarks can assess accuracy, consistency, hallucination rates, latency, and a growing list of safety properties. None of this is sufficient on its own. The reason is simple: the things that matter most in enterprise AI are often the things that are hardest to measure automatically.",
          "An AI system can produce an output that is technically accurate, internally consistent, and high-scoring on every automated metric while still being commercially naive, contextually inappropriate, or dangerous in the hands of a specific user in a specific situation. Automated evaluation cannot reliably catch that. Human evaluation can.",
        ],
      },
      {
        id: "what-humans-catch",
        title: "What human evaluation catches",
        paragraphs: [
          "Domain experts notice when an answer is correct in general but wrong for the business. A legal professional will catch the liability implication that a language model missed. A clinician will identify the edge case that automated testing never surfaces. A frontline worker will notice that the workflow the system assumes does not match the workflow they actually use.",
          "Human evaluation also catches tone, trust, and the subtle signals that determine whether users will actually adopt a system or route around it. An AI assistant that is technically accurate but communicates with the wrong register for its audience may be worse than useless. It may actively undermine trust in AI programmes across the organisation.",
        ],
        midImage: "/images/art_c_2.jpeg",
        midImageAlt: "People collaborating in a focused review session",
        quote: "Human evaluation is not a fallback for when automated systems fail. It is the layer that automated systems cannot replace.",
      },
      {
        id: "scalable-human-evaluation",
        title: "How to build human evaluation into a scalable process",
        paragraphs: [
          "The objection to human evaluation is usually cost and scale. It is slower and more expensive than running an automated benchmark. This is true. It does not follow that it should be minimised or treated as optional.",
          "The answer is designing human evaluation to be targeted, not exhaustive. Automated systems handle coverage and consistency at scale. Human evaluators are deployed where their judgement is irreplaceable: edge cases, high-stakes outputs, novel scenarios, and situations where the cost of being wrong is disproportionate. This is not a compromise. It is the correct division of labour.",
          "Organisations that build this into their validation processes consistently do not just catch more problems before deployment. They build internal capability to understand AI systems at a level of depth that improves every subsequent deployment. Human evaluation, done well, is an investment in organisational intelligence about AI.",
        ],
      },
    ],
  },

  /* ─── Article D ─── */
  "what-enterprises-should-measure-before-deploying-ai-agents": {
    ...posts[2],
    heroImage: "/images/art_d_1.jpeg",
    sections: [
      {
        id: "cutting-through-jargon",
        title: "Cutting through the jargon",
        paragraphs: [
          "AI validation has acquired a lot of conceptual baggage. Depending on whom you ask, it means unit testing, red-teaming, model evaluation, responsible AI auditing, or something else entirely. The confusion is not just semantic. It has real consequences. Teams invest in activities they call validation without actually answering the questions that matter for deployment.",
          "At its core, validation is about generating structured evidence that a system behaves appropriately for a specific use case, in a specific context, at a specific level of risk. Everything else follows from that. If your validation process is not generating that kind of evidence, it is not validation. It is something else.",
        ],
      },
      {
        id: "four-dimensions",
        title: "The four dimensions of validation",
        paragraphs: [
          "Correctness is the dimension most teams measure. Does the system produce accurate outputs? This is necessary and not sufficient. A system can be highly accurate on average while being systematically wrong on the cases that matter most.",
          "Completeness asks whether the system handles the full range of scenarios it will encounter in deployment, not just the common ones. Enterprise environments are defined by their exceptions. A system validated only on representative cases will fail on the tail.",
          "Contextual accuracy is where most validation programmes fall short. The question is not whether the output is correct in isolation, but whether it is appropriate given the specific business context, user population, regulatory environment, and downstream consequences. This dimension requires human judgement. It cannot be fully automated.",
          "Risk is the fourth dimension, and in many ways the most important. What is the cost of being wrong? How often will the system be wrong? Who bears the consequence? Risk calibrates everything else. A low-risk use case with high accuracy may be straightforwardly deployable. A high-risk use case with the same accuracy profile may not be.",
        ],
        midImage: "/images/art_d_2.jpeg",
        midImageAlt: "Clinical laboratory precision work representing rigorous methodology",
        quote: "Validation is not about proving a system is good. It is about understanding exactly where it is good enough and where it is not.",
      },
      {
        id: "not-a-one-time-audit",
        title: "Validation is not a one-time audit",
        paragraphs: [
          "The most consequential misconception about AI validation is that it is something you do before launch. Real validation is continuous. Models drift. Data distributions shift. Business processes change. User populations evolve. A system that was appropriately validated at deployment may be producing unreliable outputs six months later, and the organisation may have no mechanism to detect it.",
          "Continuous validation requires instrumentation: the right signals, monitored with the right frequency, reviewed by people with the authority to act on what they find. It requires feedback loops from users and from downstream outcomes. And it requires the organisational discipline to treat a degradation signal as something worth acting on, not something to explain away.",
          "Validation built this way is not a cost. It is a competitive capability. Organisations that can validate continuously can deploy more confidently, learn faster, and improve their AI systems in ways that organisations relying on one-time audits simply cannot.",
        ],
      },
    ],
  },

  /* ─── Article E ─── */
  "agentic-ai-needs-validation-infrastructure": {
    ...posts[3],
    heroImage: "/images/art_e_1.jpeg",
    sections: [
      {
        id: "how-most-teams-approach-it",
        title: "How most teams actually approach validation",
        paragraphs: [
          "Most AI validation programmes are designed to produce a green light, not to surface problems. Teams run evaluations where the criteria are set after the results are known. They recruit evaluators who are not given the context to form genuine judgements. They measure what is easy to measure and call it comprehensive. Then they are surprised when production looks nothing like the evaluation.",
          "This is not incompetence. It is a structural incentive problem. The people running validation are usually the same people who built the system. They want it to work. The organisation wants it to work. Validation that actually surfaces limits and failures is unwelcome news, so the process is unconsciously shaped to minimise it.",
        ],
      },
      {
        id: "what-honest-looks-like",
        title: "What honest validation actually looks like",
        paragraphs: [
          "Honest validation starts by acknowledging what you do not know. Before you can design a meaningful evaluation, you have to name the failure modes you are most worried about and the scenarios you have not tested. This is uncomfortable because it requires stating uncertainty explicitly. It is also the only way to design an evaluation that is actually informative.",
          "Honest validation builds checkpoints, not gates. A gate is a binary: pass or fail, launch or don't. A checkpoint is a structured moment to review evidence and make a decision with the information available. Checkpoints accommodate nuance. They allow conditional launches, phased rollouts, and decisions to proceed with specific limitations in place.",
          "Honest validation treats limits as useful information. When an evaluation surfaces something the system cannot do well, that is not a failure of the system. It is a success of the process. The question is not whether there are limits. Every system has limits. The question is whether those limits are documented, understood, and managed.",
        ],
        midImage: "/images/art_e_2.jpeg",
        midImageAlt: "Construction framework representing structured building of trust",
        quote: "Validation that only produces green lights is not validation. It is confirmation bias with better documentation.",
      },
      {
        id: "six-areas",
        title: "Six areas worth exploring",
        paragraphs: [
          "Evidence before deployment: how organisations build the structured evidence, processes, and oversight structures that make AI systems genuinely deployable rather than merely capable.",
          "Human evaluation as a discipline: not a grudging cost but a source of insight that automated systems cannot replicate, and a way of building institutional knowledge about how AI systems actually behave.",
          "Communication and decision clarity: how to make deployment evidence legible to the executives, boards, and regulators who need to make decisions without becoming technical experts.",
          "The intersection of strategy and deployment: why deployment readiness is a strategic question as much as a technical one, and who should be at the table when those decisions are made.",
          "Governance design: what effective oversight structures look like and how to build them without creating processes so burdensome they slow down everything useful.",
          "Organisational trust and adoption: how organisations move from awareness of AI capability to genuine institutional confidence, and what shapes that journey in practice.",
        ],
      },
    ],
  },

  /* ─── Article F ─── */
  "difference-ai-safety-security-trust": {
    ...posts[5],
    heroImage: "/images/art_f_1.jpeg",
    sections: [
      {
        id: "introduction",
        title: "Where the thinking comes from",
        paragraphs: [
          "People sometimes ask what connects the different threads of my work. AI validation, enterprise strategy, behavioural science, governance design. The honest answer is that they were never separate to me. They are all aspects of the same problem: how do organisations learn to trust systems they did not build and cannot fully inspect?",
          "Six areas have shaped my thinking more than anything else. I keep returning to them because they keep being relevant, in different combinations, across every engagement and every conversation.",
        ],
      },
      {
        id: "validation-and-trust",
        title: "AI validation and trust infrastructure",
        paragraphs: [
          "This is the centre of my current work. Building the evidence, processes, and oversight structures that make Agentic AI systems genuinely deployable is one of the most consequential problems in enterprise technology right now. Most organisations are improvising. The ones getting it right are building it deliberately, as infrastructure, not as a project.",
        ],
      },
      {
        id: "human-evaluation",
        title: "Human evaluation as a discipline",
        paragraphs: [
          "Human evaluation is undervalued and poorly designed in most AI programmes. When it is done well, it is a source of institutional knowledge that no automated system can replicate. People notice things. Domain experts see implications. Frontline workers understand workflows. Designing evaluation processes that capture that knowledge systematically is a craft, and it matters.",
        ],
        midImage: "/images/art_f_2.jpeg",
        midImageAlt: "Open notebook representing reflective thinking and careful documentation",
        quote: "The most valuable knowledge about an AI system often lives in the people who use it, not in the metrics that measure it.",
      },
      {
        id: "narrative-and-strategy",
        title: "Narrative, strategy, and psychology",
        paragraphs: [
          "Making AI validation legible to the people who need to make decisions about it is a communication and psychology problem as much as a technical one. Boards and executives do not need to understand how a model works. They need to understand what questions were asked, what the evidence shows, and what the remaining unknowns are. Translating between technical depth and decision-relevant clarity is something I spend a lot of time on.",
          "The intersection of marketing psychology and enterprise AI adoption is equally rich. Organisations do not adopt AI rationally. They adopt it through a combination of internal advocacy, risk perception, social proof, and the gradual accumulation of experience. Understanding those dynamics is essential for anyone trying to help an organisation move from capable AI to trusted AI.",
        ],
      },
      {
        id: "governance-and-simplicity",
        title: "Governance and the discipline of simplicity",
        paragraphs: [
          "Good governance is rare because good governance is hard. The default is to add process until the risk feels managed. The problem is that excessive process stops useful things from happening without actually reducing risk, it just redistributes it. I am interested in governance structures that are genuinely useful: lightweight enough to run, rigorous enough to matter, and clear enough that people at every level understand what they are accountable for.",
        ],
      },
    ],
  },

  /* ─── Article G (TaskHived) ─── */
  "regulated-industries-ai-validation-not-a-checkbox": {
    ...posts[4],
    heroImage: "/images/article_5.jpeg",
    sections: [
      {
        id: "the-problem-we-solve",
        title: "The problem worth solving",
        paragraphs: [
          "Regulated industries face a version of the AI deployment problem that is different in degree but not in kind from what every enterprise faces. The question is not whether AI can help. In most cases, it can. The question is whether an organisation can generate enough structured evidence to justify the deployment decision, defend it to regulators, and maintain confidence in it over time.",
          "That infrastructure does not exist off the shelf. It has to be built deliberately, by people who understand both the technical side of AI evaluation and the organisational realities of enterprise deployment. TaskHived grew from an attempt to build it.",
        ],
      },
      {
        id: "what-we-build",
        title: "What structured evidence looks like in practice",
        paragraphs: [
          "Building deployment evidence in a regulated environment means combining structured human evaluation with clear governance processes and ongoing monitoring. It means documenting what a system was tested against, what it was not, where it performed well, and where its limits lie. It means making those limits legible to the people who are accountable for the deployment decision.",
          "The common thread across every organisation we work with at TaskHived is the same: not just the need to know whether the system works, but whether it works well enough, in the right context, with the right controls, for the people and decisions it will affect.",
        ],
        midImage: "/images/article_1.jpeg",
        midImageAlt: "Abstract visual representing trust infrastructure and system reliability",
        quote: "The goal is not to make AI sound safe. It is to generate the kind of evidence that makes a deployment decision genuinely defensible.",
      },
      {
        id: "why-it-matters-now",
        title: "Why this matters now",
        paragraphs: [
          "The stakes are rising. Agentic AI systems, systems that can take actions autonomously over extended sequences, represent a step change in both capability and risk. The validation approaches that were adequate for a content generation tool are not adequate for a system that can execute business processes, make purchasing decisions, or interact with external systems on behalf of an organisation.",
          "The organisations that build robust validation infrastructure now will be the ones that can deploy Agentic AI at scale with confidence. The ones that don't will face mounting post-deployment failures, regulatory exposure, and the kind of internal trust collapse that sets AI programmes back by years.",
          "TaskHived is building the infrastructure that makes the former outcome achievable. That is the work.",
        ],
      },
    ],
  },
};

export const getArticle = (slug: string | undefined) => {
  if (!slug) return undefined;
  return articles[slug];
};
