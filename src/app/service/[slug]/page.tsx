import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import GigPackages from "@/components/gigs/GigPackages";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { answersForGig } from "@/lib/answers";
import { faqsForGig, GIG_NOTES } from "@/lib/faq";
import { CURRENCY, GIGS, gigBySlug, gigFrom } from "@/lib/gigs";
import { projectsForGig } from "@/lib/projects";
import { pageMeta, SITE_URL } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GIGS.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const gig = gigBySlug(slug);
  if (!gig) return { title: "Service not found" };

  return pageMeta({
    title: `${gig.name} — from $${gigFrom(gig)}`,
    // Leads with the price, because "how much" is the query this page answers.
    description: `${gig.tagline}. Three packages from $${gigFrom(gig)}: ${gig.packages
      .map((p) => `${p.tier} $${p.price}`)
      .join(", ")}. Fixed scope, priced before work begins.`,
    path: `/service/${gig.slug}`,
  });
}

export default async function GigPage({ params }: Params) {
  const { slug } = await params;
  const gig = gigBySlug(slug);
  if (!gig) notFound();

  const relatedProjects = projectsForGig(gig.slug);
  const relatedAnswers = answersForGig(gig.slug);
  const others = GIGS.filter((g) => g.slug !== gig.slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/service` },
          {
            "@type": "ListItem",
            position: 3,
            name: gig.name,
            item: `${SITE_URL}/service/${gig.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/service/${gig.slug}#service`,
        name: gig.name,
        description: gig.description,
        serviceType: gig.name,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "Place", name: "Worldwide" },
        url: `${SITE_URL}/service/${gig.slug}`,
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
          url: `${SITE_URL}/service/${gig.slug}`,
          seller: { "@id": `${SITE_URL}/#business` },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/service/${gig.slug}#faq`,
        mainEntity: faqsForGig(gig.slug).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <section className="wpr-banner-area breadcrumb">
        <div className="container">
          <div className="banner-content-area">
            <h1 className="section-title text-normal">{gig.name}</h1>
            <p className="desc">{<>{gig.description} Three packages from ${gigFrom(gig)}.</>}</p>
            <div className="bg-shape">
              <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
            </div>
            <div className="banner-shape-area">
              <img src="/assets/images/banner/shape/shape-01.svg" width="200" alt="" className="one" />
              <img src="/assets/images/banner/shape/shape-02.svg" width="220" alt="" className="two" />
            </div>
          </div>
        </div>
      </section>

      <section className="wpr-services-area inner mb--16" aria-labelledby="included-title">
        <div className="container">
          <div className="section-inner bg-white border-1">
            <div className="section-top-area">
              <div className="section-title-area center-style">
                <p className="sub-title">What it does</p>
                <h2
                  id="included-title"
                  className="section-title second-font font-semi-bold text-normal"
                >
                  What You Get
                </h2>
                <p className="gig-answer">
                  Scoped, built and supported by one developer — no account
                  manager, no handover to someone you have not met.{" "}
                  <Link href="/about">More about how I work</Link>.
                </p>
              </div>
            </div>
            <ul className="ef-highlights">
              {gig.highlights.map((h) => (
                <li key={h}>
                  <img src="/assets/images/why-choose/check-01.svg" alt="" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {GIG_NOTES[gig.slug] && (
        <section className="wpr-project-area inner mb--16" aria-labelledby={`${gig.slug}-notes`}>
          <div className="container">
            <div className="section-inner bg-white border-1">
              <div className="ef-prose">
                <h2 id={`${gig.slug}-notes`}>Before you compare prices</h2>
                {GIG_NOTES[gig.slug].map((note) => (
                  <div key={note.heading}>
                    <h3>{note.heading}</h3>
                    {note.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <GigPackages gig={gig} />

      {relatedProjects.length > 0 && (
        <section className="wpr-next-project-area mb--16" aria-labelledby="related-title">
          <div className="container">
            <div className="section-inner bg-white border-1">
              <div className="section-top-area">
                <div className="section-title-area">
                  <p className="sub-title">Work</p>
                  <h2
                    id="related-title"
                    className="section-title second-font font-semi-bold text-normal"
                  >
                    Sites and builds for this gig
                  </h2>
                  <p className="gig-answer"><Link href="/work">Every build, filter by service<span aria-hidden="true"> →</span></Link></p>
                </div>
              </div>
              <ul className="ef-next-list">
                {relatedProjects.map((project) => (
                  <li key={project.slug}>
                    <Link href={`/work/${project.slug}`}>
                      <span className="ef-next-list__cat">{project.kind}</span>
                      <span className="ef-next-list__name">
                        {project.name}
                        <span aria-hidden="true">→</span>
                      </span>
                      <span className="ef-next-list__blurb">{project.blurb}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <FaqAccordion
        items={faqsForGig(gig.slug)}
        id={`${gig.slug}Faq`}
        eyebrow="Before you book"
        title={
          <>
            Questions About <br /> {gig.shortName}
          </>
        }
        intro="The specific limits of this gig — what it will do, what it will refuse, and what the price covers."
      />

      {relatedAnswers.length > 0 && (
        <section className="wpr-next-project-area mb--16" aria-labelledby="gig-answers">
          <div className="container">
            <div className="section-inner bg-white border-1">
              <div className="section-top-area">
                <div className="section-title-area">
                  <p className="sub-title">Read this first</p>
                  <h2
                    id="gig-answers"
                    className="section-title second-font font-semi-bold text-normal"
                  >
                    Answers about this gig
                  </h2>
                </div>
              </div>
              <ul className="ef-next-list">
                {relatedAnswers.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/answers/${a.slug}`}>
                      <span className="ef-next-list__cat">{a.readingMinutes} min read</span>
                      <span className="ef-next-list__name">
                        {a.title}
                        <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="wpr-next-project-area mb--16" aria-labelledby="other-gigs">
        <div className="container">
          <div className="section-inner bg-white border-1">
            <div className="section-top-area">
              <div className="section-title-area">
                <p className="sub-title">Other gigs</p>
                <h2
                  id="other-gigs"
                  className="section-title second-font font-semi-bold text-normal"
                >
                  What else I build
                </h2>
              </div>
            </div>
            <ul className="ef-next-list">
              {others.map((g) => (
                <li key={g.slug}>
                  <Link href={`/service/${g.slug}`}>
                    <span className="ef-next-list__cat">From ${gigFrom(g)} · 3 packages</span>
                    <span className="ef-next-list__name">
                      {g.name}
                      <span aria-hidden="true">→</span>
                    </span>
                    <span className="ef-next-list__blurb">{g.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
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
