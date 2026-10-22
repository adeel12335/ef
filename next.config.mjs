import legacyRedirects from "./legacy-redirects.json" with { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Trailing-slash cleanup is done in middleware so /services/ can jump
  // straight to /service instead of stopping at /services first.
  skipTrailingSlashRedirect: true,

  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/services", destination: "/service", permanent: true },
      { source: "/our-portfolio", destination: "/work", permanent: true },
      { source: "/testimonials", destination: "/about", permanent: true },
      { source: "/work-details", destination: "/work", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/feed", destination: "/answers", permanent: true },
      { source: "/:path+/feed", destination: "/answers", permanent: true },
      { source: "/category/:path*", destination: "/answers", permanent: true },
      { source: "/tag/:path*", destination: "/answers", permanent: true },
      { source: "/author", destination: "/about", permanent: true },
      { source: "/author/:path*", destination: "/about", permanent: true },
      { source: "/page/:n(\\d+)", destination: "/", permanent: true },
      // URLs from the domain's earlier WordPress site that Google still knows.
      // Each points at the closest page on this site, so they stop showing as
      // 404s in Search Console and pass on whatever links they had.
      ...legacyRedirects,
    ];
  },

  // `next dev` only trusts `localhost` as an origin by default: the HMR
  // WebSocket upgrade is dropped for any other Origin, which leaves the dev
  // client unable to connect and — because hydration never completes —
  // `TemplateScripts` never runs and the preloader stays on screen forever.
  // Listing the addresses this machine is reachable on makes the LAN and
  // Hyper-V/WSL URLs behave the same as localhost.
  allowedDevOrigins: [
    "127.0.0.1",
    "172.28.176.1",     // vEthernet (Default Switch)
    "192.168.100.195",  // Wi-Fi
    "192.168.*.*",      // other addresses the Wi-Fi/LAN DHCP may hand out
  ],
};

export default nextConfig;
