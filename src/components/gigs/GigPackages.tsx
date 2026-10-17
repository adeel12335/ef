import type { Gig } from "@/lib/gigs";

/**
 * The three packages for one gig, on /service.
 *
 * Again this is the template's own pricing section and card markup, rendered
 * from data. The middle tier is the dark card because it is the one most
 * people land on, which is also how the theme uses that variant.
 *
 * The wrapping <section> carries the gig slug as its id so the home page cards
 * can link straight to it (/service#ai-agents).
 */
export default function GigPackages({ gig }: { gig: Gig }) {
  const headingId = `${gig.slug}-title`;

  return (
    <section
      id={gig.slug}
      className="wpr-pricing-plans-area mb--16"
      aria-labelledby={headingId}
    >
      <div className="container">
        <div className="section-inner bg-white border-1">
          <div className="section-top-area">
            <div className="section-title-area center-style">
              <p className="sub-title">{gig.tagline}</p>
              <h2
                id={headingId}
                className="section-title second-font font-semi-bold text-normal"
              >
                {gig.name}
              </h2>
              <p className="gig-answer">{gig.description}</p>
            </div>
          </div>

          <div className="section-mid-area">
            {gig.packages.map((pkg, i) => (
              <div className="pricing-inner square-dot" key={pkg.tier}>
                <div className={`pricing-wrapper${i === 1 ? " dark" : ""}`}>
                  <div className="pricing-header">
                    <div className="plan-type">
                      <h3 className="h6">{pkg.tier}</h3>
                      <p>Delivered in {pkg.delivery}</p>
                    </div>

                    <h4 className="title h5">{pkg.summary}</h4>

                    <div className="bottom-pricing">
                      <h4 className="price">
                        ${pkg.price} <span>/ from</span>
                      </h4>
                      <div className="button-area">
                        <a href="/contact" className="wpr-btn btn-primary">
                          Start this package
                        </a>
                      </div>
                    </div>

                    <div className="shape-one">
                      <img src={`/assets/images/pricing/shape-${(i % 2) + 1}.svg`} alt="" />
                    </div>
                    <div className="shape-two">
                      <img src={`/assets/images/pricing/grid-${(i % 2) + 1}.svg`} alt="" />
                    </div>
                  </div>

                  <div className="pricing-body">
                    <ul>
                      {pkg.items.map((item) => (
                        <li key={item}>
                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                          {item}
                        </li>
                      ))}
                      <li>
                        <img src="/assets/images/why-choose/check-01.svg" alt="" />
                        {pkg.support} post-launch support
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="square-shape top-left"></span>
                <span className="square-shape top-right"></span>
                <span className="square-shape bottom-right"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
