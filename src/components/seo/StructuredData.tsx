import { FAQS } from "@/lib/faq";
import { CURRENCY, GIGS, PRICE_FROM, PRICE_TO } from "@/lib/gigs";
import { BRAND, SITE_URL } from "@/lib/seo";

/**
 * JSON-LD for the home page.
 *
 * Only verified facts go in. There is no aggregateRating, review count or
 * founding date, because none of those have been supplied — and inventing them
 * is both a lie and a manual-action risk.
 *
 * Prices are included because they are real and visible on the page. Answer
 * engines quote cost constantly ("how much does an AI agent cost"), and a
 * priced Offer is the difference between being quoted and being skipped.
 *
 * TODO(content): once a real name, email and social profiles exist, add a
 * Person entity with sameAs links and reference it as the provider.
 */
export default function StructuredData() {
  // Freshness is a ranking and citation signal; build time is honest here
  // because the content ships with the build.
  const modified = new Date().toISOString().slice(0, 10);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND,
      inLanguage: "en",
      description:
        "AI agents, workflow automation, websites, mobile apps and cloud integrations, built by one independent developer.",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "AI Agents, Automation, Web Development | Emerging Freelancer",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      dateModified: modified,
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: BRAND,
      url: SITE_URL,
      image: `${SITE_URL}/brand/og.png`,
      description:
        "Independent developer building AI agents and voice assistants, workflow automation, websites and mobile applications, and Salesforce and AWS integrations for small and medium-sized businesses.",
      areaServed: { "@type": "Place", name: "Worldwide" },
      availableLanguage: ["English"],
      currenciesAccepted: CURRENCY,
      // A range, not a rating — these are the real published gig prices.
      priceRange: `$${PRICE_FROM}–$${PRICE_TO}`,
      knowsAbout: [
        "AI agents",
        "Voice assistants",
        "Workflow automation",
        "CRM integration",
        "Web development",
        "Mobile application development",
        "API integration",
        "Salesforce",
        "Amazon Web Services",
        "n8n",
        "Make",
        "Zapier",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: GIGS.map((gig) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: gig.name,
            description: gig.description,
            provider: { "@id": `${SITE_URL}/#business` },
            areaServed: "Worldwide",
            url: `${SITE_URL}/service#${gig.slug}`,
          },
        })),
      },
      // One Offer per package, so an assistant asked "how much is an AI agent"
      // can quote the actual tier rather than a vague range.
      makesOffer: GIGS.flatMap((gig) =>
        gig.packages.map((pkg) => ({
          "@type": "Offer",
          name: `${gig.name} — ${pkg.tier}`,
          description: pkg.summary,
          price: pkg.price,
          priceCurrency: CURRENCY,
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: pkg.price,
            priceCurrency: CURRENCY,
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/service#${gig.slug}`,
          itemOffered: {
            "@type": "Service",
            name: gig.name,
            description: gig.description,
            provider: { "@id": `${SITE_URL}/#business` },
            areaServed: "Worldwide",
          },
        })),
      ),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Static, author-controlled content — never user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
