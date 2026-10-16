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
  { label: "ABOUT US", href: "/about" },
  {
    label: "SERVICES",
    href: "/service",
    children: [
      { label: "SERVICE", href: "/service" },
      { label: "SERVICES SINGLE", href: "/service-details" },
    ],
  },
  {
    label: "WORKS",
    href: "/work",
    children: [
      { label: "WORKS", href: "/work" },
      { label: "WORK SINGLE", href: "/work-details" },
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
