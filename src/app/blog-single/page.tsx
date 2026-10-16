import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Single",
};

export default function BlogSinglePage() {
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
                          <div className="col-lg-7">
                              <div className="blog-single-wrap">
                                  <div className="image effectFade fadeZoom">
                                      <img loading="lazy" width="777" height="548" src="/assets/images/blog/blog-1.jpg" alt="Image" />
                                  </div>
                                  <div className="meta-list">
                                      <div className="meta-item">
                                          <i className="icon icon-user-solid"></i>
                                          <a href="#" className="link ">Lewis Jones</a>
                                      </div>
                                      <div className="meta-item">
                                          <i className="icon icon-clock-solid"></i>
                                          <a href="#" className="link ">December 23, 2022</a>
                                      </div>
                                      <div className="meta-item">
                                          <i className="icon icon-comments-solid"></i>
                                          <span className="">No Comments</span>
                                      </div>
                                  </div>
                                  <p className="text-body-2 mb--0">
                                      Sed vitae nulla eu velit fringilla hendrerit. Fusce luctus rhoncus blandit.
                                      Nulla vel varius felis. Integer felis
                                      urna, auctor hendrerit ante vitae, scelerisque bibendum quam. Proin libero leo,
                                      pulvinar nec iaculis ac, sodales nec
                                      tellus. Sed ut suscipit erat. Integer aliquam erat eget hendrerit ultricies. In
                                      pharetra eu ante consequat
                                      tincidunt. Curabitur vulputate ligula risus, ac auctor magna vulputate sit amet.
                                      Sed finibus neque neque, euismod
                                      porta felis vehicula at. Donec a sem id augue sagittis tincidunt non sit amet
                                      risus.
                                      <br />
                                      <br />
                                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Lorem ipsum
                                      dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                      ut labore et dolore magna aliqua. Ut
                                      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                      ex ea commodo consequat. Excepteur
                                      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                      anim id est laborum.
                                      <br />
                                  </p>
                                  <div className="blockquote-wrap">
                                      <h2 className="h5 fw-medium text-white">“ A little universe of inspiration — where
                                          passion meets professionalism and creativity
                                          knows no bounds. Exceptional service, stunning products that made me go
                                          'wow' at first glance, and prices that
                                          make you smile! ”
                                      </h2>
                                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M44.375 70.4063V41.0938C44.375 33.0729 47.0729 26.3646 52.4687 20.9688C58.0104 15.4271 65.5208 11.6354 75 9.59375V29.0625C71.3542 30.2292 68.9479 31.6875 67.7812 33.4375C66.6146 35.0417 65.9583 37.0833 65.8125 39.5625H75V70.4063H44.375ZM5 70.4063V41.0938C5 33.0729 7.69792 26.3646 13.0938 20.9688C18.6354 15.4271 26.1458 11.6354 35.625 9.59375V29.0625C32.125 30.2292 29.7187 31.6875 28.4062 33.4375C27.2396 35.0417 26.5833 37.0833 26.4375 39.5625H35.625V70.4063H5Z" fill="#27272A" />
                                      </svg>
                                  </div>
                                  <p className="text-body-2">
                                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                      fugiat nulla pariatur. Excepteur
                                      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                      anim id est laborum.
                                      <br />
                                      <br />
                                      Vestibulum aliquet pulvinar neque sed ullamcorper. Ut vitae fringilla ex. Nam id
                                      dui dignissim, maximus ligula id,
                                      tempus metus. Sed commodo dui vitae dui pulvinar, eu dignissim turpis luctus.
                                      Mauris consectetur leo est, non
                                      finibus tellus posuere quis. Integer mollis felis a tristique facilisis. Nam
                                      convallis est id iaculis mattis.
                                  </p>
                                  <div className="entry-footer">
                                      <div className="tags-links">
                                          <h2 className="h6 text-body-1">Tags:</h2>
                                          <div className="list-tags">
                                              <a href="#" className="tags-item fw-semibold">Stakeholder</a>
                                              <a href="#" className="tags-item fw-semibold">Value model</a>
                                              <a href="#" className="tags-item fw-semibold">Data readiness</a>
                                          </div>
                                      </div>
                                      <div className="d-flex align-items-center gap-12">
                                          <h2 className="h6 text-body-1">Share:</h2>
                                          <div className="tf-social justify-content-center">
                                              <a href="https://x.com/" target="_blank" className="social-item">
                                                  <i className="icon icon-twitter-x"></i>
                                              </a>
                                              <a href="https://www.linkedin.com/" target="_blank" className="social-item">
                                                  <i className="icon icon-linkedin-in"></i>
                                              </a>
                                              <a href="https://github.com/" target="_blank" className="social-item">
                                                  <i className="icon icon-github"></i>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="comment-wrap">
                                      <h2 className="h4 heading fw-semibold">Comments</h2>
                                      <div className="author">
                                          <div className="image">
                                              <img loading="lazy" width="48" height="48" src="/assets/images/section/tes-1.jpg" alt="Image" />
                                          </div>
                                          <div className="content">
                                              <div className="info">
                                                  <h2 className="h6 name fw-semibold text-body-1">
                                                      <a className="link1" href="#">Davies</a>
                                                  </h2>
                                                  <p className="time text-body-3 text-white-64">July 8, 2025 at 7:35 am
                                                  </p>
                                              </div>
                                              <a href="#post-comment" className="reply link1">Reply<i className="icon icon-arrow-top-right"></i></a>
                                              <p className="desc">“ Sed vitae velit erat. Pellentesque lobortis felis vel
                                                  mi congue, in
                                                  sollicitudin orci tincidunt. Praesent turpis justo, posuere eget
                                                  justo sit
                                                  amet, efficitur suscipit elit. “</p>
                                          </div>
                                      </div>
                                      <div className="author type-reply">
                                          <div className="image">
                                              <img loading="lazy" width="48" height="48" src="/assets/images/section/tes-2.jpg" alt="Image" />
                                          </div>
                                          <div className="content">
                                              <div className="info">
                                                  <h2 className="h6 name fw-semibold text-body-1">
                                                      <a className="link1" href="#">Shin</a>
                                                  </h2>
                                                  <p className="time text-body-3 text-white-64">July 8, 2025 at 7:35 am
                                                  </p>
                                              </div>
                                              <a href="#post-comment" className="reply link1">Reply<i className="icon icon-arrow-top-right"></i></a>
                                              <p className="desc">"Thank you"</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="post-comment" id="post-comment">
                                      <h2 className="h4 heading fw-semibold">Post a Comments</h2>
                                      <p className="text text-body-1">Your email address will not be published. Required
                                          fields are marked *</p>
                                      <form className="form-cta style-2">
                                          <div className="form-content">
                                              <fieldset className="">
                                                  <label className="fw-semibold text-body-3 mb-12">Your Name</label>
                                                  <input className="" type="text" placeholder="Enter your full name" required />
                                              </fieldset>
                                              <fieldset className="">
                                                  <label className="fw-semibold text-body-3 mb-12">Your Email</label>
                                                  <input className="" type="email" placeholder="Enter your email" required />
                                              </fieldset>
                                              <fieldset className="">
                                                  <label className="fw-semibold text-body-3 mb-12">Messenger</label>
                                                  <textarea name="text" className="rounded-0"></textarea>
                                              </fieldset>
                                          </div>
                                          <div className="form-action">
                                              <button type="submit" className="wpr-btn btn-primary w-100">Submit Message</button>
                                          </div>
                                      </form>
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
                                          <button type="submit" className="link1 text-white">
                                              <i className="icon icon-search-solid"></i>
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
