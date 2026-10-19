import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudyBySlug, type CaseStudy } from "@/lib/case-studies";
import { gigBySlug } from "@/lib/gigs";
import { PROJECTS, projectBySlug, relatedProjects, type Project } from "@/lib/projects";
import { pageMeta, SITE_URL } from "@/lib/seo";

import styles from "./project.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

/**
 * Concept projects have no live site and no CaseStudy entry. Their write-up is
 * built from the project record so every /work page shares one layout.
 */
function caseFor(project: Project): CaseStudy {
  const cs = caseStudyBySlug(project.slug);
  if (cs) return cs;
  return {
    slug: project.slug,
    seoTitle: `${project.name}: ${project.category} Concept`,
    metaDescription: `Concept project: ${project.blurb} How it works, what it connects to and where it hands over to a person.`.slice(0, 165),
    headline: project.blurb,
    client: "Concept (no client)",
    industry: project.category,
    platform: project.category,
    services: project.capabilities,
    overview: project.summary,
    challenge: project.problem,
    solution: project.built,
    features: project.workflow.slice(0, 4).map((step, i) => ({ title: `Step ${i + 1}`, text: step })),
    outcome: project.outcome,
  };
}

const host = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Project not found" };
  const cs = caseFor(project);

  return pageMeta({
    title: cs.seoTitle,
    description: cs.metaDescription,
    path: `/work/${project.slug}`,
    keywords: project.keywords,
    image: cs.shots ? `/assets/images/portfolio/shots/${project.slug}-og.jpg` : project.image,
  });
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const cs = caseFor(project);
  const isClient = project.kind === "Client project";
  const gig = gigBySlug(project.gigSlug);
  const gigFrom = gig ? Math.min(...gig.packages.map((p) => p.price)) : null;
  const others = relatedProjects(project.slug, 3);
  const heroImage = cs.shots?.desktop ?? project.image;
  const pageUrl = `${SITE_URL}/work/${project.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
          { "@type": "ListItem", position: 3, name: project.name, item: pageUrl },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#project`,
        name: cs.seoTitle,
        headline: cs.headline,
        description: cs.metaDescription,
        abstract: cs.overview,
        genre: cs.platform,
        image: [`${SITE_URL}${heroImage}`, ...(cs.shots ? [`${SITE_URL}${cs.shots.mobile}`] : [])],
        ...(project.keywords?.length ? { keywords: project.keywords.join(", ") } : {}),
        creator: { "@id": `${SITE_URL}/#business` },
        ...(isClient
          ? {
              sourceOrganization: { "@type": "Organization", name: cs.client, ...(project.liveUrl ? { url: project.liveUrl } : {}) },
            }
          : { creativeWorkStatus: "Concept" }),
        ...(gig ? { about: { "@type": "Service", name: gig.name, url: `${SITE_URL}/service/${gig.slug}` } } : {}),
        url: pageUrl,
        inLanguage: "en",
      },
    ],
  };

  return (
    <main className={styles.page}>
      {/* ---------- intro ---------- */}
      <section className={styles.intro}>
        <div className="container">
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/work">Work</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.name}</span>
          </nav>

          <div className={styles.introGrid}>
            <div>
              <p className={styles.kicker}>
                {isClient ? "Case study" : "Concept project"} · {cs.platform}
              </p>
              <h1 className={styles.title}>{project.name}</h1>
              <p className={styles.headline}>{cs.headline}</p>
            </div>
            <div className={styles.introSide}>
              <p className={styles.overview}>{cs.overview}</p>
              <div className={styles.actions}>
                {project.liveUrl && (
                  <a className={styles.primary} href={project.liveUrl} target="_blank" rel={cs.liveRel ?? "noopener"}>
                    Visit {host(project.liveUrl)}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
                  </a>
                )}
                <Link className={styles.secondary} href="/contact">
                  Start a similar project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- device showcase ---------- */}
      <section className={styles.showcaseWrap} aria-label={`${project.name} screenshots`}>
        <div className="container">
          <div className={styles.showcase}>
            <figure className={styles.browser}>
              <div className={styles.browserBar} aria-hidden="true">
                <span /><span /><span />
                <em>{project.liveUrl ? host(project.liveUrl) : "concept preview"}</em>
              </div>
              <img
                src={heroImage}
                alt={`${project.name} ${cs.platform.toLowerCase()} on desktop: ${cs.headline}`}
                width={1440}
                height={900}
                fetchPriority="high"
              />
            </figure>
            {cs.shots && (
              <figure className={styles.phone}>
                <img
                  src={cs.shots.mobile}
                  alt={`${project.name} on a phone`}
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </figure>
            )}
            {!isClient && (
              <p className={styles.conceptNote}>Concept project: an illustration of the build, not a client site.</p>
            )}
          </div>
        </div>
      </section>

      {/* ---------- facts ---------- */}
      <section className={styles.factsWrap} aria-label="Project details">
        <div className="container">
          <dl className={styles.facts}>
            <div><dt>Client</dt><dd>{cs.client}</dd></div>
            <div><dt>Industry</dt><dd>{cs.industry}</dd></div>
            {cs.location && <div><dt>Location</dt><dd>{cs.location}</dd></div>}
            <div><dt>Platform</dt><dd>{cs.platform}</dd></div>
            <div><dt>What I did</dt><dd>{cs.services.join(", ")}</dd></div>
            {project.liveUrl && (
              <div>
                <dt>Live site</dt>
                <dd><a href={project.liveUrl} target="_blank" rel={cs.liveRel ?? "noopener"}>{host(project.liveUrl)}</a></dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* ---------- challenge / solution ---------- */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <article>
              <p className={styles.storyNo}>01</p>
              <h2>The challenge</h2>
              <p>{cs.challenge}</p>
            </article>
            <article>
              <p className={styles.storyNo}>02</p>
              <h2>The solution</h2>
              <p>{cs.solution}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- features ---------- */}
      <section className={styles.featuresWrap} aria-labelledby="features-title">
        <div className="container">
          <div className={styles.featuresPanel}>
            <p className={styles.eyebrow}>What was built</p>
            <h2 id="features-title" className={styles.sectionTitle}>Key features</h2>
            <ul className={styles.features}>
              {cs.features.map((f, i) => (
                <li key={f.title}>
                  <span className={styles.featureNo}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- gallery ---------- */}
      {cs.shots && cs.shots.sections.length > 0 && (
        <section className={styles.gallery} aria-labelledby="gallery-title">
          <div className="container">
            <p className={styles.eyebrow}>On the live site</p>
            <h2 id="gallery-title" className={styles.sectionTitle}>Inside the build</h2>
            <div className={styles.galleryGrid}>
              {cs.shots.sections.map((src, i) => (
                <figure key={src} className={styles.browser}>
                  <div className={styles.browserBar} aria-hidden="true">
                    <span /><span /><span />
                    <em>{project.liveUrl ? host(project.liveUrl) : ""}</em>
                  </div>
                  <img src={src} alt={`${project.name} website, section ${i + 2}`} width={1440} height={900} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- outcome ---------- */}
      <section className={styles.outcomeWrap}>
        <div className="container">
          <div className={styles.outcome}>
            <div>
              <p className={styles.eyebrowLight}>The outcome</p>
              <p className={styles.outcomeText}>{cs.outcome}</p>
            </div>
            <div className={styles.outcomeActions}>
              <Link className={styles.primaryLight} href="/contact">Start a similar project</Link>
              {gig && (
                <Link className={styles.textLink} href={`/service/${gig.slug}`}>
                  {gig.name}{gigFrom ? `, from $${gigFrom}` : ""} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- more work ---------- */}
      <section className={styles.more} aria-labelledby="more-title">
        <div className="container">
          <div className={styles.moreHead}>
            <h2 id="more-title" className={styles.sectionTitle}>More work</h2>
            <Link className={styles.textLinkDark} href="/work">All projects <span aria-hidden="true">→</span></Link>
          </div>
          <ul className={styles.moreGrid}>
            {others.map((p) => {
              const other = caseStudyBySlug(p.slug);
              return (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`} className={styles.moreCard}>
                    <span className={styles.moreImage}>
                      <img src={other?.shots?.desktop ?? p.image} alt="" width={1440} height={900} loading="lazy" />
                    </span>
                    <span className={styles.moreLabel}>{other?.platform ?? p.category}</span>
                    <span className={styles.moreTitle}>{p.name}</span>
                    <span className={styles.moreText}>{other?.headline ?? p.blurb}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
