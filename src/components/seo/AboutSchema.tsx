import { ABOUT_FAQS } from "@/lib/faq";
import { BRAND, SITE_URL } from "@/lib/seo";
import { PERSON_NAME_CONFIRMED, personName } from "@/lib/person";

/**
 * Structured data for /about.
 *
 * AboutPage + BreadcrumbList + the working-together FAQs.
 *
 * The Person entity is withheld until a real name is supplied. An entity whose
 * name is "[Your Name]" is worse than no entity at all — it is the kind of
 * placeholder that gets indexed and then quoted back by an assistant.
 */
export default function AboutSchema() {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/about#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: `About | ${BRAND}`,
      description:
        "One developer who scopes, builds and supports every project — AI agents, workflow automation, websites and mobile applications.",
      about: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/about#faq`,
      mainEntity: ABOUT_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  if (PERSON_NAME_CONFIRMED) {
    graph.push({
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: personName,
      url: `${SITE_URL}/about`,
      jobTitle: "Independent developer",
      worksFor: { "@id": `${SITE_URL}/#business` },
      knowsAbout: [
        "AI agents",
        "Workflow automation",
        "Web development",
        "Mobile application development",
        "Salesforce",
        "Amazon Web Services",
      ],
    });
  }

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
