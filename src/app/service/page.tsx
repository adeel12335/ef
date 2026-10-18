import Link from "next/link";
import ProjectEnquiry from "@/components/contact/ProjectEnquiry";
import FaqAccordion from "@/components/faq/FaqAccordion";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { SERVICE_FAQS } from "@/lib/faq";
import { GIGS, PRICE_FROM, PRICE_TO } from "@/lib/gigs";
import { PROCESS } from "@/lib/process";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services & Packages",
  description:
    "Four gigs, three packages each: AI agents from $150, workflow automation from $120, websites and mobile apps from $180, Salesforce and AWS from $150.",
  path: "/service",
});

export default function ServicePage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                          What I Build <br /> For Your Business
                      </h1>
                      <p className="desc">AI agents, workflow automation, websites and applications, <br /> plus Salesforce and AWS configuration behind them.</p>
                      <div className="bg-shape">
                          <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
                      </div>
                      <div className="banner-shape-area">
                          <img src="/assets/images/banner/shape/shape-01.svg" width="200" alt="" className="one wow fadeInLeft" data-wow-delay=".5s" />
                          <img src="/assets/images/banner/shape/shape-02.svg" width="200" alt="" className="two wow fadeInLeft" data-wow-delay=".5s" />
                      </div>
                  </div>
              </div>
          </section>


          <section className="wpr-services-area inner mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-top-area">
                          <div className="section-title-area center-style">
                              <p className="sub-title">SERVICES</p>
                              <h2 className="section-title second-font font-semi-bold text-normal wpr-text-anime-style-1">Four Gigs,
                                  Twelve Packages </h2>
                              <p className="gig-answer">Each service below is a gig with three packages — Basic,
                                  Standard and Premium. Packages run from <strong>${PRICE_FROM}</strong> to
                                  <strong> ${PRICE_TO}</strong>, scoped and priced in writing before work begins.</p>
                          </div>
                      </div>
                      <div className="section-bottom-content square-dot">
{GIGS.map((gig, i) => (
                              <div className="service-wrapper wow fadeInRight" data-wow-delay={`${0.2 * (i + 1)}s`} key={gig.slug}>
                                  <div className="image-area">
                                      <img src={`/assets/images/service/0${i + 1}.webp`} alt={`${gig.name} — ${gig.tagline}`} />
                                  </div>
                                  <div className="content">
                                      <div className="top">
                                          <p className="tag">{gig.name}</p>
                                          <p className="desc">{gig.description}</p>
                                      </div>
                                      <div className="mid">
                                          <h2>0{i + 1}</h2>
                                      </div>
                                      <div className="bottom">
                                          <ul>
                                              {gig.highlights.map((h) => (
                                                  <li key={h}>{h}</li>
                                              ))}
                                          </ul>
                                          <Link href={`/service/${gig.slug}`} className="service-btn-area" aria-label={`See ${gig.name} packages`}>
                                              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                              </svg>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          ))}
                          


</div>
                  </div>
              </div>
          </section>


          


          <section className="wpr-working-process mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="working-process-left">
                                  <div className="section-title-area">
                                      <p className="sub-title">PROCESS</p>
                                      <h2 className="section-title second-font font-semi-bold text-normal quote">From the first
                                          call <br />
                                          to handover</h2>
                                  </div>
                                  <div className="text-area">
                                      <p className="desc">You always know what is happening, what I need from you next, and what you will have at the end.</p>
                                      <Link href="/contact" className="wpr-btn btn-primary with-icon">
                                          <div className="inner">
                                              <div className="icon">
                                                  <span className="fixed-arrow">
                                                      <img src="/assets/images/icon/button-arrow-fixed.svg" alt="" />
                                                  </span>
                                                  <span>
                                                      <img src="/assets/images/icon/button-arrow-2.svg" alt="" />
                                                  </span>
                                                  <span>
                                                      <img src="/assets/images/icon/button-arrow-2.svg" alt="" />
                                                  </span>
                                                  <span>
                                                      <img src="/assets/images/icon/button-arrow-2.svg" alt="" />
                                                  </span>
                                                  <span>
                                                      <img src="/assets/images/icon/button-arrow-2.svg" alt="" />
                                                  </span>
                                              </div>
                                          </div>
                                          Start a Project
                                      </Link>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="right-content-area">
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/understand.jpg" alt="" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//01</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">{PROCESS[0].title}</h3>
                                              <p className="desc">{PROCESS[0].description}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/plan.jpg" alt="" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//02</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">{PROCESS[1].title}</h3>
                                              <p className="desc">{PROCESS[1].description}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/build.jpg" alt="" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//03</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">{PROCESS[2].title}</h3>
                                              <p className="desc">{PROCESS[2].description}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/handover.jpg" alt="" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//04</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">{PROCESS[3].title}</h3>
                                              <p className="desc">{PROCESS[3].description}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="bottom-shape-area bg-white square-dot">
                      <img src="/assets/images/about/shape-02.svg" alt="" />
                      <span className="square-shape top-left"></span>
                      <span className="square-shape bottom-left"></span>
                      <span className="square-shape top-right"></span>
                      <span className="square-shape bottom-right"></span>
                  </div>
              </div>
          </section>


          


          <FaqAccordion
              items={SERVICE_FAQS}
              id="serviceFaq"
              eyebrow="PACKAGE QUESTIONS"
              title={<>About The <br /> Packages</>}
              intro="How scope, upgrades and the “from” price actually work."
          />


          <section className="wpr-cta-area">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="section-title-area">
                          <h2 className="section-title">LET’s start <br /> your project</h2>
                          <div className="logo"><img src="/assets/images/cta/cta-logo.svg" alt="" /></div>
                          <div className="arrow-track right">
                              <div className="arrow"><img src="/assets/images/cta/arrow-left.svg" alt="" /></div>
                              <div className="arrow"><img src="/assets/images/cta/arrow-left.svg" alt="" /></div>
                              <div className="arrow"><img src="/assets/images/cta/arrow-left.svg" alt="" /></div>
                          </div>
                          <div className="arrow-track left">
                              <div className="arrow"><img src="/assets/images/cta/arrow-right.svg" alt="" /></div>
                              <div className="arrow"><img src="/assets/images/cta/arrow-right.svg" alt="" /></div>
                              <div className="arrow"><img src="/assets/images/cta/arrow-right.svg" alt="" /></div>
                          </div>
                      </div>
                      <div className="bg-shape"><img src="/assets/images/cta/grid.svg" alt="" /></div>
                      <div className="section-bottom-shape">
                          <img src="/assets/images/cta/graphic.svg" alt="" />
                          <span className="tag left">FIXED SCOPE, PRICED UP FRONT</span>
                          <span className="tag right">REMOTE, WORLDWIDE</span>
                      </div>
                  </div>
              </div>
          </section>


          <ProjectEnquiry />
<ServiceSchema />
    </>
  );
}
