import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Emerging Freelancer",
    short_name: "Emerging Freelancer",
    description: "AI agents, automation, websites and mobile apps for small and medium-sized businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f4ef",
    theme_color: "#252623",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
