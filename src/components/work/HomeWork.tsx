"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./HomeWork.module.css";

export type WorkCard = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  /** Short uppercase label on the card, e.g. "Website" or "AI agent". */
  label: string;
  /** Filter groups this project belongs to. */
  groups: string[];
};

export type WorkFilter = { id: string; label: string };

/**
 * Home portfolio: dark panel, filter pills, bento grid of image cards with the
 * title and an arrow over a bottom gradient. The first card in each view spans
 * two rows on desktop. Filtering is client-side over a list the server picked,
 * so every card is still a plain link in the HTML.
 */
export default function HomeWork({
  items,
  filters,
  total,
}: {
  items: WorkCard[];
  filters: WorkFilter[];
  total: number;
}) {
  const [active, setActive] = useState(filters[0]?.id ?? "all");

  const visible = useMemo(
    () => (active === "all" ? items.filter((i) => i.groups.includes("featured")) : items.filter((i) => i.groups.includes(active))).slice(0, 5),
    [active, items],
  );

  return (
    <section className={styles.section} aria-labelledby="home-work-title">
      <div className="container">
        <div className={styles.shell}>
          <header className={styles.header}>
            <div>
              <p className={styles.eyebrow}>Our work</p>
              <h2 id="home-work-title" className={styles.title}>
                Projects that create <span className={styles.accent}>real impact.</span>
              </h2>
            </div>
            <div className={styles.side}>
              <p className={styles.intro}>
                From AI agents to client portals and business websites, each build is shaped around
                the job it has to do every day.
              </p>
              <Link className={styles.textLink} href="/work">
                Explore all projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </header>

          <div className={styles.filters} role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={active === f.id}
                className={active === f.id ? `${styles.pill} ${styles.pillActive}` : styles.pill}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <ul className={styles.grid} data-count={visible.length}>
            {visible.map((p) => (
              <li key={p.slug} className={styles.card}>
                <Link href={`/work/${p.slug}`} className={styles.cardLink} aria-label={`${p.name}: view project`}>
                  <img className={styles.image} src={p.image} alt="" loading="lazy" decoding="async" />
                  <span className={styles.shade} aria-hidden="true" />
                  <span className={styles.content}>
                    <span className={styles.label}>{p.label}</span>
                    <span className={styles.cardTitle}>{p.name}</span>
                    <span className={styles.blurb}>{p.blurb}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.footer}>
            <Link className={styles.viewAll} href="/work">
              View all {total} projects
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
