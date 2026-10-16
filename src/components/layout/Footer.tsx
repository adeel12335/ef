export default function Footer() {
  return (
    <>
      <div className="wpr-footer-area">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="footer-top">
                          <ul>
                              <li><a href="/about">About Us</a></li>
                              <li className="square-dot"></li>
                              <li><a href="/service">Services</a></li>
                              <li className="square-dot"></li>
                              <li><a href="/work">Projects</a></li>
                              <li className="square-dot"></li>
                              <li><a href="#">Pricing Plan</a></li>
                          </ul>
                      </div>
                      <div className="footer-logo-area square-dot">
                          <a href="/"><img src="/assets/images/logo/footer-logo.svg" alt="" /></a>
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
                                  <li><a href="#">Instagram</a></li>
                                  <li><a href="#">Linkedin</a></li>
                                  <li><a href="#">Dribbble</a></li>
                                  <li><a href="#">Behance</a></li>
                              </ul>
                          </div>
                          <p className="copyright">
                              ©
                              <script>
                                  document.write(
                                      new Date().getFullYear()
                                  )
                              </script> Agenio. All Rights Reserved
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
