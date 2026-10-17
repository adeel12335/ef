import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Detail",
};

export default function WorkDetailsPage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                          Inside The Build
                      </h1>
                      <p className="desc">The problem, the constraints, how it was put together, <br /> and what it does once it is running.</p>
                      <div className="bg-shape">
                          <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
                      </div>
                      <div className="banner-shape-area">
                          <img src="/assets/images/banner/shape/shape-01.svg" width="200" alt="" className="one wow fadeInLeft" data-wow-delay=".5s" />
                          <img src="/assets/images/banner/shape/shape-02.svg" width="220" alt="" className="two wow fadeInLeft" data-wow-delay=".5s" />
                      </div>
                  </div>
              </div>
          </section>



          <div className="work-details-banner">
              <div className="container">
                  <div className="section-inner border-1 mb--16">
                      <div className="image-area">
                          <img src="/assets/images/portfolio/01.webp" alt="" />
                      </div>
                  </div>
                  <div className="text-area border-1 bg-white mb--16">
                      <div className="left-content">
                          <p className="desc">We aimed to bring Vero’s vision of authentic social interaction to life by focusing
                              on seamless design and user privacy.</p>
                      </div>
                      <div className="right-content">
                          <h2 className="h6">This project reinforced the importance of building user-centered features that offer value
                              beyond aesthetics, especially in social networking. The app’s launch exceeded initial user
                              growth targets, and the client received positive feedback on the app’s intuitive design and
                              ad-free experience.</h2>
                      </div>
                  </div>
                  <div className="image-area-2 mb--16">
                      <div className="image"><img src="/assets/images/portfolio/04.webp" width="696" alt="" /></div>
                      <div className="image"><img src="/assets/images/portfolio/05.webp" width="696" alt="" /></div>
                      <div className="image"><img src="/assets/images/portfolio/06.webp" alt="" /></div>
                  </div>
                  <div className="text-area border-1 bg-white mb--16">
                      <div className="left-content">
                          <p className="desc">User experience focus</p>
                      </div>
                      <div className="right-content">
                          <h2 className="h6">One challenge was ensuring privacy controls while maintaining an easy-to-use interface. Our team
                              developed an accessible settings menu that lets users control visibility without overwhelming
                              them.</h2>
                          <p className="desc">Designing an ad-free experience meant creating engaging content flows without
                              traditional ads. We achieved this by focusing on rich, visual content and user-driven discovery
                              options.</p>
                      </div>
                  </div>
                  <div className="image mb--16">
                      <img src="/assets/images/portfolio/07.webp" alt="" />
                  </div>
                  <div className="text-area border-1 bg-white mb--16">
                      <div className="left-content">
                          <p className="desc">Project research</p>
                      </div>
                      <div className="right-content">
                          <h2 className="h6">We mapped audience behavior, reviewed competitor patterns, and audited product flows to
                              identify the features that matter most for engagement and retention.</h2>
                          <p className="desc">This research phase helped align business goals with user expectations, giving the
                              design and development team a clear direction before execution.</p>
                      </div>
                  </div>
                  <div className="image mb--16">
                      <img src="/assets/images/portfolio/08.webp" alt="" />
                  </div>
                  <div className="text-area border-1 bg-white mb--16">
                      <div className="left-content">
                          <p className="desc">Project result</p>
                      </div>
                      <div className="right-content">
                          <h2 className="h6">The final release delivered a faster and cleaner experience, with higher task completion
                              and improved user confidence across key journeys.</h2>
                          <p className="desc">By combining clear navigation, accessible interactions, and performance-focused
                              front-end work, the product now supports sustainable growth and better long-term adoption.</p>
                      </div>
                  </div>
                  <div className="image-area-2 mb--16">
                      <div className="image"><img src="/assets/images/portfolio/09.webp" width="696" alt="" /></div>
                      <div className="image"><img src="/assets/images/portfolio/10.webp" width="696" alt="" /></div>
                  </div>
              </div>
          </div>



          <section className="wpr-testimonials-area mb--16">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="swiper testimonials-image-slider">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="image-area">
                                      <img src="/assets/images/testimonials/01.webp" alt="" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="image-area">
                                      <img src="/assets/images/testimonials/02.webp" alt="" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="image-area">
                                      <img src="/assets/images/testimonials/03.webp" alt="" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="image-area">
                                      <img src="/assets/images/testimonials/01.webp" alt="" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="image-area">
                                      <img src="/assets/images/testimonials/02.webp" alt="" />
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="image-area">
                                      <img src="/assets/images/testimonials/03.webp" alt="" />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="swiper testimonials-content-slider">
                          <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                  <div className="testimonials-content">
                                      <div className="top">
                                          <h2 className="title h5">Beyond expectations</h2>
                                          <p className="desc">“Working with this team completely transformed how we present our
                                              product. Their attention to detail and understanding of user experience helped
                                              us increase engagement beyond expectations.”</p>
                                      </div>
                                      <div className="author-area">
                                          <h3 className="h6">Daniel Lewis</h3>
                                          <p>Founder, Lunaris Coffee Co.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonials-content">
                                      <div className="top">
                                          <h2 className="title h5">Professional experience</h2>
                                          <p className="desc">“They delivered a sophisticated, modern brand that aligns perfectly
                                              with our values. Communication was seamless from start to finish — truly a
                                              professional experience.”</p>
                                      </div>
                                      <div className="author-area">
                                          <h3 className="h6">Michael Roberts</h3>
                                          <p>CEO, Axis Legal Group</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonials-content">
                                      <div className="top">
                                          <h2 className="title h5">Genuinely love</h2>
                                          <p className="desc">“Their design process is smart, collaborative, and strategic. They
                                              understood our vision quickly and turned it into a product our users genuinely
                                              love.”</p>
                                      </div>
                                      <div className="author-area">
                                          <h3 className="h6">Jason Ward</h3>
                                          <p>Product Manager, Brightly Studio</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonials-content">
                                      <div className="top">
                                          <h2 className="title h5">Beyond expectations</h2>
                                          <p className="desc">“Working with this team completely transformed how we present our
                                              product. Their attention to detail and understanding of user experience helped
                                              us increase engagement beyond expectations.”</p>
                                      </div>
                                      <div className="author-area">
                                          <h3 className="h6">Daniel Lewis</h3>
                                          <p>Founder, Lunaris Coffee Co.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonials-content">
                                      <div className="top">
                                          <h2 className="title h5">Professional experience</h2>
                                          <p className="desc">“They delivered a sophisticated, modern brand that aligns perfectly
                                              with our values. Communication was seamless from start to finish — truly a
                                              professional experience.”</p>
                                      </div>
                                      <div className="author-area">
                                          <h3 className="h6">Michael Roberts</h3>
                                          <p>CEO, Axis Legal Group</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="swiper-slide">
                                  <div className="testimonials-content">
                                      <div className="top">
                                          <h2 className="title h5">Genuinely love</h2>
                                          <p className="desc">“Their design process is smart, collaborative, and strategic. They
                                              understood our vision quickly and turned it into a product our users genuinely
                                              love.”</p>
                                      </div>
                                      <div className="author-area">
                                          <h3 className="h6">Jason Ward</h3>
                                          <p>Product Manager, Brightly Studio</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="swiper-navigation">
                          <div className="swiper-btn swiper-btn-prev">
                              <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.6094 0L0.859375 13.75L0 14.6484L0.859375 15.5469L14.6094 29.2969L16.4062 27.5L3.55469 14.6484L16.4062 1.79688L14.6094 0Z" fill="#F9FAFB" />
                              </svg>
                          </div>
                          <div className="swiper-btn swiper-btn-next">
                              <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.79688 0L0 1.79688L12.8516 14.6484L0 27.5L1.79688 29.2969L15.5469 15.5469L16.4062 14.6484L15.5469 13.75L1.79688 0Z" fill="#F9FAFB" />
                              </svg>
                          </div>
                      </div>
                      <div className="top-left-shape">
                          <img src="/assets/images/testimonials/top-left-shape.svg" alt="" />
                      </div>
                  </div>
              </div>
          </section>



          <section className="wpr-next-project-area mb--16">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="section-top-area">
                          <div className="section-title-area center-style">
                              <p className="sub-title">Project</p>
                              <h2 className="section-title second-font font-semi-bold text-normal">Next Project
                              </h2>
                          </div>
                      </div>
                      <div className="section-mid-area">
                          <div className="slide feature-project">
                              <div className="image-area">
                                  <img src="/assets/images/portfolio/02.webp" alt="" className="video-img" />
                                  <img src="/assets/images/portfolio/shape-top-left.svg" alt="" className="shape top-left-shape" />
                                  <img src="/assets/images/portfolio/shape-top-right.svg" alt="" className="shape top-right-shape" />
                              </div>
                              <div className="slide-content">
                                  <div className="product-intro">
                                      <div className="top">
                                          <h2 className="h3 title"><a href="/work-details">Axis Legal Website</a>
                                          </h2>
                                          <p className="desc">We streamlined user flows, refreshed the visual
                                              language, and introduced accessibility-focused design components
                                              to improve usability.</p>
                                      </div>
                                      <div className="bottom">
                                          <ul>
                                              <li>
                                                  <h3 className="h5">40%</h3>
                                                  <p>Faster completion</p>
                                              </li>
                                              <li>
                                                  <h3 className="h5">+25%</h3>
                                                  <p>Faster completion</p>
                                              </li>
                                              <li>
                                                  <h3 className="h5">4.8</h3>
                                                  <p>Star rating</p>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="hover_mouse">
                                  <div className="box"></div>
                                  <a href="/work-details">
                                      View Projects
                                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z" fill="#C3E635" />
                                      </svg>
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
