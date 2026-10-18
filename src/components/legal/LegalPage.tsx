import type { ReactNode } from "react";

import Link from "next/link";

import { LEGAL_PAGES, lastUpdated } from "@/lib/legal";
import { SITE_URL } from "@/lib/seo";

/**
 * Shared shell for the legal pages.
 *
 * Reuses the theme's breadcrumb banner and section-inner so these do not look
 * bolted on, and keeps the prose in one column at a readable measure. Legal
 * text is the one place on a site where people genuinely read top to bottom,
 * so it gets a plain single column rather than the marketing layouts.
 */
/**
 * Q&A pairs a legal page also renders visibly. Only pass these when the page
 * genuinely shows the same text — FAQPage markup describing answers a visitor
 * cannot see is a structured-data violation, not a shortcut.
 */
export type LegalFaq = { q: string; a: string };

export default function LegalPage({
  title,
  intro,
  slug,
  faqs,
  children,
}: {
  title: string;
  intro: string;
  slug: string;
  faqs?: LegalFaq[];
  children: ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      ...(faqs && faqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/${slug}#faq`,
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
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

            {/* These three documents refer to each other constantly, and the
                privacy policy had no way out of it at all — the footer was the
                only route on or off the page. Rendered from LEGAL_PAGES so a
                fourth document would appear here without being wired up. */}
            <nav className="ef-legal-related" aria-label="Other policies">
              <p>The rest of the small print</p>
              <ul>
                {LEGAL_PAGES.filter((page) => page.slug !== slug).map((page) => (
                  <li key={page.slug}>
                    <Link href={`/${page.slug}`}>{page.title}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact">Ask me about any of it</Link>
                </li>
              </ul>
            </nav>
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
