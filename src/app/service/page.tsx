import FaqAccordion from "@/components/faq/FaqAccordion";
import ServiceSchema from "@/components/seo/ServiceSchema";
import GigPackages from "@/components/gigs/GigPackages";
import { SERVICE_FAQS } from "@/lib/faq";
import { GIGS, PRICE_FROM, PRICE_TO } from "@/lib/gigs";
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
                                          <a href={`#${gig.slug}`} className="service-btn-area" aria-label={`See ${gig.name} packages`}>
                                              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                              </svg>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          ))}
                          






</div>
                  </div>
              </div>
          </section>



          <div className="wpr-brand-area mb--16">
              <div className="container">
                  <div className="section-inner square-dot">
                      <div className="left-text">
                          <p>//WE’VE <br /> TRUSTED BY</p>
                      </div>
                      <div className="right-marquee-area">
                          <div className="brand-inner">
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/01.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/02.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/03.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/04.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/05.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/06.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/01.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/02.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/03.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/04.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/05.svg" alt="" />
                              </div>
                              <div className="brand-wrapper">
                                  <img src="/assets/images/brand/06.svg" alt="" />
                              </div>
                          </div>
                      </div>
                      <span className="square-shape top-left"></span>
                      <span className="square-shape bottom-left"></span>
                      <span className="square-shape top-right"></span>
                      <span className="square-shape bottom-right"></span>
                  </div>
              </div>
          </div>



          <section className="wpr-working-process mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="working-process-left">
                                  <div className="section-title-area">
                                      <p className="sub-title">PROCESS</p>
                                      <h2 className="section-title second-font font-semi-bold text-normal quote">Combine
                                          Creativity <br />
                                          With Strategy</h2>
                                  </div>
                                  <div className="text-area">
                                      <p className="desc">Every step designed to deliver clarity, impact, and results.</p>
                                      <a href="/contact" className="wpr-btn btn-primary with-icon">
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
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="right-content-area">
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/01.webp" alt="" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//01</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Discover & Define</h3>
                                              <p className="desc">We start by understanding your goals, audience, and challenges.
                                                  Through research and workshops, we uncover insights of the project.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/02.webp" alt="" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//02</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Concept & Strategy</h3>
                                              <p className="desc">We explore visual styles, narratives, and user flows to define
                                                  the strategic and aesthetic direction of your brand or product.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/03.webp" alt="" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//03</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Design & Develop</h3>
                                              <p className="desc">Every layout, color, and interaction is thoughtfully crafted to
                                                  ensure your brand feels cohesive, functional, and memorable.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/04.webp" alt="" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//04</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Launch & Evolve</h3>
                                              <p className="desc">We guide you through launch and beyond - analyzing performance,
                                                  gathering feedback, and refining your design.</p>
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



          {/* One section per gig, each with its three packages. Anchored on the
              gig slug so the home page cards link straight here. */}
          {GIGS.map((gig) => (
              <GigPackages key={gig.slug} gig={gig} />
          ))}



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
                          <span className="tag left">IMPACTFUL CREATIVE</span>
                          <span className="tag right">GLOBAL SUPPORT</span>
                      </div>
                  </div>
              </div>
          </section>



          <section id="contact" className="wpr-contact-area mb--16">
              <div className="container">
                  <div className="section-inner">
                      <div className="left-content-area">
                          <div className="get-in-touch">
                              <p className="sub-title">CONTACT</p>
                              <ul>
                                  {/* TODO(content): add a real, monitored address and it shows here.
                                      Until then the form is the only route — nothing invented. */}
                                  <li><a href="/contact">Send an enquiry</a></li>
                              </ul>
                          </div>
                          <div className="location-area">
                              <p className="sub-title">WHERE I WORK</p>
                              <ul>
                                  <li>
                                      <h2 className="h4">Remote</h2>
                                      <p>Based in Pakistan, working with <br /> businesses worldwide — calls <br /> scheduled to suit your hours.</p>
                                  </li>
                                  <li>
                                      <h2 className="h4">Response</h2>
                                      <p>I read every enquiry myself <br /> and reply to the address <br /> you give, usually within a business day.</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="contact-form-area">
                          <form id="contact-form" action="/api/contact" method="POST" encType="multipart/form-data">
                              <div className="single-input">
                                  <label htmlFor="name">/YOUR NAME</label>
                                  <input type="text" id="name" name="name" placeholder="Enter your full name" />
                              </div>
                              <div className="single-input">
                                  <label htmlFor="email">/YOUR E-MAIL</label>
                                  <input type="email" id="email" name="email" placeholder="Enter your e-mail" />
                              </div>
                              <div className="single-input">
                                  <label htmlFor="message">/MORE ABOUT THE PROJECT</label>
                                  <textarea id="message" name="message" placeholder="Leave us message" required></textarea>
                              </div>
                              <div className="single-input last">
                                  <label htmlFor="upload-attachment">
                                      <i className="fa-sharp-duotone fa-light fa-paperclip"></i> Add an Attachment
                                      <input type="file" name="file" id="upload-attachment" />
                                  </label>
                              </div>
                              <div className="form-btn-area">
                                  <button type="submit" className="wpr-btn">Submit Message</button>
                              </div>
                              <div id="form-messages"></div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      <ServiceSchema />
    </>
  );
}
