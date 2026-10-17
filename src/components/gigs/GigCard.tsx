import { gigFrom, type Gig } from "@/lib/gigs";

/**
 * One gig on the home page.
 *
 * Uses the template's own pricing-card markup and class names — this is the
 * same component the theme ships, rendered from data rather than copy-pasted
 * four times. Nothing new is designed here.
 *
 * The card sells the gig; the packages themselves live on /service, so the
 * home page stays a summary rather than twelve price tables.
 */
export default function GigCard({ gig, dark = false }: { gig: Gig; dark?: boolean }) {
  return (
    <div className="pricing-inner square-dot">
      <div className={`pricing-wrapper${dark ? " dark" : ""}`}>
        <div className="pricing-header">
          <div className="plan-type">
            <h3 className="h6">{gig.name}</h3>
            <p>3 packages</p>
          </div>

          {/* The card leads with the short tagline; the full description lives
              on /service, where there is room for it. */}
          <h4 className="title h5">{gig.tagline}</h4>

          <div className="bottom-pricing">
            <h4 className="price">
              ${gigFrom(gig)} <span>/ from</span>
            </h4>
            <div className="button-area">
              <a href={`/service#${gig.slug}`} className="wpr-btn btn-primary">
                See the 3 packages
              </a>
            </div>
          </div>

          <div className="shape-one">
            <img src="/assets/images/pricing/shape-1.svg" alt="" />
          </div>
          <div className="shape-two">
            <img src="/assets/images/pricing/grid-1.svg" alt="" />
          </div>
        </div>

        <div className="pricing-body">
          <ul>
            {gig.highlights.map((h) => (
              <li key={h}>
                <img src="/assets/images/why-choose/check-01.svg" alt="" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="square-shape top-left"></span>
      <span className="square-shape top-right"></span>
      <span className="square-shape bottom-right"></span>
    </div>
  );
}
