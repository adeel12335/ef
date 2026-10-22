import { ANSWERS } from "@/lib/answers";
import { CASE_STUDIES } from "@/lib/case-studies";
import { GIGS } from "@/lib/gigs";
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_URL } from "@/lib/seo";

/**
 * /llms-full.txt — the full text of the services, answers and case studies in
 * one plain Markdown file, for AI assistants and answer engines. /llms.txt (in
 * public/) is the short index; this is the long form. Built from the same data
 * as the pages, so it never drifts from what the site says.
 */
export const dynamic = "force-static";

export function GET() {
  const out: string[] = [];
  const p = (s = "") => out.push(s);

  p("# Emerging Freelancer — full reference");
  p();
  p("> Independent, US-based developer building AI agents and voice assistants, workflow automation, websites and mobile applications, and Salesforce and AWS integrations for small and medium-sized businesses. One person scopes, builds and supports every project. Fixed-scope packages, agreed in writing before work starts.");
  p();
  p(`Website: ${SITE_URL} · Email: ${CONTACT_EMAIL} · Phone: ${CONTACT_PHONE} · Location: United States, working worldwide.`);
  p();

  p("## Services and prices");
  p();
  for (const g of GIGS) {
    p(`### ${g.name}`);
    p(`${SITE_URL}/service/${g.slug}`);
    p();
    p(g.description);
    p();
    for (const pk of g.packages) {
      p(`- ${pk.tier}, from $${pk.price}: ${pk.summary} Delivery: ${pk.delivery}. Support: ${pk.support}.`);
    }
    p();
  }

  p("## Answers");
  p();
  for (const a of ANSWERS) {
    p(`### ${a.title}`);
    p(`${SITE_URL}/answers/${a.slug} · Updated ${a.updated}`);
    p();
    p(a.answer);
    p();
    for (const s of a.sections) {
      p(`#### ${s.heading}`);
      for (const para of s.paragraphs) {
        p(para);
        p();
      }
      if (s.list?.length) {
        for (const li of s.list) p(`- ${li}`);
        p();
      }
    }
    if (a.faqs.length) {
      p("#### Questions");
      for (const f of a.faqs) p(`- **${f.q}** ${f.a}`);
      p();
    }
  }

  p("## Client work");
  p();
  for (const c of CASE_STUDIES) {
    p(`### ${c.client}: ${c.headline}`);
    p(`${SITE_URL}/work/${c.slug} · ${c.industry}${c.location ? ` · ${c.location}` : ""} · ${c.platform}`);
    p();
    p(c.overview);
    p();
    p(`Challenge: ${c.challenge}`);
    p();
    p(`Solution: ${c.solution}`);
    p();
    for (const f of c.features) p(`- ${f.title}: ${f.text}`);
    p();
    p(`Outcome: ${c.outcome}`);
    p();
  }

  return new Response(out.join("\n"), {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
}
