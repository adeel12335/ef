/**
 * Answers — short, specific pieces that reply to the questions people actually
 * type before they hire someone.
 *
 * Written answer-first: each one opens with `answer`, a direct 40–60 word reply
 * that stands on its own if a search engine or assistant quotes nothing else.
 * The body then earns it.
 *
 * Rules these follow, because the rest of the site follows them too:
 * - No invented statistics, client counts or case-study numbers.
 * - Prices quoted here come from lib/gigs.ts and must match the gig pages.
 * - Where something is a judgement call rather than a fact, it says so.
 */

export type Section = { heading: string; paragraphs: string[]; list?: string[] };

export type Answer = {
  slug: string;
  /** Phrased as the question someone searches. */
  title: string;
  /** Under ~60 chars for the <title>. */
  shortTitle: string;
  description: string;
  /** The direct reply, first thing on the page. */
  answer: string;
  updated: string;
  readingMinutes: number;
  /** Related gig slug, if the piece maps to one. */
  gigSlug?: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
};

export const ANSWERS: Answer[] = [
  {
    slug: "how-much-does-an-ai-agent-cost",
    title: "How much does an AI agent cost for a small business?",
    shortTitle: "How Much Does an AI Agent Cost?",
    description:
      "What an AI agent actually costs a small business in 2026: build price, the running costs people forget, and what changes the number.",
    answer:
      "A usable AI agent for a small business starts around $150 for a chat assistant trained on your own answers, and $300–$500 once it books from a live calendar or takes phone calls. Running costs are separate and usually small — typically a few dollars to a few tens of dollars a month in model and telephony usage.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "The build price and the running price are different things",
        paragraphs: [
          "Most quotes you will see cover the build: designing what the assistant says, connecting it to your calendar or CRM, testing it, and handing it over. That is a one-off.",
          "Running it is a separate, ongoing cost, and it is the one people forget to ask about. An assistant that answers text chat costs very little to run. One that answers phone calls costs more, because you are paying for the phone number, the speech-to-text, and the voice itself on top of the model.",
          "Ask any developer to split the two in writing. A build price with no mention of running costs is an incomplete quote, not a cheap one.",
        ],
      },
      {
        heading: "What actually moves the price",
        paragraphs: [
          "Four things, roughly in order of how much they matter:",
        ],
        list: [
          "Channel. Chat on your website is the cheapest. Voice on a phone number is the most expensive, because there are more moving parts and more ways to fail.",
          "Whether it writes anywhere. An assistant that only answers is simpler than one that books an appointment or creates a CRM record, because writing means handling failure — what happens when the calendar rejects the booking.",
          "How many answers it needs. Twenty well-written answers is a different job from two hundred, and the writing is usually the slow part, not the code.",
          "Escalation rules. Deciding what the assistant must never attempt, and what happens when it hits that line, takes real thought. It is also what makes the thing safe to put in front of customers.",
        ],
      },
      {
        heading: "A monthly product versus a fixed build",
        paragraphs: [
          "Public listings in October 2026 for hosted AI phone products cluster as a subscription. Entry plans are often around $49–$99 a month, fuller plans a few hundred dollars a month, and developer platforms charge per minute on top. People who build custom production systems commonly quote that work in the thousands, because the scope is a whole operation rather than a widget.",
          "Those numbers are not comparable to each other, and neither is comparable to a fixed-scope package until you know which product you are buying. A subscription rents a receptionist. A build in the $150–$500 range on this site is a defined assistant — chat, then booking, then voice — that you keep, with a written boundary around what it may say.",
          "Running costs stay separate either way. The model, and for voice the phone number and speech processing, still cost money after launch. At a small volume that is usually much smaller than a subscription, and any honest quote splits it from the build price.",
        ],
      },
      {
        heading: "What a low price usually means",
        paragraphs: [
          "A very cheap agent is normally a chat widget pointed at a general model with no boundary around it. It will answer anything, confidently, including things about your business that are not true. That is not a bargain; it is a liability with a monthly fee.",
          "The expensive part of this work is not the model. It is deciding what the assistant is allowed to say, and building the handoff for everything else.",
        ],
      },
      {
        heading: "What I charge",
        paragraphs: [
          "For transparency, since this page is on my own site: $150 for a chat assistant trained on up to twenty of your own answers, $300 once it reads live calendar availability and books, and $500 for voice on a phone number with CRM records and full escalation handling. Each is a fixed scope agreed in writing before work starts.",
          "Those are starting prices for the stated scope, not a ceiling. If your situation needs more, you get a written quote for that instead of a surprise later.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do some AI voice agents cost $49 a month and others thousands?",
        a: "They are different products. Around $49–$99 a month is typically a hosted plan you rent. Quotes in the thousands are usually a custom system. A fixed build from $150 to $500, like the packages on this site, is a defined scope you keep, with model and phone usage billed separately.",
      },
      {
        q: "Is there a monthly fee for an AI agent?",
        a: "There are usage costs — the model, and for voice agents the phone number and speech processing. Whether there is also a monthly fee to the developer depends on your arrangement. Mine do not require one: you get the build, documentation and a support period, and ongoing maintenance is optional rather than built in.",
      },
      {
        q: "Can I start small and add voice later?",
        a: "Yes, and it is usually the sensible order. Start with chat on your site, see which questions actually come in, then add booking and voice once you know what people ask. The answers you write for chat carry straight over.",
      },
    ],
  },
  {
    slug: "n8n-vs-make-vs-zapier",
    title: "n8n vs Make vs Zapier: which should a small business use?",
    shortTitle: "n8n vs Make vs Zapier",
    description:
      "An honest comparison of n8n, Make and Zapier for small business automation — what each is genuinely good at, and when the cheapest option costs more.",
    answer:
      "Zapier is the easiest to start with and the quickest to get expensive. Make is cheaper at volume and better for branching workflows, with a steeper learning curve. n8n is the most flexible and the only one you can self-host, which matters when runs are high or data cannot leave your infrastructure.",
    updated: "2026-10-18",
    readingMinutes: 5,
    gigSlug: "workflow-automation",
    sections: [
      {
        heading: "Pick by how many times it runs, not by features",
        paragraphs: [
          "All three will connect a form to a CRM. The feature lists are not where the decision lives. What separates them in practice is pricing shape: these tools charge by how often your workflow runs, and that is the number that surprises people.",
          "A workflow that fires twice a day is cheap on any of them. A workflow that fires on every website visit, every inbox message, or every row of an import can cost more per month than the build did — on the platform that looked cheapest at signup.",
          "So the first question is not which tool. It is how many times a month this will run, and that answer should come before anyone picks a platform.",
        ],
      },
      {
        heading: "Where each one genuinely fits",
        paragraphs: ["Treat these as starting points, not rules:"],
        list: [
          "Zapier — few workflows, low volume, and you want to be able to open it yourself and understand what it does. The interface is the best of the three and that is worth real money if you intend to maintain it in-house.",
          "Make — more steps, more branching, and enough volume that Zapier's pricing has started to hurt. The visual canvas handles complex flows better, at the cost of a less obvious first hour.",
          "n8n — high volume, unusual integrations, or a requirement that data stays on your own servers. Self-hosting removes per-run pricing entirely, but you are now responsible for keeping it running, which is a real cost even if it is not an invoice.",
        ],
      },
      {
        heading: "The thing none of them do for you",
        paragraphs: [
          "Every one of these platforms will happily run a workflow that quietly fails. A step errors, the run stops, and nothing tells anyone — the lead simply never arrives, and you find out weeks later when someone asks what happened to an enquiry.",
          "Whichever you choose, the automation needs a visible failure path: an alert when a run fails, and the original payload stored so it can be replayed once the cause is fixed. That is a build decision, not a platform feature, and it is the difference between automation you can trust and automation you have to check.",
        ],
      },
      {
        heading: "If you are not sure",
        paragraphs: [
          "Start on whichever platform you already pay for, and only move when the bill or the complexity gives you a reason. Migrating a working automation is a few hours of work; choosing the theoretically optimal platform before you know your volume is weeks of deliberation for no gain.",
          "I build on all three and pick based on what a business already uses and how often the thing will run — not on a preference.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is self-hosted n8n actually free?",
        a: "The software is free; running it is not. You are paying for a server, updates, backups and your own time when it breaks. For high-volume workflows that still works out far cheaper than per-run pricing. For two workflows that fire occasionally, it does not.",
      },
      {
        q: "Can I move a workflow from Zapier to n8n later?",
        a: "Yes, but it is a rebuild rather than an export — the platforms do not share a format. It is usually a few hours for a straightforward workflow. That is worth knowing up front, because it means picking the cheapest option now is not a permanent decision.",
      },
    ],
  },
  {
    slug: "what-an-ai-receptionist-can-and-cannot-do",
    title: "What an AI receptionist can and cannot do",
    shortTitle: "What an AI Receptionist Can Really Do",
    description:
      "What an AI receptionist genuinely handles for a small business, where it should hand over to a person, and the failure mode to design against.",
    answer:
      "An AI receptionist handles the repetitive end well: answering common questions, qualifying an enquiry, and booking from a live calendar, at any hour. It should not handle pricing exceptions, complaints, or anything it has not been given a clear answer for — those belong to a person, and the handoff is what makes the rest safe.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "What it does well",
        paragraphs: [
          "The genuine value is not that it sounds human. It is that it answers at the moment someone asks, which is usually the moment they are deciding between you and the next business on the list.",
        ],
        list: [
          "Answering the same twenty questions, in your wording, at 9pm on a Sunday.",
          "Working out whether an enquiry is real before it reaches you — area covered, rough timing, what they actually need.",
          "Offering times read from your live calendar and booking one, rather than promising a slot that does not exist.",
          "Taking a callback detail and passing the whole conversation to a person, so nobody has to ask the customer to repeat themselves.",
        ],
      },
      {
        heading: "What it should not do",
        paragraphs: [
          "This list matters more than the first one, because getting it wrong is what makes these systems embarrassing.",
        ],
        list: [
          "Quote a price for anything non-standard. A confident wrong number is worse than no number.",
          "Handle a complaint. Someone already unhappy does not want a machine managing them.",
          "Interpret a policy it has not been given. If the answer is not written down, the correct behaviour is to escalate, not to reason.",
          "Decide anything irreversible on its own — a cancellation, a refund, a commitment you then have to honour.",
        ],
      },
      {
        heading: "The failure mode to design against",
        paragraphs: [
          "The common failure is not that the assistant cannot answer. It is that it answers anyway. Ask most general-purpose assistants something outside their knowledge and they will produce something plausible, because producing something plausible is what they do.",
          "The fix is structural, not a matter of better wording. The assistant is given a defined set of answers, and anything outside that set triggers a handoff rather than an attempt. Designing that boundary before the conversation flow is what makes the whole thing deployable.",
          "If you are evaluating someone to build this, ask what happens when a caller asks something unexpected. If the answer is \"the AI will figure it out\", keep looking.",
        ],
      },
      {
        heading: "Does it replace a receptionist?",
        paragraphs: [
          "For most small businesses, no, and framing it that way sets it up to disappoint. It covers the hours a person is not there and the questions a person finds tedious, which frees that person for the calls that actually need judgement.",
          "That is a smaller claim than the marketing around these tools usually makes. It is also the one that survives contact with real customers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will callers know they are talking to an AI?",
        a: "They should. Telling people plainly costs almost nothing in practice and avoids the worse outcome — someone realising halfway through and feeling misled. In several jurisdictions disclosure is also becoming a legal expectation rather than a courtesy.",
      },
      {
        q: "What happens if it books an appointment that is already taken?",
        a: "It should not be able to. Availability is read from the live calendar at the moment of booking, and the confirmation is only sent once the write to the calendar succeeds. Confirming first and writing afterwards is the bug that causes double-bookings.",
      },
    ],
  },
  {
    slug: "do-i-need-automation-or-a-better-form",
    title: "Do I need automation, or just a better form?",
    shortTitle: "Automation, or Just a Better Form?",
    description:
      "How to tell whether your business needs workflow automation or whether a shorter form and one clear next step would fix it — often cheaper.",
    answer:
      "If information is being retyped between tools, you need automation. If enquiries are simply not arriving, automation will not help — a shorter form and one clear next step usually will, and it costs less. The test is whether your problem is after the enquiry or before it.",
    updated: "2026-10-18",
    readingMinutes: 3,
    gigSlug: "web-mobile",
    sections: [
      {
        heading: "Work out which side of the enquiry your problem is on",
        paragraphs: [
          "Almost every business that asks me for automation has one of two problems, and they need opposite solutions.",
          "If enquiries arrive and then get mishandled — retyped into a spreadsheet, lost in a shared inbox, followed up only when someone remembers — that is an automation problem, and connecting the tools will genuinely fix it.",
          "If enquiries are not arriving in the first place, automating what happens to them changes nothing. You will have a very efficient pipeline with very little in it.",
        ],
      },
      {
        heading: "Signs it is a form problem, not a workflow problem",
        paragraphs: ["Any of these and I would fix the front end first:"],
        list: [
          "The enquiry form asks for more than four things before someone has decided to commit.",
          "The next step is different on every page, or buried on a contact page two clicks away.",
          "The form errors say \"invalid input\" rather than what to do about it.",
          "Analytics show people reaching the contact page and leaving without submitting.",
        ],
      },
      {
        heading: "Why I say this out loud",
        paragraphs: [
          "Automation is the more expensive and more impressive-sounding project, so there is an obvious incentive not to mention the cheaper option. But building a workflow for enquiries that never arrive wastes your money and produces a system nobody values.",
          "A shorter form and a clear next step is often a few hundred dollars of work. Finding out afterwards that it was the actual problem costs considerably more.",
        ],
      },
      {
        heading: "When it is both",
        paragraphs: [
          "Frequently it is. The usual sensible order is to fix the front end first, let enquiries build for a few weeks, then automate what happens to them — by which point you know your real volume and what the records need to contain, which makes the automation better anyway.",
        ],
      },
    ],
    faqs: [
      {
        q: "How few fields should an enquiry form have?",
        a: "Ask only what changes your first reply. For most businesses that is name, contact and a description of the problem. Budget and timeline can be optional; anything you can look up yourself should not be a field at all.",
      },
      {
        q: "Can you do both in one project?",
        a: "Yes, and sometimes that is right. But I will usually suggest fixing the form first and automating second, because the automation is better designed once you can see what real enquiries look like.",
      },
    ],
  },
  {
    slug: "buy-or-build-an-ai-receptionist",
    title: "Should a small business buy an AI receptionist or have one built?",
    shortTitle: "Buy an AI Receptionist, or Build One?",
    description:
      "When a $49–$500/month AI receptionist is the right buy, and when a fixed-scope build from $150 is the better job. Checked October 2026.",
    answer:
      "Buy the monthly product if the job is one sentence: answer the phone, use one calendar, and take a message. Have one built when the assistant must follow your rules, write into tools you already use, and refuse to invent a price or a slot. A hosted plan is often $49–$500 a month. A defined build here starts at $150 for chat and $500 for voice.",
    updated: "2026-10-18",
    readingMinutes: 5,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "Buy it when the sentence is simple",
        paragraphs: [
          "Public listings in October 2026 put hosted AI receptionists in a wide band. Entry plans are often around $25–$99 a month. Fuller plans, the ones with a calendar, summaries and a CRM push, are commonly $99–$500 a month, sometimes plus a per-minute charge.",
          "That is the right buy for a solo operator who wants the phone answered, appointments in one calendar, and a text when something needs a person. Those products set up in an afternoon. Paying someone to rebuild that from scratch is how a small job becomes an expensive one.",
        ],
      },
      {
        heading: "Build it when the sentence has an “and then”",
        paragraphs: [
          "The build is justified when the off-the-shelf script cannot do the actual job. Typical versions of that sentence:",
        ],
        list: [
          "Offer only the slots that are really free, and confirm only after the calendar accepts the booking.",
          "Hand the call to a named person, with the transcript, the moment the question leaves an agreed list.",
          "Write the enquiry into the CRM you already run, with its source, instead of a generic inbox.",
          "Refuse to quote a price, a discount, or a policy that has not been written down.",
        ],
      },
      {
        heading: "Do not compare a $150 package with a $10,000 system",
        paragraphs: [
          "Guides published in 2026 often quote a custom receptionist at roughly $3,000–$10,000 to build, plus ongoing usage. That figure is for a production phone system with its own stack. It is a different product from a fixed package.",
          "On this site, chat trained on up to twenty of your answers starts at $150. Live calendar booking is $300. Voice on a number you control, with a CRM record and escalation, is $500. Model and phone usage after launch is separate and, at a small volume, usually much smaller than a subscription. If your scope is the $3,000 system, I will say so and quote that scope. I will not pretend the $500 package is it.",
        ],
      },
      {
        heading: "A blunt test",
        paragraphs: [
          "Write the job in one sentence. If it mentions only the phone and a calendar, buy the product. If it mentions a rule the product will not enforce, or a tool it will not write to, that is a build. The wrong choice is renting a tool that invents answers, or commissioning a build for a problem a $49 plan already solves.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a cheap AI receptionist good enough?",
        a: "For a straightforward inbound line, often yes. The failure to watch is not the price. It is an assistant that answers questions it was not given, including prices and appointment times. If the product cannot be told to stop, the low fee is not a saving.",
      },
      {
        q: "Can I start on a subscription and switch to a build later?",
        a: "Yes, and it is usually the sensible order. Use the hosted tool until its limits cost you real bookings. The answers you write for it carry over to a build. You do not have to start with the largest scope.",
      },
    ],
  },
  {
    slug: "how-to-hire-an-n8n-developer",
    title: "How do you hire an n8n developer who will not hand you a demo?",
    shortTitle: "How to Hire an n8n Developer",
    description:
      "What to ask before you hire an n8n freelancer: error handling, duplicates, who owns the instance, and what a fair first workflow costs.",
    answer:
      "Hire the person who can say what happens when a step fails at 2am, how a duplicate is caught, and where the workflow will live. A screenshot of a happy path is not proof. A first workflow connecting two tools starts at $120 here; a multi-source intake with de-duplication starts at $250.",
    updated: "2026-10-18",
    readingMinutes: 5,
    gigSlug: "workflow-automation",
    sections: [
      {
        heading: "Ask about the failure, not the diagram",
        paragraphs: [
          "Anyone can connect a form to a spreadsheet. The work that matters shows up in three places: what the workflow does when an API times out, how it avoids creating the same person twice, and whether a human is told when a run dies overnight.",
          "If a candidate changes the subject to AI agents when you ask about retries, you are talking to a demo. A working answer mentions an error path, the original payload kept so it can be replayed, and an alert that is not the same inbox nobody reads.",
        ],
      },
      {
        heading: "Five questions for the first call",
        paragraphs: ["You can ask these in fifteen minutes:"],
        list: [
          "What has to be true before you will quote — volume, the system of record, and what counts as a duplicate?",
          "Where does a failed run go, and who is told?",
          "Will the n8n instance and the credentials stay in my accounts?",
          "What does handover include besides the workflow file?",
          "What is deliberately out of scope on this first workflow?",
        ],
      },
      {
        heading: "What a first engagement should be",
        paragraphs: [
          "Do not hand over the whole operation. One workflow, two tools, a written field map, and a failure notification is a complete first job. On this site that is the Basic automation package, from $120, usually a few working days.",
          "The next step, if the first one holds, is every lead source feeding one CRM record, with de-duplication and a dated follow-up. That is Standard, from $250. Branching, safe retries, and a view of what ran are Premium, from $450.",
        ],
      },
      {
        heading: "Ownership is part of the price",
        paragraphs: [
          "The workflow should run in an account you can revoke. If the only copy lives in the developer’s n8n, you have hired a dependency. Documentation is how you leave: what triggers it, what it writes, and what to do when a run fails. A quote that arrives before those questions is a price for a deposit, not for a system.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I hire on an hourly rate or a fixed workflow?",
        a: "For a first workflow, fixed scope. Hourly makes sense once you already trust the person and the next change is small. Public freelance ranges in 2026 often sit in the tens of dollars an hour, or project fees from a few hundred upward. Compare the scope, not the unit.",
      },
      {
        q: "Do I need n8n specifically?",
        a: "Not if you already pay for Make or Zapier and the volume is low. n8n is the default when you want to own the workflows or the run count would make per-task pricing hurt. The failure handling matters more than the logo.",
      },
    ],
  },
  {
    slug: "whatsapp-ai-agent-for-a-small-business",
    title: "Does a small business need a WhatsApp AI agent?",
    shortTitle: "WhatsApp AI Agent for Small Business",
    description:
      "When a WhatsApp AI agent is worth building, why the official API matters, and what it costs beyond the chatbot. Rates checked October 2026.",
    answer:
      "Use a WhatsApp AI agent when customers already message you there and a person is retyping the same answers. Use Meta’s official platform for a number you cannot afford to lose. The WhatsApp Business app is free and enough for a single phone. A build on top is worth it only once messages must land in your CRM with a human handoff. Message fees are Meta’s, by country, and they are separate from the build.",
    updated: "2026-10-18",
    readingMinutes: 5,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "The free app and the platform are different products",
        paragraphs: [
          "WhatsApp’s own description is the useful one. The Business app is for a small team on one device. It is free, and it is the right tool while you are answering by hand.",
          "The WhatsApp Business Platform is the API. It is how a workflow or an assistant sends and receives messages, uses buttons, and writes into other tools. Meta charges for messages the business sends. From 1 October 2026, service replies are charged too, after a free allowance of 1,000 service messages per number each month. Rates depend on the country and on whether the message is marketing, utility, or a service reply. A published October 2026 card listed Pakistan marketing messages at about $0.05 and service replies at about $0.015. Check the current card before you budget. Customers’ incoming messages are not what you pay Meta for.",
        ],
      },
      {
        heading: "Do not put a real number on an unofficial API",
        paragraphs: [
          "Tools that drive WhatsApp through the web protocol skip Meta’s per-message fee. They also sit outside the rules, and the number can be banned. That is an acceptable risk for a test handset. It is a bad risk for the number printed on the van.",
          "Meta has also drawn a line around general-purpose chat assistants on the official platform. An assistant that answers as your business, from answers you approved, is a different thing from dropping a public chatbot onto WhatsApp. If a vendor cannot say which of those they are selling, do not connect the number.",
        ],
      },
      {
        heading: "What the build actually is",
        paragraphs: [
          "The valuable version is narrow. It answers the questions you have written down, collects a name and a contact, and either books from a live calendar or opens a follow-up for a person. Anything else, including a price it has not been given, stops.",
          "That can sit on the AI agent packages — chat from $150, booking from $300 — or on a workflow if the job is routing messages into the CRM rather than holding a conversation. Voice is a separate package, at $500, and it is not required just because you want WhatsApp. The Meta fees and any model usage are on top of the build, and they should be written that way.",
        ],
      },
      {
        heading: "Meta’s own agent is a third option",
        paragraphs: [
          "Meta now sells its own Business Agent for eligible businesses in some markets, configured from the business’s content inside WhatsApp. If that product already answers the questions you would have written down, do not pay for a second assistant on top of it.",
          "A custom build is the other job: the reply has to follow a written boundary, and the conversation has to become a CRM record or a booking in a tool Meta’s agent is not connected to. Those are different products. Ask which one you are being sold before the number is connected.",
        ],
      },
      {
        heading: "When to leave it as a person with the app",
        paragraphs: [
          "If you receive a handful of messages a day, and you can answer them, an agent will not pay for itself. The same test as the website form applies: if the problem is that nobody messages you, automation will not create the messages. If the problem is that the same ten questions bury the ones that need you, then a bounded assistant is the job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you automate the normal WhatsApp Business app?",
        a: "Not in a way I will put a client’s main number on. The supported route is the WhatsApp Business Platform. The phone app remains the right tool when a person is still doing the answering.",
      },
      {
        q: "Will the assistant reply to every message?",
        a: "Only inside the answers you have approved. A complaint, a discount, or a question with no written answer goes to a person. An assistant that “handles everything” is the one that invents a policy.",
      },
    ],
  },
  {
    slug: "when-to-hire-a-salesforce-freelancer",
    title: "When should a small business hire a Salesforce freelancer?",
    shortTitle: "When to Hire a Salesforce Freelancer",
    description:
      "Hire a Salesforce freelancer for objects, flows and reports — not for a rebuild. What the first package covers, from $150, and when AWS is a separate job.",
    answer:
      "Hire a Salesforce freelancer when the org already exists and the work is specific: fields, page layouts, flows, assignment, or a report the team actually opens. You do not need a rebuild to tidy that up. A first pass starts at $150. Custom objects and flows start at $300. Connecting Salesforce to the rest of the stack, or standing up AWS around it, is a larger written scope from $480.",
    updated: "2026-10-18",
    readingMinutes: 5,
    gigSlug: "salesforce-aws",
    sections: [
      {
        heading: "Most small-team work is Flow, not a new org",
        paragraphs: [
          "If leads, opportunities, and the fields you sell with already live in Salesforce, the expensive mistake is a green-field rebuild. The useful job is the one your team describes in a sentence: this field is missing, this lead goes to the wrong person, this report does not match how we sell.",
          "That is configuration. Objects, fields, record types, flows, and the reports you named. It is not a reason to write code for something Flow already does. If the job truly needs code, a large data migration, or several outside systems, that is a different scope and it should be quoted as one, not slipped into a tidy-up.",
        ],
      },
      {
        heading: "What to ask before you hire",
        paragraphs: ["Four questions separate a configuration from a gamble:"],
        list: [
          "Will this be shown in a sandbox before it touches records the team uses?",
          "Who owns the org, and will my access be a permission set I can remove?",
          "What is out of scope — Apex, a full migration, other tools?",
          "What does handover look like: which flows, which fields, what to do when one fails?",
        ],
      },
      {
        heading: "Salesforce and AWS are not one product",
        paragraphs: [
          "They are often bought together and they are still two jobs. Salesforce work is the CRM. AWS work is hosting, storage, a deploy pipeline, and monitoring, in an account you own.",
          "Basic on this gig is one or the other: a layout and fields tidy-up, or one service deployed, from $150. Standard is custom objects and flows, or hosting and storage, from $300. Premium is the point where Salesforce is connected to other tools, or AWS has a pipeline and alerts, from $480. The scope names which one you are buying. You should not have to pay for both to get one.",
        ],
      },
      {
        heading: "A freelancer is the wrong hire when",
        paragraphs: [
          "You have no Salesforce org and no process to put in it. Buying the licence and then automating an undefined pipeline produces a clean system nobody trusts. The same is true of AWS: deploying a server is not a strategy for a site that does not yet have a job to do.",
          "If the pain is a form that never arrives, or leads typed in three times from tools that are not Salesforce, fix that path first. Salesforce is the system of record when it already is. It is not the first box to buy.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a Salesforce certification on the person I hire?",
        a: "A certificate is a signal, not the job. The job is a sandbox, a written list of what will change, and a handover your admin can follow. I do not advertise a certification I do not hold. I do the configuration in the packages above.",
      },
      {
        q: "Can Salesforce automation replace n8n or Zapier?",
        a: "For work that stays inside Salesforce, yes — Flow is the right tool. For a website form, an inbox, and a tool that is not Salesforce, a workflow product is usually the smaller build. Use Flow where the record already lives.",
      },
    ],
  },
  {
    slug: "how-long-does-an-ai-agent-take-to-build",
    title: "How long does it take to build an AI agent or an automation?",
    shortTitle: "How Long an AI Agent Takes",
    description:
      "Real delivery ranges: a chat assistant in 3–5 days, booking in 7–10, voice in 2–3 weeks. What actually moves the date.",
    answer:
      "A chat assistant trained on your answers takes 3–5 working days. One that books from a live calendar takes 7–10. Voice with a CRM record takes 2–3 weeks. A single automation is often 2–4 days; a full intake is 1–2 weeks. Those dates assume access and answers arrive when asked. Waiting on a login moves the date more than the build does.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "The ranges I actually sell",
        paragraphs: [
          "These are the delivery windows on the packages, not a slogan. They are working days, and they start once the scope is signed and the access is in place.",
        ],
        list: [
          "AI agent, Basic, chat on your site, up to 20 answers: 3–5 working days, from $150.",
          "AI agent, Standard, live calendar booking and handoff: 7–10 working days, from $300.",
          "AI agent, Premium, voice, CRM record, escalation: 2–3 weeks, from $500.",
          "Automation, one workflow and two tools: 2–4 working days, from $120.",
          "Automation, up to three lead sources into one CRM: 1–2 weeks, from $250.",
          "A landing page: 4–7 working days, from $180. A site of up to six pages: 2–3 weeks, from $350.",
          "Salesforce tidy-up or one AWS deploy: 3–5 working days, from $150.",
        ],
      },
      {
        heading: "What moves the date",
        paragraphs: [
          "Two things, almost every time. The first is access: the calendar, the CRM, the WhatsApp or phone account, the Salesforce sandbox. I cannot book against a calendar I cannot read.",
          "The second is the answers. An assistant is only as finished as the twenty replies you are willing to stand behind. Writing those, in the words customers use, takes longer than wiring the widget. If they arrive late, the date moves, and you hear that when I know — not on the last day.",
        ],
      },
      {
        heading: "What I will not promise",
        paragraphs: [
          "I will not promise a production phone system, a multi-team Salesforce rebuild, or a mobile app with accounts inside a long weekend. Premium web or mobile work is 3–5 weeks, from $500, because accounts and an admin view are a different product from a landing page.",
          "Hosted AI receptionists advertise setup in an afternoon because the product already exists. A build is slower on purpose: the boundary, the failure path, and the handover are part of the time. If someone quotes voice, CRM, and a custom stack in two days, ask what they are leaving out.",
        ],
      },
      {
        heading: "A sensible order if you are in a hurry",
        paragraphs: [
          "Ship the smallest package that removes the pain. Chat before voice. One workflow before three sources. The landing page before the app. Each later package includes the one below it, so you pay the difference rather than starting again. Speed comes from a smaller scope, not from skipping the test against the awkward case.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can it be done faster if I already have the answers written?",
        a: "Yes. The calendar access and the approved answers are the long pole. A chat assistant with both in hand on day one is the short end of 3–5 days, not a different product.",
      },
      {
        q: "Does the support period start at launch?",
        a: "Yes. Basic includes 7 days, Standard 14, Premium 30, starting when the thing is handed over. That is for fixes to the agreed scope. A new channel or a new tool is a new scope.",
      },
    ],
  },
  {
    slug: "missed-calls-and-lead-follow-up",
    title: "What should happen after a missed call or a web enquiry?",
    shortTitle: "Missed Calls and Lead Follow-Up",
    description:
      "A missed call or form should become one CRM record and a dated follow-up. How that intake works, and when a chatbot is the wrong first step.",
    answer:
      "A missed call, a form, and a social message should become one record: who it was, where it came from, and a follow-up with a date and an owner. If that write fails, a person should be told and the original message kept. Buying an AI receptionist before this exists answers the phone and then loses the lead in the same spreadsheet as before.",
    updated: "2026-10-18",
    readingMinutes: 5,
    gigSlug: "workflow-automation",
    sections: [
      {
        heading: "The leak is after the enquiry, not in the slogan",
        paragraphs: [
          "Small service businesses lose work in a boring place. The call hits voicemail. The form emails an inbox nobody opens. Someone retypes the name into a sheet, and sometimes into the CRM, spelled differently. Follow-up happens when a person remembers.",
          "An assistant on the phone does not fix that if the transcript dies in a chat window. The record is the product. The conversation is only useful if it lands somewhere a person will act on it.",
        ],
      },
      {
        heading: "One shape for every source",
        paragraphs: [
          "Form, shared inbox, social message, missed call. Each one should be normalised before any tool-specific step: name, contact, source, message, time. Then:",
        ],
        list: [
          "A match on email or phone updates the person you already have.",
          "A near-match is flagged. The system does not merge two people because the names look alike.",
          "Anything else creates one record, with the source on it. Attribution added later is a guess.",
          "A dated follow-up is assigned to a named owner as part of intake, not as a habit.",
          "A failed step keeps the raw message and alerts a person.",
        ],
      },
      {
        heading: "Where an assistant fits, and where it does not",
        paragraphs: [
          "If the phone rings while you are on a job, an assistant that answers the common questions and books a real slot is the front door. That is the AI agent gig: chat from $150, booking from $300, voice from $500. It still has to write the same record.",
          "If the messages already arrive and then get retyped, you do not need a new voice. You need the intake. One workflow is from $120. Three sources into the CRM, with de-duplication and the follow-up task, is from $250.",
          "If almost nothing arrives, neither will help. Shorten the form and put one next step on the page. Automating an empty pipe is a tidy failure.",
        ],
      },
      {
        heading: "What I will not claim",
        paragraphs: [
          "I will not quote a conversion lift, a “five-minute rule”, or a percentage of leads saved. Those numbers depend on your offer and your follow-up, and I have not measured them on your pipeline. What I will build is the path: one record, one owner, one date, and a noise when the path breaks. Whether that recovers work is something you can see in the CRM after it runs, not something to print on a proposal.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should the AI call the lead back automatically?",
        a: "Not as a default. An automatic callback that the customer did not ask for is a different product, and in many places it needs consent. The default is a record and a task for a person. Outbound calling is a separate, written scope.",
      },
      {
        q: "What if we do not have a CRM yet?",
        a: "Then the first version can land in a sheet or an inbox you actually open, with the same fields, and move to a CRM when you have one. Inventing a CRM as part of the intake makes the project about software you will not use.",
      },
    ],
  },
  {
    slug: "who-owns-the-ai-agent-after-launch",
    title: "Who owns the AI agent if the freelancer disappears?",
    shortTitle: "Who Owns the AI Agent After Launch",
    description:
      "How to tell a handover from a rental: whose name is on the number, the model account, and the calendar, and what the support window actually covers.",
    answer:
      "You own the agent if the phone number, the model account, the calendar, and the CRM are in your name, and you can change the opening line, read recent conversations, and switch the assistant off without messaging the person who built it. A working demo on someone else’s login is a rental. Support after handover is 7, 14, or 30 days for the agreed scope, not a permanent on-call.",
    updated: "2026-10-18",
    readingMinutes: 5,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "Four things you should be able to do alone",
        paragraphs: [
          "The useful test is not a demo. It is what you can do the week the builder is unavailable.",
        ],
        list: [
          "Change the opening line, the hours, or one approved answer.",
          "Read a recent conversation and see where it was written.",
          "Turn the assistant off, and have calls or chats fall back to you.",
          "Hand the logins to a different person without asking the original builder to export anything.",
        ],
      },
      {
        heading: "Whose name is on the accounts",
        paragraphs: [
          "Set this on day one. Moving it later means call history, billing, and calendar access are stuck under a login you do not control.",
          "The phone number should be yours, forwarded into the assistant, so switching it off is a forwarding rule you hold. The model or voice account should be billed to you, with the builder added as a user. The calendar and mailbox should be connected from your Google or Microsoft account, not a mailbox the builder created. The CRM was already yours. If a workflow tool sits in the middle, that instance is yours too, credentials included.",
          "A builder who keeps those in their own accounts can still do good work. They have not delivered a thing you can keep.",
        ],
      },
      {
        heading: "What the support window is",
        paragraphs: [
          "Basic includes 7 days of fixes, Standard 14, Premium 30, counted from handover. That covers the scope you agreed: a broken booking, a missed alert, an answer that does not match the list you approved.",
          "It does not cover a new channel, a new price list every Monday, or someone on call at 2 a.m. for the life of the business. Those are a new scope or a retainer, and they should be priced as such. An agent with no named owner inside the business will drift as soon as the answers change, even if the code is fine.",
        ],
      },
      {
        heading: "What to ask before you pay",
        paragraphs: [
          "Ask where the number and the billing live, who can turn it off, and what you receive on the last day: the approved answers, the handoff rules, and a short note of what breaks if a credential expires. If the reply is “I’ll keep it running for you”, you are buying a service, not a build. That can be a fair deal. It is a different contract, and the monthly fee should be written down.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if it is already built inside the freelancer’s account?",
        a: "Treat the move as its own job. Recreate the assistant under your billing, forward your number, reconnect your calendar, and check the same scenarios before you cancel theirs. A screenshot of a working demo is not a transfer.",
      },
      {
        q: "Does handover mean I never need a developer again?",
        a: "No. You should be able to edit hours and approved answers, and to stop the agent. A new integration, a new channel, or a change to how it books is still development. The point of handover is that you can choose who does that next.",
      },
    ],
  },
  {
    slug: "chatbot-vs-receptionist-vs-answering-service",
    title: "Do you need a website chatbot, an AI receptionist, or a person answering?",
    shortTitle: "Chatbot, Receptionist, or a Person?",
    description:
      "A website chatbot, an AI phone receptionist, and a human answering service cover different customers. Which one to buy first.",
    answer:
      "A website chatbot meets people who are already on your site and willing to type. An AI receptionist meets people who dial your number. A human answering service is a person taking that call, often to pass a message on. If customers call while you are on a job, start with the phone. If they browse and ask the same questions, start with chat. If the caller is upset or the decision is not written down, a person should take it.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "They get sold as the same product",
        paragraphs: [
          "All three are marketed as a way to stop missing customers. They do not meet the same customer. A chatbot never hears the phone. A phone assistant never sees the visitor who will not call. A human service can hear tone and hesitation, and it usually ends by taking a message rather than booking the job.",
          "Buy the one that sits where the work actually arrives. Buying chat to fix missed calls solves a different problem from the one you have.",
        ],
      },
      {
        heading: "What each one can finish",
        paragraphs: [
          "Chat, on this site, is the $150 package: your own answers, a name and an enquiry, an email when someone writes. It does not book and it does not pick up the phone.",
          "Booking from a live calendar is $300, still in chat. Voice on a phone number, with a CRM record and a handoff, is $500. That is the receptionist. It should book only from real availability, and it should stop when the question is outside the list you approved.",
          "A human answering service is a different vendor. It is the right call when volume is low and the conversations need judgement, comfort, or an exception you have not written a rule for. Its weak version takes a message and leaves your team to retype it. If you use one, the message still has to become one record with an owner, or you have only moved the leak.",
        ],
      },
      {
        heading: "A sensible order",
        paragraphs: [
          "Phone-led trades: answer the number before you decorate the website. The assistant handles hours, service area, and a real slot, and a person gets anything else.",
          "Sites that already get the questions in a form or a chat box: the $150 assistant, then booking if people are ready to pick a time on the page.",
          "Messages that already arrive and then get copied into a sheet: that is a workflow, from $120, not a new voice. An assistant in front of a broken intake answers the customer and loses them afterwards.",
        ],
      },
      {
        heading: "What I will not price for you",
        paragraphs: [
          "Hosted receptionists and human services publish their own monthly or per-minute fees, and those change. I will not quote their plans as if they were mine, and I will not quote a percentage of calls you are missing. The comparison that matters is the job: who is reached, whether a booking is made, and whether a person is told when it fails.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the chatbot and the phone assistant share the same answers?",
        a: "Yes. The approved answers, the handoff rules, and the calendar should be one list. Two scripts drift, and the phone will book something the website just refused.",
      },
      {
        q: "Is a human service a waste of money if AI exists?",
        a: "No. Use a person for the calls the assistant is forbidden to finish: complaints, price exceptions, anything emotional or unwritten. The assistant is for the questions you have already answered on paper.",
      },
    ],
  },
  {
    slug: "ai-workflow-or-ai-agent",
    title: "Do you need an AI workflow or an AI agent?",
    shortTitle: "AI Workflow or an AI Agent?",
    description:
      "An AI workflow moves a record between tools. An AI agent talks to a customer. Most small businesses need the record first.",
    answer:
      "Buy an AI workflow when a person is retyping the same record between a form, an inbox, and a CRM. Buy an AI agent when a customer is waiting for an answer in chat, on WhatsApp, or on the phone. The agent should still end by writing that record. A workflow starts at $120. A chat agent starts at $150. If nothing is arriving, neither one is the first purchase.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "workflow-automation",
    sections: [
      {
        heading: "The difference is who is waiting",
        paragraphs: [
          "A workflow runs when something already happened: a form was sent, an email arrived, a payment cleared. Nobody is on the line. The job is to match the person, write one record, assign a follow-up, and say so if a step fails.",
          "An agent runs while someone is waiting. It has to answer in your wording, refuse what it has not been told, and hand over with the transcript attached. That is a conversation with a boundary, not a zap with a model dropped in the middle.",
        ],
      },
      {
        heading: "Where people buy the wrong one",
        paragraphs: [
          "An agent in front of a spreadsheet does not fix follow-up. It produces a nicer transcript of a lead you still retype. A workflow in front of a ringing phone does not pick up. The customer has already called the next business.",
          "The usual small-business order is the record first, then the conversation, unless the phone is the front door and the calls are happening now. In that case the voice package, from $500, includes the CRM write. You should not pay for a separate “agent” that only talks.",
        ],
      },
      {
        heading: "What “AI” changes in a workflow",
        paragraphs: [
          "Most intake does not need a model. Matching an email, creating a task, and alerting on failure is ordinary automation, and it is more reliable without one.",
          "A model earns its place when the input is messy: a paragraph that has to be sorted into a service, a priority, or a reply you still approve. If the model is allowed to send that reply to the customer with no boundary, you have built an agent and called it a workflow. Price it as the thing it is.",
        ],
      },
      {
        heading: "The packages, side by side",
        paragraphs: [
          "One workflow, two tools, is from $120 and takes 2–4 working days. Three sources into the CRM, with de-duplication and a dated follow-up, is from $250. A chat agent on your own answers is from $150. Booking from the live calendar is from $300. Voice is from $500. Running costs for the model, and for voice the phone number, are extra and should be written separately.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can one project include both?",
        a: "Yes, when the conversation and the record are both in the pain. The voice package already writes a CRM record. Adding a second source, such as a form beside the phone, is the automation scope on top, not a free extra.",
      },
      {
        q: "Is an agent just a workflow with ChatGPT in it?",
        a: "Only if it never speaks to a customer. The moment it answers a person, you need the approved answers and the handoff. A model step inside a back-office flow does not.",
      },
    ],
  },
  {
    slug: "freelancer-or-agency-for-an-ai-agent",
    title: "Should you hire a freelancer or an agency to build an AI agent?",
    shortTitle: "Freelancer or an Agency?",
    description:
      "When one freelancer with a fixed package is the right hire, and when the work is actually an agency programme.",
    answer:
      "Hire a freelancer when the job is one assistant or one workflow, the boundary is written, and the accounts will be in your name. Hire an agency when you need several people on call, more than one location, or a compliance programme that has to outlive a single builder. A package here is $120–$500 for a defined scope. That is not a multi-month agency engagement, and it should not be described as one.",
    updated: "2026-10-18",
    readingMinutes: 4,
    sections: [
      {
        heading: "What you are actually choosing",
        paragraphs: [
          "A freelancer is one person who builds a stated thing and hands it over. You manage the priority, and the risk is that knowledge sits with that one person unless the accounts and the notes are yours.",
          "An agency is a team: someone to scope, someone to build, someone to watch it. You pay for that bench. The risk is the opposite — the workflows live in their accounts, and leaving means a migration. Either model is honest. The dishonest one is a solo package priced like a department, or an agency that will not say who owns the logins.",
        ],
      },
      {
        heading: "When a freelancer is enough",
        paragraphs: [
          "One chat assistant on your answers. One booking flow against one calendar. One intake from a form and an inbox into the CRM. A Salesforce tidy-up of fields, a flow, and a report. A landing page with one next step. Each of those has a package, a delivery window, and a support period of 7, 14, or 30 days.",
          "If you can describe the job in a paragraph, and you know what “done” looks like, you do not need a discovery team to start.",
        ],
      },
      {
        heading: "When an agency is the right call",
        paragraphs: [
          "Several locations that must behave the same way. A regulated stack where call data cannot leave a named environment. A rollout that includes training a sales team, rewriting the CRM, and staying on a retainer. A voice system someone expects to redesign every week from call reviews.",
          "I do not sell that. If that is the shape of the work, an agency with a bench is a better fit than stretching a fixed package until the boundary disappears.",
        ],
      },
      {
        heading: "How to compare the two quotes",
        paragraphs: [
          "Ignore the logo count. Compare four lines: what is in the scope, what is refused, whose name is on the accounts, and what happens the day after support ends. A lower number that keeps the number and the calendar in the builder’s account is not the cheaper quote.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a freelancer a single point of failure?",
        a: "Yes, if the only copy of the system is in their head and their login. It is not, if you can change an answer, read the log, turn it off, and give the accounts to someone else. That is the handover, and it is part of the job.",
      },
      {
        q: "Can I start with a freelancer and move to an agency later?",
        a: "Yes, provided the first build is in your accounts. An agency can take over a system you own. They cannot cheaply take over a system that still lives in someone else’s subscription.",
      },
    ],
  },
  {
    slug: "how-to-hire-an-ai-developer",
    title: "How do you hire an AI developer for a small business?",
    shortTitle: "How to Hire an AI Developer",
    description:
      "What to ask an AI developer before you hire them: the boundary, the failure path, the accounts, and a small paid test.",
    answer:
      "Hire the developer who can show the boundary, what happens when a step fails, and whose account the agent lives in. Pay for one small scope first. A chat assistant on answers you have already written starts at $150 and takes 3–5 working days. A developer who says the assistant can answer anything, or who quotes a build with no running cost, is selling a demo.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "Start from the job, not the model",
        paragraphs: [
          "The model name is the least useful line in a proposal. Customers do not experience the model. They experience whether the answer was yours, whether the booking was a real slot, and whether a person was fetched when the question left the script.",
          "Write the job in one sentence before you talk to anyone: answer these questions, book this calendar, or file this lead. If the sentence needs a comma and a second product, it is two projects.",
        ],
      },
      {
        heading: "Five questions that sort a hire",
        paragraphs: [
          "Ask these before you compare prices.",
        ],
        list: [
          "What is the assistant forbidden to answer, and what does the customer hear instead?",
          "Where does the transcript go, and who is told if that write fails?",
          "Whose name is on the phone number, the model bill, and the calendar connection?",
          "What is the build price, and what is the monthly running cost at a small volume?",
          "What do I receive on the last day, and how long are fixes included?",
        ],
      },
      {
        heading: "Use a small paid test",
        paragraphs: [
          "The chat package is the test: up to twenty of your answers, a name and an enquiry, an email on each one, handover notes. If that boundary is sloppy, a voice agent on the same habits will be sloppy in front of callers.",
          "Do not accept a portfolio of unnamed screenshots as the test. The test is your answers, on a login you can open.",
        ],
      },
      {
        heading: "Red flags",
        paragraphs: [
          "“It can handle any question.” That is an unbounded model, and it will invent a price.",
          "A single number with no split between build and running cost.",
          "The assistant demonstrated on the developer’s phone number and calendar.",
          "A promise of a conversion rate. That number is your offer and your follow-up, and nobody has measured it on your pipeline yet.",
          "A timeline of a day or two for voice, CRM, and a custom stack. The voice package here is 2–3 weeks because the failure path is part of the work.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I hire for n8n, or for an AI agent?",
        a: "Hire for the job. If the work is moving records between tools, you want an automation developer, and a first workflow starts at $120. If the work is talking to customers, you want the agent scope. Many people need the record before they need the voice.",
      },
      {
        q: "Do I need someone in my country?",
        a: "You need someone you can reach inside a business day, and accounts you own. I am based in the United States and work remotely. Location matters less than whose login the system lives in and how fast a broken booking gets a reply during the support window.",
      },
    ],
  },
  {
    slug: "what-a-website-ai-chatbot-includes",
    title: "What are you actually buying with a website AI chatbot?",
    shortTitle: "What a Website AI Chatbot Includes",
    description:
      "What a $150 website chatbot includes, what it refuses to do, and when you need booking or voice instead.",
    answer:
      "A website AI chatbot, as sold here, is a widget that answers up to twenty questions you wrote, collects a name and an enquiry, and emails you. That is $150, delivered in 3–5 working days, with 7 days of fixes. It does not offer calendar slots and it does not answer the phone. Those are the $300 and $500 packages. A widget pointed at a general model, with no approved answers, will invent facts about your business.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "The $150 version, item by item",
        paragraphs: [
          "The chat package is deliberately small. It includes the widget on your site, training on up to twenty of your own answers, a prompt for the visitor’s name, contact, and enquiry, an email on every enquiry, and written handover notes.",
          "It does not include live availability, qualification beyond that enquiry, transcripts as a log you browse, or a phone number. If a proposal says “chatbot” and also says “books appointments”, it is at least the $300 package.",
        ],
      },
      {
        heading: "Why the twenty answers are the product",
        paragraphs: [
          "The model is not the product. The list is. Hours, service area, what you do not do, how booking works, and what a visitor should do next. Twenty specific answers beat two hundred vague ones, because the assistant has to refuse everything else.",
          "You write them, or you approve them. A developer who drafts them from your site still needs you to say which prices and policies are allowed. That approval is what takes the days, more often than the install.",
        ],
      },
      {
        heading: "Buy, build, or leave the widget off",
        paragraphs: [
          "Buy a hosted chat product if you want a generic widget this week and you are happy with its monthly fee and its limits. Build this package if the answers must be yours and the enquiry must land in your inbox with a note of what was asked.",
          "Leave chat off if the site’s problem is that nobody reaches it. A shorter page and one clear next step is the web package, from $180, and it will do more than a chatbot on a page people bounce from. If the same questions are asked on the phone, chat is the wrong first channel.",
        ],
      },
      {
        heading: "What it must not do",
        paragraphs: [
          "It must not quote a price that is not in the twenty answers. It must not pretend a person has been booked. It must not keep talking once the visitor asks for a human, a refund, or a complaint. Those go to the email notification and stop. An assistant that “handles the whole conversation” is the expensive kind of cheap.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will it match the tone of the rest of the site?",
        a: "It will use the answers you approved, which is the tone that matters. It will not invent a brand voice on top of facts you have not written.",
      },
      {
        q: "Can it hand the chat to a person live?",
        a: "The $150 package sends you the enquiry by email. A defined handoff, with rules for when to stop, is part of the $300 booking package. Live takeover by a staffed team is a different operation, and it is not included.",
      },
    ],
  },
  {
    slug: "when-a-person-must-take-over",
    title: "When should a person take over from an AI agent?",
    shortTitle: "When a Person Must Take Over",
    description:
      "Human in the loop for a small-business AI agent: which messages stop, which package includes a real handoff, and what email-only means.",
    answer:
      "A person should take over when the question is not in the approved answers, when the customer asks for a human, or when the assistant would have to invent a price, a policy, or an apology. The $150 chat package emails you the enquiry and stops. A defined handoff is part of the $300 booking package. An agent that keeps talking past that line is the one that makes something up.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "The loop is a stop rule, not a slogan",
        paragraphs: [
          "“Human in the loop” means a named person gets the conversation at a named moment, with the transcript attached, and the assistant stops. It does not mean a person glances at a dashboard sometime later.",
          "Write the stop list before the build. Complaints, refunds, discounts, anything medical or legal, and any price that is not in the approved answers. If it is not on the list, the assistant does not improvise a kind version of it.",
        ],
      },
      {
        heading: "What each package actually does",
        paragraphs: [
          "Basic chat, $150, collects the name and the enquiry and emails you. That is a handoff by inbox. Nobody is taken over live, and no staffed team is sitting behind the widget.",
          "Booking, $300, adds the rules for when to stop, plus the transcript. Voice, $500, escalates out-of-scope calls to a person and alerts you when a write fails. If the quote says “a human always steps in” and the price is the chat package, the human is you, reading email.",
        ],
      },
      {
        heading: "Who the person is",
        paragraphs: [
          "The loop fails when “someone” is not a name. Pick the owner before launch: you, the office, or a named inbox that is actually opened. The assistant cannot escalate to a role that does not exist on Tuesday night.",
          "The business owner decides what a qualified lead is and which answer is now wrong. A developer can change the rule. They should not be the only one who knows the rule exists.",
        ],
      },
      {
        heading: "What I will not build as the default",
        paragraphs: [
          "I will not build an assistant that transfers every call to a paid answering seat, and I will not build one that never transfers. The default is narrow answers, then a person. Live takeover by a rotating team is an operation you staff. It is not included in a fixed package.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the customer just type that they want a person?",
        a: "Yes. Asking for a human is a stop, on every package. The $150 version emails you and ends the script. It does not open a live chat with a colleague.",
      },
      {
        q: "Should a person approve every reply?",
        a: "Approve the twenty answers before launch. After that, those answers can go out on their own. A new price, a complaint, or a question with no written answer waits for a person. Approving every routine reply means you still have the job the agent was hired for.",
      },
    ],
  },
  {
    slug: "ai-email-automation",
    title: "What should AI email automation do for a small business?",
    shortTitle: "AI Email Automation",
    description:
      "What small-business email automation should file, draft, and refuse to send. A two-tool workflow starts at $120.",
    answer:
      "Email automation should file the message, match the person you already have, and draft a reply a human sends. It should not email the customer on its own unless the wording is one you approved in advance. Connecting an inbox to your CRM is a workflow from $120. A model that negotiates, discounts, or apologises is an agent, and it needs a written boundary.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "workflow-automation",
    sections: [
      {
        heading: "Sort and file first",
        paragraphs: [
          "The useful version is dull. A new email is matched on the address. A known person updates the record you already have. A new person becomes one record, with the source set to email. A follow-up task gets a date and an owner. If the write fails, you get an alert and the message is kept.",
          "That is the automation gig. Two tools, such as the inbox and the CRM or a sheet, start at $120 and take 2–4 working days. Three sources, with de-duplication, start at $250.",
        ],
      },
      {
        heading: "Where a model helps, and where it does not",
        paragraphs: [
          "A model is worth adding when the email is a paragraph: which service it is, how urgent it reads, and a draft you still send yourself. Classifying mail is a step inside the workflow.",
          "The moment the draft is sent without you, you are answering customers. That needs the approved answers and the stop list from the AI agent packages, starting at $150 for chat. An inbox rule that “replies with AI” and has no list of allowed replies will invent a policy in your name.",
        ],
      },
      {
        heading: "What not to automate",
        paragraphs: [
          "Invoices, complaints, and anything that commits you to a price or a date stay with a person until the rule is boring and written down. A green checkmark on a sent email is not a review.",
          "Newsletters and cold sequences are a different product. I do not sell a blast tool, and I will not wire an unofficial sending setup to a domain you need for real customers.",
        ],
      },
      {
        heading: "A failed send must be visible",
        paragraphs: [
          "The $120 package tells you when a step fails. Storing the failed payload so it can be replayed, and making the write safe to retry, is the $450 package. If a quote only shows a success log, ask what you see when the CRM rejected the row.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can it reply to every customer email overnight?",
        a: "Only with wording you have already approved, and only for the questions on that list. Everything else waits. Overnight is not a reason to let a model invent the answer.",
      },
      {
        q: "Do I need an AI agent if I only want the inbox filed?",
        a: "No. Filing and a task is a workflow from $120. Buy the agent when a customer is waiting on a conversation, not when you are tired of copying an address into the CRM.",
      },
    ],
  },
  {
    slug: "salesforce-or-aws",
    title: "Do you need a Salesforce freelancer or an AWS freelancer?",
    shortTitle: "Salesforce or AWS?",
    description:
      "Salesforce configuration and AWS hosting are separate scopes. The $150 package is one of them, not both.",
    answer:
      "Hire for Salesforce when the org already exists and the job is fields, a flow, a report, or a permission clean-up. Hire for AWS when something you run needs a server, storage, a domain, or a deploy you can roll back. They are separate scopes on one gig. The $150 package is one of them, not both. I configure Salesforce. I do not sell Apex, and I do not claim a certification.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "salesforce-aws",
    sections: [
      {
        heading: "Two jobs that get written as one line",
        paragraphs: [
          "Salesforce is the CRM your team already clicks through: objects, fields, page layouts, flows, assignment, reports. The work is configuration. If the requirement is a custom app, a heavy integration, or code, that is a developer scope I will say no to rather than pretend Flow can absorb it.",
          "AWS is the place a site or a service runs: one service deployed, or hosting, storage, and a domain, with access limited to what that service needs. It is not a Salesforce tidy-up with a cloud logo added.",
        ],
      },
      {
        heading: "Which package is which",
        paragraphs: [
          "Basic, $150, in 3–5 working days, is a Salesforce tidy-up or one service deployed to AWS. One report or dashboard, and an access clean-up, sit in that package. You pick one side.",
          "Standard, $300, in 1–2 weeks, is custom objects and flows, or AWS hosting, storage, and domains, plus the permissions that match. Premium, $480, in 2–4 weeks, is the point where they meet: Salesforce connected to your other tools, a deployment pipeline, monitoring, and a data import if you asked for one.",
        ],
      },
      {
        heading: "When neither is the first hire",
        paragraphs: [
          "If the pain is an empty form, you need a clearer page, from $180, not a CRM rebuild. If the pain is retyping leads into a CRM you already have, you need a workflow from $120. Salesforce will not create enquiries that are not arriving.",
          "If you do not have a Salesforce org, I will not sell you one as part of a $150 tidy-up. Buying the product is your decision and your licence. The package configures an org you already pay for.",
        ],
      },
      {
        heading: "What to ask any freelancer who offers both",
        paragraphs: [
          "Ask which of the two this invoice covers, whose AWS account the server will live in, and who holds the Salesforce admin access when the project ends. Both should be yours. A server in the freelancer’s account is the same rental problem as an agent in their login.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can one project include a flow and a deploy?",
        a: "Yes, as the $480 package, because that scope is both sides plus the connection and the monitoring. Quoting $150 for a flow and a new hosting setup is two jobs priced as one.",
      },
      {
        q: "Do you write Apex?",
        a: "No. The Salesforce work I sell is objects, fields, flows, reports, permissions, and connecting tools you already use. If the org needs Apex, a certified developer is the right hire, and I will say so.",
      },
    ],
  },
  {
    slug: "automation-says-success-but-nothing-happened",
    title: "What if an automation says success and nothing happened?",
    shortTitle: "When Automation Says Success",
    description:
      "A green check can mean the workflow ran, not that the CRM row exists. What the $120 package alerts on, and what replay costs.",
    answer:
      "A success message means the workflow finished its steps. It does not mean the CRM row exists, the email left the building, or the same person was not created twice. The $120 package emails you when a step fails. Keeping the failed payload so it can be replayed, and making a retry safe, is the $450 package. Ask where a failed run is visible before you trust the green check.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "workflow-automation",
    sections: [
      {
        heading: "Success is a weak word",
        paragraphs: [
          "Most tools mark a run successful when each module returned without throwing. The CRM can still reject a field, drop a required value, or accept a second copy of the same person. The log is green. The business is unchanged, or slightly worse.",
          "The check that matters is on the far side: open the record, or confirm the alert fired. A builder who only shows you the tool’s own history is showing you the tool, not the outcome.",
        ],
      },
      {
        heading: "What is included where",
        paragraphs: [
          "Basic, $120, maps the fields before the build and notifies your inbox when a step fails. That is the minimum. You hear about a hard failure. You do not yet have a stored copy of the payload, and a blind retry can create a duplicate.",
          "Standard, $250, is three lead sources into one CRM record, with de-duplication and a dated follow-up. A near-match is flagged rather than merged.",
          "Premium, $450, is the version that survives a bad day: writes that are safe to retry, failed payloads stored, a view of what ran, and a handover of how to replay one.",
        ],
      },
      {
        heading: "Duplicates are the quiet failure",
        paragraphs: [
          "The same form submitted twice, or a retry after a timeout, should not become two people. Match on email or phone. If the match is close but not exact, stop and flag it. Guessing that two similar names are one customer is how records get destroyed.",
        ],
      },
      {
        heading: "What I will show you at handover",
        paragraphs: [
          "One run that worked, one run that failed on purpose, and where you were notified. If those two cannot be demonstrated in your accounts, the workflow is not finished. A screenshot from my instance is not the test.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I buy the $450 package just to be safe?",
        a: "Buy it when a missed or duplicated write costs you a customer or a double action. A single form-to-inbox notification often fits in $120. The expensive package is for retries, branching, and a log you can audit.",
      },
      {
        q: "Who gets the failure email?",
        a: "A named inbox you actually open. An alert to the person who built it, on an address you cannot read, means you will not know it is broken after the support window.",
      },
    ],
  },
  {
    slug: "ai-scheduling-assistant",
    title: "What should an AI scheduling assistant check before it books?",
    shortTitle: "AI Scheduling Assistant",
    description:
      "An AI scheduler should book only a live free slot of the right length. Empty on the calendar is not the same as bookable. From $300.",
    answer:
      "An AI scheduling assistant should book only a slot your live calendar marks free, for the right duration, with the gap you actually need between jobs. An empty hour is not free if you are travelling, the service is the wrong length, or that person does not do that job. Offering real availability is the $300 package. Chat that only collects a preferred time is $150, and a person still confirms it.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "Empty is not the same as bookable",
        paragraphs: [
          "A calendar with a blank block from 2 to 3 is not an offer. You might be driving between jobs, holding that hour for emergencies, or looking at the wrong person’s calendar. The assistant may offer a slot only after those rules are applied to live availability.",
          "If the rules are not written, the honest build collects a preferred time and lets a person confirm. That is the $150 chat package. Pretending it booked something is worse than a form.",
        ],
      },
      {
        heading: "What the $300 package is checking",
        paragraphs: [
          "Standard includes the calendar connection, qualification questions, a defined handoff, transcripts, and scenario tests before launch. The scenarios worth testing are the awkward ones: a slot that disappeared while the customer was typing, a service you do not offer, and a request outside the area.",
          "Voice that books on the phone is the $500 package, because the same rules have to hold in a conversation you cannot scroll back through. It still uses the live calendar. It does not invent a gap.",
        ],
      },
      {
        heading: "Whose calendar",
        paragraphs: [
          "Connect the calendar from the business’s own Google or Microsoft account. A calendar created under the builder’s login books into a diary you can lose when the password changes. The same rule as the rest of the handover: if you cannot open it, you do not own it.",
        ],
      },
      {
        heading: "What it must say when it cannot book",
        paragraphs: [
          "It says the time is not available, or that a person needs to confirm, and it stops. It does not offer “sometime tomorrow” as if that were a hold. A vague promise fills your morning with people who believe they have an appointment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can it reschedule and cancel too?",
        a: "Only if that is written into the scope and the calendar allows it without creating a second booking. A first version that books, and sends changes to a person, is safer than an assistant that moves jobs around unsupervised.",
      },
      {
        q: "What if we use a booking link already?",
        a: "Then the assistant’s job may be to give that link, or to stop and let the link do the booking. Rebuilding a second calendar on top of one that already works is how you get two versions of free.",
      },
    ],
  },
  {
    slug: "after-hours-ai-receptionist",
    title: "Should an AI receptionist answer after hours?",
    shortTitle: "After-Hours AI Receptionist",
    description:
      "After-hours answering is a rule on the voice agent, not a second product. Book only what you can honour in the morning. Voice is $500.",
    answer:
      "Let an AI receptionist answer after hours only when the night rules match the day rules: the same approved answers, the same live calendar, and the same reasons to stop. If you cannot do the job in the morning, it should say so and take a message, not book a promise. Voice on a phone number is the $500 package. After-hours is a setting on that agent, not a separate product.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "ai-agents",
    sections: [
      {
        heading: "Night is not a different business",
        paragraphs: [
          "The temptation is to let the assistant be looser after you close, because nobody is there to correct it. That is when a wrong booking sits until morning and the customer has already planned around it. The script does not get a night-time exception unless you have written one.",
          "A written exception is allowed: “we do not book emergency call-outs overnight; take the name and say someone will call after 8.” That is still a rule. Silence, or a cheerful guess, is not.",
        ],
      },
      {
        heading: "What the voice package covers",
        paragraphs: [
          "Premium is voice and chat, a CRM record per call, escalation when the call leaves the script, failure alerts, and a handover. It can answer when you are closed if you say that is what you want. It does not include a human night shift, and it does not include outbound calls to chase the lead.",
          "If the only goal is a message on a missed call, you may not need voice at all. A missed-call path into one record is a workflow, from $120, and a person follows up when you are open.",
        ],
      },
      {
        heading: "The calendar still decides",
        paragraphs: [
          "After-hours booking uses the same live availability as the daytime assistant. If tomorrow morning is already full, the agent says so. Offering the first blank hour it sees, including hours you marked for travel, is the bug competitors ship when they treat an empty grid as a promise.",
        ],
      },
      {
        heading: "When to leave it to voicemail",
        paragraphs: [
          "If calls are rare, emotional, or never the same twice, an after-hours agent will mostly hit the stop rule and take a message. Voicemail plus a workflow that creates the task can be the smaller build. Buy voice when the same questions repeat and a real slot can be offered while the caller is still on the line.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does after-hours cost extra?",
        a: "Not as a second package. It is how you configure the $500 voice agent. Model and phone usage still bill separately, and a busier night means a higher running cost. That usage is not the build price.",
      },
      {
        q: "Can it only answer at night and not during the day?",
        a: "Yes, if that is the rule you write. Many businesses want the opposite: a person by day, the agent when the person is on a job or closed. Either way it is one agent with a schedule, not two products.",
      },
    ],
  },
  {
    slug: "landing-page-or-web-app",
    title: "Do you need a landing page, a business site, or a web app?",
    shortTitle: "Landing Page or a Web App?",
    description:
      "A landing page is $180. A site of up to six pages is $350. An app with accounts is $500. Start from how people arrive, not from the word app.",
    answer:
      "A landing page is one responsive page, one validated form, and submissions to your inbox. That is $180, in 4–7 working days. A business site of up to six pages, with the form wired into a CRM, is $350. A web or mobile app with accounts and an admin view is $500 and takes 3–5 weeks. If people are not arriving, start with the page. An app will not create the enquiry.",
    updated: "2026-10-18",
    readingMinutes: 4,
    gigSlug: "web-mobile",
    sections: [
      {
        heading: "Pick from the action, not the technology",
        paragraphs: [
          "The page has one job: a visitor understands the offer and does the next step. If that step is “send an enquiry”, you need a landing page. If you also need a services page, a simple explanation, and a contact path that match, you need the six-page site. If customers must log in, see their own jobs, or if staff need an admin view, you need the app.",
          "A no-code tool and a custom build are both capable of the first two. The question is whether you can change the words yourself afterwards, and whether the form lands in a tool you already open. I will not sell an app because an app sounds larger.",
        ],
      },
      {
        heading: "What the money includes",
        paragraphs: [
          "Basic, $180, is the one page, the form, delivery to your inbox, basic on-page metadata, and handover notes. Support is 7 days.",
          "Standard, $350, adds up to six pages, a CRM or workflow connection, structured data, a sitemap, an accessibility and performance pass, and analytics. Two to three weeks, 14 days of fixes.",
          "Premium, $500, is a web application or a mobile app: accounts, an admin view, integrations, documentation, and a handover session. Three to five weeks, 30 days of fixes. Accounts are a different product from a landing page, which is why they are not a weekend.",
        ],
      },
      {
        heading: "When the site is the wrong project",
        paragraphs: [
          "If the form already arrives and someone retypes it, fix the path. That is a workflow from $120, or the CRM wiring inside the $350 site if you are rebuilding the pages anyway. Doing both without saying so is how scope doubles.",
          "If the phone is the front door, a new site does not answer it. The voice agent is a separate gig, from $500.",
        ],
      },
      {
        heading: "What I will not pretend",
        paragraphs: [
          "I will not quote a conversion rate for a new page. The page can make the next step obvious. Whether people take it depends on the offer and the traffic, which I have not measured for you. Metadata and a sitemap are included from the $350 package up. They are not a promise of a ranking.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I start with one page and expand?",
        a: "Yes. Each later package includes the one below it, so you pay the difference rather than starting again. The landing page is the right first build when you are still learning which sentence makes someone write.",
      },
      {
        q: "Is a mobile app included in the landing page?",
        a: "No. The $180 and $350 packages are websites. A mobile app with accounts is the $500 package, and only when there is a reason to install something that a page cannot do.",
      },
    ],
  },
  {
    slug: "what-to-prepare-before-a-build",
    title: "What should you prepare before an AI or automation build?",
    shortTitle: "What to Prepare Before a Build",
    description:
      "The access, the approved answers, and one real example that decide the delivery date. Chat is 3–5 days once those are in hand.",
    answer:
      "Send the answers the assistant is allowed to give, access to the calendar or CRM in an account you own, and one real enquiry that was messy. Without those, the date moves, because approval takes longer than the install. A chat assistant is 3–5 working days once twenty answers and site access are in hand. I will not start the build on a login that only I control.",
    updated: "2026-10-18",
    readingMinutes: 4,
    sections: [
      {
        heading: "The short list",
        paragraphs: [
          "Bring these to the first reply, or expect the first reply to ask for them.",
        ],
        list: [
          "The job in one sentence: answer these questions, book this calendar, or file this lead.",
          "Up to twenty answers you are willing to stand behind, including what you do not do.",
          "A login you own for the site, the calendar, the inbox, or the CRM. Invite me as a user. Do not send a password in chat.",
          "One real example: a form submission, an email, or a call you wish had gone better.",
          "The name of the person who will read alerts after launch.",
        ],
      },
      {
        heading: "What moves the date",
        paragraphs: [
          "Chat is 3–5 working days. Booking is 7–10. Voice is 2–3 weeks. A two-tool workflow is 2–4 working days. A landing page is 4–7. Those windows assume the access and the answers arrive at the start.",
          "The usual delay is not the code. It is a calendar that an assistant cannot see, answers that contradict the website, or a CRM field nobody can name. I would rather pause than invent the missing rule.",
        ],
      },
      {
        heading: "What you do not need yet",
        paragraphs: [
          "You do not need a brand deck, a model preference, or a diagram of every tool you have ever tried. You do not need to buy a new CRM for the project. If the current tool is a sheet you actually open, the first version can land there.",
          "You also do not need to write a formal brief. The one-sentence job plus the messy example is enough to pick a package. If it does not fit a package, I will say so and price it as its own scope.",
        ],
      },
      {
        heading: "How the first reply works",
        paragraphs: [
          "I read what you send and reply within one business day with a package and a price, or with a note that the work does not fit one. Nothing is built before the scope, the price, and the exclusions are written down. Support after handover is 7, 14, or 30 days depending on the package, for fixes to that scope.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if I do not have the twenty answers written?",
        a: "Send the pages and the emails you already use. I can draft the list from those, and you still have to approve it before launch. The days start moving once that approval is the remaining work, not before.",
      },
      {
        q: "Can you use a shared password to get in faster?",
        a: "No. Invite the project login as a user on an account billed to you. A shared password puts the number, the calendar, or the CRM under a secret you cannot revoke cleanly when the project ends.",
      },
    ],
  },
];

export function answerBySlug(slug: string) {
  return ANSWERS.find((a) => a.slug === slug);
}

export function answersForGig(gigSlug: string) {
  return ANSWERS.filter((a) => a.gigSlug === gigSlug);
}
