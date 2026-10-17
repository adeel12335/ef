import { SERVICE_FAQS } from "@/lib/faq";
import { CURRENCY, GIGS } from "@/lib/gigs";
import { BRAND, SITE_URL } from "@/lib/seo";

/**
 * Structured data for /service.
 *
 * This is the page that actually lists every package and price, so it carries
 * a Service entity per gig with its three Offers, an ItemList so the four read
 * as a set, a BreadcrumbList, and the package FAQs.
 *
 * Prices here are the ones rendered on the page — both come from lib/gigs.ts,
 * so a marked-up price cannot disagree with a visible one.
 */
export default function ServiceSchema() {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/service#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/service` },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/service#gigs`,
      name: "Gigs and packages",
      numberOfItems: GIGS.length,
      itemListElement: GIGS.map((gig, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: gig.name,
        url: `${SITE_URL}/service#${gig.slug}`,
      })),
    },
    ...GIGS.map((gig) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/service#${gig.slug}`,
      name: gig.name,
      description: gig.description,
      serviceType: gig.name,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "Place", name: "Worldwide" },
      url: `${SITE_URL}/service#${gig.slug}`,
      offers: gig.packages.map((pkg) => ({
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
        seller: { "@id": `${SITE_URL}/#business` },
      })),
    })),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/service#faq`,
      mainEntity: SERVICE_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: BRAND,
      url: SITE_URL,
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
