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

/**
 * Questions that only make sense on one gig. The shared SERVICE_FAQS stay on
 * /service. Repeating them on every gig URL gives Google four copies of the
 * same answers and none of the question that page should win.
 */
export const GIG_FAQS: Record<string, Faq[]> = {
  "ai-agents": [
    {
      q: "Will the assistant invent a price or an appointment?",
      a: "No. It only offers times it has just read from your calendar, and a booking is confirmed only after that write succeeds. If it has no written answer, it stops and hands the conversation to a person with the transcript attached.",
    },
    {
      q: "How is this different from a monthly AI phone product?",
      a: "A hosted receptionist is a subscription, often tens to a few hundred dollars a month plus usage. This is a fixed-scope build from $150 that you keep: chat at $150, live booking at $300, voice with CRM records at $500. Model and phone usage after launch is separate, and at a small volume it is usually much smaller than the subscription.",
    },
    {
      q: "Do I need a new phone number?",
      a: "Not for chat. The Basic and Standard packages sit on the site you already have. Voice is the Premium package, and it uses a number you control rather than one locked to me.",
    },
    {
      q: "What happens when a caller asks for a person?",
      a: "They get one. Asking once is enough. The assistant stops, takes a callback detail, and sends the full transcript to a person. It does not try to talk them out of it.",
    },
  ],
  "workflow-automation": [
    {
      q: "Do I need n8n, Make or Zapier already?",
      a: "No. If you already pay for one of them, I build there. If you have none, n8n is the default, because you can own the workflows instead of renting every run.",
    },
    {
      q: "What if a step fails in the middle of the night?",
      a: "The original enquiry is kept and a person is told. A lead that disappears without an alert is treated as a failed build, not as an acceptable error.",
    },
    {
      q: "Can the same person become two CRM records?",
      a: "Not when the email or phone matches an existing record. Near-matches are flagged for you to check. The automation does not guess that two similar names are the same person.",
    },
    {
      q: "When is automation the wrong job?",
      a: "When enquiries are not arriving. Connecting tools will not create demand. A shorter form and one obvious next step is the cheaper fix, and I will say so before any workflow is built.",
    },
  ],
  "web-mobile": [
    {
      q: "Is this a website or an app?",
      a: "Basic is one landing page. Standard is a business site of up to six pages. Premium is the point where it becomes a web or mobile app with accounts. The written scope names which of those you are buying.",
    },
    {
      q: "What does the on-page SEO in Basic include?",
      a: "A unique title and description, one clear heading, and page copy written so a search result can quote it. It is not a backlink campaign or a promise of a ranking.",
    },
    {
      q: "Where do form submissions go?",
      a: "Into the inbox or CRM you already work in. The visitor is told the message was sent only after that delivery succeeds.",
    },
    {
      q: "Will it work properly on a phone?",
      a: "Yes. Phone layout is part of the build. Most of this traffic arrives there, so a desktop-only pass would be an unfinished page.",
    },
  ],
  "salesforce-aws": [
    {
      q: "Is this Salesforce work or AWS work?",
      a: "Either, or both, and the scope says which. Salesforce here means objects, fields, flows and reports. AWS means servers, storage, deployment and monitoring. You do not have to buy both to book one.",
    },
    {
      q: "Who owns the AWS account?",
      a: "You do. Access is granted inside your account, limited to what the job needs, and yours to revoke when the work ends. Credentials are not copied out into a repository.",
    },
    {
      q: "Can changes be shown before they touch live records?",
      a: "Yes. Salesforce changes are shown in a sandbox or a separate environment first. AWS work uses a separate environment before anything is pointed at production.",
    },
    {
      q: "What if we only need a tidy-up, not a rebuild?",
      a: "That is the Basic package: custom fields and a page layout, or one service deployed to AWS, plus one report and an access clean-up. Larger objects, flows and pipelines are Standard and Premium.",
    },
  ],
};

export function faqsForGig(slug: string): Faq[] {
  return GIG_FAQS[slug] ?? SERVICE_FAQS;
}

/** Two answer-first blocks so a gig URL can be quoted without the /answers article. */
export const GIG_NOTES: Record<string, { heading: string; paragraphs: string[] }[]> = {
  "ai-agents": [
    {
      heading: "What it will refuse to do",
      paragraphs: [
        "It will not invent a price, a policy, or a time slot. Availability is read from the live calendar, and a booking is confirmed only after the calendar accepts the write.",
        "Anything outside the answers you have signed off — a complaint, a discount, a question it has not been given — stops and goes to a person. That boundary is designed before the happy path, because it is what makes the rest safe to put on a phone line.",
      ],
    },
    {
      heading: "A subscription versus a fixed build",
      paragraphs: [
        "Hosted AI phone products, as publicly listed in October 2026, are mostly a monthly plan: entry tiers often around $49–$99, fuller plans a few hundred dollars a month, plus usage. People who commission a custom production system commonly talk about quotes in the thousands.",
        "The packages on this page are neither of those. They are a defined build — chat from $150, booking from $300, voice from $500 — that you keep. Running the model and, for voice, the phone line, still costs money afterwards. At a small volume that is usually much less than the subscription, and it is quoted separately so the two numbers are not mixed.",
      ],
    },
  ],
  "workflow-automation": [
    {
      heading: "n8n, Make, or Zapier",
      paragraphs: [
        "I use the tool you already pay for. If you have none, n8n is the default: you can self-host it and you are not billed for every run. Zapier is the easiest to open yourself. Make sits between them when a flow has a lot of branches.",
        "The platform is not the job. The job is one intake shape, a match on email and phone, a dated follow-up, and an alert when a step fails.",
      ],
    },
    {
      heading: "One worked intake",
      paragraphs: [
        "A website form, a shared inbox and a social message become one record: name, contact, source, message, time. A match updates the person you already have. A near-match waits for you. Anything else creates a new record and a follow-up with a named owner.",
        "If a step fails, the original message is kept and someone is told. The lead is not dropped because a CRM field rejected it at 2am.",
      ],
    },
  ],
  "web-mobile": [
    {
      heading: "A site first, an app only when you need one",
      paragraphs: [
        "Basic and Standard are websites: one page, or up to six, each with the same next step. Premium is a web or mobile app with accounts, because that is a different product and a different price.",
        "The form asks only what changes the first reply. Errors say what to fix. The visitor sees a confirmation only after the enquiry has actually landed in your inbox or CRM.",
      ],
    },
  ],
  "salesforce-aws": [
    {
      heading: "Salesforce on this page, AWS under its own heading",
      paragraphs: [
        "Salesforce work here is objects, fields, flows, assignment rules and the reports your team asked for. It follows how you actually sell, not a generic layout.",
        "AWS work is hosting, storage, a deployment pipeline and monitoring, with access limited to what the job needs. If you want both, they are written as two parts of one scope. If you want one, that is all you buy.",
      ],
    },
  ],
};

/** Short questions on each concept build, taken from constraints already on the page. */
export const PROJECT_FAQS: Record<string, Faq[]> = {
  "front-desk-ai": [
    {
      q: "Will it book a time that is not free?",
      a: "No. It reads slots from the live calendar and confirms the booking only after the calendar write succeeds. It does not tell the caller they are booked and then try to save it.",
    },
    {
      q: "What if the caller asks something it was not given an answer for?",
      a: "It stops, takes a callback detail, and sends a person the transcript. Guessing a price or a policy is outside the build.",
    },
  ],
  "lead-relay": [
    {
      q: "What happens to a lead when a step fails?",
      a: "The original message is stored and a person is alerted. The pipeline does not drop the enquiry and continue as if it arrived.",
    },
    {
      q: "How does it avoid duplicate people?",
      a: "It matches on email and phone. A clear match updates the existing record. A near-match is left for a person. It does not merge two people because the names look similar.",
    },
  ],
  "clear-path": [
    {
      q: "How many things does the form ask?",
      a: "Only what is needed for a useful first conversation. Extra fields that a team might want later stay off the form, because each one costs submissions from people who have not decided yet.",
    },
    {
      q: "When does the visitor see a confirmation?",
      a: "After the enquiry has been delivered to the inbox or CRM. The page does not confirm a message that never arrived.",
    },
  ],
};
