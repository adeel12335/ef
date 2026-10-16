import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogStandardPage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                          Our Blog
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
                      <div className="row justify-content-between">
                          <div className="col-xl-7 col-lg-8">
                              <div className="tf-grid-layout">
                                  <div className="article-blog style-horizontal hover-img effectFade fadeUp no-div">
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
                                          </a>
                                      </div>
                                  </div>
                                  <div className="article-blog style-horizontal hover-img effectFade fadeUp no-div">
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
                                          </a>
                                      </div>
                                  </div>
                                  <div className="article-blog style-horizontal hover-img effectFade fadeUp no-div">
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
                                          </a>
                                      </div>
                                  </div>
                                  <div className="wd-full effectFade fadeUp no-div">
                                      <ul className="wg-pagination">
                                          <li>
                                              <a href="#" className="pagination-item active">1</a>
                                          </li>
                                          <li>
                                              <a href="#" className="pagination-item">2</a>
                                          </li>
                                          <li>
                                              <a href="#" className="pagination-item">...</a>
                                          </li>
                                          <li>
                                              <a href="#" className="pagination-item"><i className="fa-regular fa-chevron-right"></i></a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="blog-sidebar m-lg-0">
                                  <div className="sidebar-item effectFade fadeUp no-div">
                                      <h2 className="h5 sidebar-title">
                                          Search
                                      </h2>
                                      <form className="form-search">
                                          <fieldset className="text">
                                              <input type="text" placeholder="Search" className="" name="search" tabIndex={0} defaultValue="" required />
                                          </fieldset>
                                          <button type="submit" className="link1">
                                              <i className="fa-light fa-magnifying-glass"></i>
                                          </button>
                                      </form>
                                  </div>
                                  <div className="sidebar-item effectFade fadeUp no-div">
                                      <h2 className="h5 sidebar-title">
                                          Recent posts
                                      </h2>
                                      <div className="list-relatest-post">
                                          <div className="relatest-post-item">
                                              <div className="image">
                                                  <img loading="lazy" width="80" height="80" src="/assets/images/blog/blog-1.jpg" alt="Recenter" />
                                              </div>
                                              <div className="content">
                                                  <h2 className="h6 title text-body-1">
                                                      <a href="/blog-single" className="link1">
                                                          Helve Tica Website Redesign
                                                      </a>
                                                  </h2>
                                                  <p className="time text-body-3 text-white-64">August 23, 2024</p>
                                              </div>
                                          </div>
                                          <div className="relatest-post-item">
                                              <div className="image">
                                                  <img loading="lazy" width="80" height="80" src="/assets/images/blog/blog-2.jpg" alt="Recenter" />
                                              </div>
                                              <div className="content">
                                                  <h2 className="h6 title text-body-1">
                                                      <a href="/blog-single" className="link1">
                                                          X-direct Mobile App
                                                      </a>
                                                  </h2>
                                                  <p className="time text-body-3 text-white-64">August 23, 2024</p>
                                              </div>
                                          </div>
                                          <div className="relatest-post-item">
                                              <div className="image">
                                                  <img loading="lazy" width="80" height="80" src="/assets/images/blog/blog-3.jpg" alt="Recenter" />
                                              </div>
                                              <div className="content">
                                                  <h2 className="h6 title text-body-1">
                                                      <a href="/blog-single" className="link1">
                                                          UIXOR Agency Website
                                                      </a>
                                                  </h2>
                                                  <p className="time text-body-3 text-white-64">August 23, 2024</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="sidebar-item effectFade fadeUp no-div">
                                      <h2 className="h5 sidebar-title">
                                          Category
                                      </h2>
                                      <div className="sidebar-categories">
                                          <div className="item">
                                              <a href="#" className="text-body-1 link1">Developer</a>
                                              <span className="text-body-3 text-white-64">(4)</span>
                                          </div>
                                          <div className="item">
                                              <a href="#" className="text-body-1 link1">Programmer</a>
                                              <span className="text-body-3 text-white-64">(2)</span>
                                          </div>
                                          <div className="item">
                                              <a href="#" className="text-body-1 link1">Web Design</a>
                                              <span className="text-body-3 text-white-64">(1)</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="sidebar-item effectFade fadeUp no-div">
                                      <h2 className="h5 sidebar-title">
                                          Popular tag
                                      </h2>
                                      <div className="list-tags">
                                          <a href="#" className="tags-item fw-semibold">Stakeholder</a>
                                          <a href="#" className="tags-item fw-semibold">Value model</a>
                                          <a href="#" className="tags-item fw-semibold">Data readiness</a>
                                      </div>
                                  </div>
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
                                  <li><a href="#">hello@agenio.com</a></li>
                                  <li><a href="#">(+1) 123 456-7890</a></li>
                              </ul>
                          </div>
                          <div className="location-area">
                              <p className="sub-title">OFFFICES</p>
                              <ul>
                                  <li>
                                      <h2 className="h4">Montréal</h2>
                                      <p>4200 Saint Laurent Blvd, Suite 305 <br /> Montreal, QC H2W 2R2 <br /> Canada</p>
                                  </li>
                                  <li>
                                      <h2 className="h4">Texas</h2>
                                      <p>1920 McKinney Avenue, 7th Floor <br /> Dallas, TX 75201 <br /> United States</p>
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
