export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  {
    label: "SERVICES",
    href: "/service",
    children: [
      { label: "ALL SERVICES", href: "/service" },
      { label: "SERVICE DETAIL", href: "/service-details" },
    ],
  },
  {
    label: "WORKS",
    href: "/work",
    children: [
      { label: "ALL WORK", href: "/work" },
      { label: "WORK DETAIL", href: "/work-details" },
    ],
  },
  {
    label: "BLOG",
    href: "/blog-standard",
    children: [
      { label: "BLOG STANDARD", href: "/blog-standard" },
      { label: "BLOG GRID 2", href: "/blog-two-columns" },
      { label: "BLOG GRID 3", href: "/blog-three-columns" },
      { label: "BLOG SINGLE", href: "/blog-single" },
    ],
  },
  { label: "GIGS", href: "/#pricing" },
  { label: "CONTACT", href: "/contact" },
];

/** A menu entry is active for its own route and for any of its children. */
export function isActive(item: NavItem, pathname: string): boolean {
  if (item.children?.length) {
    return item.children.some((child) => child.href === pathname);
  }
  return item.href === pathname;
}

/** Collapse ids for the mobile accordion, derived from the parent label. */
export function collapseId(label: string): string {
  return `${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-menu`;
}
