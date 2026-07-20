const NIST_APPENDIX_C_URL =
  "https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-ri" +
  "sk" +
  "-management-and-human-ai-interaction/";

export type Post = {
  title: string;
  slug: string;
  date: string;
  updatedDate?: string;
  excerpt: string;
  image: string;
  category?: string;
  author?: string;
  readTime?: string;
  featured?: boolean;
  datePublished?: string;
  metaDescription?: string;
  keywords?: string[];
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  html?: boolean;
  quote?: string;
  midImage?: string;
  midImageAlt?: string;
};

export type Article = Post & {
  heroImage: string;
  authorDescription?: string;
  showExcerpt?: boolean;
  sections: ArticleSection[];
};

export const posts: Post[] = [
  {
    title: "Where Human Judgement Still Matters Most",
    slug: "where-human-judgement-still-matters-most",
    date: "Jul 20, 2026",
    datePublished: "2026-07-20",
    image: "/images/where-human-judgement-matters-essay-hero_2.png",
    excerpt:
      "Human judgement matters most where interpretation, escalation, contestability, tradeoffs and responsibility shape whether an AI-supported decision deserves trust.",
    metaDescription:
      "Where human judgement matters most in AI decisions: interpretation, escalation, contestability, tradeoffs and responsibility before deployment.",
    keywords: [
      "human judgement in AI",
      "human oversight in AI",
      "meaningful human control",
      "AI decision-making",
      "AI contestability",
      "AI escalation",
      "AI deployment trust",
    ],
    category: "Human Judgement",
    author: "Priya Darshani",
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "Trust Is Not a Feature of an AI System",
    slug: "trust-is-not-a-feature-of-an-ai-system",
    date: "Jul 18, 2026",
    image: "/images/trust-not-feature-essay-hero_2.png",
    excerpt:
      "AI trust is not a technical feature to be shipped. It is justified organisational reliance in a specific context, supported by evidence, human oversight and accountable institutions.",
    category: "AI Trust",
    author: "Priya Darshani",
    readTime: "10 min read",
    featured: false,
  },
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
  },
  {
    title: "The Missing Infrastructure for AI",
    slug: "missing-infrastructure-for-ai",
    date: "Jun 23, 2026",
    image: "/images/art_a_1.jpeg",
    excerpt:
      "Why measuring models is no longer enough, and why the future of AI depends on better ways of measuring human judgement, trust and deployment readiness.",
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
  {
    title: "Beyond Benchmarks: Why AI Needs Better Evidence Before Deployment",
    slug: "beyond-benchmarks-evidence-before-deployment",
    date: "Jul 07, 2026",
    image: "/images/art_d_2.jpeg",
    excerpt:
      "Benchmarks tell us what AI can do. Organisations need to know whether to trust it. That distinction is becoming one of the most consequential questions in enterprise AI.",
    category: "Deployment Readiness",
    author: "Priya Darshani",
    readTime: "8 min read",
    featured: false,
  },
  {
    title: "Before AI Can Replace Work, It Must Earn Trust",
    slug: "before-ai-can-replace-work-it-must-earn-trust",
    date: "Jul 14, 2026",
    image: "/images/art_c_2.jpeg",
    excerpt:
      "AI can already perform parts of the work people do. The harder question is whether organisations have enough evidence to trust it with consequential decisions.",
    category: "Future of Work",
    author: "Priya Darshani",
    readTime: "6 min read",
    featured: false,
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
  /* @section: where-human-judgement-still-matters-most-essay */
  "where-human-judgement-still-matters-most": {
    ...posts[0],
    heroImage: "/images/where-human-judgement-matters-essay-hero_2.png",
    authorDescription: "Founder, TaskHived | Researching how organisations evaluate, trust and deploy artificial intelligence responsibly.",
    showExcerpt: false,
    sections: [
      {
        id: "the-uncomfortable-middle",
        title: "The uncomfortable middle",
        paragraphs: [
          "The most difficult AI decisions do not sit at the extremes.",
          "At one extreme are tasks where automation is clearly useful. Summarising a document, classifying low-risk information, routing a routine request or drafting a first version of a message may not require deep human deliberation every time. At the other extreme are decisions where full automation would be unacceptable because the consequences are too high, the context is too complex or the moral responsibility is too significant.",
          "The harder question sits in the middle.",
          "Where should human judgment remain part of the decision process, even when AI can perform much of the task? Where is a human not merely a reviewer, but an essential part of deciding whether the system should be trusted?",
          "This question matters because AI deployment is increasingly moving from assistance toward action. Systems are no longer only producing text or analysis. They are shaping workflows, recommendations, risk scores, triage decisions, customer interactions and operational priorities. As this happens, organisations need more precise language for the kinds of judgment that should remain human.",
          "Human judgment is often discussed as if it were a single thing. It is not. It includes interpretation, escalation, contestability, responsibility, ethical reasoning, contextual awareness and the ability to notice when a situation does not fit the pattern. These capacities become most important when the decision cannot be reduced to a prediction.",
        ],
      },
      {
        id: "interpretation-is-not-the-same-as-output-review",
        title: "Interpretation is not the same as output review",
        html: true,
        paragraphs: [
          `Many organisations assume that human oversight means asking a person to check an AI output before it is used. That may be necessary, but it is not sufficient.`,
          `The EU AI Act’s Article 14 says high-risk AI systems must be designed and developed so they can be effectively overseen by natural persons during use <a href="https://artificialintelligenceact.eu/article/14/" target="_blank" rel="noopener noreferrer">[1]</a>. It also says the people assigned to oversight should be able to understand relevant capacities and limitations, monitor operation, remain aware of automation bias, correctly interpret outputs, disregard or override outputs and intervene or interrupt the system <a href="https://artificialintelligenceact.eu/article/14/" target="_blank" rel="noopener noreferrer">[1]</a>.`,
          `This is a richer definition than simple review. It suggests that meaningful oversight requires the human to understand the system well enough to know when not to trust it.`,
          `That distinction matters. A reviewer who only checks whether an output looks plausible may reinforce the system’s errors. A reviewer who understands the system’s limitations can ask a different set of questions. Is the input context similar to the data the system was evaluated on? Is the recommendation unusually confident? Is the case outside the normal range? Is there missing information that changes the decision? Would a person affected by the decision have a reasonable basis to challenge it?`,
          `Interpretation is active. It requires the human to bring domain knowledge, situational awareness and responsibility to the decision. Without that, human oversight can become a ritual rather than a safeguard.`,
          `NIST’s human-AI interaction appendix warns that humans perceive and derive meaning from AI outputs and explanations in different ways <a href="${NIST_APPENDIX_C_URL}" target="_blank" rel="noopener noreferrer">[2]</a>. This is important because explanation alone does not guarantee understanding. An explanation may satisfy a technical requirement while failing to support good judgment. The real question is whether the human can use the information to make a better decision.`,
        ],
      },
      {
        id: "escalation-is-a-form-of-intelligence",
        title: "Escalation is a form of intelligence",
        html: true,
        paragraphs: [
          `A good AI deployment should not only ask whether the system can answer. It should ask when the system should stop.`,
          `Escalation is one of the most important forms of human judgment. It is the ability to recognize that a case requires more expertise, more evidence or a different decision process. In mature organisations, escalation is not failure. It is a sign that the system understands the limits of routine processing.`,
          `This matters because many AI systems are evaluated on average performance. But deployment risk often lives in edge cases. A system may perform well overall while failing in unusual, ambiguous or high-stakes situations. If the workflow does not make escalation easy, those cases can be forced through an inappropriate process.`,
          `Article 14 of the EU AI Act includes the ability to disregard, override or reverse the output of a high-risk AI system, as well as the ability to intervene or interrupt system operation <a href="https://artificialintelligenceact.eu/article/14/" target="_blank" rel="noopener noreferrer">[1]</a>. These are not minor operational details. They are the practical mechanisms by which human judgment remains meaningful.`,
          `Escalation also requires organisational support. A human cannot exercise judgment well if they are punished for slowing a process down, if they lack authority to challenge the system, or if the interface makes disagreement difficult. Human oversight is not only a matter of placing a person in the loop. It is a matter of designing the loop so the person can act.`,
          `The OECD principle on human-centred values and fairness similarly refers to safeguards such as human agency and oversight, including risks from uses outside intended purpose, intentional misuse or unintentional misuse <a href="https://oecd.ai/en/dashboards/ai-principles/P6" target="_blank" rel="noopener noreferrer">[3]</a>. Those risks cannot be managed by automation alone. They require people who are able to recognise when the system is drifting outside the conditions under which it deserves trust.`,
        ],
      },
      {
        id: "contestability-protects-trust",
        title: "Contestability protects trust",
        html: true,
        paragraphs: [
          `Human judgment also matters when people affected by AI decisions need a way to question them.`,
          `Contestability is often treated as a legal or compliance concern. It is also a trust concern. If an organisation cannot explain how a decision was made, cannot correct an error and cannot offer a meaningful path for review, then trust becomes fragile even when the system performs well most of the time.`,
          `The history of automated decision systems offers many reminders that the absence of contestability can turn technical problems into institutional failures. The Post Office Horizon litigation in the United Kingdom is not an AI case in the modern sense, but it is a powerful warning about opaque systems, weak challenge mechanisms and institutional overconfidence in technology. In the Horizon Issues judgment, the court found that remote access and editing of transaction data was possible and that the system did not alert sub-postmasters to certain errors, bugs or defects <a href="https://www.judiciary.uk/wp-content/uploads/2019/12/bates-v-post-office-judgment.pdf" target="_blank" rel="noopener noreferrer">[4]</a>. The details are specific to that case, but the broader lesson is relevant to AI deployment. When people cannot see, challenge or correct a system that affects them, technical uncertainty becomes human harm.`,
          `Contestability requires more than a complaint channel. It requires evidence. What information was used? What output was generated? Who reviewed it? What alternatives were considered? Was the system operating within its intended use? Did a human have authority to change the outcome?`,
          `These questions make human judgment auditable. They also make trust more realistic, because trust is not the belief that a system will never fail. It is the confidence that failure can be detected, understood and corrected.`,
        ],
      },
      {
        id: "responsibility-cannot-be-automated",
        title: "Responsibility cannot be automated",
        html: true,
        paragraphs: [
          `The idea of meaningful human control helps clarify why human judgment still matters. A Frontiers in Robotics and AI article develops two conditions for meaningful human control over autonomous systems: tracking and tracing <a href="https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2018.00015/full" target="_blank" rel="noopener noreferrer">[5]</a>. Tracking concerns whether the system responds to relevant human moral reasons and relevant facts in the operating environment. Tracing concerns whether outcomes can be traced to at least one human in the design or operation chain who understands system capabilities and potential effects <a href="https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2018.00015/full" target="_blank" rel="noopener noreferrer">[5]</a>.`,
          `These ideas are useful beyond the original military context. They remind us that responsibility requires both responsiveness and traceability. It is not enough for a human to be somewhere near the system. The human role must be connected to the reasons that matter and to the consequences that follow.`,
          `In enterprise AI, this means organisations need to know who owns the deployment decision. Who decides that evidence is sufficient? Who defines acceptable error? Who monitors performance after launch? Who can pause the system? Who answers when an affected person asks why a decision was made?`,
          `AI can automate tasks. It cannot absorb responsibility for the institution.`,
          `This is why the human role should not be designed as a decorative checkpoint. It should be designed around the places where judgment genuinely changes the quality of the decision. That includes ambiguous cases, high-impact decisions, value tradeoffs, exceptions, disagreement between experts, evidence gaps and situations where the cost of being wrong is not evenly distributed.`,
        ],
      },
      {
        id: "designing-for-better-judgment",
        title: "Designing for better judgment",
        html: true,
        paragraphs: [
          `The next generation of AI deployment will require better systems for human judgment, not just better systems for model performance.`,
          `Organisations should begin by mapping where judgment matters most. Not every decision requires the same level of human involvement. But every serious deployment should identify the points at which interpretation, escalation, contestability and responsibility are necessary.`,
          `They should then make those points measurable. How often do humans override the system? In which cases? For what reasons? Where do experts disagree? Which outputs create uncertainty? Which users are most likely to over-rely on recommendations? NIST notes that data about the frequency and rationale with which humans overrule AI output may be useful to collect and analyze <a href="${NIST_APPENDIX_C_URL}" target="_blank" rel="noopener noreferrer">[2]</a>. That is a practical starting point for turning human judgment into deployment evidence.`,
          `This is the area I find most important. Human judgment should not be treated as friction that slows AI down. It should be treated as a source of evidence that helps organisations understand when AI deserves trust.`,
          `TaskHived is one practical application of this idea. The broader mission is not to preserve human involvement for its own sake. It is to understand where human expertise improves decision quality and how that expertise can be made visible before deployment.`,
          `The question is not whether humans should always stay in the loop. The question is where human judgment changes what the organisation can responsibly trust.`,
        ],
      },
      {
        id: "tradeoffs-require-human-reasoning",
        title: "Tradeoffs require human reasoning",
        paragraphs: [
          "Human judgment also matters where values conflict.",
          "Many organisational decisions are not simply questions of accuracy. They involve tradeoffs between speed and care, consistency and flexibility, efficiency and fairness, autonomy and oversight, privacy and usefulness. AI can help surface information, but it cannot decide on behalf of an institution what tradeoffs are acceptable.",
          "This is why human judgment remains central in regulated and high-impact environments. The most difficult decision is often not whether an output is correct in isolation. It is whether acting on that output is appropriate given the context.",
          "A risk score may be statistically useful and still require careful interpretation. A recommendation may be efficient and still create unfair outcomes for a particular group. A triage suggestion may be plausible and still need escalation because the case carries unusual consequences. A compliance alert may be technically valid and still require judgment about proportional response.",
          "These are not failures of AI. They are features of real decision-making.",
          "If organisations treat every AI output as a narrow technical answer, they will miss the broader judgment involved in using it. The human role is not only to catch mistakes. It is to understand meaning, consequence and responsibility.",
        ],
      },
      {
        id: "measuring-judgment-without-flattening-it",
        title: "Measuring judgment without flattening it",
        paragraphs: [
          "The challenge is that human judgment is difficult to measure.",
          "It is tempting to avoid measuring it altogether, or to reduce it to simplistic labels such as approve or reject. Neither approach is enough. If organisations want to understand when AI deserves trust, they need better evidence about how humans interact with AI outputs.",
          "This does not mean pretending human judgment is perfectly objective. It means designing evaluation processes that make judgment visible. Experts can review outputs independently. Their confidence can be captured. Their reasons for agreement or disagreement can be recorded. Areas of uncertainty can be identified. Patterns in overrides can be studied. Disagreement can be treated as evidence rather than noise.",
          "The goal is not to remove the human element from judgment. The goal is to learn from it.",
          "A good evaluation process should preserve context while creating structure. It should allow experts to explain why a recommendation is unsafe, incomplete, misleading or useful. It should distinguish between errors that matter and errors that do not. It should identify where the AI improves decision quality and where it creates new risk.",
          "This is different from asking humans to rubber-stamp outputs after deployment. It brings human judgment into the evaluation process before deployment, where it can shape the decision about whether the system is ready.",
          "In that sense, human judgment is not a fallback. It is a source of knowledge.",
        ],
      },
      {
        id: "sources",
        title: "Sources",
        html: true,
        paragraphs: [
          `<span id="ref1" class="scroll-mt-28">[1] <a href="https://artificialintelligenceact.eu/article/14/" target="_blank" rel="noopener noreferrer">EU Artificial Intelligence Act, Article 14</a></span>`,
          `<span id="ref2" class="scroll-mt-28">[2] <a href="${NIST_APPENDIX_C_URL}" target="_blank" rel="noopener noreferrer">NIST AI RMF Appendix C, AI Risk Management and Human-AI Interaction</a></span>`,
          `<span id="ref3" class="scroll-mt-28">[3] <a href="https://oecd.ai/en/dashboards/ai-principles/P6" target="_blank" rel="noopener noreferrer">OECD AI Principle: Human-centred values and fairness</a></span>`,
          `<span id="ref4" class="scroll-mt-28">[4] <a href="https://www.judiciary.uk/wp-content/uploads/2019/12/bates-v-post-office-judgment.pdf" target="_blank" rel="noopener noreferrer">Bates v Post Office, Horizon Issues Judgment</a></span>`,
          `<span id="ref5" class="scroll-mt-28">[5] <a href="https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2018.00015/full" target="_blank" rel="noopener noreferrer">Frontiers in Robotics and AI, Meaningful Human Control over Autonomous Systems</a></span>`,
        ],
      },
    ],
  },

  /* @section: trust-is-not-a-feature-essay */
  "trust-is-not-a-feature-of-an-ai-system": {
    ...posts[1],
    heroImage: "/images/trust-not-feature-essay-hero_2.png",
    authorDescription: "Founder, TaskHived | Researching how organisations evaluate, trust and deploy artificial intelligence responsibly.",
    showExcerpt: false,
    sections: [
      {
        id: "the-wrong-question",
        title: "The wrong question",
        html: true,
        paragraphs: [
          `Most conversations about trustworthy AI begin in the wrong place.`,
          `They ask whether a system has the right properties. Is it accurate? Is it safe? Is it explainable? Is it robust? These questions matter. Without them, no serious deployment conversation can begin. But they are not enough, because trust is not a feature inside an AI system. Trust is a relationship between a system, a decision context, the people affected by the decision, and the institution willing to be accountable for using it.`,
          `This distinction is becoming more important as artificial intelligence moves from experimentation into organisational decision-making. The Stanford 2026 AI Index reports that organisational AI adoption reached 88 percent, while responsible AI benchmark reporting remains uneven and documented AI incidents rose from 233 in 2024 to 362 in 2025 <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" target="_blank" rel="noopener noreferrer">Stanford 2026 AI Index</a>. The problem is not simply that AI is advancing quickly. The deeper issue is that adoption is moving faster than the organisational disciplines needed to understand when AI deserves trust.`,
          `Trust is often treated as something a system can earn through performance. A model scores well, passes a test, produces plausible answers and becomes trusted. But organisations do not deploy benchmark scores. They deploy systems into workflows where people must interpret outputs, make tradeoffs, handle exceptions and explain decisions later. In that environment, trust depends less on a single technical property and more on whether the organisation has enough evidence to use the system responsibly.`,
          `That is why I think the language of trust needs to become more precise. We should not ask whether AI is trustworthy as if trust were a universal label. We should ask whether it is trustworthy for a specific decision, under specific conditions, for specific people, with specific oversight and evidence.`,
        ],
      },
      {
        id: "trust-depends-on-context",
        title: "Trust depends on context",
        html: true,
        paragraphs: [
          `The NIST AI Risk Management Framework is useful because it treats trustworthiness as multidimensional. It identifies valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, and fair with harmful bias managed as characteristics of trustworthy AI systems <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" target="_blank" rel="noopener noreferrer">NIST AI Risk Management Framework</a>. Each characteristic matters. Yet NIST also makes clear that risk management involves tradeoffs and that human judgment and diverse input are essential for defining metrics and navigating those tradeoffs <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" target="_blank" rel="noopener noreferrer">NIST AI Risk Management Framework</a>.`,
          `This is the part that often gets lost. A system can be accurate and still be unsuitable for a particular deployment. It can be explainable in a technical sense and still fail to create understanding for the people who rely on it. It can perform well in one population and fail in another. It can be safe enough for a low-stakes recommendation and unacceptable for a decision that affects someone’s health, employment or access to public services.`,
          `Context changes the meaning of performance.`,
          `A customer support chatbot that gives an imperfect answer may create frustration. A clinical triage system that gives an imperfect recommendation may create harm. A financial compliance tool that misses a risk signal may expose an organisation to regulatory consequences. These are not merely different use cases. They are different trust relationships.`,
          `That is why organisations need to move from general claims about trustworthy AI to specific evidence about deployment readiness. They need to understand the task, the workflow, the people involved, the consequences of failure, the level of human oversight required and the institutional responsibility attached to the decision.`,
          `The OECD principle on human-centred values and fairness makes a related point. It says AI actors should respect rule of law, human rights, democratic and human-centred values throughout the AI lifecycle, and should implement safeguards such as human agency and oversight in ways appropriate to the context <a href="https://oecd.ai/en/dashboards/ai-principles/P6" target="_blank" rel="noopener noreferrer">OECD AI principle on human-centred values and fairness</a>. The phrase “appropriate to the context” is doing important work. It reminds us that trust cannot be separated from where the system is used and what it is being asked to influence.`,
        ],
      },
      {
        id: "institutions-not-systems-carry-responsibility",
        title: "Institutions, not systems, carry responsibility",
        html: true,
        paragraphs: [
          `One reason trust is difficult to measure is that AI systems do not carry responsibility by themselves. Institutions do.`,
          `When an organisation deploys an AI system, it is not only adopting a tool. It is accepting a new form of decision infrastructure. It must decide who monitors the system, who can challenge it, who investigates failures, who communicates limitations and who remains accountable when the output is wrong.`,
          `NIST’s human-AI interaction appendix states that human roles and responsibilities in decision-making and overseeing AI systems need to be clearly defined and differentiated <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" target="_blank" rel="noopener noreferrer">NIST AI RMF Appendix C on human-AI interaction</a>. This may sound basic, but it is one of the hardest parts of deployment. In many organisations, responsibility is distributed across product teams, data teams, legal teams, compliance teams, business owners, vendors and end users. When something goes wrong, each group may have touched part of the system, but no single group may understand the whole decision.`,
          `This is where trust becomes institutional rather than technical. A system may be technically impressive, but if the organisation cannot explain how it is governed, monitored and corrected, trust remains fragile.`,
          `The IBM article on enterprise AI scale expresses this in practical terms. It says enterprise conversations shift from what AI can do to whether AI can be trusted to do it consistently, safely and at scale <a href="https://www.ibm.com/careers/blog/beyond-the-ai-hype-what-it-really-takes-to-bring-ai-to-enterprise-scale" target="_blank" rel="noopener noreferrer">IBM essay on enterprise AI scale</a>. One quoted line captures the operational nature of the problem: “The harder questions come fast. How is the model governed? Where does the data live? Can the output be audited? What happens when the model is wrong?” <a href="https://www.ibm.com/careers/blog/beyond-the-ai-hype-what-it-really-takes-to-bring-ai-to-enterprise-scale" target="_blank" rel="noopener noreferrer">IBM essay on enterprise AI scale</a>.`,
          `Those are trust questions. They are also governance questions, audit questions and responsibility questions.`,
          `The same article uses another phrase I find helpful: “Trust is not a slogan. It is an operating model” <a href="https://www.ibm.com/careers/blog/beyond-the-ai-hype-what-it-really-takes-to-bring-ai-to-enterprise-scale" target="_blank" rel="noopener noreferrer">IBM essay on enterprise AI scale</a>. That sentence matters because it moves trust away from branding and toward practice. If trust is an operating model, then it must be designed, tested, maintained and improved. It must be visible in decision rights, escalation paths, monitoring routines, documentation, human oversight and evidence collection.`,
        ],
      },
      {
        id: "evidence-creates-the-conditions-for-trust",
        title: "Evidence creates the conditions for trust",
        html: true,
        paragraphs: [
          `Trust should not mean confidence without evidence. It should mean confidence because the right evidence exists.`,
          `For AI deployment, evidence is not only a model score. It includes how the system performs in the actual workflow, how experts judge its outputs, how often humans disagree with it, where uncertainty appears, what kinds of errors occur, which users over-rely on the system, what happens when conditions change and whether affected people can contest decisions.`,
          `This is why I believe human judgment is not a temporary bridge until AI becomes more capable. Human judgment is part of the evidence infrastructure required for responsible deployment.`,
          `NIST notes that representing complex human phenomena with mathematical models can remove necessary context <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" target="_blank" rel="noopener noreferrer">NIST AI RMF Appendix C on human-AI interaction</a>. That observation is central to AI trust. Many of the most important deployment questions involve context that is difficult to reduce to a single number. Was the recommendation appropriate for this person? Was the exception handled fairly? Did the human reviewer understand the system’s limitations? Did the workflow encourage independent judgment or passive acceptance?`,
          `These questions require structured human evaluation. They require organisations to capture human expertise in ways that are consistent enough to learn from, but flexible enough to preserve context.`,
          `This is one practical reason I am building TaskHived. Not because trust can be productised into a simple label, but because organisations need better ways to gather evidence before AI systems become part of real decisions. TaskHived is one expression of a broader question that shapes my work: how do we make human judgment visible, measurable and useful without pretending it can be fully automated away?`,
        ],
      },
      {
        id: "a-more-useful-definition",
        title: "A more useful definition",
        paragraphs: [
          "If trust is not a feature, then we need a more useful definition.",
          "I think of AI trust as a justified organisational decision to rely on a system in a specific context, supported by evidence about performance, human oversight, accountability and consequences.",
          "This definition has several implications.",
          "First, trust is conditional. A system may deserve trust in one workflow and not another.",
          "Second, trust is evidence-based. Confidence without evidence is not trust. It is exposure.",
          "Third, trust is relational. It involves the system, the user, the affected person and the accountable institution.",
          "Fourth, trust is dynamic. It must be monitored as data changes, workflows change, models change and social expectations change.",
          "Finally, trust is never only technical. It depends on human judgment, organisational behaviour and the willingness to remain accountable after deployment.",
          "The next stage of AI adoption will require more than capable models. It will require organisations to become much better at deciding when capability is enough, when it is not enough and what evidence is needed before a system deserves a place in real work.",
          "That is the question I keep returning to. Not whether AI can perform a task in isolation, but whether an organisation can responsibly trust it in context.",
        ],
      },
      {
        id: "what-trust-asks-of-the-organisation",
        title: "What trust asks of the organisation",
        paragraphs: [
          "When trust is understood as a relationship, the organisation’s role becomes clearer.",
          "The organisation must decide what the system is allowed to influence. It must decide what level of uncertainty is acceptable. It must decide who has the authority to challenge the output. It must decide how affected people can ask for review. It must decide what evidence will be monitored after deployment.",
          "These are not secondary questions. They are the substance of trust.",
          "A useful way to test an AI deployment is to imagine the first serious failure. A customer is harmed. A patient receives a poor recommendation. An employee is treated unfairly. A regulator asks for an explanation. A board asks why the system was deployed. At that moment, the organisation will not be able to rely on a general statement that the model was advanced. It will need a record of judgment.",
          "Why was the system considered ready? What evidence existed? What limitations were known? What tradeoffs were accepted? Who approved the decision? What monitoring was in place? What path existed for correction?",
          "Trust becomes real when these questions can be answered calmly and specifically.",
          "This is also why trust cannot be reduced to user sentiment. People may feel confident in a system for the wrong reasons. They may overestimate its reliability because the interface is polished, the output is fluent or the institution behind it appears credible. Conversely, people may distrust a system that is performing well because the organisation has not explained it clearly or given them a way to challenge it.",
          "A serious trust framework must therefore connect perception to evidence. It should ask not only whether people trust the system, but whether that trust is justified.",
        ],
      },
      {
        id: "the-discipline-of-justified-reliance",
        title: "The discipline of justified reliance",
        paragraphs: [
          "The phrase I return to is justified reliance.",
          "Reliance is what happens when an organisation allows an AI system to influence work. Justification is the evidence that makes that reliance responsible. The gap between the two is where many AI deployments become fragile.",
          "A team may rely on a system because it is efficient. A manager may rely on it because competitors are adopting similar tools. A user may rely on it because it produces confident answers. But justified reliance requires more. It requires a defensible connection between the system’s measured behaviour, the decision context, the human oversight design and the consequences of error.",
          "This is especially important for enterprise AI because deployment often happens gradually. A tool begins as optional assistance. Then it becomes embedded in a workflow. Then it becomes expected. Eventually, decisions are shaped by it even if no one formally declared that the system is now trusted. Trust can emerge by habit rather than by evidence.",
          "That is risky.",
          "Organisations need explicit moments where reliance is reviewed. They need to ask whether informal use has become operational dependency. They need to know whether human users are still exercising judgment or merely accepting outputs. They need to understand whether the system is changing the work in ways that have not been evaluated.",
          "This is one reason I believe AI trust should be studied as an organisational discipline. The question is not only how to make systems better. It is how to make reliance more deliberate.",
        ],
      },
      {
        id: "sources",
        title: "Sources",
        html: true,
        paragraphs: [
          `<span id="ref1" class="scroll-mt-28">[1] <a href="https://hai.stanford.edu/ai-index/2026-ai-index-report" target="_blank" rel="noopener noreferrer">Stanford 2026 AI Index</a></span>`,
          `<span id="ref2" class="scroll-mt-28">[2] <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" target="_blank" rel="noopener noreferrer">NIST AI Risk Management Framework</a></span>`,
          `<span id="ref3" class="scroll-mt-28">[3] <a href="https://oecd.ai/en/dashboards/ai-principles/P6" target="_blank" rel="noopener noreferrer">OECD AI principle on human-centred values and fairness</a></span>`,
          `<span id="ref4" class="scroll-mt-28">[4] <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" target="_blank" rel="noopener noreferrer">NIST AI RMF Appendix C on human-AI interaction</a></span>`,
          `<span id="ref5" class="scroll-mt-28">[5] <a href="https://www.ibm.com/careers/blog/beyond-the-ai-hype-what-it-really-takes-to-bring-ai-to-enterprise-scale" target="_blank" rel="noopener noreferrer">IBM essay on enterprise AI scale</a></span>`,
        ],
      },
    ],
  },

  /* ─── Article A ─── */
  "ai-trust-gap-capability-faster-than-confidence": {
    ...posts[2],
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
    ...posts[3],
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
    ...posts[4],
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
    ...posts[5],
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
    ...posts[8],
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
    ...posts[6],
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

  /* ─── Article H (Flagship) ─── */
  "missing-infrastructure-for-ai": {
    ...posts[7],
    heroImage: "/images/art_a_1.jpeg",
    sections: [
      {
        id: "measuring-the-wrong-thing",
        title: "We have been measuring the wrong thing",
        paragraphs: [
          "For the past decade, progress in artificial intelligence has been measured primarily through benchmarks. Models are tested on standardised tasks. Scores are published. Rankings are updated. Each new release claims to surpass the last on some dimension of capability.",
          "This has been useful. Benchmarks created shared vocabulary, enabled comparison, and pushed the field forward. But something important has been left out.",
          "Benchmarks tell you what a model can do under controlled conditions. They say very little about whether an organisation is ready to trust that model in real decisions, with real consequences, for real people.",
          "That is a different question entirely. And most of the infrastructure for answering it does not yet exist.",
        ],
        quote: "Benchmarks measure capability. Deployment requires trust. These are not the same thing.",
      },
      {
        id: "the-deployment-gap",
        title: "The gap between capability and deployment",
        paragraphs: [
          "Talk to anyone responsible for deploying AI inside a large organisation and you will hear a version of the same story. The technology is impressive. The demo was convincing. But somewhere between the prototype and production, the confidence disappeared.",
          "The system performed well on the test data. It struggled on the edge cases that matter most to the business. The evaluation process was designed to confirm readiness, not to surface doubt. The people most affected by the system were not involved in assessing it. And nobody was quite sure who owned the decision to proceed.",
          "This is not a story about bad technology. It is a story about missing infrastructure.",
          "When organisations deploy physical infrastructure, they rely on engineering standards, safety certifications, independent inspection, and structured accountability. These systems exist because the consequences of failure are significant and the people responsible for decisions need structured evidence before they can act responsibly.",
          "AI deployment needs something similar. Not identical, but equivalent in spirit: structured ways of generating, reviewing, and communicating evidence about whether an AI system is ready for a specific use, in a specific context, with a specific level of risk.",
        ],
        midImage: "/images/art_a_2.jpeg",
        midImageAlt: "Abstract representation of evidence gathering and structured evaluation",
      },
      {
        id: "human-judgement-infrastructure",
        title: "The missing piece is human judgement infrastructure",
        paragraphs: [
          "The infrastructure most organisations are missing is not better AI. It is better human judgement infrastructure.",
          "By this I mean the systems, processes and evidence frameworks that allow organisations to incorporate human expertise into AI deployment decisions in a structured, scalable and defensible way.",
          "Human judgement infrastructure asks different questions than automated evaluation. Not just: does this system produce accurate outputs? But: does this output reflect the knowledge of people who understand this domain? Does this decision account for context that the model cannot see? Has this use case been evaluated by people who understand the consequences of being wrong?",
          "These questions require people. They require domain experts who can assess outputs in context. They require frontline workers who can identify the gap between the workflow a system assumes and the workflow they actually use. They require governance processes that treat human evaluation as evidence rather than as a cost.",
          "Most organisations have not built this. The result is that AI deployment decisions are made on the basis of benchmark scores and technical metrics, with little systematic input from the people whose judgement is most relevant.",
        ],
        quote: "The missing infrastructure is not more compute. It is better ways of incorporating what humans know into AI deployment decisions.",
      },
      {
        id: "what-this-looks-like",
        title: "What this looks like in practice",
        paragraphs: [
          "Building human judgement infrastructure means thinking carefully about how expertise is collected, structured and applied at the moments that matter. It means designing evaluation processes that surface real doubt rather than confirming predetermined answers. It means creating feedback loops between the people affected by AI decisions and the people responsible for making them.",
          "It also means being honest about what remains uncertain. One of the most important things human judgement can contribute to AI deployment is a clear statement of what the system has not been tested on, and where confidence should be limited. This is uncomfortable. It is also essential.",
          "At TaskHived, this is the problem we are working on. Not building more capable AI, but building better infrastructure for the human side of deployment: the evaluation, the evidence, the accountability, and the trust.",
          "I do not think this work is finished. I am not sure any single organisation will finish it. But it seems to me to be one of the most important practical questions in AI right now, and one that deserves more attention than benchmarks and leaderboards can give it.",
          "What would it look like if organisations took human judgement as seriously as they take model performance? What evidence would they collect? What processes would they build? What would they learn?",
          "These are the questions I keep coming back to.",
        ],
      },
    ],
  },

  /* ─── Article I ─── */
  "beyond-benchmarks-evidence-before-deployment": {
    ...posts[9],
    heroImage: "/images/art_d_2.jpeg",
    sections: [
      {
        id: "the-gap-no-benchmark-captures",
        title: "The gap no benchmark captures",
        paragraphs: [
          "Artificial intelligence has entered an extraordinary period of progress. In just three years, generative AI has reached 53% population-level adoption, faster than both the personal computer and the internet, while 88% of organisations now report using AI in at least one business function. Frontier models continue to improve across reasoning, coding and scientific tasks, and some now perform at or above human baselines on increasingly complex benchmarks.",
          "Yet the most important conclusion in the Stanford AI Index 2026 is not about how quickly AI is advancing. It is about how slowly the systems around it are adapting. Governance frameworks, evaluation methods, transparency, and the infrastructure needed to measure AI's real-world impact are failing to evolve at the same speed as the technology itself.",
          "For years, progress in AI has been measured through benchmarks. Can a model solve complex mathematics? Can it generate software? Can it outperform experts on professional examinations? These benchmarks have been essential in accelerating research and comparing technical capability, but they answer only one question: what can a model do under controlled conditions? They do not answer the question every organisation eventually faces: should we trust this system enough to rely on it?",
          "Benchmarks measure capability. Organisations deploy trust.",
        ],
      },
      {
        id: "where-confidence-breaks-down",
        title: "Where confidence breaks down",
        paragraphs: [
          "This gap between technical performance and real-world deployment is becoming more apparent as AI systems move beyond demonstrations and into critical environments. A legal assistant that hallucinates case law, a clinical system that performs well on exam-style questions but struggles with real patient data, or an AI agent that performs impressively in testing yet behaves inconsistently in production all reveal the same underlying problem. Intelligence alone is no longer the limiting factor. Confidence is.",
          "The Stanford AI Index highlights this shift. While capability benchmarks continue to improve, responsible AI benchmarking remains sparse. Documented AI incidents increased from 233 in 2024 to 362 in 2025. Many frontier models have become less transparent, with leading developers disclosing less about training data, model architecture and evaluation. Benchmarks themselves are beginning to lose their usefulness as models rapidly saturate tests that were expected to remain challenging for years.",
          "These are not isolated trends. Together they point to a deeper issue. We are becoming remarkably good at building intelligent systems while becoming comparatively less capable of understanding when those systems deserve our trust.",
        ],
      },
      {
        id: "deployment-is-a-human-decision",
        title: "Deployment is a human decision",
        paragraphs: [
          "Organisations do not simply ask whether AI can produce an answer. They ask whether that answer is reliable enough to influence decisions that affect customers, patients, employees or citizens. They need to understand how AI behaves under uncertainty, how consistently experts agree with its outputs, where confidence breaks down, how context changes performance and what level of risk is acceptable within their own industry.",
          "Ironically, as AI becomes more intelligent, human judgment becomes more valuable, not less. Every deployment decision still depends on people deciding whether an output is acceptable, whether a recommendation is safe, whether an exception should be escalated and whether the consequences of being wrong are tolerable. Human judgment remains the mechanism through which organisations translate technical capability into practical trust. Yet today, that judgment is often informal, inconsistent and difficult to measure.",
        ],
      },
      {
        id: "the-infrastructure-that-comes-next",
        title: "The infrastructure that comes next",
        paragraphs: [
          "The next generation of AI infrastructure will not emerge through another leap in model size or benchmark performance. It will emerge through better ways of generating evidence for deployment decisions. Organisations need systems that make expert judgment structured, measurable, auditable and repeatable. They need evidence that reflects how AI performs in the environments where it will actually operate, under the oversight of the people responsible for deploying it.",
          "Human-in-the-loop should not be viewed merely as a safety checkpoint or manual review process. It should become an integral part of how organisations evaluate AI before deployment, transforming human expertise into evidence that improves confidence rather than simply correcting errors after they occur. In this model, human judgment is not the opposite of artificial intelligence. It is the infrastructure that allows artificial intelligence to be deployed responsibly at scale.",
          "As AI becomes embedded across healthcare, finance, law, education, government and critical infrastructure, the organisations that succeed will not necessarily be those with access to the most powerful models. They will be those with the strongest evidence supporting how, where and under what conditions those models should be trusted.",
          "The question that increasingly guides my work is no longer: How intelligent is this model? It is: What evidence do we need before we trust it? The answer to that question will shape the future of enterprise AI far more than the next benchmark ever will.",
        ],
      },
    ],
  },

  /* ─── Article J ─── */
  "before-ai-can-replace-work-it-must-earn-trust": {
    ...posts[10],
    heroImage: "/images/art_c_2.jpeg",
    sections: [
      {
        id: "the-promise-and-the-hesitation",
        title: "The promise and the hesitation",
        paragraphs: [
          "There is a version of the future where AI handles a significant share of the work that currently falls to people. Some of that future is already here. AI systems draft documents, screen candidates, assess risk, triage support requests and summarise legal contracts. The question is not whether AI can do these things. It clearly can. The question is whether organisations are ready to let it.",
          "Trust, not capability, is the rate-limiting factor.",
          "I talk to organisations regularly about AI deployment. What I hear, consistently, is not scepticism about whether AI works. The technology has demonstrated enough to move past that debate. What I hear is something more specific: a reluctance to hand over consequential decisions without a clearer way to verify that the system is behaving as expected.",
          "This hesitation is rational. It is not technophobia. It is the same caution any organisation applies before trusting any new process with decisions that affect customers, employees or citizens. The question is not whether to trust AI. It is how to build that trust in a way that is rigorous rather than optimistic.",
          "Right now, that rigour is mostly missing.",
        ],
      },
      {
        id: "why-demonstrations-are-not-enough",
        title: "Why demonstrations are not enough",
        paragraphs: [
          "Most AI deployments begin with a demonstration. A vendor shows what the system can do on a curated dataset. Internal teams run a pilot. Benchmark scores are presented. Results look impressive.",
          "Then the system goes into production, and something shifts. The performance gap between controlled testing and real-world deployment is one of the most consistent findings in enterprise AI adoption. It is not a failure of the technology. It is a failure of the evidence gathered before deployment.",
          "Demonstrations answer the question: can this system produce good outputs? They do not answer the questions that matter for a sustained deployment: does it behave consistently across the full range of cases it will actually encounter? How does it perform when the data is messier than the test set? What happens in the cases where expert opinion is divided? Where does confidence break down?",
          "Organisations need evidence that reflects the conditions of actual deployment, not the conditions of an optimised demonstration.",
        ],
        midImage: "/images/art_c_1.jpeg",
        midImageAlt: "Editorial visual representing human review and AI deployment evidence",
      },
      {
        id: "the-role-human-judgement-plays",
        title: "The role human judgement plays",
        paragraphs: [
          "This is where human judgement becomes infrastructure rather than oversight.",
          "The common framing of human-in-the-loop positions people as a safety net: a reviewer who catches errors before they cause harm. That framing is not wrong, but it understates what structured human evaluation can do before a system is deployed.",
          "When expert reviewers assess AI outputs systematically, measuring where they agree, where they disagree, and under what conditions their confidence shifts, that process generates evidence. It tells an organisation something specific about how much trust is warranted and in which contexts. It turns an informal sense of whether the system seems good enough into a measurable basis for a deployment decision.",
          "This kind of evaluation is not yet standard practice. Most organisations rely on a combination of benchmark scores, internal pilots and a degree of institutional confidence in the vendor. The evidence base for consequential AI deployments is thinner than it should be.",
        ],
        quote: "Human judgement becomes infrastructure when it gives organisations evidence they can use before deployment.",
      },
      {
        id: "trust-is-earned-incrementally",
        title: "Trust is earned incrementally",
        paragraphs: [
          "The most durable trust is built gradually. It accumulates through repeated experience of a system behaving as expected, combined with transparency about where it does not.",
          "Rather than asking whether an AI system is ready to replace a process entirely, the more useful question is: in which subset of cases is there sufficient evidence to deploy now, and in which cases does more evaluation need to come first?",
          "Deployment is not binary. Trust is not binary. An organisation can extend AI autonomy in the cases where evidence is strong while maintaining closer human oversight in the cases where it is not.",
          "I do not think the organisations that lead in enterprise AI will be the ones that move fastest. I think they will be the ones that build evidence most rigorously before they move.",
          "The question I keep returning to is not how capable AI has become. It is: what would it take to trust it enough to let it do more?",
        ],
      },
    ],
  },
};

export const getArticle = (slug: string | undefined) => {
  if (!slug) return undefined;
  return articles[slug];
};
