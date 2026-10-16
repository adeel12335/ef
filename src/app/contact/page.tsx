import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay="1s">
                          Get In Touch
                      </h1>
                      <p className="desc">Reach out to our team today and let’s collaborate to turn your ideas <br /> into
                          innovative solutions that truly inspire</p>
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
                                  <h2 className="h6 title fw-semibold">E-mail address</h2>
                                  <a className="text" href="mail:hello@youraiagency.com">
                                      hello@youraiagency.com
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6 md-mb-24">
                              <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.1">
                                  <i className="icon fa-regular fa-headset"></i>
                                  <h2 className="h6 title fw-semibold">Phone number</h2>
                                  <a href="tel:+1(647)5550172" className="text">
                                      +1 (647) 555 0172
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.2">
                                  <i className="icon fa-regular fa-location-dot"></i>
                                  <h2 className="h6 title fw-semibold">Our Location</h2>
                                  <p className="text">
                                      USA, New York – 1060 Str.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="wpr-map box-contact-item">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317859.6089702069!2d-0.075949!3d51.508112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sus!4v1719221598456!5m2!1sen!2sus" height="660" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                          </iframe>
                      </div>
                      <span className="square-shape top-left"></span>
                      <span className="square-shape top-right"></span>
                      <span className="square-shape bottom-left"></span>
                      <span className="square-shape bottom-right"></span>
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
