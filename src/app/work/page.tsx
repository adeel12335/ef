import ProjectEnquiry from "@/components/contact/ProjectEnquiry";
import WorkSchema from "@/components/seo/WorkSchema";
import { PROJECTS } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";
import WorkGallery from "./WorkGallery";
import styles from "./work.module.css";

export const metadata = pageMeta({
  title: "AI Agent and Automation Builds",
  // Kept under 158 characters so it is not truncated in search results.
  description:
    "Client sites and labelled concept builds you can filter by service: product sites, colleges, freight, chauffeur booking and an AI calling console.",
  path: "/work",
});

export default function WorkPage() {
  const clientCount = PROJECTS.filter((project) => project.kind === "Client project").length;
  const conceptCount = PROJECTS.length - clientCount;

  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div>
                <p className={styles.eyebrow}>Selected work · live sites and concepts</p>
                <h1 className={styles.title}>
                  Work you can <span>open</span>.
                </h1>
              </div>
              <div>
                <p className={styles.intro}>
                  Client projects link to the live site. Concept builds stay clearly
                  labelled. The write-ups explain the problem and the decisions without
                  borrowing a client&apos;s revenue, reviews, or marketing numbers.
                </p>
                <div className={styles.stats} aria-label="Work totals">
                  <div className={styles.stat}>
                    <strong>{PROJECTS.length}</strong>
                    <span>Total builds</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>{clientCount}</strong>
                    <span>Client sites</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>{conceptCount}</strong>
                    <span>Concepts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.gallery} aria-labelledby="work-title-clean">
          <div className="container">
            <div className={styles.galleryHead}>
              <h2 id="work-title-clean">The project ledger</h2>
              <p>
                Filter by work type or service. Every card opens a full case study;
                client cases also link to the public site.
              </p>
            </div>
            <WorkGallery />
            <div className={styles.note}>
              <strong>About the covers</strong>
              <p>
                Covers are AI-generated editorial images made for this portfolio.
                They are not screenshots or client photography. Each client case links
                to the actual live site.
              </p>
            </div>
          </div>
        </section>
      </main>
      <ProjectEnquiry />
      <WorkSchema />
    </>
  );
}
