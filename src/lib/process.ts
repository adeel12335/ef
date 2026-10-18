/**
 * The four project stages.
 *
 * Kept here because the same four steps appear on the home page and on
 * /service. They had already drifted once — home described the real process
 * while /service still carried the template's "Discover & Define / we explore
 * visual styles" copy, which reads as an agency and contradicts the rest of
 * the site.
 */
export type Step = {
  num: string;
  title: string;
  description: string;
};

export const PROCESS: Step[] = [
  {
    num: "01",
    title: "Understand",
    description:
      "We talk through the business problem, the tools already in use, and what a good outcome actually looks like. You get a written summary of the problem as I understand it.",
  },
  {
    num: "02",
    title: "Plan",
    description:
      "I define the scope, the workflow and what gets delivered — including what is deliberately out of scope — with a timeline and a fixed price attached before anything is built.",
  },
  {
    num: "03",
    title: "Build and test",
    description:
      "I build it, share progress at agreed check-ins, and test against realistic scenarios rather than only the happy path. You get working software you can try.",
  },
  {
    num: "04",
    title: "Launch and support",
    description:
      "I help put it live, document how it works and what it connects to, and hand it over properly — so ongoing support stays your choice.",
  },
];
