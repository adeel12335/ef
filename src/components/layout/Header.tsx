"use client";

import { usePathname } from "next/navigation";
import { NAV, collapseId, isActive } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header-style-one">
      <div className="header-top">
        <div className="header-top-inner">
          <div className="left-icon">
            <img src="/assets/images/icon/green-left.svg" alt="" />
          </div>
          <p className="text">
            WE ARE AVAILABLE FOR <span>DECEMBER PROJECTS</span>
          </p>
          <div className="right-icon">
            <img src="/assets/images/icon/green-right.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-style-one-wrapper">
          <div className="left-area square-dot">
            <div className="logo-area">
              <a href="/" className="logo">
                <img src="/assets/images/logo/01.svg" alt="logo" />
              </a>
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
                    <a
                      className="main-element wpr-dropdown-main-element"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <ul className="sub-menu">
                        {item.children.map((child) => (
                          <li key={child.href} className="sub-menu-item">
                            <a href={child.href} className="item-link link1">
                              {child.label}
                            </a>
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
            <a href="/contact" className="wpr-btn btn-primary">
              Start a Project
            </a>
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
                            <a className="main-element" href={item.href}>
                              {item.label}
                            </a>
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
                                <a href={child.href} className="sub-menu">
                                  {child.label}
                                </a>
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
                <a href="/contact" className="wpr-btn btn-primary">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
