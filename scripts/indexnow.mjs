/**
 * IndexNow ping: tells Bing (and through it ChatGPT search), Yandex, Seznam and
 * Naver that the site's pages have changed, instead of waiting for a recrawl.
 * Google does not use IndexNow.
 *
 * Runs after `next build` on Vercel production deploys only. It submits every
 * URL in the live sitemap. It never fails the build: a ping that does not go
 * through is logged and skipped.
 *
 * Manual run:  node scripts/indexnow.mjs --force
 */
import { readFileSync } from "node:fs";

const HOST = "www.emergingfreelancer.com";
const force = process.argv.includes("--force");

if (!force && process.env.VERCEL_ENV !== "production") {
  console.log("[indexnow] skipped (not a Vercel production build)");
  process.exit(0);
}

try {
  const key = readFileSync(new URL("../indexnow.key", import.meta.url), "utf8").trim();
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!urlList.length) throw new Error("no URLs found in sitemap");

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
  });
  console.log(`[indexnow] submitted ${urlList.length} URLs -> HTTP ${res.status}`);
} catch (err) {
  console.warn("[indexnow] ping failed, build continues:", err?.message ?? err);
}
