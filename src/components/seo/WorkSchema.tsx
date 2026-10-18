import { PROJECTS } from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";

/**
 * Structured data for /work.
 *
 * An ItemList of the builds plus a CreativeWork per project. They are marked
 * as CreativeWork rather than CaseStudy, and carry creativeWorkStatus
 * "Concept project", because presenting a demonstration as client work in
 * structured data would be a lie a machine repeats.
 */
export default function WorkSchema() {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/work#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/work#page`,
      url: `${SITE_URL}/work`,
      name: "Work",
      description:
        "Client sites and labelled concept builds. Live URLs are cited. Client marketing statistics are not claimed as build results.",
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/work#list`,
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${SITE_URL}/work/${p.slug}`,
      })),
    },
    ...PROJECTS.map((p) => ({
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/work/${p.slug}#project`,
      name: p.name,
      description: p.blurb,
      genre: p.category,
      creativeWorkStatus: p.kind,
      author: { "@id": `${SITE_URL}/#business` },
      url: `${SITE_URL}/work/${p.slug}`,
      inLanguage: "en",
    })),
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
