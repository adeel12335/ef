import Link from "next/link";
import { ANSWERS } from "@/lib/answers";
import { groupByGig } from "@/lib/groupByGig";
import { pageMeta, SITE_URL, BRAND } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Agent Cost and Automation Answers",
  description:
    "Answers on AI agent cost, handover, after-hours calls, scheduling, email automation, n8n, WhatsApp, and Salesforce or AWS. Prices checked October 2026.",
  path: "/answers",
});

export default function AnswersPage() {
  // Twenty-four articles in one list is not a list anyone reads. They are
  // grouped under the service each belongs to, which is the same grouping the
  // services and the work use.
  const groups = groupByGig(ANSWERS);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Answers", item: `${SITE_URL}/answers` },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/answers#page`,
        url: `${SITE_URL}/answers`,
        name: `Answers | ${BRAND}`,
        description:
          "Short, specific answers to the questions people type before hiring someone to build AI agents, automation or websites.",
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        numberOfItems: ANSWERS.length,
        itemListElement: ANSWERS.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: a.title,
          url: `${SITE_URL}/answers/${a.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <section className="wpr-banner-area breadcrumb">
        <div className="container">
          <div className="banner-content-area">
            <h1 className="section-title text-normal">Answers People <br /> Search Before Hiring</h1>
            <p className="desc">
              The questions people ask before hiring someone — answered straight, with
              the numbers where I have them and a plain “it depends” where I do not.
            </p>
            <div className="bg-shape">
              <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="wpr-next-project-area mb--16" aria-labelledby="answers-title">
        <div className="container">
          <div className="section-inner bg-white border-1">
            <div className="section-top-area">
              <div className="section-title-area">
                <p className="sub-title">Guides</p>
                <h2
                  id="answers-title"
                  className="section-title second-font font-semi-bold text-normal"
                >
                  Before you hire anyone
                </h2>
                <p className="gig-answer">
                  {ANSWERS.length} answers, grouped by the kind of work they are
                  about. Each one opens with the short version, so most questions
                  are settled without clicking.
                </p>
              </div>
            </div>

            {/* Jump links: with this many groups the headings are below the
                fold, and a reader who came for one topic should not scroll
                past three others to find it. */}
            <nav className="ef-jump" aria-label="Jump to a topic">
              {groups.map((group) => (
                <a key={group.slug ?? "general"} href={`#${group.slug ?? "general"}`}>
                  {group.shortName}
                  <span className="ef-jump__count">{group.items.length}</span>
                </a>
              ))}
            </nav>

            {groups.map((group) => (
              <section
                key={group.slug ?? "general"}
                id={group.slug ?? "general"}
                className="ef-group"
                aria-labelledby={`h-${group.slug ?? "general"}`}
              >
                <div className="ef-group__head">
                  <h3 id={`h-${group.slug ?? "general"}`}>{group.name}</h3>
                  {group.slug ? (
                    <Link href={`/service/${group.slug}`}>
                      See the service and packages
                      <span aria-hidden="true"> →</span>
                    </Link>
                  ) : null}
                </div>

                <ul className="ef-next-list">
                  {group.items.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/answers/${a.slug}`}>
                        <span className="ef-next-list__cat">
                          {a.readingMinutes} min read · updated {a.updated}
                        </span>
                        <span className="ef-next-list__name">
                          {a.title}
                          <span aria-hidden="true">→</span>
                        </span>
                        {/* The direct answer shows on the index too — most people
                            only need this much, and the ones who need more click. */}
                        <span className="ef-next-list__blurb">{a.answer}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <p className="ef-next-cta">
              <Link href="/contact" className="wpr-btn btn-primary">
                Ask me something else
              </Link>
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
