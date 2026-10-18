import { GIGS } from "@/lib/gigs";

/**
 * Groups answers or projects under the service they belong to.
 *
 * Both index pages had grown into flat lists — 24 articles and 17 projects
 * with nothing to scan by. The data already carries `gigSlug`, so the services
 * are the grouping that was there all along, and using it keeps the three
 * sections of the site describing each other the same way.
 *
 * Order follows GIGS rather than the source array, so the grouping on every
 * page matches the order the services are presented in.
 */
export type GigGroup<T> = {
  /** null for the catch-all bucket. */
  slug: string | null;
  name: string;
  shortName: string;
  items: T[];
};

export function groupByGig<T extends { gigSlug?: string }>(
  items: T[],
): GigGroup<T>[] {
  const groups: GigGroup<T>[] = GIGS.map((gig) => ({
    slug: gig.slug,
    name: gig.name,
    shortName: gig.shortName,
    items: items.filter((item) => item.gigSlug === gig.slug),
  })).filter((group) => group.items.length > 0);

  // Anything with no gigSlug, or one that no longer matches a service, still
  // has to appear — silently dropping an article would be worse than an
  // untidy heading.
  const known = new Set(GIGS.map((gig) => gig.slug));
  const rest = items.filter((item) => !item.gigSlug || !known.has(item.gigSlug));
  if (rest.length) {
    groups.push({
      slug: null,
      name: "General",
      shortName: "General",
      items: rest,
    });
  }

  return groups;
}
