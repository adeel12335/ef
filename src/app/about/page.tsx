import ProjectEnquiry from "@/components/contact/ProjectEnquiry";
import FaqAccordion from "@/components/faq/FaqAccordion";
import AboutSchema from "@/components/seo/AboutSchema";
import { ABOUT_FAQS } from "@/lib/faq";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "One developer who scopes, builds and supports every project — AI agents, automation, websites and mobile apps. How I work and what happens after handover.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                          One Developer, <br /> End To End
                      </h1>
                      <p className="desc">I design, build and support this work myself — AI agents, automations, <br /> websites and the cloud integrations that join them up.</p>
                      <div className="bg-shape">
                          <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
                      </div>
                      <div className="banner-shape-area">
                          <img src="/assets/images/banner/shape/shape-01.svg" width="200" alt="" className="one wow fadeInLeft" data-wow-delay=".5s" />
                          <img src="/assets/images/banner/shape/shape-02.svg" width="220" alt="" className="two wow fadeInRight" data-wow-delay=".5s" />
                      </div>
                  </div>
              </div>
          </section>



          <section className="wpr-about-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-top-area">
                          <div className="section-title-area">
                              <p className="sub-title">ABOUT</p>
                              <h2 className="section-title second-font font-semi-bold text-normal quote">I build the systems that run quietly in the background, so the work in front of you gets your attention</h2>
                          </div>
                      </div>
                      <div className="about-bottom-content square-dot">
                          <div className="left-area">
                              <ul>
                                  <li className="border-top">
                                      <p className="top-description">WHAT I DO, AND WHO IT IS FOR <br /> — NO AGENCY, NO HANDOVER CHAIN.</p>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/01.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">Four gigs</h2>
                                          <p className="desc">AI agents, automation, web and mobile, Salesforce and AWS</p>
                                      </div>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/02.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">Twelve packages</h2>
                                          <p className="desc">Three per gig, from $120, each a fixed scope priced in writing</p>
                                      </div>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/03.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">One developer</h2>
                                          <p className="desc">The person who scopes it also builds it and supports it</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="right-area">
                              <div className="image-area">
                                  <img src="/assets/images/about/01.webp" width="802" alt="" />
                                  <img className="image-shape-right-bottom" src="/assets/images/about/shape-01.svg" alt="" />
                              </div>
                          </div>
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                      <div className="bottom-shape-area square-dot">
                          <img src="/assets/images/about/shape-02.svg" alt="" />
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
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



          <div className="our-approch-area-style-one mb--16">
              <div className="container">
                  <div className="section-inner bg-white square-dot">
                      <div className="row">
                          <div className="col-lg-7">

                              <div className="approch-area-left">
                                  <div className="section-title-area">
                                      <p className="sub-title">Our Approach</p>
                                      <h2 className="section-title second-font font-semi-bold text-normal quote">Expertise
                                          in Strategy, <br /> Design
                                          and Development</h2>
                                  </div>
                                  <p className="disc">
                                      The digital agency work process may vary depending on the <br /> specific project and
                                      client needs, but typically follows these <br /> basic steps. It is a collaborative and
                                      iterative process.
                                  </p>
                                  <a href="/service" className="wpr-btn btn-primary with-icon">
                                      <div className="inner">
                                          <div className="icon">
                                              <span>
                                                  <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                              </span>
                                              <span>
                                                  <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                              </span>
                                              <span>
                                                  <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                              </span>
                                              <span>
                                                  <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                              </span>
                                              <span>
                                                  <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                              </span>
                                              <span>
                                                  <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                              </span>
                                          </div>
                                      </div>
                                      Explore Our Service
                                  </a>
                              </div>

                          </div>
                          <div className="col-lg-5 rts-slide-left-gsap mt_sm--30">

                              <div className="single-approach-area-start">
                                  <div className="left-area">
                                      <h3 className="title">Discover & Define</h3>
                                      <p className="disc">Based on the information gathered during discovery <br />
                                          the agency will develop a customized audience.</p>
                                  </div>
                              </div>


                              <div className="single-approach-area-start two">
                                  <div className="left-area">
                                      <h3 className="title">Concept & Strategy</h3>
                                      <p className="disc">Based on insights uncovered during discovery, <br /> the agency defines a
                                          clear strategic direction.</p>
                                  </div>
                              </div>


                              <div className="single-approach-area-start three mb--0">
                                  <div className="left-area">
                                      <h3 className="title">Design & Develop</h3>
                                      <p className="disc">Based on the finalized strategy, develops <br /> functional and optimized
                                          digital experiences.</p>
                                  </div>
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



          <section className="wpr-why-choose-us-area2 mb--16">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="section-title-area">
                          <p className="sub-title">HOW I WORK</p>
                          <h2 className="section-title second-font font-semi-bold text-normal">What Working <br /> With Me Looks Like</h2>
                      </div>
                      <div className="bottom-content-area">
                          <div className="why-choose-wrapper2 square-dot wow fadeInRight" data-wow-delay=".2s">
                              <div className="icon">
                                  <img src="/assets/images/why-choose/icon/01.svg" alt="" />
                              </div>
                              <div className="text">
                                  <h3 className="h6 title second-font font-semi-bold text-normal">You talk to the builder</h3>
                                  <p className="desc">No account manager relaying your brief to someone you never meet. The person who scopes the work writes the code and answers when something needs attention a month later.</p>
                              </div>
                              <span className="square-shape top-left"></span>
                              <span className="square-shape top-right"></span>
                          </div>
                          <div className="why-choose-wrapper2 square-dot wow fadeInRight" data-wow-delay=".4s">
                              <div className="icon">
                                  <img src="/assets/images/why-choose/icon/02.svg" alt="" />
                              </div>
                              <div className="text">
                                  <h2 className="h6 title second-font font-semi-bold text-normal">Scope and price before work</h2>
                                  <p className="desc">What is being built, what it connects to and what is deliberately excluded — agreed in writing with a fixed price attached. If the scope changes, we agree the change and its cost first.</p>
                              </div>
                              <span className="square-shape top-right"></span>
                          </div>
                          <div className="why-choose-wrapper2 square-dot wow fadeInRight" data-wow-delay=".6s">
                              <div className="icon">
                                  <img src="/assets/images/why-choose/icon/03.svg" alt="" />
                              </div>
                              <div className="text">
                                  <h2 className="h6 title second-font font-semi-bold text-normal">Tested on the awkward cases</h2>
                                  <p className="desc">Duplicate records, failed steps, the enquiry that arrives at 2am. Automations are tested against what actually happens, not just the path where everything behaves.</p>
                              </div>
                              <span className="square-shape top-right"></span>
                          </div>
                          <div className="why-choose-wrapper2 square-dot wow fadeInRight" data-wow-delay=".8s">
                              <div className="icon">
                                  <img src="/assets/images/why-choose/icon/04.svg" alt="" />
                              </div>
                              <div className="text">
                                  <h2 className="h6 title second-font font-semi-bold text-normal">Built to be handed over</h2>
                                  <p className="desc">Documentation, a handover session and credentials that live in your accounts. Continuing support should be a choice you make, not a dependency a thin handover created.</p>
                              </div>
                              <span className="square-shape top-right"></span>
                          </div>
                      </div>
                      <div className="bottom-shape-area square-dot">
                          <img src="/assets/images/about/shape-02.svg" alt="" />
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                      <div className="top-right-shape"><img src="/assets/images/why-choose/top-right-shape.svg" alt="" /></div>
                  </div>
              </div>
          </section>



          <section className="wpr-awards-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-title-area">
                          <p className="sub-title">WHAT YOU GET</p>
                          <h2 className="section-title second-font font-semi-bold text-normal wpr-text-anime-style-1">Included In Every Package</h2>
                      </div>
                      <div className="award-accordion-area">
                          <div className="award-item active">
                              <div className="award-header">
                                  <div className="left">
                                      <div className="date">Before we start</div>
                                      <div className="content">
                                          <h3 className="h6 title">A written scope</h3>
                                          <p className="desc">
                                              What is being built, what it connects to and what is out of scope — with a fixed price attached, before any work begins.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="toggle"><span className="plus">+</span> <span className="minus">-</span></div>
                              </div>
                              <div className="image-area">
                                  <img src="/assets/images/awards/01.webp" width="306" alt="" />
                              </div>
                          </div>
                          <div className="award-item">
                              <div className="award-header">
                                  <div className="left">
                                      <div className="date">While building</div>
                                      <div className="content">
                                          <h3 className="h6 title">Progress you can see</h3>
                                          <p className="desc">
                                              Written updates at agreed check-ins and working software you can try, rather than silence punctuated by a demo at the end.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="toggle"><span className="plus">+</span> <span className="minus">-</span></div>
                              </div>
                              <div className="image-area">
                                  <img src="/assets/images/awards/02.webp" width="306" alt="" />
                              </div>
                          </div>
                          <div className="award-item">
                              <div className="award-header">
                                  <div className="left">
                                      <div className="date">At handover</div>
                                      <div className="content">
                                          <h3 className="h6 title">Documentation that stands alone</h3>
                                          <p className="desc">
                                              How it works, what it connects to, which credentials it uses and what to do when something breaks — walked through with whoever will own it.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="toggle"><span className="plus">+</span> <span className="minus">-</span></div>
                              </div>
                              <div className="image-area">
                                  <img src="/assets/images/awards/03.webp" width="306" alt="" />
                              </div>
                          </div>
                          <div className="award-item">
                              <div className="award-header">
                                  <div className="left">
                                      <div className="date">Afterwards</div>
                                      <div className="content">
                                          <h3 className="h6 title">A real support period</h3>
                                          <p className="desc">
                                              Seven days on Basic, fourteen on Standard, thirty on Premium. Longer arrangements are available, but the handover is meant to make them optional.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="toggle"><span className="plus">+</span> <span className="minus">-</span></div>
                              </div>
                              <div className="image-area">
                                  <img src="/assets/images/awards/04.webp" width="306" alt="" />
                              </div>
                          </div>
                      </div>
                      <div className="bottom-shape-area square-dot">
                          <img src="/assets/images/about/shape-02.svg" alt="" />
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                  </div>
              </div>
          </section>



          <FaqAccordion
              items={ABOUT_FAQS}
              id="aboutFaq"
              eyebrow="WORKING TOGETHER"
              title={<>What To Expect <br /> From Me</>}
              intro="Communication, access, documentation and what happens when something breaks."
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



          <ProjectEnquiry />
<AboutSchema />
    </>
  );
}
