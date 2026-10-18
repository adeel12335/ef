export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/**
 * Primary navigation.
 *
 * Flat on purpose. The template's dropdowns existed to show off its demo
 * pages — "SERVICE DETAIL", "BLOG GRID 2", "WORK DETAIL" — which are layout
 * samples, not destinations a client would pick from a menu. A six-item flat
 * bar is also faster to use than three menus that each hold one real link.
 *
 * Ordered by what a visitor wants: what you do, what it costs, proof, who you
 * are, how to start.
 *
 * ANSWERS replaces the template's sample blog: short pieces answering what
 * people type before hiring, which is the content search engines and
 * assistants can actually quote.
 */
export const NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  // "GIGS" used to sit here pointing at /#pricing. A gig is a service with
  // packages, so it duplicated SERVICES, and it was the only menu item that
  // was an anchor rather than a page. The packages live on each service page.
  { label: "SERVICES", href: "/service" },
  { label: "WORK", href: "/work" },
  { label: "ANSWERS", href: "/answers" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

/** A menu entry is active for its own route and for any of its children. */
export function isActive(item: NavItem, pathname: string): boolean {
  if (item.children?.length) {
    return item.children.some((child) => child.href === pathname);
  }
  // Anchor links belong to the home page.
  if (item.href.startsWith("/#")) return false;
  return item.href === pathname;
}

/** Collapse ids for the mobile accordion, derived from the parent label. */
export function collapseId(label: string): string {
  return `${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-menu`;
}
