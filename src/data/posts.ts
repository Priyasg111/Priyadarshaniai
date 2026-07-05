export type Post = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  quote?: string;
};

export type Article = Post & {
  heroImage: string;
  sections: ArticleSection[];
};

export const posts: Post[] = [
  {
    title: "On AI validation, trust, and deployment readiness",
    slug: "ai-validation-trust-deployment-readiness",
    date: "Dec 11, 2023",
    image: "/images/article_1.jpeg",
    excerpt:
      "AI validation is no longer a technical checkpoint. It is the discipline that decides whether an organisation can trust a system enough to put it in front of customers, employees, and regulators.",
  },
  {
    title: "Why human evaluation still matters in AI validation",
    slug: "why-human-evaluation-still-matters",
    date: "Dec 01, 2023",
    image: "/images/article_2.jpeg",
    excerpt:
      "Automated benchmarks are useful, but they cannot tell you whether an AI system behaves well inside the messy reality of enterprise work.",
  },
  {
    title: "What AI validation actually means",
    slug: "what-ai-validation-actually-means",
    date: "Nov 15, 2023",
    image: "/images/article_3.jpeg",
    excerpt:
      "Validation is not a pass or fail stamp. It is a structured way to understand performance, limits, risk, and readiness across real use cases.",
  },
  {
    title: "Building AI validation honestly.",
    slug: "building-ai-validation-honestly",
    date: "Oct 12, 2023",
    image: "/images/article_4.jpeg",
    excerpt:
      "The honest version of AI validation starts with uncomfortable questions. What can fail, who notices, and what happens next?",
  },
  {
    title: "TaskHived: AI Validation for real-world use",
    slug: "taskhived-ai-validation-real-world-use",
    date: "Oct 26, 2023",
    image: "/images/article_5.jpeg",
    excerpt:
      "TaskHived exists to help teams move from impressive AI demos to systems they can evaluate, govern, improve, and deploy with confidence.",
    featured: true,
  },
  {
    title: "Six areas that shape my thinking and work",
    slug: "six-areas-that-shape-my-thinking-and-work",
    date: "Sep 15, 2023",
    image: "/images/article_1.jpeg",
    excerpt:
      "Strategy, AI validation, behavioural science, enterprise deployment, governance, and trust shape how I think about technology adoption.",
  },
];

export const featuredHomePost: Post = {
  title: "The practical problem of AI deployment readiness",
  slug: "practical-problem-ai-deployment-readiness",
  date: "Sep 28, 2023",
  image: "/images/article_5.jpeg",
  excerpt:
    "Most enterprises don't have an AI problem. They have a trust problem. The gap between what AI systems can do and what organisations are prepared to deploy is widening, and the cost of that gap is real.",
};

export const articles: Record<string, Article> = {
  "ai-validation-trust-deployment-readiness": {
    ...posts[0],
    heroImage: "/images/article_1.jpeg",
    sections: [
      {
        id: "trust-is-the-work",
        title: "Trust is the work",
        paragraphs: [
          "AI validation has often been treated as a technical exercise. Run the model against a benchmark. Check the score. Decide whether the system is good enough. That view is too narrow for enterprise deployment. A model can score well in a controlled environment and still fail the moment it enters a business process with real incentives, edge cases, and accountability.",
          "The central question is not whether AI can produce an impressive answer. It is whether an organisation can trust the system in the context where it will be used. That includes the people who depend on it, the data it sees, the decisions it influences, and the consequences when it is wrong. Validation is the bridge between capability and confidence.",
        ],
        quote:
          "Validation is the bridge between what AI can do and what an organisation is prepared to trust.",
      },
      {
        id: "readiness-is-contextual",
        title: "Readiness is contextual",
        paragraphs: [
          "There is no universal definition of ready. A customer support assistant, a legal research tool, an internal analytics copilot, and a clinical workflow aid each carry different standards. The same accuracy rate can be acceptable in one setting and reckless in another. Enterprise readiness depends on use case, risk, oversight, user training, escalation paths, and tolerance for ambiguity.",
          "This is why AI validation has to be grounded in the actual work. It should ask how the system behaves across common tasks, rare but important cases, adversarial prompts, policy boundaries, and handoff moments. It should look beyond outputs and examine the operating model around the technology. Who owns the system? Who reviews it? Who can stop it? Who learns from failures?",
        ],
      },
      {
        id: "human-evaluation",
        title: "Human evaluation still matters",
        paragraphs: [
          "Automated evaluation is necessary, but it is not enough. Benchmarks can reveal patterns at scale. They can compare versions, detect regressions, and make improvement measurable. But they cannot fully capture judgement, usefulness, tone, business fit, or the way a system changes behaviour inside a team.",
          "Human evaluation brings context back into the process. Domain experts notice when an answer is technically correct but commercially naive. Frontline teams notice when the workflow is too slow. Risk leaders notice when a response creates ambiguity where clarity is required. These observations are not noise. They are part of the evidence base.",
        ],
        quote:
          "The goal is not to choose between automated and human evaluation. The goal is to design an evidence system that uses both well.",
      },
      {
        id: "from-demo-to-deployment",
        title: "From demo to deployment",
        paragraphs: [
          "The hardest part of enterprise AI is rarely the demo. Demos are controlled. Deployment is exposed. A deployed system must survive volume, variation, operational pressure, user misunderstanding, changing data, and organisational politics. It must keep working when the novelty fades and the edge cases arrive.",
          "This is where validation becomes a strategic capability. It helps leaders decide what to launch, what to limit, what to monitor, and what to improve. It creates a shared language between technical teams, business owners, legal, risk, and the people doing the work. Without that shared language, AI programs move either too slowly or too casually. Both are expensive.",
        ],
      },
      {
        id: "building-confidence",
        title: "Building confidence honestly",
        paragraphs: [
          "Responsible deployment does not mean eliminating all risk. It means understanding risk clearly enough to make deliberate choices. Some systems should not be launched. Some should be launched with guardrails. Some should be tested in narrow settings before they scale. Some are ready once the surrounding process is redesigned.",
          "The future of AI in enterprises will be shaped by organisations that can validate honestly. They will not treat trust as a slogan. They will build the evidence, governance, and feedback loops needed to earn it. That is the work that matters now.",
        ],
      },
    ],
  },
  "practical-problem-ai-deployment-readiness": {
    ...featuredHomePost,
    heroImage: "/images/article_5.jpeg",
    sections: [
      {
        id: "the-gap",
        title: "The gap is not capability",
        paragraphs: [
          "Most enterprises do not have an AI problem. They have a trust problem. The technology is advancing quickly, but the organisational systems required to deploy it responsibly are lagging behind. Teams can build pilots. Vendors can show remarkable demos. Leaders can see the productivity potential. The question that remains is simpler and harder: are we ready to put this into the business?",
          "Deployment readiness is the difference between a promising AI system and an AI system that can operate inside real constraints. It asks whether the use case is clear, whether success is measurable, whether failure is understood, and whether the organisation has the controls to respond when the system behaves unexpectedly.",
        ],
        quote:
          "The bottleneck is no longer imagination. It is organisational readiness.",
      },
      {
        id: "pilots-do-not-equal-readiness",
        title: "Pilots do not equal readiness",
        paragraphs: [
          "A pilot proves that something can work somewhere. It does not prove that it should scale. In many organisations, AI pilots are evaluated on novelty, stakeholder excitement, or a narrow technical result. Those signals are useful, but they are incomplete. Readiness requires a broader view of performance, governance, adoption, and risk.",
          "A system that works for a small team may fail when exposed to inconsistent data, new user groups, regulatory requirements, or business exceptions. A chatbot that feels helpful in a demo may introduce legal risk when it gives confident answers outside its scope. A copilot that saves time for experts may mislead junior employees who cannot judge the output. These are deployment questions, not demo questions.",
        ],
      },
      {
        id: "what-to-measure",
        title: "What readiness should measure",
        paragraphs: [
          "Readiness should measure the relationship between the system, the workflow, and the organisation. Technical performance matters, but it is only one dimension. Teams should also examine consistency, escalation quality, user comprehension, policy alignment, data sensitivity, monitoring design, and accountability. If nobody knows who owns the AI system after launch, the system is not ready.",
          "Good readiness work also separates reversible from irreversible risk. Some AI use cases can be launched in controlled settings with low consequence and strong monitoring. Others require deeper validation before any exposure. Treating every use case the same creates friction where speed is safe and danger where caution is needed.",
        ],
        quote:
          "Readiness is not a single score. It is a decision discipline.",
      },
      {
        id: "governance-as-enabler",
        title: "Governance as an enabler",
        paragraphs: [
          "Governance is often framed as the thing that slows AI down. In practice, good governance creates speed because it reduces ambiguity. When teams know how systems will be evaluated, who needs to approve them, what evidence is required, and how risk will be monitored, they can move with more confidence.",
          "The opposite is also true. Weak governance produces hidden delays. Projects stall because nobody agrees on acceptable risk. Legal teams enter too late. Business owners are unclear about accountability. Technical teams rebuild evidence after questions are raised. Readiness work brings these issues forward while they are still manageable.",
        ],
      },
      {
        id: "the-leadership-work",
        title: "The leadership work",
        paragraphs: [
          "AI deployment readiness is not only a technical function. It is leadership work. It requires judgement about where AI belongs, how much autonomy is appropriate, which decisions must stay human, and how the organisation learns from real use. These are strategy questions as much as technology questions.",
          "Enterprises that take readiness seriously will deploy fewer careless systems and scale more valuable ones. They will know when to pause. They will know when to proceed. Most importantly, they will build trust through evidence rather than optimism. That is how AI moves from experiment to infrastructure.",
        ],
      },
    ],
  },
};

export const getArticle = (slug: string | undefined) => {
  if (!slug) return undefined;
  return articles[slug];
};
