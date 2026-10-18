import type { Faq } from "@/lib/faq";
import styles from "./FaqAccordion.module.css";

/** A native, single-open FAQ. The same answer data feeds the site's schema. */
export default function FaqAccordion({
  items,
  id = "faqAccordion",
  eyebrow = "Common questions",
  title,
  intro,
}: {
  items: Faq[];
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
}) {
  const titleId = `${id}-title`;

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p className={styles.kicker}><span aria-hidden="true" />{eyebrow}</p>
            <h2 id={titleId} className={styles.title}>{title}</h2>
            {intro ? <p className={styles.description}>{intro}</p> : null}
            <a href="/contact" className={styles.contactLink}>
              Still have a question? Get in touch
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </a>
          </div>

          <div className={styles.list} id={id}>
            {items.map((item, index) => (
              <details key={item.q} name={id} className={styles.item} open={index === 0}>
                <summary className={styles.question}>
                  <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.toggle} aria-hidden="true" />
                </summary>
                <div className={styles.answer}><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
