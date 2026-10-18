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
];

export function answerBySlug(slug: string) {
  return ANSWERS.find((a) => a.slug === slug);
}
