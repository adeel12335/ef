import legacyRedirects from "../../legacy-redirects.json";

const CANONICAL_ORIGIN = "https://www.emergingfreelancer.com";
const APEX_HOST = "emergingfreelancer.com";

const EXTRA: Record<string, string> = {
  "/about-us": "/about",
  "/services": "/service",
  "/our-portfolio": "/work",
  "/testimonials": "/about",
  "/work-details": "/work",
  "/home": "/",
};

const LEGACY = new Map<string, string>([
  ...Object.entries(EXTRA),
  ...legacyRedirects.map((rule) => [rule.source, rule.destination] as const),
]);

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

/** Final path for an old or slash-variant URL. Null means leave the request alone. */
export function redirectPath(pathname: string): string | null {
  if (pathname.startsWith("/wp-content") || pathname.startsWith("/wp-includes")) return null;

  const bare = stripTrailingSlash(pathname);

  if (bare === "/feed" || bare.endsWith("/feed")) return "/answers";
  if (bare === "/category" || bare.startsWith("/category/")) return "/answers";
  if (bare === "/tag" || bare.startsWith("/tag/")) return "/answers";
  if (bare === "/author" || bare.startsWith("/author/")) return "/about";
  if (/^\/page\/\d+$/.test(bare)) return "/";

  const mapped = LEGACY.get(bare);
  if (mapped) return mapped;
  if (bare !== pathname) return bare;
  return null;
}

export function redirectTarget(host: string, pathname: string, search = ""): string | null {
  const path = redirectPath(pathname);
  const hostname = host.split(":")[0];
  const nextPath = path ?? pathname;
  if (hostname === APEX_HOST) return `${CANONICAL_ORIGIN}${nextPath}${search}`;
  if (path && path !== pathname) return `${nextPath}${search}`;
  return null;
}
