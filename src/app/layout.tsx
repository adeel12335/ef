import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";

import { BRAND, SITE_URL } from "@/lib/seo";

import Footer from "@/components/layout/Footer";
import GoTop from "@/components/layout/GoTop";
import Header from "@/components/layout/Header";
import Preloader from "@/components/layout/Preloader";
import SearchArea from "@/components/layout/SearchArea";
import TemplateScripts from "@/components/layout/TemplateScripts";

/**
 * Manrope is the brand's supporting website face. Self-hosted via next/font so
 * it is preloaded rather than fetched from Google at render time — the
 * template's own @import for Space Grotesk / Urbanist is superseded by the
 * --font-primary / --font-secondary overrides in brand.css.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

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
  // Brand layer last, so it wins by cascade. Removing this line returns the
  // template to its stock appearance.
  "/assets/css/brand.css",
];

/**
 * Root metadata. The home title stays under ~60 characters and the description
 * under ~155 so neither is cut off in search results; `template` appends the
 * brand to every inner page, which is why those titles are short.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Agents, Automation, Web Development | Emerging Freelancer",
    template: `%s | ${BRAND}`,
  },
  description:
    "I build AI agents, workflow automation, websites and mobile apps that make your business easier to run. Fixed-scope gigs, priced up front.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BRAND,
    url: SITE_URL,
    title: "AI Agents, Automation, Web Development | Emerging Freelancer",
    description:
      "AI agents, workflow automation, websites and mobile apps, Salesforce and AWS — built and supported by one developer.",
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: BRAND }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents, Automation, Web Development | Emerging Freelancer",
    images: ["/brand/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
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
