import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import FaqAccordion from "@/components/faq/FaqAccordion";
import { ANSWERS, answerBySlug } from "@/lib/answers";
import { projectsForAnswer } from "@/lib/projects";
import { gigBySlug, gigFrom } from "@/lib/gigs";
import { pageMeta, SITE_URL, BRAND } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ANSWERS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const answer = answerBySlug(slug);
  if (!answer) return { title: "Not found" };

  return pageMeta({
    title: answer.shortTitle,
    description: answer.description,
    path: `/answers/${answer.slug}`,
    // This route has an opengraph-image.tsx of its own.
    ownImage: true,
  });
}

export default async function AnswerPage({ params }: Params) {
  const { slug } = await params;
  const answer = answerBySlug(slug);
  if (!answer) notFound();

  const gig = answer.gigSlug ? gigBySlug(answer.gigSlug) : undefined;
  const cases = projectsForAnswer(answer.slug);
  const rest = ANSWERS.filter((a) => a.slug !== answer.slug);
  const sameGig = answer.gigSlug ? rest.filter((a) => a.gigSlug === answer.gigSlug) : [];
  const others = [...sameGig, ...rest.filter((a) => a.gigSlug !== answer.gigSlug)].slice(0, 3);

  /**
   * Article + FAQPage. `dateModified` is a real field here because these are
   * dated in the data — an assistant choosing between two sources prefers the
   * one that says when it was last checked.
   */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Answers", item: `${SITE_URL}/answers` },
          {
            "@type": "ListItem",
            position: 3,
            name: answer.shortTitle,
            item: `${SITE_URL}/answers/${answer.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/answers/${answer.slug}#article`,
        headline: answer.title,
        description: answer.description,
        abstract: answer.answer,
        datePublished: answer.updated,
        dateModified: answer.updated,
        inLanguage: "en",
        isAccessibleForFree: true,
        author: { "@id": `${SITE_URL}/#business` },
        publisher: { "@id": `${SITE_URL}/#business` },
        mainEntityOfPage: `${SITE_URL}/answers/${answer.slug}`,
        about: gig ? gig.name : undefined,
        wordCount: answer.sections.reduce(
          (n, s) => n + s.paragraphs.join(" ").split(/\s+/).length,
          0,
        ),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/answers/${answer.slug}#faq`,
        mainEntity: answer.faqs.map((f) => ({
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
            <h1 className="section-title text-normal">{answer.shortTitle}</h1>
            <p className="desc">{answer.description}</p>
            <div className="bg-shape">
              <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <article className="wpr-project-area inner mb--16" aria-labelledby="answer-title">
        <div className="container">
          <div className="section-inner bg-white border-1">
            <div className="section-top-area">
              <div className="section-title-area">
                <p className="sub-title">
                  {answer.readingMinutes} min read · updated {answer.updated}
                </p>
                <h2
                  id="answer-title"
                  className="section-title second-font font-semi-bold text-normal"
                >
                  {answer.title}
                </h2>
              </div>
            </div>

            {/* The short answer, before anything else. */}
            <div className="ef-answer">
              <p className="ef-answer__label">Short answer</p>
              <p className="ef-answer__text">{answer.answer}</p>
            </div>

            <div className="ef-prose">
              {answer.sections.map((section) => (
                <section key={section.heading}>
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {gig && (
                <p className="ef-note">
                  This is what I do:{" "}
                  <Link className="ef-inline-link" href={`/service/${gig.slug}`}>
                    {gig.name} — three packages from ${gigFrom(gig)}
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>
        </div>
      </article>

      <FaqAccordion
        items={answer.faqs}
        id={`${answer.slug}Faq`}
        eyebrow="Follow-ups"
        title={
          <>
            Also <br /> worth knowing
          </>
        }
      />

      {cases.length > 0 && (
        <section className="wpr-next-project-area mb--16" aria-labelledby="answer-work">
          <div className="container">
            <div className="section-inner bg-white border-1">
              <div className="section-top-area">
                <div className="section-title-area">
                  <p className="sub-title">In the work</p>
                  <h2
                    id="answer-work"
                    className="section-title second-font font-semi-bold text-normal"
                  >
                    Where this shows up
                  </h2>
                </div>
              </div>
              <ul className="ef-next-list">
                {cases.map((project) => (
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

      <section className="wpr-next-project-area mb--16" aria-labelledby="more-answers">
        <div className="container">
          <div className="section-inner bg-white border-1">
            <div className="section-top-area">
              <div className="section-title-area">
                <p className="sub-title">More answers</p>
                <h2
                  id="more-answers"
                  className="section-title second-font font-semi-bold text-normal"
                >
                  Other questions
                </h2>
              </div>
            </div>
            <ul className="ef-next-list">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/answers/${o.slug}`}>
                    <span className="ef-next-list__cat">{o.readingMinutes} min read</span>
                    <span className="ef-next-list__name">
                      {o.title}
                      <span aria-hidden="true">→</span>
                    </span>
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
