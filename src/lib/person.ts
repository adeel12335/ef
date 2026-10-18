/**
 * The identity facts the site still needs.
 *
 * The SEO audit's single biggest on-page gap is that there is no named person
 * and no sameAs graph: search engines and assistants have nothing to tie this
 * domain to a real, verifiable individual. Everything below is wired up and
 * waiting — filling these three values in turns on the Person entity, the
 * sameAs links and the byline, with no other code change.
 *
 * Nothing here is invented, because a fabricated profile link is worse than a
 * missing one: it is a claim a machine will repeat.
 */

/** TODO(content): the name you want shown. Rendered verbatim until replaced. */
export const personName = "[Your Name]";

/** Flip to true once personName is real. Gates the Person structured data. */
export const PERSON_NAME_CONFIRMED = false;

/** TODO(content): short bio, 1–2 sentences, written in the first person. */
export const personBio =
  "Independent developer building AI agents, workflow automation, websites and mobile applications for small and medium-sized businesses.";

/**
 * TODO(content): verified profile URLs only — these become schema `sameAs`,
 * which is how a search engine links the site, the person and the profiles
 * into one entity. Add only pages you control and that link back here.
 *
 * Good candidates, in rough order of weight for this line of work:
 *   LinkedIn, GitHub, Upwork, X, YouTube, Crunchbase, a personal domain.
 *
 * Example:
 *   { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle/" },
 */
export const socials: { label: string; href: string }[] = [];

/** True once there is at least one verified profile to point at. */
export const hasSocials = socials.length > 0;
