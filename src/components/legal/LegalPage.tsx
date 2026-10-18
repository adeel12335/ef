import type { ReactNode } from "react";

import { lastUpdated } from "@/lib/legal";
import { SITE_URL } from "@/lib/seo";

/**
 * Shared shell for the legal pages.
 *
 * Reuses the theme's breadcrumb banner and section-inner so these do not look
 * bolted on, and keeps the prose in one column at a readable measure. Legal
 * text is the one place on a site where people genuinely read top to bottom,
 * so it gets a plain single column rather than the marketing layouts.
 */
export default function LegalPage({
  title,
  intro,
  slug,
  children,
}: {
  title: string;
  intro: string;
  slug: string;
  children: ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: title, item: `${SITE_URL}/${slug}` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${slug}#page`,
        url: `${SITE_URL}/${slug}`,
        name: title,
        description: intro,
        dateModified: "2026-10-18",
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
    ],
  };

  return (
    <>
      <section className="wpr-banner-area breadcrumb">
        <div className="container">
          <div className="banner-content-area">
            <h1 className="section-title text-normal">{title}</h1>
            <p className="desc">{intro}</p>
            <div className="bg-shape">
              <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="wpr-project-area inner mb--16" aria-labelledby="legal-body">
        <div className="container">
          <div className="section-inner bg-white border-1">
            <div className="section-top-area">
              <div className="section-title-area">
                <p className="sub-title">Last updated {lastUpdated}</p>
                <h2 id="legal-body" className="visually-hidden">
                  {title}
                </h2>
              </div>
            </div>

            <div className="ef-prose ef-legal">{children}</div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

/**
 * A banner marking text that still needs a decision or a lawyer, rendered so
 * it is impossible to publish by accident without noticing.
 */
export function LegalTodo({ children }: { children: ReactNode }) {
  return (
    <p className="ef-legal-todo">
      <strong>Needs your input:</strong> {children}
    </p>
  );
}
