import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grid 3",
};

export default function BlogThreeColumnsPage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                          Blog Three Column
                      </h1>
                      <p className="desc">Insights, ideas, and stories shaped by experience. <br /> Clear content with purpose and
                          impact.</p>
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


          <section className="wpr-blog-area mb--16">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="tf-grid-layout md-col-2 xl-col-3">
                          <div className="article-blog hover-img effectFade fadeUp no-div">
                              <a href="/blog-single" className="blog-image img-style">
                                  <img loading="lazy" width="426" height="307" src="/assets/images/blog/blog-1.jpg" alt="Image" />
                              </a>
                              <div className="blog-content">
                                  <div className="infor">
                                      <p className="infor_sub text-secondary">
                                          Website Design
                                      </p>
                                      <h2 className="h6 fw-semibold">
                                          <a href="/blog-single" className="link1 infor_name">
                                              Helve Tica Website Redesign
                                          </a>
                                      </h2>
                                  </div>
                                  <a href="/blog-single" className="tf-btn-2">
                                      Read more
                                      <i className="icon icon-arrow-top-right"></i>
                                  </a>
                              </div>
                          </div>
                          <div className="article-blog hover-img effectFade fadeUp no-div" data-delay="0.1">
                              <a href="/blog-single" className="blog-image img-style">
                                  <img loading="lazy" width="426" height="307" src="/assets/images/blog/blog-2.jpg" alt="Image" />
                              </a>
                              <div className="blog-content">
                                  <div className="infor">
                                      <p className="infor_sub text-secondary">
                                          Website Design
                                      </p>
                                      <h2 className="h6 fw-semibold">
                                          <a href="/blog-single" className="link1 infor_name">
                                              Helve Tica Website Redesign
                                          </a>
                                      </h2>
                                  </div>
                                  <a href="/blog-single" className="tf-btn-2">
                                      Read more
                                      <i className="icon icon-arrow-top-right"></i>
                                  </a>
                              </div>
                          </div>
                          <div className="article-blog hover-img effectFade fadeUp no-div" data-delay="0.2">
                              <a href="/blog-single" className="blog-image img-style">
                                  <img loading="lazy" width="426" height="307" src="/assets/images/blog/blog-3.jpg" alt="Image" />
                              </a>
                              <div className="blog-content">
                                  <div className="infor">
                                      <p className="infor_sub text-secondary">
                                          Website Design
                                      </p>
                                      <h2 className="h6 fw-semibold">
                                          <a href="/blog-single" className="link1 infor_name">
                                              Helve Tica Website Redesign
                                          </a>
                                      </h2>
                                  </div>
                                  <a href="/blog-single" className="tf-btn-2">
                                      Read more
                                      <i className="icon icon-arrow-top-right"></i>
                                  </a>
                              </div>
                          </div>
                          <div className="article-blog hover-img effectFade fadeUp no-div">
                              <a href="/blog-single" className="blog-image img-style">
                                  <img loading="lazy" width="426" height="307" src="/assets/images/blog/blog-1.jpg" alt="Image" />
                              </a>
                              <div className="blog-content">
                                  <div className="infor">
                                      <p className="infor_sub text-secondary">
                                          Website Design
                                      </p>
                                      <h2 className="h6 fw-semibold">
                                          <a href="/blog-single" className="link1 infor_name">
                                              Helve Tica Website Redesign
                                          </a>
                                      </h2>
                                  </div>
                                  <a href="/blog-single" className="tf-btn-2">
                                      Read more
                                      <i className="icon icon-arrow-top-right"></i>
                                  </a>
                              </div>
                          </div>
                          <div className="article-blog hover-img effectFade fadeUp no-div" data-delay="0.1">
                              <a href="/blog-single" className="blog-image img-style">
                                  <img loading="lazy" width="426" height="307" src="/assets/images/blog/blog-2.jpg" alt="Image" />
                              </a>
                              <div className="blog-content">
                                  <div className="infor">
                                      <p className="infor_sub text-secondary">
                                          Website Design
                                      </p>
                                      <h2 className="h6 fw-semibold">
                                          <a href="/blog-single" className="link1 infor_name">
                                              Helve Tica Website Redesign
                                          </a>
                                      </h2>
                                  </div>
                                  <a href="/blog-single" className="tf-btn-2">
                                      Read more
                                      <i className="icon icon-arrow-top-right"></i>
                                  </a>
                              </div>
                          </div>
                          <div className="article-blog hover-img effectFade fadeUp no-div" data-delay="0.2">
                              <a href="/blog-single" className="blog-image img-style">
                                  <img loading="lazy" width="426" height="307" src="/assets/images/blog/blog-3.jpg" alt="Image" />
                              </a>
                              <div className="blog-content">
                                  <div className="infor">
                                      <p className="infor_sub text-secondary">
                                          Website Design
                                      </p>
                                      <h2 className="h6 fw-semibold">
                                          <a href="/blog-single" className="link1 infor_name">
                                              Helve Tica Website Redesign
                                          </a>
                                      </h2>
                                  </div>
                                  <a href="/blog-single" className="tf-btn-2">
                                      Read more
                                      <i className="icon icon-arrow-top-right"></i>
                                  </a>
                              </div>
                          </div>
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
    </>
  );
}
