import Link from "next/link";
import { LEGAL_PAGES } from "@/lib/legal";
import { socials } from "@/lib/person";

export default function Footer() {
  return (
    <>
      <div className="wpr-footer-area">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="footer-top">
                          <ul>
                              {/* Kept in step with lib/nav.ts — "Gigs" was dropped
                                  from both because a gig is a service with
                                  packages, and the packages are on the service
                                  pages. */}
                              <li><Link href="/service">Services</Link></li>
                              <li className="square-dot"></li>
                              <li><Link href="/work">Work</Link></li>
                              <li className="square-dot"></li>
                              <li><Link href="/answers">Answers</Link></li>
                              <li className="square-dot"></li>
                              <li><Link href="/about">About</Link></li>
                              <li className="square-dot"></li>
                              <li><Link href="/contact">Contact</Link></li>
                          </ul>
                      </div>
                      <div className="footer-logo-area square-dot">
                          <Link href="/" aria-label="Emerging Freelancer — home">
                              <img src="/assets/images/logo/footer-logo.svg" alt="Emerging Freelancer" />
                          </Link>
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
                                  {/* Profiles come from lib/person.ts so the footer links and the
                                      schema sameAs can never disagree. Empty until verified ones
                                      exist — the template's "#" placeholders are not worth faking. */}
                                  {socials.map((profile) => (
                                      <li key={profile.href}>
                                          <a href={profile.href} target="_blank" rel="noopener noreferrer me">
                                              {profile.label}
                                          </a>
                                      </li>
                                  ))}
                                  <li><Link href="/contact">Start a project</Link></li>
                              </ul>
                          </div>
                          {/* The theme's copyright row is a three-column flex
                              layout — left, centre, right, each sized 33%. The
                              legal links were a fourth child with no width,
                              which overflowed the row and wrapped them onto
                              their own line. They belong with the copyright, so
                              they share the centre column instead. */}
                          <div className="ef-footer-centre">
                              <ul className="ef-legal-links">
                                  {LEGAL_PAGES.map((page) => (
                                      <li key={page.slug}>
                                          <Link href={`/${page.slug}`}>{page.nav}</Link>
                                      </li>
                                  ))}
                              </ul>
                              <p className="copyright">
                                  © {new Date().getFullYear()} Emerging Freelancer. All rights reserved
                              </p>
                          </div>
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
