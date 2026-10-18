import type { MetadataRoute } from "next";
import { GIGS } from "@/lib/gigs";
import { ANSWERS } from "@/lib/answers";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";

/**
 * Generated from the same data the pages render, so a new gig or project
 * appears in the sitemap automatically rather than being remembered by hand.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/service", priority: 0.9, freq: "monthly" },
    { path: "/work", priority: 0.8, freq: "monthly" },
    { path: "/answers", priority: 0.8, freq: "weekly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
  ];

  return [
    ...core.map((p) => ({
      url: `${SITE_URL}${p.path || "/"}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    // One page per gig — these carry the packages and the prices.
    ...GIGS.map((g) => ({
      url: `${SITE_URL}/service/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    // Answer pages: the long-tail entry points.
    ...ANSWERS.map((a) => ({
      url: `${SITE_URL}/answers/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
