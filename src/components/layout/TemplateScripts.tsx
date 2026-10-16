"use client";

import { useEffect } from "react";

/**
 * The template ships as a jQuery/GSAP bundle that expects a classic document:
 * the scripts run in a fixed order and `main.js` wires everything up on
 * `$(document).ready()` plus one `$(window).on("load")` handler.
 *
 * React mounts the markup first, so the scripts are injected after hydration
 * (otherwise jQuery would mutate nodes React is still about to render) and the
 * already-fired `load` event is replayed once so the preloader hands over.
 */
const SCRIPTS = [
  "/assets/js/plugins/jquery.min.js",
  "/assets/js/plugins/bootstrap.min.js",
  "/assets/js/plugins/metismenu.js",
  "/assets/js/vendor/jqueryui.js",
  "/assets/js/vendor/waypoint.js",
  "/assets/js/plugins/swiper.js",
  "/assets/js/plugins/gsap.min.js",
  "/assets/js/plugins/scrolltigger.js",
  "/assets/js/plugins/smoothscroll.js",
  "/assets/js/vendor/split-text.js",
  "/assets/js/vendor/split-type.js",
  "/assets/js/vendor/wow.js",
  "/assets/js/vendor/text-plugin.js",
  "/assets/js/plugins/odometer.js",
  "/assets/js/plugins/contact-form.js",
  "/assets/js/main.js",
];

let bootstrapped = false;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.templateScript = src;
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () =>
      reject(new Error(`Failed to load ${src}`)),
    );
    document.body.appendChild(script);
  });
}

export default function TemplateScripts() {
  useEffect(() => {
    if (bootstrapped) return;
    bootstrapped = true;

    (async () => {
      try {
        for (const src of SCRIPTS) {
          await loadScript(src);
        }
        window.dispatchEvent(new Event("load"));
      } catch (error) {
        bootstrapped = false;
        console.error("[template scripts]", error);
      }
    })();
  }, []);

  return null;
}
