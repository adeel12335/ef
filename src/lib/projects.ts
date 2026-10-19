/**
 * Selected work.
 *
 * Concept builds stay labelled "Concept project" and carry no client metrics.
 * Client projects in client-work.ts are live sites. Their pages describe what
 * a visitor can do on the public URL. They do not repeat the client's own
 * marketing statistics, reviews, or revenue claims as a result of the build.
 */

import { caseStudyBySlug } from "./case-studies";
import { CLIENT_WORK } from "./client-work";

export type Project = {
  slug: string;
  name: string;
  /** The gig this demonstrates — links the two together for the reader and for schema. */
  gigSlug: string;
  category: string;
  kind: string;
  /** Search phrases supported by the public site and the case copy. */
  keywords?: string[];
  /** Under ~50 characters. Used as the page title before the brand suffix. */
  shortTitle?: string;
  /** One line, used on cards and in metadata. */
  blurb: string;
  /** Public site, when this is a client project. */
  liveUrl?: string;
  /** Answer article this case should pass equity to. */
  relatedAnswer?: string;
  faqs?: { q: string; a: string }[];
  /** Answer-first paragraph: what it is, in the opening lines. */
  summary: string;
  image: string;
  problem: string;
  built: string;
  role: string[];
  capabilities: string[];
  context: string[];
  constraints: string[];
  approach: string[];
  workflow: string[];
  outcome: string;
  /** Null until there is a measured figure with a source. */
  result: string | null;
};

const CONCEPT_PROJECTS: Project[] = [
  {
    slug: "front-desk-ai",
    name: "Front Desk AI",
    shortTitle: "Front Desk AI — Real Calendar Slots",
    gigSlug: "ai-agents",
    category: "AI agent · Voice and chat",
    kind: "Concept project",
    blurb:
      "An assistant that answers routine enquiries, offers a real appointment slot, and hands over to a person when it should.",
    summary:
      "A voice and chat assistant for a small service business. It answers the twenty questions customers actually ask, works out whether an enquiry is real, offers times read from the live calendar, and books one — then stops and hands to a person the moment a conversation moves outside its agreed scope.",
    image: "/assets/images/portfolio/concept-front-desk-ai.jpg",
    problem:
      "Calls and form enquiries arrive while the business is mid-job or closed. Routine questions — hours, coverage, availability, roughly what something costs — take the same attention as the enquiries that genuinely need a person. Some go to voicemail, some get a reply two days later, and by then the caller has usually phoned somebody else.",
    built:
      "A voice and chat assistant that answers common questions in the business's own wording, qualifies the enquiry, offers real slots from the live calendar, and books them. Anything outside the agreed scope — pricing exceptions, complaints, anything it is unsure of — stops and goes to a person with the full transcript attached.",
    role: [
      "Conversation design and escalation rules",
      "Backend service and API integration",
      "Calendar, telephony and notification wiring",
      "Scenario testing, including the awkward calls",
    ],
    capabilities: [
      "Speech-to-text",
      "LLM reasoning",
      "Telephony webhook",
      "Calendar API",
      "SMS / email confirmation",
    ],
    context: [
      "Small service businesses lose enquiries in the gap between interest and a reply. The caller is ready to book at the moment they call; an hour later they are comparing three other options.",
      "Most attempts at fixing this fail in one of two ways. Either it is a phone tree that makes people press buttons until they give up, or it is an assistant so eager to be helpful that it confidently invents a price, a policy, or an appointment that does not exist.",
      "This build tests the opposite posture: genuinely useful inside a narrow, well-defined range, and visibly unwilling to guess outside it.",
    ],
    constraints: [
      "Never invent a price, a policy, or an availability it has not read from the calendar.",
      "A caller can reach a person at any point by asking once.",
      "A booking is confirmed only when the calendar write succeeds — never optimistically.",
      "Every conversation is retrievable afterwards, including the escalated ones.",
    ],
    approach: [
      "Write down the twenty questions the business actually gets asked, in the words customers use, and the answers it is willing to stand behind.",
      "Draw a hard boundary around that set. Anything outside it is an escalation, not an improvisation.",
      "Treat the calendar as the single source of truth for availability — the assistant reads slots, it does not reason about them.",
      "Design the handoff before the happy path, because the handoff is what makes the rest safe to deploy.",
    ],
    workflow: [
      "A call or chat arrives and is transcribed.",
      "The assistant identifies the intent and checks it against the agreed scope.",
      "In scope: it answers, and if the caller wants an appointment it reads real availability.",
      "The caller picks a slot; the booking is written, and confirmed back only once that write succeeds.",
      "Out of scope, or asked for a person: it stops, takes a callback detail, and notifies a human with the transcript.",
      "Either way the conversation is logged against the contact record.",
    ],
    outcome:
      "A working demonstration that answers routine enquiries and books against a real calendar, and refuses — visibly and consistently — to answer outside its agreed scope. It has not been run against a live customer base, so there are no performance figures to report.",
    result: null,
  },
  {
    slug: "lead-relay",
    name: "Lead Relay",
    shortTitle: "Lead Relay — One CRM Record",
    gigSlug: "workflow-automation",
    category: "Workflow automation",
    kind: "Concept project",
    blurb:
      "One intake path for every lead source, so nothing is retyped and follow-up does not rely on memory.",
    summary:
      "An intake pipeline for a business taking leads from a website form, a shared inbox and a social inbox. Every enquiry is captured once, matched against existing records, written to the CRM with its source and owner, and given a dated follow-up task. Duplicates merge instead of multiplying, and a failed step says so.",
    image: "/assets/images/portfolio/concept-lead-relay.jpg",
    problem:
      "Leads arrive from a website form, a shared inbox and a social inbox. Someone retypes each one into a spreadsheet, and sometimes into the CRM as well. The same person appears as three records with three different spellings, nobody is certain which list is current, and follow-up happens when a person remembers — which, in a busy week, means it does not.",
    built:
      "A single intake path. Every enquiry, whatever its source, is captured, matched against existing records, written to the CRM with its source and an owner, and given a dated follow-up task. Duplicates merge instead of multiplying, and when a step fails it says so loudly rather than dropping the lead.",
    role: [
      "Mapping the existing process, including the undocumented parts",
      "Designing the intake, matching and de-duplication rules",
      "Building the connections and the failure handling",
      "Documentation and handover",
    ],
    capabilities: ["Webhooks", "CRM API", "Inbox parsing", "Scheduled jobs", "Error alerting"],
    context: [
      "Most lead leakage is not a sales problem. It is three tools that do not talk to each other and a person in the middle doing the talking by hand.",
      "The spreadsheet usually starts as a sensible stopgap. It becomes the real system of record because it is the only place every lead appears, and then nobody trusts the CRM because it is always behind.",
      "The failure is rarely dramatic. A lead gets entered twice, two people follow up, and the customer notices. Or it gets entered nowhere because the one person who does the entering was on holiday.",
    ],
    constraints: [
      "One person must never become two records because they used a different email address.",
      "Every record carries where it came from — attribution added later is guesswork.",
      "A failed step must be visible. A lead that vanishes silently is worse than one never captured.",
      "The business must be able to see and correct what the automation did.",
    ],
    approach: [
      "Map every route a lead currently takes, including the undocumented ones like the number on a van.",
      "Normalise them to one intake payload before any tool-specific logic runs.",
      "Match on the fields that are actually stable — email and phone — and flag near-misses for a human instead of guessing.",
      "Make the follow-up task part of the intake, not a separate habit someone has to maintain.",
    ],
    workflow: [
      "An enquiry arrives from a form, an inbox or a social message.",
      "It is normalised into one shape: name, contact, source, message, timestamp.",
      "The system looks for an existing record by email and phone.",
      "A match updates the existing record; a near-match is flagged for review; anything else creates a new one.",
      "A dated follow-up task is created against a named owner.",
      "If any step fails, the raw payload is preserved and a human is alerted.",
    ],
    outcome:
      "A working demonstration in which leads from several sources land as single, attributed records with follow-up tasks attached, and failures surface instead of disappearing. Built against test data; no client deployment, so there is nothing measured to report.",
    result: null,
  },
  {
    slug: "clear-path",
    name: "Clear Path",
    shortTitle: "Clear Path — One Clear Next Step",
    gigSlug: "web-mobile",
    category: "Website and integrations",
    kind: "Concept project",
    blurb:
      "A business site built around one obvious next step, with a short form that lands where the work happens.",
    summary:
      "A responsive business site organised around a single action. The enquiry route appears wherever someone is likely to decide, the form asks only what is needed to start a useful conversation, and submissions are delivered into the tools the business already works in.",
    image: "/assets/images/portfolio/concept-clear-path.jpg",
    problem:
      "The site explains the business perfectly well, and then gives the visitor nothing obvious to do. The enquiry form sits on a contact page two clicks away, asks nine questions of someone who has not decided yet, and emails its results to an address nobody has opened in a month.",
    built:
      "A responsive site organised around a single action, with the enquiry route present wherever someone is likely to decide. The form asks only what is needed to start a useful conversation, explains its own errors, and delivers submissions into the tools the business actually uses.",
    role: [
      "Information architecture and page structure",
      "Design and build, desktop and mobile",
      "Form design, validation and delivery",
      "Accessibility and performance passes",
    ],
    capabilities: [
      "Server-rendered pages",
      "Form validation",
      "Transactional email",
      "CRM webhook",
      "Structured data",
    ],
    context: [
      "Business sites tend to accumulate pages, each added for a reason that made sense at the time, until the thing you most want a visitor to do is the hardest thing on the page to find.",
      "The enquiry form is usually where the loss happens. It is long because every field was useful to somebody internally, and each additional field costs submissions from people who had not yet decided to commit.",
      "This build starts from the opposite end: decide the one action, then let everything else support it.",
    ],
    constraints: [
      "One primary action per page, repeated where a visitor is likely to decide.",
      "The form asks only what is needed for a useful first conversation.",
      "Errors say what to do, not merely that something is wrong.",
      "It has to work properly on a phone, since that is where most of this traffic arrives.",
    ],
    approach: [
      "Decide the single action the site exists to produce, and write every page against it.",
      "Cut the form to the fields that change the first reply, and make the rest optional.",
      "Deliver submissions to where the work actually happens, not to an unmonitored inbox.",
      "Treat accessibility and performance as part of the build rather than a pass at the end.",
    ],
    workflow: [
      "A visitor arrives on any page and meets the same clear next step.",
      "The form validates as they go, in plain language.",
      "On submit, the server re-validates — the browser is never the only check.",
      "The enquiry is delivered to the inbox or CRM, with its source page attached.",
      "The visitor gets a confirmation only after the delivery succeeds.",
    ],
    outcome:
      "A responsive, accessible site with one clear action throughout and an enquiry flow that only confirms what it has actually delivered. No client traffic, so no conversion figures are claimed.",
    result: null,
  },
];

/**
 * `image` is the editorial cover (used where text sits over the image, as on the
 * home portfolio). `screenshot` is a real capture of the live client site, used
 * on /work and on the case study page.
 */
export const PROJECTS: (Project & { screenshot?: string })[] = [...CLIENT_WORK, ...CONCEPT_PROJECTS].map((p) => ({
  ...p,
  screenshot: caseStudyBySlug(p.slug)?.shots?.desktop,
}));

export function projectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function projectsForGig(gigSlug: string) {
  return PROJECTS.filter((p) => p.gigSlug === gigSlug);
}

export function projectsForAnswer(answerSlug: string) {
  return PROJECTS.filter((p) => p.relatedAnswer === answerSlug);
}

/** Same gig first, then the rest, capped so a page does not link to every case. */
export function relatedProjects(slug: string, limit = 3) {
  const current = projectBySlug(slug);
  if (!current) return [];
  const others = PROJECTS.filter((p) => p.slug !== slug);
  const same = others.filter((p) => p.gigSlug === current.gigSlug);
  const rest = others.filter((p) => p.gigSlug !== current.gigSlug);
  return [...same, ...rest].slice(0, limit);
}
