import type { Faq } from "@/lib/faq";

/**
 * The template's own Bootstrap accordion, rendered from data.
 *
 * The markup and class names are the theme's — only the source of the content
 * changes, so the FAQ on the page and the FAQPage structured data are
 * guaranteed to be the same words.
 *
 * `id` must be unique per accordion on a page: Bootstrap uses it for
 * data-bs-parent, which is what makes opening one item close the others.
 */
export default function FaqAccordion({
  items,
  id = "faqAccordion",
  eyebrow = "FAQS",
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
    <section className="wpr-faq-area mb--16" aria-labelledby={titleId}>
      <div className="container">
        <div className="section-inner bg-white border-1">
          <div className="section-content-area">
            <div className="section-title-area center-style">
              <p className="sub-title">{eyebrow}</p>
              <h2
                id={titleId}
                className="section-title second-font font-semi-bold text-normal"
              >
                {title}
              </h2>
              {intro ? <p className="gig-answer">{intro}</p> : null}
            </div>

            <div className="accordion-one" id={id}>
              {items.map((item, i) => {
                const headingId = `${id}-h${i}`;
                const panelId = `${id}-p${i}`;
                const open = i === 0;

                return (
                  <div className="accordion-item" key={item.q}>
                    <h3 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button${open ? "" : " collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${panelId}`}
                        aria-expanded={open}
                        aria-controls={panelId}
                      >
                        {item.q}
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      className={`accordion-collapse collapse${open ? " show" : ""}`}
                      role="region"
                      aria-labelledby={headingId}
                      data-bs-parent={`#${id}`}
                    >
                      <div className="accordion-body">
                        <p className="desc">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
