import { ANSWERS } from "@/lib/answers";
import { pageMeta, SITE_URL, BRAND } from "@/lib/seo";
import AnswersExplorer from "./AnswersExplorer";
import styles from "./answers.module.css";

export const metadata = pageMeta({
  title: "AI Agent Cost and Automation Answers",
  description:
    "Answers on AI agent cost, handover, after-hours calls, scheduling, email automation, n8n, WhatsApp, and Salesforce or AWS. Prices checked October 2026.",
  path: "/answers",
});

export default function AnswersPage() {
  const topicCount = new Set(ANSWERS.map((answer) => answer.gigSlug).filter(Boolean)).size;

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
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div>
                <p className={styles.eyebrow}>Practical answers · updated regularly</p>
                <h1 className={styles.title}>Know what you&apos;re buying.</h1>
              </div>
              <div>
                <p className={styles.intro}>
                  Direct answers to the questions people ask before paying for an AI
                  agent, automation, website or cloud build. Short version first;
                  detail when you need it.
                </p>
                <div className={styles.stats} aria-label="Answer library totals">
                  <div className={styles.stat}>
                    <strong>{ANSWERS.length}</strong>
                    <span>Published answers</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>{topicCount}</strong>
                    <span>Service topics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.library} aria-labelledby="answers-title">
          <div className="container">
            <div className={styles.libraryShell}>
              <div className={styles.libraryHeader}>
                <div>
                  <p className={styles.libraryEyebrow}>The answer library</p>
                  <h2 id="answers-title">Start with the question in your head.</h2>
                </div>
                <p>
                  Search the full library or filter by service. Every card includes
                  the direct answer before you decide whether to read the detail.
                </p>
              </div>
              <AnswersExplorer />
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
