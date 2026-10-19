import { SITE_URL, BRAND, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/seo";

/**
 * Structured data for /contact.
 *
 * Marks up the real public email and phone. No postal address: this is a remote
 * practice with no office to visit.
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
        address: { "@type": "PostalAddress", addressCountry: "US" },
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        availableLanguage: ["English"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Sales and project enquiries",
          url: `${SITE_URL}/contact`,
          email: CONTACT_EMAIL,
          telephone: CONTACT_PHONE,
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
