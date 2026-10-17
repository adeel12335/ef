export type Faq = { q: string; a: string };

/**
 * FAQ content.
 *
 * Written answer-first: each answer opens with the direct reply in the first
 * sentence, then the detail. That is what a reader skims for and what an answer
 * engine lifts, and it costs nothing in readability.
 *
 * IMPORTANT: these feed both the rendered accordions and the FAQPage
 * structured data, so the two can never drift. Google requires marked-up FAQ
 * answers to match what the visitor sees; marking up an answer that is not on
 * the page can get the rich result suppressed.
 */

/** Shown on the home page. */
export const FAQS: Faq[] = [
  {
    q: "How much does an AI agent or automation cost?",
    a: "Packages run from $120 to $500. Each service is a gig with three packages: automation starts at $120, an AI agent at $150, a website or app at $180, and Salesforce or AWS work at $150. The Premium package on each gig tops out at $450–$500. Every package is a fixed scope agreed in writing before work begins, so the price does not move unless the scope does.",
  },
  {
    q: "What is the difference between the Basic, Standard and Premium packages?",
    a: "Each tier includes the one below it. Basic is a single focused piece of work — one automation, one chat assistant, one landing page — delivered in days. Standard adds the integrations that make it useful day to day, such as calendar booking or CRM sync. Premium connects everything together and adds voice, mobile, cloud hosting or deployment pipelines, with 30 days of support.",
  },
  {
    q: "Can I book a single package instead of a full project?",
    a: "Yes, and most people should. The packages are fixed-scope on purpose so you can start with the piece that hurts most and move up on the same gig later. If what you need sits outside a listed package, describe it and I will scope it properly rather than force it into one.",
  },
  {
    q: "How long does a project take?",
    a: "Between two working days and five weeks, depending on the package. Basic packages are delivered in 2–7 working days, Standard in one to three weeks, and Premium in two to five. Those dates assume access and feedback arrive promptly — in practice those two things move a timeline more than the build does.",
  },
  {
    q: "Do you work with clients internationally?",
    a: "Yes — remote by default. I am based in Pakistan and work with businesses worldwide. Calls are scheduled to suit your hours and everything else runs asynchronously, so neither of us is waiting on the other to be awake.",
  },
  {
    q: "Can you work with the tools we already use?",
    a: "Usually, yes. Most business tools expose an API, a webhook or an export, and that is normally enough to connect them. Automations are built in n8n, Make or Zapier depending on what you already run. The first thing I check is what your tools actually allow, because that shapes what is sensible to build — and if something genuinely cannot be connected, you hear that before work starts.",
  },
  {
    q: "How do you handle access and sensitive information?",
    a: "I ask for the narrowest access that does the job, and only when it is needed. Credentials stay in your accounts, granted to me rather than copied, and are yours to revoke at any point — including the day the project ends. Nothing sensitive goes into frontend code or a repository.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "You get written documentation, a handover session and an agreed support period — 7 days on Basic, 14 on Standard, 30 on Premium. The documentation covers how the system works, what it connects to and what to do when something breaks. The aim is that continuing support is your choice rather than a dependency created by a thin handover.",
  },
];

/** Shown on /service, where the questions are about scope rather than fit. */
export const SERVICE_FAQS: Faq[] = [
  {
    q: "What if my project does not fit one of the packages?",
    a: "I scope it separately and quote in writing. The packages cover the work people ask for most often; anything else gets the same treatment — a conversation about the problem, then a written scope with a fixed price before any work starts.",
  },
  {
    q: "Is the package price the final price?",
    a: "It is the price for the scope we agree. Each package is listed as a \"from\" price because scope varies — a chat assistant trained on twenty answers is not the same job as one trained on two hundred. Once the scope is written down, the number attached to it does not change unless you ask for something that changes the scope, and we agree that in advance.",
  },
  {
    q: "Can I upgrade a package later?",
    a: "Yes. The tiers are built to stack, so Standard includes Basic and Premium includes Standard. If you start with a Basic automation and later want CRM sync and follow-up tasks, you pay the difference rather than starting again.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes, if you want it. Every package includes a support period, and beyond that a maintenance arrangement can be agreed separately. Some clients take the handover and run it themselves, coming back when something changes — that is a perfectly good outcome, and the documentation is written to make it possible.",
  },
];

/** Shown on /about, where the questions are about working together. */
export const ABOUT_FAQS: Faq[] = [
  {
    q: "Who actually does the work?",
    a: "I do, start to finish. There is no agency behind this and no team the work gets passed to. The person you discuss the problem with is the one who writes the code and the one who answers when something needs attention three months later.",
  },
  {
    q: "How will we communicate during the project?",
    a: "Written updates at agreed check-ins, plus calls scheduled to suit your hours. Everything between check-ins runs asynchronously, so neither of us is waiting on the other to be awake. If something slips, you hear about it when I know — not at the deadline.",
  },
  {
    q: "What do you need from me to start?",
    a: "A conversation about the problem, a look at how the work happens today, and access to the relevant tools when we reach that stage. It also helps to know who will own the system day to day once it is live, because that shapes how it is built and documented.",
  },
  {
    q: "What if the project turns out to be the wrong idea?",
    a: "You will hear that before work starts rather than after. Sometimes the right answer is smaller than expected, and occasionally automation is not the answer yet. Saying so early costs me an invoice and saves you a system nobody uses — that trade is worth making.",
  },
  {
    q: "Do you sign NDAs or work under contract?",
    a: "Yes to both. An NDA is fine before we discuss anything sensitive, and every project runs against a written scope that covers deliverables, timeline, price and what happens if the scope changes.",
  },
];
