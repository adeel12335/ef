import type { Metadata } from "next";

/**
 * The address this build is served from.
 *
 * Canonical URLs, the sitemap and the generated share images are all built on
 * it. It defaults to the production domain, so nothing changes once the domain
 * is connected. Set NEXT_PUBLIC_SITE_URL when serving the same build anywhere
 * else — a vercel.app preview, say — because otherwise every canonical would
 * point search engines at a domain that is not serving this build.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://emergingfreelancer.com"
).replace(/\/$/, "");
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
  keywords,
  image,
  ownImage = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  /**
   * Set on routes that ship their own opengraph-image file. Next only falls
   * back to the file convention when the metadata does not name an image, so
   * declaring the site-wide card here would quietly override the generated
   * one and every article would share a single picture again.
   */
  ownImage?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialImage = image ?? "/brand/og.png";
  const shared = {
    images: [
      image
        ? { url: socialImage, alt: `${title} — ${BRAND}` }
        : { url: socialImage, width: 1200, height: 630, alt: BRAND },
    ],
  };
  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: BRAND,
      title: `${title} | ${BRAND}`,
      description,
      url,
      ...(ownImage ? {} : shared),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND}`,
      description,
      ...(ownImage ? {} : { images: [socialImage] }),
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
