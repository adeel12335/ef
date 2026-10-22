/**
 * Case study content for /work/[slug].
 *
 * Every line describes what is visible on the client's live site (or, for
 * signed-in products, their public entry point and stated purpose). Screenshots
 * in public/assets/images/portfolio/shots are captured from those live sites.
 * No client metrics are invented: figures a client publishes about their own
 * business are not repeated as results of the build.
 */
export type CaseFeature = { title: string; text: string };

export type CaseStudy = {
  slug: string;
  /** <title> before the brand suffix. Keep under ~60 characters. */
  seoTitle: string;
  /** 140-160 characters. */
  metaDescription: string;
  headline: string;
  client: string;
  industry: string;
  location?: string;
  platform: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  features: CaseFeature[];
  outcome: string;
  /** Real screenshots of the live site. Absent for concept projects. */
  shots?: { desktop: string; mobile: string; sections: string[] };
  /** rel for the outbound live-site link. */
  liveRel?: string;
};

/** Date shown on case-study pages. YYYY-MM-DD. */
export const CASES_UPDATED = "2026-10-22";

const shots = (slug: string, sections = 2) => ({
  desktop: `/assets/images/portfolio/shots/${slug}-desktop.webp`,
  mobile: `/assets/images/portfolio/shots/${slug}-mobile.webp`,
  sections: Array.from({ length: sections }, (_, i) => `/assets/images/portfolio/shots/${slug}-section-${i + 1}.webp`),
});

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "drix-agency",
    seoTitle: "Drix Agency: Poster Studio Website",
    metaDescription:
      "How the Drix Agency website turns a cinematic poster portfolio into enquiries: service pages, a genre-led poster grid, a four-step process and a clear quote path.",
    headline: "A cinematic website for a movie poster and key art studio",
    client: "Drix Agency",
    industry: "Film marketing · Creative studio",
    location: "Works with filmmakers worldwide",
    platform: "Marketing website",
    services: ["Website design", "Front-end development", "Information architecture", "On-page SEO"],
    overview:
      "Drix Agency designs movie posters and key art for independent filmmakers and production companies. The site had to feel like a film campaign itself while still walking a producer from first impression to a quote request.",
    challenge:
      "Poster buyers judge in seconds, so the work has to lead. But a gallery on its own does not explain what the studio offers, how a project runs, or how to start, and a filmmaker who cannot see the next step simply leaves.",
    solution:
      "A dark, cinematic site built around one action: start a project. The hero states the offer in a single line with two clear calls to action. Services, the poster portfolio, the process and the FAQ each answer one question a producer has before getting in touch, and the quote path stays visible throughout.",
    features: [
      { title: "Offer-first hero", text: "\"Cinematic movie posters & key art design\" in the first screen, with View our posters and Get a quote side by side." },
      { title: "Four service lines", text: "Concept & key art, photo manipulation, title treatments and campaign adaptations, each with its own card and page." },
      { title: "Poster portfolio grid", text: "\"Stories made visible\": a browsable grid of released one-sheets that lets the work sell the studio." },
      { title: "Brief-to-artwork process", text: "Discover, Concept, Refine, Deliver: the sequence is set before a quote, so expectations are clear from day one." },
    ],
    outcome:
      "Drix Agency launched with a site that looks like the work it sells and answers a producer's questions in order: what you do, show me, how it works, how do I start. It is live at drix.agency.",
    shots: shots("drix-agency"),
  },
  {
    slug: "ai-calling-agent",
    seoTitle: "AI Calling Agent: Voice Agent Web App",
    metaDescription:
      "A web app for automating sales calls with AI voice agents: secure sign-in, administrator-managed accounts and a product shell that keeps call data private.",
    headline: "A web app for running AI voice agents on sales calls",
    client: "AI Calling Agent",
    industry: "Sales automation · AI",
    platform: "Web application",
    services: ["Web app development", "Authentication", "UI design", "AI agent integration"],
    overview:
      "AI Calling Agent is a product for automating sales calls with AI-powered voice agents. Teams sign in to manage the agents that make and handle calls on their behalf.",
    challenge:
      "Call scripts, recordings and contact lists are sensitive. The product needed to be usable for a sales team while making sure none of that data is reachable without an account, and that accounts are created deliberately rather than by open signup.",
    solution:
      "The public address opens straight onto a clean sign-in screen, and accounts are issued by an administrator rather than through self-signup. Everything a team works with sits behind that login, inside a focused product shell rather than a marketing site.",
    features: [
      { title: "Private by default", text: "The only public route is sign-in, so call data, scripts and recordings are never exposed to search engines or visitors." },
      { title: "Administrator-managed accounts", text: "No open registration: \"Don't have an account? Contact your administrator\" keeps access controlled." },
      { title: "Remember-me and password recovery", text: "The everyday sign-in details a sales team expects, without extra friction." },
      { title: "Voice-agent product shell", text: "Built for one job, automating sales calls with AI voice agents, rather than a generic dashboard." },
    ],
    outcome:
      "A working, access-controlled web app for AI voice agents, live behind its sign-in screen. Because the product holds private call data, the inside of the app is not shown here.",
    shots: shots("ai-calling-agent", 0),
  },
  {
    slug: "postautopilot",
    seoTitle: "PostAutoPilot: Social SaaS Website",
    metaDescription:
      "The PostAutoPilot site explains employee-advocacy social posting in one scroll: create once, personalise, publish, with AutoPilot and Co-Pilot modes.",
    headline: "A SaaS product site for social posting through your team's networks",
    client: "PostAutoPilot",
    industry: "SaaS · Social media management",
    platform: "Product marketing website",
    services: ["Website design", "Front-end development", "Product messaging structure", "On-page SEO"],
    overview:
      "PostAutoPilot helps businesses stay visible on social media by publishing through their own accounts and their employees' connected accounts. The site had to make a new idea, employee advocacy, obvious in one scroll.",
    challenge:
      "\"Social media management\" is a crowded category. Visitors needed to understand quickly what makes this product different, who it is for, and how much control they keep over what gets posted in their name.",
    solution:
      "The homepage opens on the core idea, \"Your next customer could be in their network\", then shows the three-step path of create once, make it personal, publish and share. AutoPilot and Co-Pilot are explained side by side so a buyer sees they choose between automatic posting and team approval, and industry pages carry the same idea into specific teams.",
    features: [
      { title: "One-line positioning", text: "The first screen states the job and the benefit, with See how it works and Book a demo as the next steps." },
      { title: "Create, personalise, publish", text: "A three-step section that turns a new product category into a simple sequence." },
      { title: "AutoPilot vs Co-Pilot", text: "Automatic posting or review-before-share, explained so control is never in doubt." },
      { title: "Industry pages and pricing", text: "Enterprise, real estate and other industries, plus a pricing page, in the main navigation." },
    ],
    outcome:
      "PostAutoPilot has a product site that sells the idea before it sells the features, with clear routes to a demo, pricing and signup. It is live at postautopilot.com.",
    shots: shots("postautopilot"),
  },
  {
    slug: "able-athletics",
    seoTitle: "Able Athletics: Sports Website",
    metaDescription:
      "A nonprofit website for inclusive, unified sports for children of all abilities: mission, programs, upcoming events, impact numbers, donations and newsletter signup.",
    headline: "A nonprofit website for inclusive sports for children of all abilities",
    client: "Able Athletics",
    industry: "Nonprofit · Adaptive sports",
    location: "United States",
    platform: "Nonprofit website",
    services: ["Website design", "Front-end development", "Content structure", "Donation path"],
    overview:
      "Able Athletics runs inclusive and unified sports programs for children with visible and invisible disabilities. Its site has to speak to families, volunteers, partners and donors at the same time.",
    challenge:
      "A nonprofit has several audiences with different next steps: a parent wants a program, a volunteer wants to help, a donor wants proof of impact. The site needed to serve all of them without burying the mission.",
    solution:
      "The homepage leads with the mission, \"Inclusive sports for all abilities\", then shows the organisation's own impact figures, upcoming events and the education-first approach. Donate stays in the header, and the navigation separates origins, team, community, services, impact, press, partners and donors so each audience finds its own page.",
    features: [
      { title: "Mission-first hero", text: "\"Inclusive sports for all abilities\" with a direct contact action in the first screen." },
      { title: "Impact section", text: "Athletes, volunteers, therapists and coaches presented as the organisation's own published figures." },
      { title: "Events and newsletter", text: "Upcoming events and a subscribe block keep families and supporters coming back." },
      { title: "Always-visible donate", text: "A donate button in the header, with partner, donor and press pages for funders." },
    ],
    outcome:
      "Able Athletics has a site that puts its mission first and gives every audience a clear page and next step. It is live at ableathletics.org.",
    shots: shots("able-athletics"),
  },
  {
    slug: "vgc-international-college",
    seoTitle: "VGC College: Education Website",
    metaDescription:
      "A college website for English, business and university pathway programs in downtown Vancouver, with brochure, placement test, applications and an agent portal.",
    headline: "An international college website for students and agents",
    client: "VGC International College",
    industry: "Education · International students",
    location: "Vancouver, Canada",
    platform: "Education website",
    services: ["Website design", "Front-end development", "Program pages", "Enquiry and application paths"],
    overview:
      "VGC International College offers English courses, business programs and university pathways in downtown Vancouver to students from around the world, many of whom find the college through education agents.",
    challenge:
      "International students compare colleges from abroad, often in a second language, and agents need their own route in. The site had to make programs, fees and the next step easy to find for both.",
    solution:
      "A clear top bar puts Apply to VGC, Fees & Payment, Contact, the Agent Portal and the placement test one click away. Program groups (English, Business, University Pathways) each get a card and a page, with brochure download, placement test, application and contact as four quick actions.",
    features: [
      { title: "Four quick actions", text: "Download the brochure, take the placement test, apply, or ask a question, right under the hero." },
      { title: "Program pathways", text: "English programs, business programs and university pathways, each with its own landing page." },
      { title: "Agent portal", text: "A separate route for education agents, who send many of the college's students." },
      { title: "Trust and blog", text: "Awards, accreditations and a student blog with real student stories." },
    ],
    outcome:
      "VGC has a site where a student abroad can go from browsing programs to applying in a few clicks, and agents have a route of their own. It is live at vgc.ca.",
    shots: shots("vgc-international-college"),
  },
  {
    slug: "finjet-capital",
    seoTitle: "Finjet Capital: Finance Website",
    metaDescription:
      "A financial services website for wealth management, investment banking and retirement planning, with service pages, transactions, press and a client login.",
    headline: "A financial services website built on trust and clarity",
    client: "Finjet Capital",
    industry: "Financial services",
    platform: "Corporate website",
    services: ["Website design", "Front-end development", "Service pages", "Client login entry"],
    overview:
      "Finjet Capital provides financial services to individuals and institutions, from wealth management and investment banking to retirement planning and fixed income.",
    challenge:
      "In finance, the website is often the first test of credibility. It had to present a broad range of services clearly and feel established, while giving existing clients a direct way to log in.",
    solution:
      "\"Finjet. Putting People First.\" opens over a corporate photograph, with register, login and about actions. A full services menu lists each product line, followed by the firm's experience, its transactions, press coverage and careers, with Client Login always in the header.",
    features: [
      { title: "People-first positioning", text: "A calm, corporate hero that leads with the firm's promise rather than jargon." },
      { title: "Full product menu", text: "Wealth management, investment banking, retirement planning, REITs, stocks and fixed income, each with its own page." },
      { title: "Credibility sections", text: "Experience, transactions and In The Press, using the firm's own published track record." },
      { title: "Client login and careers", text: "Existing clients and job seekers each have a direct route from the header." },
    ],
    outcome:
      "Finjet Capital has a website that presents its full range of services with the polish clients expect from a financial firm. It is live at finjetcapital.com.",
    shots: shots("finjet-capital"),
  },
  {
    slug: "wiki-studio-portal",
    seoTitle: "The Wiki Studio: Team CRM Portal",
    metaDescription:
      "A private CRM portal for The Wiki Studio covering the production board, attendance, commissions and clients, behind a secure branded sign-in.",
    headline: "A private CRM portal for a production studio's team",
    client: "The Wiki Studio",
    industry: "Media production · Internal tools",
    platform: "Web application",
    services: ["Web app development", "Authentication", "UI design", "Internal workflow design"],
    overview:
      "The Wiki Studio needed one place for its team to run day-to-day operations: the production board, attendance, commissions and client records.",
    challenge:
      "Spreadsheets and chat threads do not scale once several people track productions, hours and commissions at once. The team needed a single source of truth that stays private to the studio.",
    solution:
      "A branded portal at portal.thewikistudio.com brings the production board, attendance, commissions and clients into one signed-in CRM. The public address is only the sign-in, so studio and client data never sits on an open page.",
    features: [
      { title: "Production board", text: "Productions tracked in one shared view instead of scattered lists." },
      { title: "Attendance", text: "Team attendance recorded in the same system as the work it relates to." },
      { title: "Commissions and clients", text: "Commission tracking and client records alongside production data." },
      { title: "Branded, private sign-in", text: "A clean Wiki Studio sign-in as the only public route into the portal." },
    ],
    outcome:
      "The Wiki Studio runs its production, attendance, commissions and clients from one private portal. Its internal screens hold studio data, so only the sign-in is shown here.",
    shots: shots("wiki-studio-portal", 0),
  },
  {
    slug: "wiki-studio-campaigns",
    seoTitle: "SendPilot: Email Warmup Tool",
    metaDescription:
      "SendPilot, an email campaign tool on top of Brevo with warmup, sending windows, natural pacing, testing and reporting to protect domain reputation. Self-hosted.",
    headline: "SendPilot: email campaigns that land where they should",
    client: "The Wiki Studio",
    industry: "Email marketing · SaaS tool",
    platform: "Web application",
    services: ["Web app development", "Email delivery integration", "UI design", "Self-hosted deployment"],
    overview:
      "SendPilot is The Wiki Studio's campaign product: campaigns, warmup and reporting on top of Brevo, designed to keep a sending domain's reputation healthy.",
    challenge:
      "Sending campaigns from a new or quiet domain risks the spam folder. The studio needed campaign tooling that warms domains up, paces sending naturally and shows exactly what was delivered, opened or flagged.",
    solution:
      "SendPilot adds sending windows, natural pacing and warmup on top of Brevo's delivery, with dashboards for delivered, opened, warmup progress and spam. It runs self-hosted, so the studio's contact data stays on its own server.",
    features: [
      { title: "Campaigns and contacts", text: "Campaign builder and contact management in one workspace." },
      { title: "Domain warmup", text: "Gradual warmup with sending windows and natural pacing to protect reputation." },
      { title: "Testing and reports", text: "Testing before send, then delivered, opened and spam figures after." },
      { title: "Self-hosted", text: "Runs on the studio's own server: \"your data stays on your server\"." },
    ],
    outcome:
      "The Wiki Studio sends campaigns through its own tool with warmup and reporting built in, at campaigns.thewikistudio.com.",
    shots: shots("wiki-studio-campaigns", 0),
  },
  {
    slug: "jw-prestige",
    seoTitle: "JW Prestige: Chauffeur Website",
    metaDescription:
      "A French-language booking website for a Paris luxury chauffeur: instant trip planner, airport and station transfers, Mercedes fleet pages and 24/7 availability.",
    headline: "A booking-first website for a luxury chauffeur service in Paris",
    client: "JW Prestige",
    industry: "Luxury transport · Chauffeur (VTC)",
    location: "Paris, France",
    platform: "Booking website",
    services: ["Website design", "Booking flow", "Front-end development", "French and English content"],
    overview:
      "JW Prestige is a private chauffeur service in Paris offering airport and station transfers, long-distance trips and premium VTC rides in a Mercedes fleet.",
    challenge:
      "Chauffeur customers want a price and a booking, not a brochure. The site had to feel premium while letting a visitor plan and request a trip from the very first screen, in French and English.",
    solution:
      "The hero pairs \"Service de chauffeur de luxe à Paris\" with a trip planner right beside it: trip type, vehicle class, pickup and destination, passengers, direction and date, ending in a See the rates button. Below it, the fleet, the chauffeurs and the service promise build confidence before the ride.",
    features: [
      { title: "Trip planner in the hero", text: "Trip type, vehicle class, route, passengers and date, with rates one click away." },
      { title: "Mercedes fleet pages", text: "E-Class, V-Class, S-Class and Maybach, each shown for the trips it suits." },
      { title: "Bilingual", text: "French by default with an English version for international travellers." },
      { title: "Packages and FAQ", text: "Airport transfers, packages, an FAQ and a dedicated booking page." },
    ],
    outcome:
      "JW Prestige has a premium site where a traveller can plan a trip and see rates in the first screen. It is live at jwprivatecar.com.",
    shots: shots("jw-prestige"),
  },
  {
    slug: "aaron-paderewski",
    seoTitle: "Aaron Paderewski: Actor Website",
    metaDescription:
      "An actor and filmmaker portfolio website with film credits, acting, directing and horse-riding reels, a gallery and a direct contact route for casting.",
    headline: "An actor and filmmaker portfolio built around the reel",
    client: "Aaron Christian Paderewski",
    industry: "Film · Actor portfolio",
    platform: "Portfolio website",
    services: ["Website design", "Front-end development", "Video reels", "Contact path"],
    overview:
      "Aaron Christian Paderewski is an actor, director and filmmaker known for Red Right Hand (2024), The Inspectors (2015) and Halloween (2018).",
    challenge:
      "Casting directors give a portfolio seconds. The site had to put the face, the credits and the reels in front of them immediately, and make contact effortless.",
    solution:
      "A full-bleed portrait with the name in the first screen, then the film credits as poster cards, separate reels for acting, directing and horse riding, a gallery and a contact page, all in a dark cinematic style.",
    features: [
      { title: "Name and face first", text: "A full-screen portrait and name, so the visitor knows who they are looking at instantly." },
      { title: "Credits as posters", text: "Red Right Hand, Halloween, The Inspectors and American Nightmare shown as poster cards." },
      { title: "Three reels", text: "Acting, directing and horse-riding reels, each playable on the page." },
      { title: "Direct contact", text: "A contact page and email in the header for casting and collaboration." },
    ],
    outcome:
      "A focused portfolio that gets a casting director from face to reel to contact in seconds. It is live at aaronpaderewski.com.",
    shots: shots("aaron-paderewski"),
  },
  {
    slug: "make-a-move",
    seoTitle: "Make A Move: Movers Website, Surrey BC",
    metaDescription:
      "A local SEO website for professional movers in Surrey and the Lower Mainland: free-quote form in the hero, service pages, storage, cleaning and click-to-call.",
    headline: "A quote-first website for movers in Surrey and the Lower Mainland",
    client: "Make A Move Ltd",
    industry: "Home services · Moving",
    location: "Surrey, BC, Canada",
    platform: "Local service website",
    services: ["Website design", "Lead capture", "Local SEO structure", "Front-end development"],
    overview:
      "Make A Move Ltd offers residential, commercial and long-distance moving, plus packing, storage, junk removal and cleaning, across Surrey and the Lower Mainland.",
    challenge:
      "Moving customers usually call two or three companies and book the one that answers first. The site had to capture a quote request or a phone call straight away and rank for local moving searches.",
    solution:
      "The hero pairs a clear local headline with a free-quote form beside it, and the phone number sits in the header. Same-day availability, insurance and transparent pricing are stated up front, and every service from local moving to cleaning gets its own page for local search.",
    features: [
      { title: "Free quote in the hero", text: "Name, email, phone and message in the first screen, beside the headline." },
      { title: "Click-to-call header", text: "The phone number is always visible as a button." },
      { title: "Trust points", text: "Same-day availability, fully insured and transparent pricing stated before the scroll." },
      { title: "Service pages", text: "Local, commercial and long-distance moving, packing, storage, junk removal and cleaning." },
    ],
    outcome:
      "Make A Move has a local site built to turn searches into calls and quote requests. It is live at makeamoveltd.com.",
    shots: shots("make-a-move"),
  },
  {
    slug: "signal-auto-movers",
    seoTitle: "Signal Auto Movers: Website",
    metaDescription:
      "An auto transport website for enclosed and open car shipping across the USA: multi-step free quote, door-to-door and terminal options and a simple shipping process.",
    headline: "A lead-generating website for a US auto transport company",
    client: "Signal Auto Movers",
    industry: "Auto transport · Logistics",
    location: "United States",
    platform: "Lead generation website",
    services: ["Website design", "Multi-step quote form", "Service pages", "Front-end development"],
    overview:
      "Signal Auto Movers ships cars, SUVs and trucks across the United States, specialising in enclosed trailer transport.",
    challenge:
      "Car shipping is a quote-driven business. Visitors need to request a price with their route, vehicle and dates without facing a long form that feels like paperwork.",
    solution:
      "A multi-step Get Free Quote form sits in the hero, splitting location and date, vehicle and contact into short steps. The page then explains enclosed vs open, terminal-to-terminal vs door-to-door, and a simple three-stage process from quote to delivery.",
    features: [
      { title: "Multi-step quote", text: "Route and date, vehicle, then contact: short steps instead of one long form." },
      { title: "Transport options", text: "Enclosed, open, terminal-to-terminal and door-to-door explained side by side." },
      { title: "Clear process", text: "Quote and needs assessment, dispatch and booking, vehicle prep." },
      { title: "Reassurance points", text: "Trusted carriers, no upfront payment, insurance and extended support hours." },
    ],
    outcome:
      "Signal Auto Movers has a site where a customer can request a car-shipping quote in a few short steps. It is live at signalmovers.com.",
    shots: shots("signal-auto-movers"),
    // The live site currently contains injected third-party spam links.
    // Keep the outbound link nofollow until the client cleans it up.
    liveRel: "nofollow noopener noreferrer",
  },
  {
    slug: "iicon-shipping",
    seoTitle: "iIcon Shipping: Freight Website",
    metaDescription:
      "A freight-forwarding website for shipping from Florida to Jamaica: personal US address, air and sea freight, package tracking, rates and customer accounts.",
    headline: "A freight-forwarding website from Florida to Jamaica",
    client: "iIcon Shipping",
    industry: "Freight forwarding · Logistics",
    location: "Florida, USA and Jamaica",
    platform: "Logistics website with accounts",
    services: ["Website design", "Package tracking", "Customer accounts", "Front-end development"],
    overview:
      "iIcon Shipping gives customers in Jamaica a personal Florida address for online shopping, then forwards their packages by air or sea.",
    challenge:
      "Customers come back again and again to check where a package is. The site needed tracking, rates and accounts to be just as easy to reach as the sales pitch.",
    solution:
      "\"Track your packages in real time\" leads the homepage, with Track Package, Rates & Pricing, Login and Register in the header. Below, the personal Florida address, air and sea options and a how-it-works section explain the service to new customers.",
    features: [
      { title: "Tracking first", text: "Package tracking in the hero and the header, because it is the most common visit." },
      { title: "Personal Florida address", text: "The core offer for shopping US stores, explained up front." },
      { title: "Air and sea freight", text: "Both options, with package receiving, shown as services." },
      { title: "Accounts and rates", text: "Login, register, rates and pricing, FAQ and support in the top bar." },
    ],
    outcome:
      "iIcon Shipping has a site that serves both new customers and returning ones checking a package. It is live at iiconshipping.com.",
    shots: shots("iicon-shipping"),
  },
  {
    slug: "michael-minor",
    seoTitle: "Michael Minor: Booking Website",
    metaDescription:
      "A website for singer, actor and ventriloquist Michael Minor: featured shows, video clips, characters and a booking route for schools, theatres and corporate events.",
    headline: "A booking website for a singer, actor and ventriloquist",
    client: "Michael Minor Entertainment",
    industry: "Live entertainment",
    platform: "Entertainer website",
    services: ["Website design", "Front-end development", "Video sections", "Booking path"],
    overview:
      "Michael Minor is a singer, actor and ventriloquist whose variety shows mix music, comedy and characters like Screetch, Grandpa and Clarence the Moose.",
    challenge:
      "Event bookers need to see the act and picture it on their stage before they enquire. A static bio would not sell a show built on personality and timing.",
    solution:
      "A cinematic hero introduces Michael Minor Entertainment, followed by featured shows, watchable clips and the characters that make the act. Get In Touch and a store are in the main navigation for bookings and fans.",
    features: [
      { title: "Featured shows", text: "Each show presented so a booker can match it to their event." },
      { title: "Watch clips", text: "Video clips on the page, because the act sells best when you see it." },
      { title: "Meet the characters", text: "Screetch, Grandpa, Clarence the Moose and friends, each introduced." },
      { title: "Booking and store", text: "Get In Touch for schools, theatres and corporate events, plus a store." },
    ],
    outcome:
      "Michael Minor has a site that shows the act before asking for the booking. It is live at michaelminor.com.",
    shots: shots("michael-minor", 0),
  },
];

export const caseStudyBySlug = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
