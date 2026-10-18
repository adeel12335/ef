import { SITE_URL, BRAND } from "@/lib/seo";

/**
 * Structured data for /contact.
 *
 * No telephone, email or postal address is marked up, because none has been
 * supplied and a fabricated contact point is exactly the sort of thing an
 * assistant will read out as fact. The form is the contact route, so the page
 * declares that and nothing more.
 */
export default function ContactSchema() {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/contact#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#page`,
      url: `${SITE_URL}/contact`,
      name: `Contact | ${BRAND}`,
      description:
        "Tell me what you would like to make easier. Enquiries are read personally and answered within one business day.",
      inLanguage: "en",
      about: { "@id": `${SITE_URL}/#business` },
      mainEntity: {
        "@id": `${SITE_URL}/#business`,
        "@type": "ProfessionalService",
        name: BRAND,
        url: SITE_URL,
        areaServed: { "@type": "Place", name: "Worldwide" },
        availableLanguage: ["English"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Sales and project enquiries",
          url: `${SITE_URL}/contact`,
          availableLanguage: ["English"],
        },
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
