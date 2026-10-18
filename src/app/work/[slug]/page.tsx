import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { gigBySlug } from "@/lib/gigs";
import { PROJECTS, projectBySlug } from "@/lib/projects";
import { pageMeta, SITE_URL, BRAND } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return pageMeta({
    title: `${project.name} — ${project.kind}`,
    description: project.blurb,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const gig = gigBySlug(project.gigSlug);
  const others = PROJECTS.filter((p) => p.slug !== project.slug);

  /**
   * CreativeWork rather than CaseStudy: these are demonstrations, not client
   * engagements. No result is marked up because none has been measured.
   */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: `${SITE_URL}/work/${project.slug}`,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/work/${project.slug}#project`,
        name: project.name,
        headline: `${project.name} — ${project.kind}`,
        description: project.summary,
        genre: project.category,
        creativeWorkStatus: project.kind,
        about: gig ? gig.name : project.category,
        author: { "@id": `${SITE_URL}/#business` },
        url: `${SITE_URL}/work/${project.slug}`,
        inLanguage: "en",
      },
    ],
  };

  return (
    <>
      <section className="wpr-banner-area breadcrumb">
        <div className="container">
          <div className="banner-content-area">
            <h1 className="section-title text-normal">{project.name}</h1>
            <p className="desc">{project.summary}</p>
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

      <section className="wpr-project-area inner mb--16" aria-labelledby="detail-title">
        <div className="container">
          <div className="section-inner bg-white border-1">
            <div className="section-top-area">
              <div className="section-title-area">
                <p className="sub-title">The problem</p>
                <h2
                  id="detail-title"
                  className="section-title second-font font-semi-bold text-normal"
                >
                  {project.name}
                </h2>
                <p className="gig-answer" style={{ textAlign: "left", marginInline: 0 }}>
                  {project.problem}
                </p>
              </div>
            </div>

            <div className="ef-detail">
              <figure className="ef-detail__media">
                <img src={project.image} alt={`${project.name} — ${project.blurb}`} />
                <figcaption>
                  {project.kind}. Built to demonstrate an approach, not delivered for a client.
                </figcaption>
              </figure>

              <dl className="ef-facts">
                <div>
                  <dt>Category</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>My role</dt>
                  <dd>{project.role.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Built with</dt>
                  <dd>{project.capabilities.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Result</dt>
                  <dd>{project.result ?? "Not measured — see the outcome below."}</dd>
                </div>
                {gig && (
                  <div>
                    <dt>Related gig</dt>
                    <dd>
                      <a className="ef-inline-link" href={`/service#${gig.slug}`}>
                        {gig.name} — packages from ${Math.min(...gig.packages.map((p) => p.price))}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="ef-prose">
              <h3>What I built</h3>
              <p>{project.built}</p>

              <h3>The context</h3>
              {project.context.map((para) => (
                <p key={para}>{para}</p>
              ))}

              <h3>Constraints</h3>
              <ul>
                {project.constraints.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>

              <h3>Approach</h3>
              <ol>
                {project.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>

              <h3>How it works</h3>
              <ol>
                {project.workflow.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ol>

              <h3>Outcome</h3>
              <p>{project.outcome}</p>

              <p className="ef-note">
                {project.kind}. No client metrics, conversion rates or revenue figures are
                claimed anywhere on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wpr-next-project-area mb--16" aria-labelledby="next-title">
        <div className="container">
          <div className="section-inner bg-white border-1">
            <div className="section-top-area">
              <div className="section-title-area">
                <p className="sub-title">More work</p>
                <h2
                  id="next-title"
                  className="section-title second-font font-semi-bold text-normal"
                >
                  Other builds
                </h2>
              </div>
            </div>
            <ul className="ef-next-list">
              {others.map((o) => (
                <li key={o.slug}>
                  <a href={`/work/${o.slug}`}>
                    <span className="ef-next-list__cat">{o.category}</span>
                    <span className="ef-next-list__name">
                      {o.name}
                      <span aria-hidden="true">→</span>
                    </span>
                    <span className="ef-next-list__blurb">{o.blurb}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="ef-next-cta">
              <a href="/contact" className="wpr-btn btn-primary">
                Discuss a project like this
              </a>
            </p>
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
