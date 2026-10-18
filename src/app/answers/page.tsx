import { ANSWERS } from "@/lib/answers";
import { pageMeta, SITE_URL, BRAND } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Answers",
  description:
    "Straight answers to what people ask before hiring: what an AI agent costs, n8n vs Make vs Zapier, what an AI receptionist can really do.",
  path: "/answers",
});

export default function AnswersPage() {
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
            <h1 className="section-title text-normal">Answers</h1>
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
              </div>
            </div>

            <ul className="ef-next-list">
              {ANSWERS.map((a) => (
                <li key={a.slug}>
                  <a href={`/answers/${a.slug}`}>
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
                  </a>
                </li>
              ))}
            </ul>

            <p className="ef-next-cta">
              <a href="/contact" className="wpr-btn btn-primary">
                Ask me something else
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
