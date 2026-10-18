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

/** TODO(legal): the name that appears on your invoices and contracts. */
export const legalName = "[Your Legal Name]";

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
    name: "Resend",
    role: "Delivers enquiry emails",
    data: "Your name, email address and message",
    where: "United States",
    url: "https://resend.com/legal/privacy-policy",
  },
  {
    // TODO(legal): replace with your actual host once deployed.
    name: "[Your hosting provider]",
    role: "Serves the website and runs the contact route",
    data: "Server logs, which typically include IP address and page requested",
    where: "[Region]",
    url: null,
  },
];

export const LEGAL_PAGES = [
  { slug: "privacy", title: "Privacy Policy", nav: "Privacy" },
  { slug: "terms", title: "Terms of Service", nav: "Terms" },
  { slug: "refunds", title: "Refund & Cancellation Policy", nav: "Refunds" },
];
