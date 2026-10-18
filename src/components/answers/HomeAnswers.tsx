import { ANSWERS } from "@/lib/answers";
import styles from "./HomeAnswers.module.css";

const featured = [
  {
    slug: "how-much-does-an-ai-agent-cost",
    topic: "Pricing & costs",
    title: "How much does an AI agent cost?",
    preview: "Start with the build price, then account for running costs.",
  },
  {
    slug: "n8n-vs-make-vs-zapier",
    topic: "Tools & integrations",
    title: "n8n, Make or Zapier?",
    preview: "The right tool depends on your volume and the systems you already use.",
  },
  {
    slug: "what-an-ai-receptionist-can-and-cannot-do",
    topic: "Use cases",
    title: "What can an AI receptionist do?",
    preview: "Where it helps, and when a person should take over.",
  },
].map((item) => {
  const answer = ANSWERS.find((candidate) => candidate.slug === item.slug);
  if (!answer) throw new Error(`Missing featured answer: ${item.slug}`);
  return { ...item, href: `/answers/${answer.slug}` };
});

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
    </svg>
  );
}

export default function HomeAnswers() {
  return (
    <section className={styles.section} aria-labelledby="home-answers">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p className={styles.kicker}><span aria-hidden="true" />Answers &amp; guides</p>
            <h2 id="home-answers" className={styles.title}>Know more.<br />Decide better.</h2>
            <p className={styles.description}>Straight answers to the questions that come up before a project starts.</p>
            <a href="/answers" className={styles.allLink}>Explore all answers <ArrowIcon /></a>
          </div>

          <ol className={styles.list}>
            {featured.map((item, index) => (
              <li key={item.slug}>
                <a href={item.href} className={styles.article}>
                  <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.articleText}>
                    <span className={styles.topic}>{item.topic}</span>
                    <span className={styles.articleTitle}>{item.title}</span>
                    <span className={styles.preview}>{item.preview}</span>
                  </span>
                  <span className={styles.articleArrow}><ArrowIcon /></span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
