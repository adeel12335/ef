/**
 * Gigs and their packages.
 *
 * A gig is a service. Each gig has three packages — Basic, Standard, Premium —
 * in the manner of a marketplace listing, so a client can start small on the
 * same service and move up rather than choosing between services.
 *
 * This is the single source of truth: the home page gig cards, the packages on
 * /service, and the Offer structured data all read from here. Changing a price
 * in one place changes it everywhere, which is what keeps the marked-up price
 * identical to the visible one.
 *
 * TODO(content): these are starting rates. Replace them with your own.
 */

export type GigPackage = {
  tier: "Basic" | "Standard" | "Premium";
  /** Shown as "from $X" — the floor for that scope, not a fixed total. */
  price: number;
  summary: string;
  delivery: string;
  support: string;
  items: string[];
};

export type Gig = {
  slug: string;
  name: string;
  /** Short label used on cards and in nav. */
  shortName: string;
  tagline: string;
  /** One paragraph, used on the home card and as the Service description. */
  description: string;
  /** Three or four bullets for the home card. */
  highlights: string[];
  packages: GigPackage[];
};

export const CURRENCY = "USD";

export const GIGS: Gig[] = [
  {
    slug: "ai-agents",
    name: "AI Agents & Voice Assistants",
    shortName: "AI Agents",
    tagline: "An assistant that answers, qualifies and books",
    description:
      "A voice or chat assistant that answers your common questions in your own wording, works out what a caller actually needs, offers real slots from your live calendar, and hands to a person the moment a conversation goes outside what it should handle.",
    highlights: [
      "Answers your twenty most-asked questions",
      "Qualifies a real enquiry from a casual one",
      "Books from your live calendar, never a guess",
      "Defined handoff, with the transcript attached",
    ],
    packages: [
      {
        tier: "Basic",
        price: 150,
        summary: "A chat assistant on your site, answering your common questions.",
        delivery: "3–5 working days",
        support: "7 days",
        items: [
          "Chat widget installed on your site",
          "Trained on up to 20 of your own answers",
          "Collects name, contact and enquiry",
          "Email notification on every enquiry",
          "Written handover notes",
        ],
      },
      {
        tier: "Standard",
        price: 300,
        summary: "Chat plus booking — the assistant offers real times and takes them.",
        delivery: "7–10 working days",
        support: "14 days",
        items: [
          "Everything in Basic",
          "Calendar integration with live availability",
          "Lead qualification questions",
          "Defined human handoff rules",
          "Conversation transcripts logged",
          "Scenario testing before launch",
        ],
      },
      {
        tier: "Premium",
        price: 500,
        summary: "Voice and chat, wired into your CRM with full escalation handling.",
        delivery: "2–3 weeks",
        support: "30 days",
        items: [
          "Everything in Standard",
          "Voice agent on a phone number",
          "CRM record created or updated per call",
          "Out-of-scope escalation to a person",
          "Failure alerts, not silent drops",
          "Documentation and handover session",
        ],
      },
    ],
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    shortName: "Automation",
    tagline: "Enter information once, not three times",
    description:
      "One intake path for every lead source, so an enquiry is captured once, matched against what you already have, written to your CRM with its source and owner, and given a dated follow-up task. Duplicates merge instead of multiplying, and a failed step says so.",
    highlights: [
      "One intake path for every lead source",
      "De-duplication, so one person is one record",
      "Dated follow-up against a named owner",
      "Failures alert a human instead of vanishing",
    ],
    packages: [
      {
        tier: "Basic",
        price: 120,
        summary: "One automation connecting two tools you already use.",
        delivery: "2–4 working days",
        support: "7 days",
        items: [
          "One workflow, two connected tools",
          "Built in n8n, Make or Zapier",
          "Field mapping agreed before build",
          "Failure notification to your inbox",
          "Written handover notes",
        ],
      },
      {
        tier: "Standard",
        price: 250,
        summary: "Every lead source feeding one clean CRM record.",
        delivery: "1–2 weeks",
        support: "14 days",
        items: [
          "Everything in Basic",
          "Up to three lead sources unified",
          "CRM sync with de-duplication",
          "Source and owner on every record",
          "Automated follow-up tasks",
          "Near-match flagged for review",
        ],
      },
      {
        tier: "Premium",
        price: 450,
        summary: "Multi-step workflows with retries, logging and alerting.",
        delivery: "2–3 weeks",
        support: "30 days",
        items: [
          "Everything in Standard",
          "Multi-step branching workflows",
          "Idempotent writes, safe to retry",
          "Failed payloads stored and replayable",
          "Reporting view of what ran",
          "Documentation and handover session",
        ],
      },
    ],
  },
  {
    slug: "web-mobile",
    name: "Websites & Mobile Apps",
    shortName: "Web & Mobile",
    tagline: "One obvious next step, on every screen",
    description:
      "Responsive business websites, web applications and mobile apps, each built around a single clear action, with short forms that explain their own errors and deliver straight into the tools you already work in.",
    highlights: [
      "Built around one clear action per page",
      "Short forms that explain their own errors",
      "Submissions land in your inbox or CRM",
      "Accessibility and performance pass included",
    ],
    packages: [
      {
        tier: "Basic",
        price: 180,
        summary: "A single landing page that turns interest into an enquiry.",
        delivery: "4–7 working days",
        support: "7 days",
        items: [
          "One responsive landing page",
          "Enquiry form with validation",
          "Submissions delivered to your inbox",
          "Basic on-page SEO and metadata",
          "Written handover notes",
        ],
      },
      {
        tier: "Standard",
        price: 350,
        summary: "A multi-page business site, wired into your tools.",
        delivery: "2–3 weeks",
        support: "14 days",
        items: [
          "Everything in Basic",
          "Up to six pages, responsive throughout",
          "CRM or workflow integration",
          "Structured data and sitemap",
          "Accessibility and performance pass",
          "Analytics set up",
        ],
      },
      {
        tier: "Premium",
        price: 500,
        summary: "A web or mobile app with the backend behind it.",
        delivery: "3–5 weeks",
        support: "30 days",
        items: [
          "Everything in Standard",
          "Web application or mobile app build",
          "Authentication and user accounts",
          "Dashboard or internal admin view",
          "API integrations with your systems",
          "Documentation and handover session",
        ],
      },
    ],
  },
  {
    slug: "salesforce-aws",
    name: "Salesforce & AWS",
    shortName: "Salesforce & AWS",
    tagline: "Your CRM and your cloud, configured and connected",
    description:
      "Salesforce objects, fields, flows and reports set up around how your team actually sells, plus AWS servers, storage, deployment and monitoring — configured with access scoped to what is genuinely needed.",
    highlights: [
      "Salesforce objects, flows and reports",
      "AWS servers, storage and deployments",
      "Monitoring so failures are noticed",
      "Access scoped to the minimum required",
    ],
    packages: [
      {
        tier: "Basic",
        price: 150,
        summary: "Salesforce tidied up, or one service deployed to AWS.",
        delivery: "3–5 working days",
        support: "7 days",
        items: [
          "Custom fields and page layout changes",
          "Or: one service deployed to AWS",
          "One report or dashboard",
          "Access review and clean-up",
          "Written handover notes",
        ],
      },
      {
        tier: "Standard",
        price: 300,
        summary: "Custom objects and flows, or a full hosting setup.",
        delivery: "1–2 weeks",
        support: "14 days",
        items: [
          "Everything in Basic",
          "Custom objects and record types",
          "Automated flows and assignment rules",
          "Or: AWS hosting, storage and domains",
          "Reports and dashboards you asked for",
          "Scoped IAM roles and permissions",
        ],
      },
      {
        tier: "Premium",
        price: 480,
        summary: "Salesforce and AWS connected to the rest of your stack.",
        delivery: "2–4 weeks",
        support: "30 days",
        items: [
          "Everything in Standard",
          "Salesforce connected to your other tools",
          "Deployment pipeline and environments",
          "Monitoring and failure alerting",
          "Data migration or import",
          "Documentation and handover session",
        ],
      },
    ],
  },
];

export function gigBySlug(slug: string) {
  return GIGS.find((g) => g.slug === slug);
}

/** Lowest package price across every gig — used in copy and metadata. */
export const PRICE_FROM = Math.min(
  ...GIGS.flatMap((g) => g.packages.map((p) => p.price)),
);

/** Highest package price across every gig. */
export const PRICE_TO = Math.max(
  ...GIGS.flatMap((g) => g.packages.map((p) => p.price)),
);

/** Cheapest package within one gig, for the "from $X" on its card. */
export function gigFrom(gig: Gig) {
  return Math.min(...gig.packages.map((p) => p.price));
}
