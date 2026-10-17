import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Detail",
};

export default function ServiceDetailsPage() {
  return (
    <>
      <section className="wpr-banner-area breadcrumb">
              <div className="container">
                  <div className="banner-content-area">
                      <h1 className="section-title text-normal wow scaleIn" data-wow-delay=".7s">
                          How A Build <br /> Actually Works
                      </h1>
                      <p className="desc">What gets scoped, what gets delivered, and what you have <br /> in your hands once it is live.</p>
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



          <div className="services-details-banner">
              <div className="container">
                  <div className="section-inner border-1 mb--16">
                      <div className="image-area">
                          <img src="/assets/images/portfolio/02.webp" alt="" />
                      </div>
                      <div className="service-overview">
                          <div className="wpr-service-details-content mb-40 mr-115">
                              <p className="desc mb--45">We help brands find their voice and stand out with clarity and
                                  confidence. From logo design to full brand systems, our approach blends strategy,
                                  creativity, and consistency to create identities that connect emotionally and leave a
                                  lasting impression. Our team builds fast, responsive, and scalable websites tailored to your
                                  business goals. From concept to launch, we focus on clean code, modern design, and seamless
                                  performance across all devices</p>
                              <h2 className="h5 wpr-service-details-title mb-30">Key Feature Of Digital Marketing </h2>
                              <p className="desc">Digital marketing empowers businesses to reach the right audience at the right
                                  time through data-driven strategies and multiple online channels. It allows brands to
                                  increase visibility, engage customers, and build strong relationships using search engines,
                                  social media, content, and paid campaigns. With real-time analytics and measurable results,
                                  digital marketing makes it easy to track performance, optimize campaigns, and maximize
                                  return on investment. Its flexibility and cost-effectiveness help businesses scale faster,
                                  adapt to market changes, and achieve sustainable growth in a competitive digital landscape.
                              </p>
                              <div className="approach-area">
                                  <div className="left">
                                      <h2 className="h5 wpr-service-details-title mb-30">Core Features </h2>
                                      <p className="desc mb--30">Our core feature is a strategic, data-driven approach that
                                          combines creativity with performance-focused execution.</p>
                                      <ul>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                                  <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" fill="#B8E900">
                                                  </path>
                                                  <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round">
                                                  </path>
                                              </svg>
                                              <p>Discovery &amp; Research </p>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                                  <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" fill="#B8E900">
                                                  </path>
                                                  <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round">
                                                  </path>
                                              </svg>
                                              <p>Concept Development</p>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                                  <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" fill="#B8E900">
                                                  </path>
                                                  <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round">
                                                  </path>
                                              </svg>
                                              <p>Refinement &amp; Testing </p>
                                          </li>
                                          <li>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                  <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                                  <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" fill="#B8E900">
                                                  </path>
                                                  <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round">
                                                  </path>
                                              </svg>
                                              <p>Final Implementation</p>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="right">
                                      <img src="/assets/images/service/details-01.webp" alt="" />
                                  </div>
                              </div>
                              <div className="feature-wrapper-area mt--60">
                                  <div className="feature-box">
                                      <div className="top">
                                          <div className="icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                                  <path d="M2.21462 13.8169L13.8169 2.21462C14.6344 1.39709 14.0549 0 12.8986 0H9.88601C4.42645 0 0 4.42645 0 9.88601V12.9014C0 14.0577 1.39709 14.6344 2.21462 13.8169Z" fill="#111111"></path>
                                                  <path d="M13.8169 32.7826L2.21462 21.1803C1.39709 20.3628 0 20.9423 0 22.0958V26.4047C0 31.1503 3.84689 34.9972 8.58971 34.9972H12.9014C14.0577 34.9972 14.6344 33.6001 13.8197 32.7826H13.8169Z" fill="#111111"></path>
                                                  <path d="M34.9972 22.0958C34.9972 20.9395 33.6001 20.3628 32.7826 21.1803L21.1775 32.7854C20.36 33.6029 20.9395 35 22.0958 35H26.4075C31.1503 35 34.9972 31.1531 34.9972 26.4075V22.0958Z" fill="#111111"></path>
                                                  <path d="M21.1831 2.21462L32.7854 13.8197C33.6029 14.6372 35 14.0577 35 12.9042V9.88881C34.9972 4.42645 30.5708 0 25.1112 0H22.0986C20.9423 0 20.3656 1.39709 21.1803 2.21462H21.1831Z" fill="#111111"></path>
                                                  <path d="M27.9166 15.452L19.5396 7.07503C18.4113 5.94672 16.5859 5.94672 15.4576 7.07503L7.08063 15.452C5.95232 16.5803 5.95232 18.4057 7.08063 19.534L15.4576 27.911C16.5859 29.0393 18.4113 29.0393 19.5396 27.911L27.9166 19.534C29.0449 18.4057 29.0449 16.5803 27.9166 15.452ZM22.9134 17.493C22.9134 20.4832 20.4888 22.9078 17.4986 22.9078C14.5084 22.9078 12.0838 20.4832 12.0838 17.493C12.0838 14.5028 14.5084 12.0782 17.4986 12.0782C20.4888 12.0782 22.9134 14.5028 22.9134 17.493Z" fill="#111111"></path>
                                              </svg>
                                          </div>
                                          <p className="text">99% Success Rate </p>
                                      </div>
                                      <div className="bottom">
                                          <p className="desc">
                                              At our Creative Digitalencywe bring yourare ideas lifey beach crafting crafting
                                              eng aging, impactful
                                          </p>
                                      </div>
                                  </div>
                                  <div className="feature-box">
                                      <div className="top">
                                          <div className="icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                                  <path d="M23.616 32.1309V37.884C23.616 39.6027 22.222 41 20.5 41C18.778 41 17.384 39.6027 17.384 37.884V32.1309L20.5 26.7353L23.616 32.1309Z" fill="#111111"></path>
                                                  <path d="M23.616 3.116V8.86912L20.5 14.2647L17.384 8.86912V3.116C17.384 1.39728 18.778 0 20.5 0C21.3594 0 22.14 0.34768 22.7042 0.91184C23.2683 1.476 23.616 2.25664 23.616 3.116Z" fill="#111111"></path>
                                                  <path d="M17.384 8.86912V15.1011L11.9818 11.9818L9.10856 7.00608C8.2492 5.51368 8.7576 3.608 10.25 2.74536C10.742 2.46328 11.2766 2.3288 11.8047 2.3288C12.8838 2.3288 13.9302 2.8864 14.5074 3.8868L17.384 8.86912Z" fill="#111111"></path>
                                                  <path d="M30.75 38.2546C29.2576 39.114 27.3519 38.6023 26.4926 37.1132L23.616 32.1309V25.8989L29.0182 29.0182L31.8914 33.9939C32.7508 35.4863 32.2424 37.392 30.75 38.2546Z" fill="#111111"></path>
                                                  <path d="M15.1011 17.384H8.86912L3.8868 14.5074C2.39768 13.6481 1.886 11.7424 2.74536 10.25C3.32264 9.2496 4.37224 8.692 5.44808 8.692C5.97944 8.692 6.51408 8.82648 7.00608 9.10856L11.9818 11.9818L15.1011 17.384Z" fill="#111111"></path>
                                                  <path d="M38.2546 30.75C37.392 32.2424 35.4863 32.7508 33.9939 31.8914L29.0182 29.0182L25.8989 23.616H32.1309L37.1132 26.4926C38.6023 27.3519 39.114 29.2576 38.2546 30.75Z" fill="#111111"></path>
                                                  <path d="M14.2647 20.5L8.86912 23.616H3.116C1.39728 23.616 0 22.222 0 20.5C0 19.6406 0.34768 18.86 0.91184 18.2958C1.476 17.7317 2.25664 17.384 3.116 17.384H8.86912L14.2647 20.5Z" fill="#111111"></path>
                                                  <path d="M41 20.5C41 22.222 39.6027 23.616 37.884 23.616H32.1309L26.7353 20.5L32.1309 17.384H37.884C39.6027 17.384 41 18.778 41 20.5Z" fill="#111111"></path>
                                                  <path d="M15.1011 23.616L11.9818 29.0182L7.00608 31.8914C5.51368 32.7508 3.608 32.2424 2.74536 30.75C2.46328 30.258 2.3288 29.7234 2.3288 29.1953C2.3288 28.1162 2.8864 27.0698 3.8868 26.4926L8.86912 23.616H15.1011Z" fill="#111111"></path>
                                                  <path d="M37.1132 14.5074L32.1309 17.384H25.8989L29.0182 11.9818L33.9939 9.10856C35.4863 8.2492 37.392 8.7576 38.2546 10.25C39.114 11.7424 38.6023 13.6481 37.1132 14.5074Z" fill="#111111"></path>
                                                  <path d="M17.384 25.8989V32.1309L14.5074 37.1132C13.6481 38.6023 11.7424 39.114 10.25 38.2546C9.2496 37.6774 8.692 36.6278 8.692 35.5519C8.692 35.0206 8.82648 34.4859 9.10856 33.9939L11.9818 29.0182L17.384 25.8989Z" fill="#111111"></path>
                                                  <path d="M31.8914 7.00608L29.0182 11.9818L23.616 15.1011V8.86912L26.4926 3.8868C27.3519 2.39768 29.2576 1.886 30.75 2.74536C32.2424 3.608 32.7508 5.51368 31.8914 7.00608Z" fill="#111111"></path>
                                              </svg>
                                          </div>
                                          <p className="text">Speed Optimized </p>
                                      </div>
                                      <div className="bottom">
                                          <p className="desc">
                                              At our Creative Digitalencywe bring yourare ideas lifey beach crafting crafting
                                              eng aging, impactful
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>



          <section className="wpr-service-extended-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">


                      <div className="service-tags-row">
                          <span className="service-tag">Branding</span>
                          <span className="service-tag">Digital Marketing</span>
                          <span className="service-tag">UI/UX Design</span>
                          <span className="service-tag">Web Development</span>
                          <span className="service-tag active">Strategy</span>
                          <span className="service-tag">SEO</span>
                          <span className="service-tag">Content</span>
                      </div>


                      <div className="service-images-row">
                          <div className="service-img-wrap service-img-wrap--tall">
                              <img src="/assets/images/portfolio/02.webp" alt="Service visual one" />
                              <div className="service-img-label">Creative Direction</div>
                          </div>
                          <div className="service-img-wrap service-img-wrap--short">
                              <img src="/assets/images/service/details-01.webp" alt="Service visual two" />
                              <div className="service-img-label">Brand Systems</div>
                          </div>
                      </div>


                      <div className="service-what-we-do">
                          <div className="service-what-left">
                              <p className="sub-title">WHAT WE DO?</p>
                              <h2 className="section-title second-font font-semi-bold text-normal">We build brands <br /> that resonate.</h2>
                          </div>
                          <div className="service-what-right">
                              <p className="desc">We partner with ambitious brands to craft purposeful identities, design
                                  meaningful digital experiences, and build scalable systems that evolve with your
                                  business. Our work sits at the intersection of strategy, storytelling, and craft — driven
                                  by a deep understanding of what makes people connect with a brand.</p>
                              <p className="desc mt--20">From early-stage startups to global enterprises, we bring the same
                                  rigour and creative intensity to every project. We don't just design — we think,
                                  research, question, and collaborate until the work is truly right.</p>
                          </div>
                      </div>


                      <div className="service-deliverables">
                          <div className="service-deliverables-header">
                              <p className="sub-title">KEY DELIVERABLES</p>
                              <h3 className="h5 second-font font-semi-bold text-normal">Outputs you can count on.</h3>
                          </div>
                          <div className="service-deliverables-grid">
                              <div className="deliverable-card">
                                  <div className="deliverable-number">01</div>
                                  <h4 className="deliverable-title">Brand Identity System</h4>
                                  <p className="desc">Logo suite, color palette, typography, iconography, and usage guidelines — all documented in a comprehensive brand book.</p>
                              </div>
                              <div className="deliverable-card">
                                  <div className="deliverable-number">02</div>
                                  <h4 className="deliverable-title">Digital Strategy Deck</h4>
                                  <p className="desc">A detailed roadmap covering audience research, channel strategy, content pillars, and performance benchmarks.</p>
                              </div>
                              <div className="deliverable-card">
                                  <div className="deliverable-number">03</div>
                                  <h4 className="deliverable-title">UI/UX Design Files</h4>
                                  <p className="desc">Wireframes, prototypes, and high-fidelity screens exported in Figma with developer-ready specifications.</p>
                              </div>
                              <div className="deliverable-card">
                                  <div className="deliverable-number">04</div>
                                  <h4 className="deliverable-title">Launch-Ready Website</h4>
                                  <p className="desc">Fully responsive, performance-optimised website with CMS integration, SEO foundation, and analytics setup.</p>
                              </div>
                          </div>
                      </div>


                      <div className="service-included">
                          <div className="service-included-header">
                              <p className="sub-title">WHAT'S INCLUDED</p>
                              <h3 className="h5 second-font font-semi-bold text-normal">Everything in one place.</h3>
                          </div>
                          <div className="service-included-wrapper">
                              <div className="included-list-col">
                                  <ul className="included-list">
                                      <li>
                                          <span className="included-check">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                              <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                      </span>
                                          Dedicated project manager
                                      </li>
                                      <li>
                                          <span className="included-check">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                              <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                      </span>
                                          Weekly progress updates
                                      </li>
                                      <li>
                                          <span className="included-check">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                              <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                      </span>
                                          2 rounds of revisions
                                      </li>
                                      <li>
                                          <span className="included-check">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                              <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                      </span>
                                          Source files & full ownership
                                      </li>
                                  </ul>
                              </div>
                              <div className="included-list-col">
                                  <ul className="included-list">
                                      <li>
                                          <span className="included-check">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                              <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                      </span>
                                          Post-launch support (30 days)
                                      </li>
                                      <li>
                                          <span className="included-check">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                              <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                      </span>
                                          Analytics & reporting dashboard
                                      </li>
                                      <li>
                                          <span className="included-check">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                              <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                      </span>
                                          Collaborative Figma workspace
                                      </li>
                                      <li>
                                          <span className="included-check">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                              <path d="M19.9428 7.33556C20.2803 8.59518 19.0204 9.94926 18.8596 11.1655C18.6928 12.4268 19.54 14.0595 18.9147 15.1464C18.2894 16.2334 16.4484 16.3141 15.4396 17.0893C14.4672 17.8391 13.9233 19.6055 12.6643 19.9429C11.4054 20.2802 10.051 19.0196 8.83403 18.8591C7.57279 18.6923 5.94002 19.5394 4.85305 18.9141C3.76609 18.2888 3.68532 16.4479 2.91085 15.4389C2.16092 14.4667 0.394673 13.9234 0.0571579 12.6638C-0.28037 11.4042 0.980371 10.0505 1.14109 8.83424C1.30729 7.5732 0.460077 5.94048 1.08543 4.85354C1.71078 3.7666 3.55172 3.68584 4.56057 2.91073C5.53348 2.16065 6.0768 0.394446 7.33579 0.057115C8.59479 -0.280228 9.94981 0.980128 11.1661 1.14084C12.4274 1.30769 14.0601 0.4605 15.1471 1.08584C16.2341 1.71117 16.3148 3.55206 17.0899 4.56089C17.8364 5.53056 19.6046 6.07334 19.9428 7.33556Z" fill="#B8E900"></path>
                                              <path d="M12.8509 8.18213L8.30543 12.7276L6.23932 10.6615" stroke="#111111" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                      </span>
                                          NDA & IP protection agreement
                                      </li>
                                  </ul>
                              </div>
                              <div className="included-cta">
                                  <p className="desc">Ready to get started? Let's talk about your project.</p>
                                  <a href="#contact" className="wpr-btn btn-primary with-icon">
                                      <div className="inner">
                                          <div className="icon">
                                              <span className="fixed-arrow">
                                              <img src="/assets/images/icon/button-arrow-fixed.svg" alt="" />
                                          </span>
                                              <span><img src="/assets/images/icon/button-arrow-2.svg" alt="" /></span>
                                              <span><img src="/assets/images/icon/button-arrow-2.svg" alt="" /></span>
                                              <span><img src="/assets/images/icon/button-arrow-2.svg" alt="" /></span>
                                              <span><img src="/assets/images/icon/button-arrow-2.svg" alt="" /></span>
                                          </div>
                                      </div>
                                      Start a Project
                                  </a>
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



          <section className="wpr-faq-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-content-area">
                          <div className="section-title-area center-style">
                              <p className="sub-title">FAQS</p>
                              <h2 className="section-title second-font font-semi-bold text-normal">FAQs </h2>
                          </div>
                          <div className="accordion-one" id="accordionExample2">

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSix">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                          What if I only need one specific service?
                                      </button>
                                  </h2>
                                  <div id="collapseSix" className="accordion-collapse collapse" role="region" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              Absolutely — you don’t need to book a full package. Whether it’s a brand refresh, a website redesign, or UI/UX for a single product, we tailor our approach to match your exact needs and budget.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSeven">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                          How long does a typical project take?
                                      </button>
                                  </h2>
                                  <div id="collapseSeven" className="accordion-collapse collapse" role="region" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              Project timelines depend on the scope — most branding projects take 3–4 weeks, while full website or product design projects typically range from 6–8 weeks. We’ll confirm an exact timeline during the discovery phase.
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
                                              Yes. We collaborate with clients around the world through remote workshops, video calls, and real-time communication tools — ensuring a smooth process regardless of location.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingNine">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                          Can you handle both design and development?
                                      </button>
                                  </h2>
                                  <div id="collapseNine" className="accordion-collapse collapse" role="region" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              Yes. While our core focus is design, we partner with trusted developers to bring your project to life with high-quality, responsive code — ensuring seamless design-to-development handoff.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTen">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                          How do we start a project with your team?
                                      </button>
                                  </h2>
                                  <div id="collapseTen" className="accordion-collapse collapse" role="region" aria-labelledby="headingTen" data-bs-parent="#accordionExample2">
                                      <div className="accordion-body">
                                          <p className="desc">
                                              Simply reach out through our contact form or email. We’ll schedule a short discovery call to learn about your goals, then provide a proposal tailored to your needs.
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
