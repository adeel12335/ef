import ProjectEnquiry from "@/components/contact/ProjectEnquiry";
import ContactSchema from "@/components/seo/ContactSchema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Tell me what you’d like to make easier — AI agents, automation, websites or mobile apps. I read every enquiry myself and reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay="1s">
                          Tell Me What You’d <br /> Like To Make Easier
                      </h1>
                      <p className="desc">Describe the problem in your own words — what happens today, <br /> and what you would rather happened instead.</p>
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



          <section className="wpr-get-in-touch inner mb--16">
              <div className="container">
                  <div className="section-inner border-1 square-dot">
                      <div className="row g-5 mb--60">
                          <div className="col-lg-4 col-md-6 col-sm-6 md-mb-24">
                              <div className="box-contact-item text-center effectFade fadeUp">
                                  <i className="icon fa-regular fa-envelope"></i>
                                  <h2 className="h6 title fw-semibold">Get in touch</h2>
                                  <a className="text" href="#contact">
                                      Send an enquiry
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 md-mb-24">
                              <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.1">
                                  <i className="icon fa-regular fa-headset"></i>
                                  <h2 className="h6 title fw-semibold">Fastest route</h2>
                                  <a href="#contact" className="text">
                                      Via the form below
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.2">
                                  <i className="icon fa-regular fa-location-dot"></i>
                                  <h2 className="h6 title fw-semibold">Where I work</h2>
                                  <p className="text">
                                      Remote — Pakistan, worldwide
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* The template shipped an embedded map of a London landmark.
                          Removed rather than replaced — this is a remote practice with
                          no public office address to show. */}
                      <span className="square-shape top-left"></span>
                      <span className="square-shape top-right"></span>
                      <span className="square-shape bottom-left"></span>
                      <span className="square-shape bottom-right"></span>
                  </div>
              </div>
          </section>


          <ProjectEnquiry />
          <ContactSchema />
        </>
  );
}
