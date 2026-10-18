/**
 * Facts the legal pages depend on.
 *
 * IMPORTANT: these documents are drafts written to describe what this site and
 * this business actually do — they are not legal advice, and nobody qualified
 * has reviewed them. Before publishing, have a lawyer check them against the
 * markets you sell into. The UK/EU (UK GDPR and GDPR) and some US states
 * impose specific obligations on the contact form alone.
 *
 * Every TODO below is a fact I cannot invent. A privacy policy naming the
 * wrong controller, or terms citing the wrong jurisdiction, is worse than no
 * document: it is a false statement about a legal relationship.
 */

import { BRAND } from "@/lib/seo";

/**
 * The name that appears on invoices and contracts.
 *
 * Set to the brand on the owner's instruction. Worth knowing what that
 * implies: a legal name is the entity a client would actually be contracting
 * with. If the business is not a registered company, that entity is the owner
 * personally and "Emerging Freelancer" is a trading name rather than a legal
 * one — in which case this should be the owner's own name and `businessStatus`
 * should say "sole trader". Change this and both documents follow.
 */
export const legalName = "Emerging Freelancer";

/**
 * The brand to disclose a "trading as" for, or null when there is nothing to
 * disclose because the legal name and the brand are the same. Without this the
 * documents read "Emerging Freelancer, trading as Emerging Freelancer".
 */
export const tradingAs = legalName === BRAND ? null : BRAND;

/**
 * TODO(legal): a monitored address for privacy requests.
 *
 * Data-protection law expects a contact route for access, correction and
 * deletion requests. A contact form alone is weak, because someone exercising
 * a right should not have to hand over more data to ask.
 */
export const privacyEmail: string | null = null;

/** TODO(legal): e.g. "Punjab, Pakistan" — the courts that would hear a dispute. */
export const jurisdiction = "[Your City and Country]";

/** TODO(legal): "sole trader" or a registered company name and number. */
export const businessStatus = "[sole trader / registered company and number]";

/**
 * Date these documents last changed. Update it whenever you edit the text —
 * a stale "last updated" is the first thing that undermines a policy.
 */
export const lastUpdated = "18 October 2026";

/**
 * Third parties that can see personal data submitted through this site.
 * Verified against the code, not assumed: the contact route is the only place
 * personal data leaves the server.
 */
export const processors = [
  {
    name: "Hostinger",
    role: "Hosts the mailbox that enquiries are sent from and delivered to",
    data: "Your name, email address and message",
    where: "European Union",
    url: "https://www.hostinger.com/privacy-policy",
  },
  {
    name: "Vercel",
    role: "Serves the website and runs the contact route",
    data: "Server logs, which typically include IP address and page requested",
    where: "United States, with edge locations worldwide",
    url: "https://vercel.com/legal/privacy-policy",
  },
];

export const LEGAL_PAGES = [
  { slug: "privacy", title: "Privacy Policy", nav: "Privacy" },
  { slug: "terms", title: "Terms of Service", nav: "Terms" },
  { slug: "refunds", title: "Refund & Cancellation Policy", nav: "Refunds" },
];

/**
 * Refund milestones.
 *
 * Deliberately tied to the same four stages the site already shows on the
 * process section, so a client can see in advance exactly where their money
 * stands at any point. `charged` is the percentage of the project fee that
 * becomes payable once that stage is complete — the rest is refundable.
 *
 * Most of the value in a project is created in the build, which is why the
 * jump from stage 2 to stage 3 is the big one.
 */
export type RefundStage = {
  num: string;
  stage: string;
  reached: string;
  charged: number;
};

export const REFUND_STAGES: RefundStage[] = [
  {
    num: "00",
    stage: "Not started",
    reached: "Scope agreed and advance paid, but no work begun",
    charged: 0,
  },
  {
    num: "01",
    stage: "Understand",
    reached: "Discovery call held and the written problem summary delivered",
    charged: 15,
  },
  {
    num: "02",
    stage: "Plan",
    reached: "Written scope, workflow and timeline delivered",
    charged: 30,
  },
  {
    num: "03",
    stage: "Build and test",
    reached: "Working software delivered for you to try",
    charged: 80,
  },
  {
    num: "04",
    stage: "Launch and support",
    reached: "Live, documented and handed over",
    charged: 100,
  },
];

/** TODO(legal): confirm this matches what you actually ask for. */
export const advancePercent = 50;

/** Working days to issue an agreed refund. */
export const refundDays = 14;
