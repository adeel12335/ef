import ProjectEnquiry from "@/components/contact/ProjectEnquiry";
import WorkSchema from "@/components/seo/WorkSchema";
import { PROJECTS } from "@/lib/projects";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Work",
  description:
    "Concept builds showing how I approach AI agents, workflow automation and business websites — labelled as concept work, with no client metrics claimed.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                          Concept Builds <br /> That Show The Approach
                      </h1>
                      <p className="desc">Built to demonstrate how I solve a problem rather than delivered for a client — <br /> labelled as such, with no client metrics claimed.</p>
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


          <section className="wpr-project-area mb--16 inner" aria-labelledby="work-title">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="section-top-area">
                          <div className="section-title-area center-style">
                              <p className="sub-title">Selected work</p>
                              <h2 id="work-title" className="section-title second-font font-semi-bold text-normal wpr-text-anime-style-1">Concept Builds</h2>
                              <p className="gig-answer">Each build below demonstrates one of the gigs. They are
                                  concept projects — made to show the approach, not delivered for a paying
                                  client — and no client metrics are claimed. Real case studies will replace
                                  them as they become available to publish.</p>
                          </div>
                      </div>
                      <div className="project-slider-inner">
                          {PROJECTS.map((project) => (
                              <article className="project-wrapper2" key={project.slug}>
                                  <div className="image-area">
                                      <a href={`/work/${project.slug}`} className="over-link" aria-label={`Read ${project.name}`}></a>
                                      <img src={project.image} alt={`${project.name} — ${project.blurb}`} className="video-img" />
                                      <img src="/assets/images/portfolio/shape-top-left-w.svg" alt="" className="shape top-left-shape" />
                                      <img src="/assets/images/portfolio/shape-top-right-w.svg" width="120" alt="" className="shape top-right-shape" />
                                  </div>
                                  <div className="slide-content">
                                      <div className="product-intro">
                                          <div className="top">
                                              <p className="sub-title">{project.kind}</p>
                                              <h3 className="title"><a href={`/work/${project.slug}`}>{project.name}</a></h3>
                                              <p className="desc">{project.blurb}</p>
                                          </div>
                                          <div className="bottom">
                                              <ul className="ef-work-facts">
                                                  <li>
                                                      <h4>Category</h4>
                                                      <p>{project.category}</p>
                                                  </li>
                                                  <li>
                                                      <h4>Built with</h4>
                                                      <p>{project.capabilities.slice(0, 3).join(", ")}</p>
                                                  </li>
                                                  <li>
                                                      <h4>Result</h4>
                                                      <p>{project.result ?? "Not measured"}</p>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="button-area">
                                          <div className="box"></div>
                                          <a href={`/work/${project.slug}`}>
                                              READ THE BUILD
                                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z" fill="#C3E635" />
                                              </svg>
                                          </a>
                                      </div>
                                  </div>
                              </article>
                          ))}
                      </div>
                  </div>
              </div>
          </section>



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
<WorkSchema />
    </>
  );
}
