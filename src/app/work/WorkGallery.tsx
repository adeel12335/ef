"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { GIGS } from "@/lib/gigs";
import { PROJECTS } from "@/lib/projects";

import styles from "./work.module.css";

type Filter = "all" | "client" | "concept" | string;

const filters = [
  { id: "all", label: "All work" },
  { id: "client", label: "Client sites" },
  { id: "concept", label: "Concept builds" },
  ...GIGS.map((gig) => ({ id: gig.slug, label: gig.shortName })),
];

export default function WorkGallery() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    if (filter === "all") return PROJECTS;
    if (filter === "client") {
      return PROJECTS.filter((project) => project.kind === "Client project");
    }
    if (filter === "concept") {
      return PROJECTS.filter((project) => project.kind === "Concept project");
    }
    return PROJECTS.filter((project) => project.gigSlug === filter);
  }, [filter]);

  return (
    <>
      <div className={styles.filters} aria-label="Filter work">
        {filters.map((item) => {
          const count =
            item.id === "all"
              ? PROJECTS.length
              : item.id === "client"
                ? PROJECTS.filter((project) => project.kind === "Client project").length
                : item.id === "concept"
                  ? PROJECTS.filter((project) => project.kind === "Concept project").length
                  : PROJECTS.filter((project) => project.gigSlug === item.id).length;

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

      <p className={styles.resultCount} aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "build" : "builds"}
      </p>

      <div className={styles.grid}>
        {visible.map((project) => (
          <article className={styles.card} key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className={styles.coverLink}
              aria-label={`Read the ${project.name} case study`}
            >
              <img
                src={project.image}
                alt=""
                className={styles.cover}
                loading="lazy"
                decoding="async"
              />
              <span className={styles.coverLabel}>Editorial cover</span>
            </Link>

            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span>{project.kind}</span>
                <span>{project.category}</span>
              </div>
              <h2>
                <Link href={`/work/${project.slug}`}>{project.name}</Link>
              </h2>
              <p>{project.blurb}</p>
              <div className={styles.cardFooter}>
                <Link href={`/work/${project.slug}`}>Read case study</Link>
                {project.liveUrl ? <span>Live site linked</span> : <span>Concept</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
