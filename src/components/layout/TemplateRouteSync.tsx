"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Keeps the template's jQuery/GSAP widgets alive across client-side navigation.
 *
 * The bundle was written for a classic document: `main.js` collects its nodes
 * once with `document.querySelectorAll` and binds listeners straight to them.
 * After a soft navigation those nodes are gone, so anything interactive on the
 * new page would be inert.
 *
 * Most of the bundle needs no help, which is why the list below is short:
 *
 *   - WOW runs with `live: true`, so its MutationObserver animates newly
 *     mounted nodes on its own. Calling `new WOW().init()` again would add a
 *     second observer, not fix anything.
 *   - The header and footer are rendered by the root layout and never unmount,
 *     so the sticky header, the ticker and the back-to-top button keep the
 *     handlers they were given on first load.
 *   - The preloader deletes itself from the DOM when it finishes, so it cannot
 *     reappear on navigation.
 *
 * Re-running `rdJs.methods()` wholesale is the thing to avoid: it would bind
 * another `$(window).on("scroll")` handler and build a second Swiper on every
 * navigation, so the site would get slower the more the visitor clicked.
 */

/**
 * Initialisers that only ever touch page content, never the layout. Each is
 * safe to run again because the nodes it binds to are new.
 */
const PAGE_INITS = [
  "swiperActivation", // .project-slider on the home page
  "awardAccordion", // .award-item, the "how I work" accordion on /about
  "featureProjectHover", // .feature-project hover treatment
  "textTitleAnimation__1", // .wpr-text-anime-style-1 headings
] as const;

type Rd = Record<string, undefined | (() => void)>;

declare global {
  interface Window {
    rdJs?: Rd;
    ScrollTrigger?: {
      getAll: () => { trigger: Element | null; kill: () => void }[];
      refresh: () => void;
    };
  }
}

export default function TemplateRouteSync() {
  const pathname = usePathname();
  // The first render is the document load main.js already handles itself.
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    const rd = window.rdJs;
    if (!rd) return; // scripts still loading; the next navigation will catch up

    // ScrollTriggers created for the previous page point at detached nodes.
    // Only those are killed — anything still in the document, such as a
    // trigger belonging to the header, is left alone.
    const st = window.ScrollTrigger;
    st?.getAll().forEach((trigger) => {
      const el = trigger.trigger;
      if (el && !document.contains(el)) trigger.kill();
    });

    for (const name of PAGE_INITS) {
      try {
        rd[name]?.();
      } catch (error) {
        // One broken widget must not stop the rest from initialising.
        console.error(`[template route sync] ${name}`, error);
      }
    }

    // Positions shifted when the new page replaced the old one.
    st?.refresh();
  }, [pathname]);

  return null;
}
