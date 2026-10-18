"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, collapseId, isActive } from "@/lib/nav";

/** Availability ticker copy — what I am currently taking on. */
const TICKER = [
  "AVAILABLE FOR NEW PROJECTS",
  "AI AGENTS",
  "VOICE ASSISTANTS",
  "WORKFLOW AUTOMATION",
  "MOBILE APPLICATIONS",
  "WEBSITES & WEB APPS",
  "API INTEGRATIONS",
  "SALESFORCE",
  "AWS",
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header-style-one">
      {/* Availability ticker. The track is rendered twice and the pair scrolls
          by exactly one track width, which makes the loop seamless. The copy is
          one string so the two tracks can never drift apart. aria-hidden on the
          duplicate stops screen readers reading the list twice. */}
      <div className="header-top">
        <div className="header-top-inner">
          <div className="ef-ticker">
            <div className="ef-ticker__track">
              {TICKER.map((item) => (
                <span className="ef-ticker__item" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="ef-ticker__track" aria-hidden="true">
              {TICKER.map((item) => (
                <span className="ef-ticker__item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-style-one-wrapper">
          <div className="left-area square-dot">
            <div className="logo-area">
              <Link href="/" className="logo">
                <img src="/assets/images/logo/01.svg" alt="Emerging Freelancer" />
              </Link>
            </div>
            <span className="square-shape top-left"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-right"></span>
          </div>

          <nav className="main-nav-area">
            <ul className="list-unstyled wpr-desktop-menu">
              {NAV.map((item) => {
                const active = isActive(item, pathname);
                const classes = [
                  "menu-item",
                  item.children ? "has-dropdown" : "",
                  active ? "active" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <li key={item.label} className={classes}>
                    <Link
                      className="main-element wpr-dropdown-main-element"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="sub-menu">
                        {item.children.map((child) => (
                          <li key={child.href} className="sub-menu-item">
                            <Link href={child.href} className="item-link link1">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="button-area-start square-dot">
            <Link href="/contact" className="wpr-btn btn-primary">
              Start a Project
            </Link>
            <div
              className="menu-btn d-flex d-lg-none d-md-flex d-sm-flex"
              id="menu-btn"
            >
              <span className="line one"></span>
              <span className="line two"></span>
            </div>
            <span className="square-shape top-left"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-right"></span>
          </div>

          <div id="side-bar" className="side-bar">
            <div className="sidebar-inner">
              <div className="mobile-menu-main">
                <nav className="nav-main mainmenu-nav">
                  <ul
                    className="list-unstyled wpr-desktop-menu"
                    id="mobile-menu"
                  >
                    {NAV.map((item) => {
                      if (!item.children) {
                        return (
                          <li key={item.label} className="menu-item">
                            <Link className="main-element" href={item.href}>
                              {item.label}
                            </Link>
                          </li>
                        );
                      }
                      const id = collapseId(item.label);
                      return (
                        <li key={item.label} className="menu-item">
                          <button
                            className="main-element collapsed w-100 text-start bg-transparent border-0"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${id}`}
                            aria-expanded="false"
                            aria-controls={id}
                          >
                            {item.label}
                          </button>
                          <ul
                            id={id}
                            className="collapse list-unstyled ps-3"
                            data-bs-parent="#mobile-menu"
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link href={child.href} className="sub-menu">
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="button-area">
                <Link href="/contact" className="wpr-btn btn-primary">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
