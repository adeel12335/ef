/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
