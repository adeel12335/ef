/**
 * Gig tiers.
 *
 * These must match the pricing cards in src/app/page.tsx — they feed the Offer
 * structured data, and marking up a price that is not on the page is the kind
 * of mismatch that gets rich results dropped.
 *
 * TODO(content): replace these with your real rates. They are starting points.
 */
export const GIGS = [
  {
    name: "Starter",
    price: 120,
    description:
      "One focused job — a single automation, landing page or chat widget, connected to two tools you already use and delivered in 3–5 working days.",
  },
  {
    name: "Growth",
    price: 280,
    description:
      "A complete piece of work — an AI agent or voice assistant, or a multi-page website or web app, with CRM sync, booking integration and 14 days of post-launch support.",
  },
  {
    name: "Complete",
    price: 500,
    description:
      "Agent, automation and site working as one system, including Salesforce objects and flows, AWS hosting and monitoring, and 30 days of post-launch support.",
  },
] as const;

export const PRICE_FROM = GIGS[0].price;
export const PRICE_TO = GIGS[GIGS.length - 1].price;
export const CURRENCY = "USD";
