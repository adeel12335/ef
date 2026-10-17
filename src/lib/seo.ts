import type { Metadata } from "next";

export const SITE_URL = "https://emergingfreelancer.com";
export const BRAND = "Emerging Freelancer";

/**
 * Per-page metadata helper.
 *
 * Every page gets its own title and description plus a canonical URL — without
 * one, /work and /work-details compete for the same queries. Titles stay under
 * ~60 characters and descriptions under ~155 so neither is truncated in
 * results, and each description leads with what the page actually offers.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: BRAND,
      title: `${title} | ${BRAND}`,
      description,
      url,
      images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: BRAND }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND}`,
      description,
      images: ["/brand/og.png"],
    },
  };
}

/** The four services, used for both the page copy and Service structured data. */
export const SERVICES = [
  {
    name: "AI agents and voice assistants",
    description:
      "Voice and chat assistants that answer routine enquiries, qualify leads, book from a live calendar, and hand over to a person when they should.",
  },
  {
    name: "Workflow automation",
    description:
      "One intake path for every lead source, with CRM sync, de-duplication and automated follow-up so information is entered once.",
  },
  {
    name: "Websites and mobile applications",
    description:
      "Responsive business websites, web applications and mobile apps, built around one clear action and wired into the tools behind them.",
  },
  {
    name: "Salesforce and AWS",
    description:
      "Salesforce objects, flows and reports, plus AWS servers, storage, deployment and monitoring — configured and connected.",
  },
];
