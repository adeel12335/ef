import Link from "next/link";
import HomeAnswers from "@/components/answers/HomeAnswers";
import ProjectEnquiry from "@/components/contact/ProjectEnquiry";
import FaqAccordion from "@/components/faq/FaqAccordion";
import RotatingWord from "@/components/hero/RotatingWord";
import GigCard from "@/components/gigs/GigCard";
import StructuredData from "@/components/seo/StructuredData";
import { FAQS } from "@/lib/faq";
import { GIGS, PRICE_FROM, PRICE_TO } from "@/lib/gigs";
import { PROJECTS } from "@/lib/projects";
import HomeWork, { type WorkCard, type WorkFilter } from "@/components/work/HomeWork";

/* ---------- Home portfolio ----------
   Filters come from the work that exists: there are no mobile-app or cloud
   case studies yet, so there are no tabs for them. The "All" view is a fixed
   editorial pick; each tab shows up to five of its own projects. */
const WEB_APPS = ["wiki-studio-portal", "wiki-studio-campaigns", "ai-calling-agent"];
const AI_WORK = ["ai-calling-agent", "front-desk-ai", "lead-relay"];
const FEATURED = [
  "drix-agency",
  "postautopilot",
  "ai-calling-agent",
  "jw-prestige",
  "wiki-studio-portal",
  "front-desk-ai",
];

const WORK_FILTERS: WorkFilter[] = [
  { id: "all", label: "All projects" },
  { id: "websites", label: "Websites" },
  { id: "apps", label: "Web apps & portals" },
  { id: "ai", label: "AI & automation" },
];

function workLabel(slug: string, gigSlug: string, isConcept: boolean) {
  const base = AI_WORK.includes(slug)
    ? gigSlug === "workflow-automation" ? "Automation" : "AI agent"
    : WEB_APPS.includes(slug) ? "Web app" : "Website";
  return isConcept ? `Concept · ${base}` : base;
}

const WORK_CARDS: WorkCard[] = [
  ...FEATURED.map((slug) => PROJECTS.find((p) => p.slug === slug)!),
  ...PROJECTS.filter((p) => !FEATURED.includes(p.slug)),
].map((p) => {
  const groups: string[] = [];
  if (FEATURED.includes(p.slug)) groups.push("featured");
  if (AI_WORK.includes(p.slug)) groups.push("ai");
  if (WEB_APPS.includes(p.slug)) groups.push("apps");
  if (!AI_WORK.includes(p.slug) && !WEB_APPS.includes(p.slug) && p.kind === "Client project") groups.push("websites");
  return {
    slug: p.slug,
    name: p.name,
    blurb: p.blurb,
    image: p.image,
    label: workLabel(p.slug, p.gigSlug, p.kind !== "Client project"),
    groups,
  };
});

export default function HomePage() {
  return (
    <>
      <section className="wpr-banner-area">
              <div className="container">
                  <div className="banner-content-area">
                      <div className="top-shape wow fadeIn" data-wow-delay=".7s"></div>
                      <h1 className="section-title"
                          aria-label="I build AI systems, AI agents, automations, web apps and mobile apps">
                          <span className="left-area square-dot wow fadeInLeft" data-wow-delay=".7s">
                              <span className="text">I BUILD</span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                          <span className="arrow-track right">
                                  <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-right.svg" alt="" /></span>
                          </span>
                          </span>
                          <span className="mid-icon wow scaleIn" data-wow-delay=".7s">
                              <span className="inner">
                                  {/* Decorative inside the h1: the brand name is already in the header
                                      logo, and alt text here made the heading read
                                      "I BUILD Emerging Freelancer AI systems...". */}
                                  <img src="/brand/symbol.svg" width="303" height="303" alt="" />
                              </span>
                          </span>
                          <span className="right-area square-dot wow fadeInRight" data-wow-delay=".7s">
                              <span className="arrow-track right">
                                  <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          <span className="arrow"><img src="/assets/images/banner/icon/arrow-left.svg" alt="" /></span>
                          </span>
                          <RotatingWord />
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          </span>
                      </h1>
                      <div className="text-area wow fadeInUp" data-wow-delay="1s">
                          <p className="desc">AI agents, automations, websites, mobile apps and cloud <br /> integrations that make your business easier to run.</p>
                          <div className="button-area">
                              <a href="#pricing" className="wpr-btn btn-white">See my gigs</a>
                              <Link href="/service" className="wpr-btn btn-primary with-icon">
                                  <div className="inner">
                                      <div className="icon">
                                          <span>
                                              <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                          </span>
                                          <span>
                                              <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                          </span>
                                          <span>
                                              <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                          </span>
                                          <span>
                                              <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                          </span>
                                          <span>
                                              <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                          </span>
                                          <span>
                                              <img src="/assets/images/icon/button-arrow.svg" alt="" />
                                          </span>
                                      </div>
                                  </div>
                                  Explore Services
                              </Link>
                          </div>
                      </div>
                      <div className="bg-shape">
                          <img src="/assets/images/banner/shape/bg-shape.svg" alt="" />
                      </div>
                      <div className="banner-shape-area">
                          <img src="/assets/images/banner/shape/shape-01.svg" alt="" className="one wow fadeInLeft" data-wow-delay=".2s" />
                          <img src="/assets/images/banner/shape/shape-02.svg" alt="" className="two wow fadeInRight" data-wow-delay=".2s" />
                      </div>
                  </div>
              </div>
          </section>



          {/* The template's "WE’VE TRUSTED BY" client-logo marquee is removed.
              Its twelve marks were Logoipsum placeholders, and a "trusted by"
              strip is a claim about who you have worked for. Restore it from
              git once you have real clients who agree to be named. */}

          <section id="about" className="wpr-about-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-top-area">
                          <div className="section-title-area">
                              <p className="sub-title">ABOUT</p>
                              <h2 className="section-title second-font font-semi-bold text-normal quote">You work with me directly — the person who scopes it also builds and supports it</h2>
                              {/* The About page was reachable only from the menu.
                                  On a one-person site, "who am I hiring" is a
                                  question the home page should answer with a link. */}
                              <p className="gig-answer"><Link href="/about">How I work, and who you are hiring<span aria-hidden="true"> →</span></Link></p>
                          </div>
                      </div>
                      <div className="about-bottom-content square-dot">
                          <div className="left-area">
                              <ul>
                                  <li className="border-top">
                                      <p className="top-description">ONE DEVELOPER, THREE KINDS OF WORK <br /> — AND THE INTEGRATIONS THAT JOIN THEM UP.</p>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/01.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">AI agents</h2>
                                          <p className="desc">Voice and chat assistants that answer, qualify and book — then hand to a person</p>
                                      </div>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/02.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">Automation</h2>
                                          <p className="desc">Connected workflows, so a lead is entered once and reaches every tool</p>
                                      </div>
                                  </li>
                                  <li className="border-top with-icon">
                                      <div className="icon"><img src="/assets/images/about/icon/03.svg" alt="" /></div>
                                      <div className="text">
                                          <h2 className="h4 title">Web, apps &amp; cloud</h2>
                                          <p className="desc">Websites, mobile apps, Salesforce and AWS — built and wired together</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="right-area">
                              <div className="image-area">
                                  <img src="/assets/images/about/developer-meeting.jpg" width="802" alt="Working remotely with business owners on automation projects" />
                                  <img className="image-shape-right-bottom" src="/assets/images/about/shape-01.svg" alt="" />
                              </div>
                          </div>
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                      <div className="bottom-shape-area square-dot">
                          <img src="/assets/images/about/shape-02.svg" alt="" />
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                  </div>
              </div>
          </section>



          <HomeWork items={WORK_CARDS} filters={WORK_FILTERS} total={PROJECTS.length} />



          <section className="wpr-working-process mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="working-process-left">
                                  <div className="section-title-area">
                                      <p className="sub-title">PROCESS</p>
                                      <h2 className="section-title second-font font-semi-bold text-normal quote">How a project runs, from the first call to handover</h2>
                                  </div>
                                  <div className="text-area">
                                      <p className="desc">You always know what is happening, what I need from you next, and what you will have at the end of it.</p>
                                      <Link href="/contact" className="wpr-btn btn-primary with-icon">
                                          <div className="inner">
                                              <div className="icon">
                                                  <span className="fixed-arrow">
                                                      <img src="/assets/images/icon/button-arrow-fixed.svg" alt="" />
                                                  </span>
                                                  <span>
                                                      <img src="/assets/images/icon/button-arrow-2.svg" alt="" />
                                                  </span>
                                                  <span>
                                                      <img src="/assets/images/icon/button-arrow-2.svg" alt="" />
                                                  </span>
                                                  <span>
                                                      <img src="/assets/images/icon/button-arrow-2.svg" alt="" />
                                                  </span>
                                                  <span>
                                                      <img src="/assets/images/icon/button-arrow-2.svg" alt="" />
                                                  </span>
                                              </div>
                                          </div>
                                          Start a Project
                                      </Link>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="right-content-area">
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/understand.jpg" alt="Step one — understanding the business problem on a call" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//01</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Understand</h3>
                                              <p className="desc">We talk through the business problem, the tools already in use, and what a good outcome actually looks like. You get a written summary of the problem as I understand it.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/plan.jpg" alt="Step two — writing the scope, workflow and fixed price" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//02</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Plan</h3>
                                              <p className="desc">I define the scope, the workflow and what gets delivered — including what is deliberately out of scope — with a timeline and a fixed price attached before anything is built.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/build.jpg" alt="Step three — building and testing against realistic scenarios" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//03</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Build and test</h3>
                                              <p className="desc">I build it, share progress at agreed check-ins, and test against realistic scenarios rather than only the happy path. You get working software you can try.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="working-process-wrapper">
                                      <div className="image-area">
                                          <img src="/assets/images/working-process/handover.jpg" alt="Step four — launch, documentation and handover" />
                                      </div>
                                      <div className="content-area">
                                          <div className="number">//04</div>
                                          <div className="wrapper-content">
                                              <h3 className="title second-font h6">Launch and support</h3>
                                              <p className="desc">I help put it live, document how it works and what it connects to, and hand it over properly — so ongoing support stays your choice.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* No hatch strip here: the next section opens with its own,
                      and two stacked strips read as a layout glitch. */}
              </div>
          </section>



          <section className="wpr-why-choose-us-area mb--16">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="bottom-shape-area square-dot">
                          <img src="/assets/images/about/shape-02.svg" alt="" />
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                      <div className="wpr-content-area border-1">
                          <div className="row justify-content-center">
                              <div className="col-xl-8 col-lg-10 ">
                                  <div className="content-inner">
                                      <div className="section-title-area center-style">
                                          <p className="sub-title">THE DIFFERENCE</p>
                                          <h2 className="section-title second-font font-semi-bold text-normal wpr-text-anime-style-1">
                                              Why Work With
                                              One Developer </h2>
                                      </div>
                                      <div className="row g-5">
                                          <div className="col-lg-6 col-md-6">
                                              <div className="why-choose-wrapper ml-auto">
                                                  <div className="wrapper-header">
                                                      <h3 className="title second-font font-semi-bold text-normal">An
                                                          <span>Agency</span>
                                                      </h3>
                                                      <img src="/assets/images/why-choose/grid.svg" alt="" className="shape" />
                                                  </div>
                                                  <ul className="wrapper-list">
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          An account manager relays your brief
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          Rotating staff across your project
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          Scope grows, and so does the invoice
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          Documentation is an optional extra
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          You chase updates between demos
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-01.svg" alt="" />
                                                          Support covers a thin handover
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="col-lg-6 col-md-6">
                                              <div className="why-choose-wrapper">
                                                  <div className="wrapper-header two">
                                                      <div className="logo"><img src="/assets/images/why-choose/logo-01-hq.svg" width="160" alt="" /></div>
                                                      <img src="/assets/images/why-choose/grid.svg" alt="" className="shape" />
                                                  </div>
                                                  <ul className="wrapper-list two">
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          You speak to the person building it
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          The same developer start to finish
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          Fixed scope and price agreed up front
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          Documentation ships as a deliverable
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          Written updates at agreed check-ins
                                                      </li>
                                                      <li>
                                                          <img src="/assets/images/why-choose/check-02.svg" alt="" />
                                                          Handover aims to make me optional
                                                      </li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="bottom-button-area">
                                          <Link href="/contact" className="wpr-btn btn-primary">Get Started</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bottom-shape-area square-dot">
                          <img src="/assets/images/about/shape-02.svg" alt="" />
                          <span className="square-shape top-left"></span>
                          <span className="square-shape bottom-left"></span>
                          <span className="square-shape top-right"></span>
                          <span className="square-shape bottom-right"></span>
                      </div>
                  </div>
              </div>
          </section>



          <section id="pricing" className="wpr-pricing-plans-area mb--16" aria-labelledby="gigs-title">
              <div className="container">
                  <div className="section-inner bg-white border-1">
                      <div className="section-top-area">
                          <div className="section-title-area center-style">
                              <p className="sub-title">GIGS &amp; PRICING</p>
                              <h2 id="gigs-title" className="section-title second-font font-semi-bold text-normal">Four Gigs, <br /> Three Packages Each</h2>
                              {/* Answer-first: the direct reply to "how much does this cost",
                                  in the opening lines where answer engines look for it. */}
                              <p className="gig-answer">Every service is a gig with three packages — Basic,
                                  Standard and Premium — so you can start small and move up on the same
                                  service. Packages run from <strong>${PRICE_FROM}</strong> to
                                  <strong> ${PRICE_TO}</strong>, each a fixed scope agreed in writing before
                                  work begins, so the price does not move unless the scope does.
                                  Built for small service businesses that miss calls, retype leads, or
                                  have a site that never asks for the work.</p>
                          </div>
                      </div>
                      <div className="section-mid-area">
                          {GIGS.map((gig, i) => (
                              <GigCard key={gig.slug} gig={gig} dark={i % 3 === 1} />
                          ))}
                      </div>
                  </div>
              </div>
          </section>



          <FaqAccordion
              items={FAQS}
              id="homeFaq"
              eyebrow="Common questions"
              title={<>A few things <br /> worth knowing.</>}
              intro="Clear answers on pricing, timelines, access and handover."
          />

          <HomeAnswers />



          <section className="wpr-cta-area">
              <div className="container">
                  <div className="section-inner border-1">
                      <div className="section-title-area">
                          <h2 className="section-title">Let’s start <br /> your project</h2>
                          <p className="cta-desc">Tell me what you’d like to make easier. You’ll get a
                              fixed scope and a price before any work begins — and a reply within one
                              business day.</p>
                          <div className="cta-actions">
                              <Link href="/contact" className="wpr-btn btn-white">Start a project</Link>
                              <a href="#pricing" className="cta-link">See the gigs from $120</a>
                          </div>
                          <div className="logo"><img src="/assets/images/cta/cta-logo.svg" alt="" /></div>
                          <div className="arrow-track right">
                              <div className="arrow"><img src="/assets/images/cta/arrow-left.svg" alt="" /></div>
                              <div className="arrow"><img src="/assets/images/cta/arrow-left.svg" alt="" /></div>
                              <div className="arrow"><img src="/assets/images/cta/arrow-left.svg" alt="" /></div>
                          </div>
                          <div className="arrow-track left">
                              <div className="arrow"><img src="/assets/images/cta/arrow-right.svg" alt="" /></div>
                              <div className="arrow"><img src="/assets/images/cta/arrow-right.svg" alt="" /></div>
                              <div className="arrow"><img src="/assets/images/cta/arrow-right.svg" alt="" /></div>
                          </div>
                      </div>
                      <div className="bg-shape"><img src="/assets/images/cta/grid.svg" alt="" /></div>
                      <div className="section-bottom-shape">
                          <img src="/assets/images/cta/graphic.svg" alt="" />
                          <span className="tag left">FIXED SCOPE, PRICED UP FRONT</span>
                          <span className="tag right">REMOTE, WORLDWIDE</span>
                      </div>
                  </div>
              </div>
          </section>



          <ProjectEnquiry />
      <StructuredData />
    </>
  );
}
