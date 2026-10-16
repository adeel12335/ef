import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import GoTop from "@/components/layout/GoTop";
import Header from "@/components/layout/Header";
import Preloader from "@/components/layout/Preloader";
import SearchArea from "@/components/layout/SearchArea";
import TemplateScripts from "@/components/layout/TemplateScripts";

/**
 * The template's stylesheets stay in /public and are linked rather than
 * imported: they reference assets by relative url() and are served verbatim,
 * exactly as the original theme expects.
 */
const STYLESHEETS = [
  "/assets/css/plugins/swiper.min.css",
  "/assets/css/plugins/metismenu.css",
  "/assets/css/vendor/bootstrap.min.css",
  "/assets/css/vendor/animate.css",
  "/assets/css/plugins/odometer.css",
  "/assets/css/plugins/fontawesome.min.css",
  "/assets/css/style.css",
];

export const metadata: Metadata = {
  title: {
    default: "Agenio Agency HTML Template",
    template: "%s | Agenio",
  },
  description: "Your Ultimate Solution for Creative Agency",
  icons: {
    icon: "/assets/images/fav.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className="home-bg main-home onepage overflow-x-visible">
        <Preloader />
        <Header />
        {children}
        <Footer />
        <SearchArea />
        <GoTop />
        <TemplateScripts />
      </body>
    </html>
  );
}
