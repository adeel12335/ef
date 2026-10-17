import { FAQS } from "@/lib/faq";
import { BRAND, SERVICES, SITE_URL } from "@/lib/seo";

/**
 * JSON-LD for the home page.
 *
 * Only verified facts go in. There is no aggregateRating, no review count and
 * no founding date, because none of those have been supplied — and inventing
 * them is both a lie and a manual-action risk. `priceRange` is omitted for the
 * same reason; the gig prices on the page are starting points, not a range.
 *
 * TODO(content): once a real name, email and social profiles exist, add a
 * Person entity with sameAs links and reference it as the provider.
 */
export default function StructuredData() {
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
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: BRAND,
      url: SITE_URL,
      image: `${SITE_URL}/brand/og.png`,
      description:
        "Independent developer building AI agents and voice assistants, workflow automation, websites and mobile applications, and Salesforce and AWS integrations for small and medium-sized businesses.",
      areaServed: { "@type": "Place", name: "Worldwide" },
      availableLanguage: ["English"],
      knowsAbout: [
        "AI agents",
        "Voice assistants",
        "Workflow automation",
        "CRM integration",
        "Web development",
        "Mobile application development",
        "Salesforce",
        "Amazon Web Services",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            provider: { "@id": `${SITE_URL}/#business` },
          },
        })),
      },
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
