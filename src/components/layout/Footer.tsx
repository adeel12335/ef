export default function Footer() {
  return (
    <>
      <div className="wpr-footer-area">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="footer-top">
                          <ul>
                              <li><a href="/service">Services</a></li>
                              <li className="square-dot"></li>
                              <li><a href="/#pricing">Gigs</a></li>
                              <li className="square-dot"></li>
                              <li><a href="/work">Work</a></li>
                              <li className="square-dot"></li>
                              <li><a href="/about">About</a></li>
                              <li className="square-dot"></li>
                              <li><a href="/contact">Contact</a></li>
                          </ul>
                      </div>
                      <div className="footer-logo-area square-dot">
                          <a href="/" aria-label="Emerging Freelancer — home">
                              <img src="/assets/images/logo/footer-logo.svg" alt="Emerging Freelancer" />
                          </a>
                          <div className="shape one"><img src="/assets/images/logo/shape-01.svg" alt="" /></div>
                          <div className="shape two"><img src="/assets/images/logo/shape-02.svg" alt="" /></div>
                          <span className="square-shape top-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                      <div className="copyright-area">
                          <div className="left-social-area">
                              <ul>
                                  {/* TODO(content): add verified profiles here (LinkedIn, GitHub,
                                      Upwork …). The template's placeholder links pointed at "#",
                                      so they are left out rather than faked. */}
                                  <li><a href="/contact">Start a project</a></li>
                              </ul>
                          </div>
                          <p className="copyright">
                              © {new Date().getFullYear()} Emerging Freelancer. All rights reserved
                          </p>
                          <button className="scroll-top-btn">
                              Back to Top
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 3.29688L7.64062 3.64062L1.39062 9.89062L2.10938 10.6094L8 4.71875L13.8906 10.6094L14.6094 9.89062L8.35938 3.64062L8 3.29688Z" fill="black" />
                              </svg>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
}
