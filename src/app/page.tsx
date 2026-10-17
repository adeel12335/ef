import StructuredData from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <section className="wpr-banner-area">
              <div className="container">
                  <div className="banner-content-area">
                      <div className="top-shape wow fadeIn" data-wow-delay=".7s"></div>
                      <h1 className="section-title">
                          <span className="left-area square-dot wow fadeInLeft" data-wow-delay=".7s">
                              <span className="text">I BUILD</span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                          <span className="arrow-track right">
                                  <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          </span>
                          </span>
                          <span className="mid-icon wow scaleIn" data-wow-delay=".7s">
                              <span className="inner">
                                  <img src="/brand/symbol.svg" width="303" height="303" alt="Emerging Freelancer" />
                              </span>
                          </span>
                          <span className="right-area square-dot wow fadeInRight" data-wow-delay=".7s">
                              <span className="arrow-track right">
                                  <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          </span>
                          <span className="text">AI SYSTEMS</span>
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          </span>
                      </h1>
                      <div className="text-area wow fadeInUp" data-wow-delay="1s">
                          <p className="desc">AI agents, automations, websites, mobile apps and cloud <br /> integrations that make your business easier to run.</p>
                          <div className="button-area">
                              <a href="#pricing" className="wpr-btn btn-white">See my gigs</a>
                              <a href="#services" className="wpr-btn btn-primary with-icon">
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
                                  Explore Services
                              </a>
                          </div>
                      </div>
                      <div className="bg-shape">
                          <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
                      </div>
                      <div className="banner-shape-area">
                          <img src="/assets/images/banner/shape/shape-01.svg" alt="" className="one wow fadeInLeft" data-wow-delay=".2s" />
                          <img src="/assets/images/banner/shape/shape-02.svg" alt="" className="two wow fadeInRight" data-wow-delay=".2s" />
                      </div>
                  </div>
              </div>
          </section>



          {/* The template's "WE’VE TRUSTED BY" client-logo marquee is removed.
              Its twelve marks were Logoipsum placeholders, and a "trusted by"
              strip is a claim about who you have worked for. Restore it from
              git once you have real clients who agree to be named. */}

          <section id="about" className="wpr-about-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-top-area">
                          <div className="section-title-area">
                              <p className="sub-title">ABOUT</p>
                              <h2 className="section-title second-font font-semi-bold text-normal quote">You work with me directly — the person who scopes it also builds and supports it</h2>
                          </div>
                      </div>
                      <div className="about-bottom-content square-dot">
                          <div className="left-area">
                              <ul>
                                  <li className="border-top">
                                      <p className="top-description">ONE DEVELOPER, THREE KINDS OF WORK <br /> — AND THE INTEGRATIONS THAT JOIN THEM UP.</p>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/01.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">AI agents</h2>
                                          <p className="desc">Voice and chat assistants that answer, qualify and book — then hand to a person</p>
                                      </div>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/02.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">Automation</h2>
                                          <p className="desc">Connected workflows, so a lead is entered once and reaches every tool</p>
                                      </div>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/03.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">Web, apps &amp; cloud</h2>
                                          <p className="desc">Websites, mobile apps, Salesforce and AWS — built and wired together</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="right-area">
                              <div className="image-area">
                                  <img src="/assets/images/about/01.webp" width="802" alt="Working remotely with business owners on automation projects" />
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



          <section id="services" className="wpr-services-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-top-area">
                          <div className="section-title-area center-style">
                              <p className="sub-title">SERVICES</p>
                              <h2 className="section-title second-font font-semi-bold text-normal wpr-text-anime-style-1">AI Agents, Automation
                                  &amp; Web Development </h2>
                          </div>
                      </div>
                      <div className="section-bottom-content square-dot">
                          <div className="service-wrapper wow fadeInRight" data-wow-delay=".2s">
                              <div className="image-area">
                                  <img src="/assets/images/service/01.webp" alt="AI agent answering a customer enquiry and offering appointment times" />
                              </div>
                              <div className="content">
                                  <div className="top">
                                      <p className="tag">AI AGENTS &amp; VOICE ASSISTANTS</p>
                                      <p className="desc">Assistants that answer your common questions, qualify a real enquiry, book from your live calendar, and hand to a person the moment they should.</p>
                                  </div>
                                  <div className="mid">
                                      <h2>01</h2>
                                  </div>
                                  <div className="bottom">
                                      <ul>
                                          <li>Voice &amp; chat agents</li>
                                          <li>Call handling &amp; booking</li>
                                          <li>Lead qualification</li>
                                          <li>Human handoff rules</li>
                                      </ul>
                                      <a href="/service-details" className="service-btn-area">
                                          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                          </svg>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="service-wrapper wow fadeInRight" data-wow-delay=".4s">
                              <div className="image-area">
                                  <img src="/assets/images/service/02.webp" alt="Automated workflow moving a lead from a form into a CRM record" />
                              </div>
                              <div className="content">
                                  <div className="top">
                                      <p className="tag">WORKFLOW AUTOMATION</p>
                                      <p className="desc">One intake path for every lead source, so information is entered once, reaches every tool, and follow-up stops depending on somebody remembering.</p>
                                  </div>
                                  <div className="mid">
                                      <h2>02</h2>
                                  </div>
                                  <div className="bottom">
                                      <ul>
                                          <li>CRM sync &amp; de-duplication</li>
                                          <li>Lead routing</li>
                                          <li>Automated follow-up</li>
                                          <li>n8n / Make / Zapier</li>
                                      </ul>
                                      <a href="/service-details" className="service-btn-area">
                                          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                          </svg>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="service-wrapper wow fadeInRight" data-wow-delay=".6s">
                              <div className="image-area">
                                  <img src="/assets/images/service/03.webp" alt="Responsive business website shown on desktop and mobile" />
                              </div>
                              <div className="content">
                                  <div className="top">
                                      <p className="tag">WEBSITES &amp; MOBILE APPS</p>
                                      <p className="desc">Responsive business sites, web applications and mobile apps — each built around one clear action and wired into the systems behind it.</p>
                                  </div>
                                  <div className="mid">
                                      <h2>03</h2>
                                  </div>
                                  <div className="bottom">
                                      <ul>
                                          <li>Business websites</li>
                                          <li>Web &amp; mobile apps</li>
                                          <li>Dashboards &amp; portals</li>
                                          <li>API integrations</li>
                                      </ul>
                                      <a href="/service-details" className="service-btn-area">
                                          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                          </svg>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="service-wrapper wow fadeInRight" data-wow-delay=".8s">
                              <div className="image-area">
                                  <img src="/assets/images/service/04.webp" alt="Salesforce and AWS dashboards configured for a business" />
                              </div>
                              <div className="content">
                                  <div className="top">
                                      <p className="tag">SALESFORCE &amp; AWS</p>
                                      <p className="desc">Your CRM and your cloud, configured and connected: custom objects and flows on Salesforce, and servers, storage and deployments on AWS.</p>
                                  </div>
                                  <div className="mid">
                                      <h2>04</h2>
                                  </div>
                                  <div className="bottom">
                                      <ul>
                                          <li>Salesforce setup &amp; flows</li>
                                          <li>Custom objects &amp; reports</li>
                                          <li>AWS servers &amp; hosting</li>
                                          <li>Deployment &amp; monitoring</li>
                                      </ul>
                                      <a href="/service-details" className="service-btn-area">
                                          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.07812 0L0 1.07812L7.71094 8.78906L0 16.5L1.07812 17.5781L9.32812 9.32812L9.84375 8.78906L9.32812 8.25L1.07812 0Z" fill="black" />
                                          </svg>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <span className="square-shape top-left"></span>
                          <span className="square-shape top-right"></span>
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



          <section className="wpr-project-area mb--16">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="space"></div>
                      <div className="floating-content">
                          <div className="section-title-area center-style">
                              <p className="sub-title bg-white">SELECTED WORK</p>
                              <h2 className="section-title second-font font-semi-bold text-normal">Concept builds that show <br />
                                  <span>how <span><img src="/assets/images/portfolio/sm.webp" width="147" alt="" /></span>
                                  I solve a</span> <br /> real business problem
                              </h2>
                              <p className="desc">These are concept projects, built to demonstrate the approach rather than delivered for a paying client — and labelled that way throughout. No client metrics are claimed. Real case studies will replace them as they become available to publish.</p>
                          </div>
                      </div>
                      <div className="wpr-video-pin">
                          <div className="wpr-video-wrapper">
                              <div className="swiper project-slider">
                                  <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                          <div className="slide feature-project">
                                              <div className="image-area">
                                                  <img src="/assets/images/portfolio/01.webp" alt="Front Desk AI concept build — assistant handling an after-hours enquiry" className="video-img" />
                                                  <img src="/assets/images/portfolio/shape-top-left.svg" alt="" className="shape top-left-shape" />
                                                  <img src="/assets/images/portfolio/shape-top-right.svg" alt="" className="shape top-right-shape" />
                                              </div>
                                              <div className="slide-content">
                                                  <div className="product-intro">
                                                      <div className="top">
                                                          <h2 className="h3 title"><a href="/work-details">Front Desk AI</a>
                                                          </h2>
                                                          <p className="desc">A voice and chat assistant that answers routine enquiries in your own wording, qualifies a real one, offers slots from the live calendar, and hands to a person the moment it should.</p>
                                                      </div>
                                                      <div className="bottom">
                                                          <ul>
                                                              <li>
                                                                  <h3 className="h5">Voice + chat</h3>
                                                                  <p>Channels handled</p>
                                                              </li>
                                                              <li>
                                                                  <h3 className="h5">Live calendar</h3>
                                                                  <p>Booking source</p>
                                                              </li>
                                                              <li>
                                                                  <h3 className="h5">Defined</h3>
                                                                  <p>Human handoff</p>
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="hover_mouse">
                                                  <div className="box"></div>
                                                  <a href="/work-details">
                                                      View project
                                                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z" fill="#98FF03" />
                                                      </svg>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="swiper-slide">
                                          <div className="slide feature-project">
                                              <div className="image-area">
                                                  <img src="/assets/images/portfolio/02.webp" alt="Lead Relay concept build — one intake path feeding a CRM" className="video-img" />
                                                  <img src="/assets/images/portfolio/shape-top-left.svg" alt="" className="shape top-left-shape" />
                                                  <img src="/assets/images/portfolio/shape-top-right.svg" alt="" className="shape top-right-shape" />
                                              </div>
                                              <div className="slide-content">
                                                  <div className="product-intro">
                                                      <div className="top">
                                                          <h3 className="title"><a href="/work-details">Lead Relay</a>
                                                          </h3>
                                                          <p className="desc">One intake path for a website form, a shared inbox and a social inbox. Every enquiry is captured once, matched against existing records, and given a dated follow-up task.</p>
                                                      </div>
                                                      <div className="bottom">
                                                          <ul>
                                                              <li>
                                                                  <h3 className="h5">3 sources</h3>
                                                                  <p>Unified intake</p>
                                                              </li>
                                                              <li>
                                                                  <h3 className="h5">Matched</h3>
                                                                  <p>De-duplication</p>
                                                              </li>
                                                              <li>
                                                                  <h3 className="h5">Dated</h3>
                                                                  <p>Follow-up tasks</p>
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="hover_mouse">
                                                  <div className="box"></div>
                                                  <a href="/work-details">
                                                      View project
                                                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z" fill="#98FF03" />
                                                      </svg>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="swiper-slide">
                                          <div className="slide feature-project">
                                              <div className="image-area">
                                                  <img src="/assets/images/portfolio/03.webp" alt="Clear Path concept build — business site with a single clear action" className="video-img" />
                                                  <img src="/assets/images/portfolio/shape-top-left.svg" alt="" className="shape top-left-shape" />
                                                  <img src="/assets/images/portfolio/shape-top-right.svg" alt="" className="shape top-right-shape" />
                                              </div>
                                              <div className="slide-content">
                                                  <div className="product-intro">
                                                      <div className="top">
                                                          <h3 className="title"><a href="/work-details">Clear Path</a></h3>
                                                          <p className="desc">A responsive business site built around one obvious next step, with a short enquiry form that explains its own errors and delivers straight into the tools the business already works in.</p>
                                                      </div>
                                                      <div className="bottom">
                                                          <ul>
                                                              <li>
                                                                  <h3 className="h5">One action</h3>
                                                                  <p>Per page</p>
                                                              </li>
                                                              <li>
                                                                  <h3 className="h5">3 fields</h3>
                                                                  <p>Enquiry form</p>
                                                              </li>
                                                              <li>
                                                                  <h3 className="h5">CRM + inbox</h3>
                                                                  <p>Delivery target</p>
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </div>

                                              </div>
                                              <div className="hover_mouse">
                                                  <div className="box"></div>
                                                  <a href="/work-details">
                                                      View project
                                                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z" fill="#98FF03" />
                                                      </svg>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="swiper-navigation">
                                      <div className="swiper-btn slider-prev">
                                          <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M14.6094 0L0.859375 13.75L0 14.6484L0.859375 15.5469L14.6094 29.2969L16.4062 27.5L3.55469 14.6484L16.4062 1.79688L14.6094 0Z" fill="#F9FAFB" />
                                          </svg>
                                      </div>
                                      <div className="swiper-btn slider-next">
                                          <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M1.79688 0L0 1.79688L12.8516 14.6484L0 27.5L1.79688 29.2969L15.5469 15.5469L16.4062 14.6484L15.5469 13.75L1.79688 0Z" fill="#F9FAFB" />
                                          </svg>
                                      </div>
                                  </div>
                              </div>
                          </div>
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
                                      <h2 className="section-title second-font font-semi-bold text-normal quote">How a project runs, from the first call to handover</h2>
                                  </div>
                                  <div className="text-area">
                                      <p className="desc">You always know what is happening, what I need from you next, and what you will have at the end of it.</p>
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
                                          <img src="/assets/images/working-process/01.webp" alt="Step one — understanding the business problem on a call" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//01</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Understand</h3>
                                              <p className="desc">We talk through the business problem, the tools already in use, and what a good outcome actually looks like. You get a written summary of the problem as I understand it.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/02.webp" alt="Step two — writing the scope, workflow and fixed price" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//02</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Plan</h3>
                                              <p className="desc">I define the scope, the workflow and what gets delivered — including what is deliberately out of scope — with a timeline and a fixed price attached before anything is built.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/03.webp" alt="Step three — building and testing against realistic scenarios" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//03</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Build and test</h3>
                                              <p className="desc">I build it, share progress at agreed check-ins, and test against realistic scenarios rather than only the happy path. You get working software you can try.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/04.webp" alt="Step four — launch, documentation and handover" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//04</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Launch and support</h3>
                                              <p className="desc">I help put it live, document how it works and what it connects to, and hand it over properly — so ongoing support stays your choice.</p>
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



          <section className="wpr-marquee-area mb--16">
              <div className="container">
                  <div className="section-inner overflow-hidden border-1">
                      <div className="text-wrapper first-text">
                          <div className="text-split scrollingtext-1">
                              <h2 className="title">AI AGENTS • WORKFLOW AUTOMATION • MOBILE APPS • WEBSITES • WEB APPS • API INTEGRATIONS • SALESFORCE • AWS • CRM SYNC • VOICE ASSISTANTS • </h2>
                          </div>
                      </div>
                      <div className="text-wrapper">
                          <div className="text-split scrollingtext-2">
                              <h2 className="title">AI AGENTS • WORKFLOW AUTOMATION • MOBILE APPS • WEBSITES • WEB APPS • API INTEGRATIONS • SALESFORCE • AWS • CRM SYNC • VOICE ASSISTANTS • </h2>
                          </div>
                      </div>
                  </div>
              </div>
          </section>



          <section className="wpr-why-choose-us-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="bottom-shape-area square-dot">
                          <img src="/assets/images/about/shape-02.svg" alt="" />
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                      <div className="wpr-content-area border-1">
                          <div className="row justify-content-center">
                              <div className="col-xl-8 col-lg-10 ">
                                  <div className="content-inner">
                                      <div className="section-title-area center-style">
                                          <p className="sub-title">THE DIFFERENCE</p>
                                          <h2 className="section-title second-font font-semi-bold text-normal wpr-text-anime-style-1">
                                              Why Work With
                                              One Developer </h2>
                                      </div>
                                      <div className="row g-5">
                                          <div className="col-lg-6 col-md-6">
                                              <div className="why-choose-wrapper ml-auto">
                                                  <div className="wrapper-header">
                                                      <h3 className="title second-font font-semi-bold text-normal">An
                                                          <span>Agency</span>
                                                      </h3>
                                                      <img src="/assets/images/why-choose/grid.svg" alt="" className="shape" />
                                                  </div>
                                                  <ul className="wrapper-list">
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          An account manager relays your brief
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          Rotating staff across your project
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          Scope grows, and so does the invoice
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          Documentation is an optional extra
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          You chase updates between demos
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          Support covers a thin handover
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="col-lg-6 col-md-6">
                                              <div className="why-choose-wrapper">
                                                  <div className="wrapper-header two">
                                                      <div className="logo"><img src="/assets/images/why-choose/logo-01-hq.svg" width="160" alt="" /></div>
                                                      <img src="/assets/images/why-choose/grid.svg" alt="" className="shape" />
                                                  </div>
                                                  <ul className="wrapper-list two">
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          You speak to the person building it
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          The same developer start to finish
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          Fixed scope and price agreed up front
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          Documentation ships as a deliverable
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          Written updates at agreed check-ins
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          Handover aims to make me optional
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="bottom-button-area">
                                          <a href="/contact" className="wpr-btn btn-primary">Get Started</a>
                                      </div>
                                  </div>
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



          <section className="wpr-awards-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-title-area">
                          <p className="sub-title">WHAT YOU GET</p>
                          <h2 className="section-title second-font font-semi-bold text-normal wpr-text-anime-style-1">Included In Every Build</h2>
                      </div>
                      <div className="award-accordion-area">
                          <div className="award-item active">
                              <div className="award-header">
                                  <div className="left">
                                      <div className="date">Before we start</div>
                                      <div className="content">
                                          <h3 className="h6 title">Scope in writing</h3>
                                          <p className="desc">
                                              What is being built, what it connects to, and what is deliberately out of scope — agreed in writing, with a fixed price attached, before any work begins. If the scope changes we agree the change and its cost first.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="toggle"><span className="plus">+</span> <span className="minus">-</span></div>
                              </div>
                              <div className="image-area">
                                  <img src="/assets/images/awards/01.webp" width="306" alt="Scope agreed in writing before any work begins" />
                              </div>
                          </div>
                          <div className="award-item">
                              <div className="award-header">
                                  <div className="left">
                                      <div className="date">While building</div>
                                      <div className="content">
                                          <h3 className="h6 title">Progress you can see</h3>
                                          <p className="desc">
                                              Written updates at agreed check-ins rather than silence punctuated by a demo, and working software you can try as it comes together. If something slips you hear about it when I know, not at the deadline.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="toggle"><span className="plus">+</span> <span className="minus">-</span></div>
                              </div>
                              <div className="image-area">
                                  <img src="/assets/images/awards/02.webp" width="306" alt="Progress shared at agreed check-ins during the build" />
                              </div>
                          </div>
                          <div className="award-item">
                              <div className="award-header">
                                  <div className="left">
                                      <div className="date">At handover</div>
                                      <div className="content">
                                          <h3 className="h6 title">Documentation that stands alone</h3>
                                          <p className="desc">
                                              How the system works, what it connects to, which credentials it uses, and what to do when something breaks — written down and walked through with whoever will own it day to day.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="toggle"><span className="plus">+</span> <span className="minus">-</span></div>
                              </div>
                              <div className="image-area">
                                  <img src="/assets/images/awards/03.webp" width="306" alt="Written documentation handed over at the end of a project" />
                              </div>
                          </div>
                          <div className="award-item">
                              <div className="award-header">
                                  <div className="left">
                                      <div className="date">Afterwards</div>
                                      <div className="content">
                                          <h3 className="h6 title">Support as a choice</h3>
                                          <p className="desc">
                                              Thirty days of post-launch support on every build. Beyond that, ongoing maintenance is available if you want it — but the handover is meant to make it optional, not necessary.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="toggle"><span className="plus">+</span> <span className="minus">-</span></div>
                              </div>
                              <div className="image-area">
                                  <img src="/assets/images/awards/04.webp" width="306" alt="Post-launch support period included with every build" />
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



          <section className="wpr-why-choose-us-area2 mb--16">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="section-title-area">
                          <p className="sub-title">HOW I WORK</p>
                          <h2 className="section-title second-font font-semi-bold text-normal">Built Around <br /> Your Actual Process</h2>
                      </div>
                      <div className="bottom-content-area">
                          <div className="why-choose-wrapper2 square-dot wow fadeInRight" data-wow-delay=".2s">
                              <div className="icon">
                                  <img src="/assets/images/why-choose/icon/01.svg" alt="" />
                              </div>
                              <div className="text">
                                  <h3 className="h6 title second-font font-semi-bold text-normal">Problem first, not tech first</h3>
                                  <p className="desc">I start from where your process actually breaks on a busy week, not from a technology looking for a use. Sometimes the right answer is smaller than you expected.</p>
                              </div>
                              <span className="square-shape top-left"></span>
                              <span className="square-shape top-right"></span>
                          </div>
                          <div className="why-choose-wrapper2 square-dot wow fadeInRight" data-wow-delay=".4s">
                              <div className="icon">
                                  <img src="/assets/images/why-choose/icon/02.svg" alt="" />
                              </div>
                              <div className="text">
                                  <h2 className="h6 title second-font font-semi-bold text-normal">Scoped, priced, then built</h2>
                                  <p className="desc">You get a fixed price against a written scope before work starts. No open-ended hourly drift, and no surprise invoice at the end of it.</p>
                              </div>
                              <span className="square-shape top-right"></span>
                          </div>
                          <div className="why-choose-wrapper2 square-dot wow fadeInRight" data-wow-delay=".6s">
                              <div className="icon">
                                  <img src="/assets/images/why-choose/icon/03.svg" alt="" />
                              </div>
                              <div className="text">
                                  <h2 className="h6 title second-font font-semi-bold text-normal">Tested against real scenarios</h2>
                                  <p className="desc">Automations are tested on the awkward cases, not just the happy path — duplicate records, failed steps, and the enquiry that arrives at 2am.</p>
                              </div>
                              <span className="square-shape top-right"></span>
                          </div>
                          <div className="why-choose-wrapper2 square-dot wow fadeInRight" data-wow-delay=".8s">
                              <div className="icon">
                                  <img src="/assets/images/why-choose/icon/04.svg" alt="" />
                              </div>
                              <div className="text">
                                  <h2 className="h6 title second-font font-semi-bold text-normal">Yours to run afterwards</h2>
                                  <p className="desc">Credentials stay in your accounts and are revocable at any time. The documentation is written so your team can keep it running without me.</p>
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



          <section id="pricing" className="wpr-pricing-plans-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-top-area">
                          <div className="section-title-area center-style">
                              <p className="sub-title">GIGS &amp; PRICING</p>
                              <h2 className="section-title second-font font-semi-bold text-normal">Fixed-Scope Gigs <br /> From $120</h2>
                              {/* Answer-first: the direct reply to "how much does this cost",
                                  in the opening lines where answer engines look for it. */}
                              <p className="gig-answer">Projects start at <strong>$120</strong> for a single
                                  automation, landing page or chat widget, <strong>$280</strong> for a full AI
                                  agent or multi-page site, and <strong>$500</strong> for an agent, automation
                                  and site working as one system. Every gig is a fixed scope agreed in writing
                                  before work begins, so the price does not move unless the scope does.</p>
                          </div>
                      </div>
                      <div className="section-mid-area">
                          <div className="pricing-inner square-dot">
                              <div className="pricing-wrapper">
                                  <div className="pricing-header">
                                      <div className="plan-type">
                                          <h3 className="h6">Starter</h3>
                                          <p>Fastest to start</p>
                                      </div>
                                      <h4 className="title h5">One focused job — a single <br /> <span>automation, page or chatbot.</span>
                                      </h4>
                                      <div className="bottom-pricing">
                                          <h4 className="price">$120 <span>/ from</span></h4>
                                          <div className="button-area">
                                              <a href="/contact" className="wpr-btn btn-primary">Start this gig</a>
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
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          One automation, landing page or chat widget
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Connects two tools you already use
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Mobile-responsive and tested
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Delivered in 3–5 working days
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Written handover notes
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          7 days post-delivery support
                                      </li>
                                      </ul>
                                  </div>
                              </div>
                              <span className="square-shape top-left"></span>
                              <span className="square-shape top-right"></span>
                              <span className="square-shape bottom-right"></span>
                          </div>
                          <div className="pricing-inner square-dot">
                              <div className="pricing-wrapper dark">
                                  <div className="pricing-header">
                                      <div className="plan-type">
                                          <h3 className="h6">Growth</h3>
                                          <p>Most asked for</p>
                                      </div>
                                      <h4 className="title h5">A complete piece of work — <br /> <span>an AI agent or a full site.</span>
                                      </h4>
                                      <div className="bottom-pricing">
                                          <h4 className="price">$280 <span>/ from</span></h4>
                                          <div className="button-area">
                                              <a href="/contact" className="wpr-btn btn-primary">Start this gig</a>
                                          </div>
                                      </div>
                                      <div className="shape-one">
                                          <img src="/assets/images/pricing/shape-2.svg" alt="" />
                                      </div>
                                      <div className="shape-two">
                                          <img src="/assets/images/pricing/grid-2.svg" alt="" />
                                      </div>
                                  </div>
                                  <div className="pricing-body">
                                      <ul>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Everything in Starter
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          AI agent or voice assistant set up
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Multi-page website or web app
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          CRM sync with de-duplication
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Calendar and booking integration
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Scenario testing before launch
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Written documentation
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          14 days post-launch support
                                      </li>
                                      </ul>
                                  </div>
                              </div>
                              <span className="square-shape top-left"></span>
                              <span className="square-shape top-right"></span>
                              <span className="square-shape bottom-right"></span>
                          </div>
                          <div className="pricing-inner square-dot">
                              <div className="pricing-wrapper">
                                  <div className="pricing-header">
                                      <div className="plan-type">
                                          <h3 className="h6">Complete</h3>
                                          <p>Everything wired together</p>
                                      </div>
                                      <h4 className="title h5">Agent, automation and site — <br /> <span>working as one system.</span>
                                      </h4>
                                      <div className="bottom-pricing">
                                          <h4 className="price">$500 <span>/ from</span></h4>
                                          <div className="button-area">
                                              <a href="/contact" className="wpr-btn btn-primary">Start this gig</a>
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
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Everything in Growth
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Multi-step workflow automation
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Mobile app or web app build
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Salesforce objects, flows and reports
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          AWS hosting, deployment and monitoring
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Error alerts, not silent failures
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          Handover session
                                      </li>
                                      <li>
                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                          30 days post-launch support
                                      </li>
                                      </ul>
                                  </div>
                              </div>
                              <span className="square-shape top-left"></span>
                              <span className="square-shape top-right"></span>
                              <span className="square-shape bottom-right"></span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>



          <section className="wpr-faq-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-content-area">
                          <div className="section-title-area center-style">
                              <p className="sub-title">FAQS</p>
                              <h2 className="section-title second-font font-semi-bold text-normal">Questions <br /> Before We Start</h2>
                          </div>
                          <div className="accordion-one" id="accordionExample2">

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSix">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                          Can I book a single gig instead of a full project?
                                      </button>
                                  </h2>
                                  <div id="collapseSix" className="accordion-collapse collapse" role="region" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              Yes. The gigs are fixed-scope on purpose — one automation, one agent, one site — so you can start with the piece that hurts most. If what you need sits outside a listed gig, describe it and I will scope it properly instead of forcing it into a package.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSeven">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                          How long does a project take?
                                      </button>
                                  </h2>
                                  <div id="collapseSeven" className="accordion-collapse collapse" role="region" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              It depends on scope, and on how quickly access and feedback come back — those two usually matter more than the build itself. You get an estimated timeline with the written scope, and I would rather give you a realistic date than a flattering one.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingEight">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                          Do you work with clients internationally?
                                      </button>
                                  </h2>
                                  <div id="collapseEight" className="accordion-collapse collapse show" role="region" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              Yes — remote by default. I am based in Pakistan and work with businesses worldwide. Calls are scheduled to suit your hours and the rest runs asynchronously, so neither of us is waiting on the other to be awake.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingNine">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                          Can you work with the tools we already use?
                                      </button>
                                  </h2>
                                  <div id="collapseNine" className="accordion-collapse collapse" role="region" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              Usually, yes. Most business tools expose an API, a webhook or an export, and that is normally enough. The first thing I check is what your tools actually allow, because that shapes what is sensible to build — and if something genuinely cannot be connected, you hear that before work starts.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTen">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                          How do you handle access and sensitive information?
                                      </button>
                                  </h2>
                                  <div id="collapseTen" className="accordion-collapse collapse" role="region" aria-labelledby="headingTen" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              I ask for the narrowest access that does the job, and only when it is needed. Credentials stay in your accounts, granted to me rather than copied, and are yours to revoke at any point including the day the project ends. Nothing sensitive goes into frontend code or a repository.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                          </div>

                          <div className="top-left-shape">
                              <img src="/assets/images/faq/top-left-shape.svg" alt="" />
                          </div>
                          <div className="bg-shape">
                              <img src="/assets/images/faq/grid.svg" alt="" />
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



          <section className="wpr-cta-area">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="section-title-area">
                          <h2 className="section-title">Let’s start <br /> your project</h2>
                          <p className="cta-desc">Tell me what you’d like to make easier. You’ll get a
                              fixed scope and a price before any work begins — and a reply within one
                              business day.</p>
                          <div className="cta-actions">
                              <a href="/contact" className="wpr-btn btn-white">Start a project</a>
                              <a href="#pricing" className="cta-link">See the gigs from $120</a>
                          </div>
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
      <StructuredData />
    </>
  );
}
