"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ANSWERS } from "@/lib/answers";
import { GIGS } from "@/lib/gigs";

import styles from "./answers.module.css";

const filters = [
  { id: "all", label: "All answers" },
  ...GIGS.map((gig) => ({ id: gig.slug, label: gig.shortName })),
];

function formatUpdated(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export default function AnswersExplorer() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const search = query.trim().toLowerCase();

    return ANSWERS.filter((answer) => {
      const matchesTopic = filter === "all" || answer.gigSlug === filter;
      const matchesSearch =
        !search ||
        [answer.title, answer.answer, answer.description].some((value) =>
          value.toLowerCase().includes(search),
        );

      return matchesTopic && matchesSearch;
    });
  }, [filter, query]);

  return (
    <>
      <div className={styles.controls}>
        <label className={styles.search}>
          <span>Search the answers</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “AI agent cost” or “n8n”"
          />
        </label>

        <div className={styles.filters} aria-label="Filter answers by topic">
          {filters.map((item) => {
            const count =
              item.id === "all"
                ? ANSWERS.length
                : ANSWERS.filter((answer) => answer.gigSlug === item.id).length;

            if (count === 0) return null;

            return (
              <button
                key={item.id}
                type="button"
                className={filter === item.id ? styles.filterActive : styles.filter}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
                <span>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className={styles.resultCount} aria-live="polite">
        {visible.length === 0
          ? "No answers match that search"
          : `${visible.length} ${visible.length === 1 ? "answer" : "answers"}`}
      </p>

      {visible.length > 0 ? (
        <div className={styles.grid}>
          {visible.map((answer, index) => {
            const gig = GIGS.find((item) => item.slug === answer.gigSlug);

            return (
              <article className={styles.card} key={answer.slug}>
                <div className={styles.cardMeta}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{gig?.shortName ?? "General"}</span>
                </div>
                <h3>
                  <Link href={`/answers/${answer.slug}`}>{answer.title}</Link>
                </h3>
                <p className={styles.directAnswer}>{answer.answer}</p>
                <div className={styles.cardFooter}>
                  <span>
                    {answer.readingMinutes} min · updated {formatUpdated(answer.updated)}
                  </span>
                  <Link href={`/answers/${answer.slug}`}>
                    Read answer <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className={styles.empty}>
          <strong>No matching answer yet.</strong>
          <p>Try a shorter phrase or choose a different topic.</p>
        </div>
      )}
    </>
  );
}
