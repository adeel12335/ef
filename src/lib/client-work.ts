import type { Project } from "./projects";

/**
 * Live client sites. `result` stays null: nothing here is a measured
 * conversion, revenue, or review. Figures a client publishes on their own
 * site are not repeated.
 */
export const CLIENT_WORK: Project[] = [
  {
    slug: "drix-agency",
    name: "Drix Agency",
    shortTitle: "Drix Agency Movie Poster Website",
    gigSlug: "web-mobile",
    category: "Studio website · Key art",
    kind: "Client project",
    keywords: ["movie poster design", "key art design", "film poster website"],
    blurb:
      "A movie-poster studio site: services, a portfolio grid, a four-step process, and an FAQ for filmmakers.",
    summary:
      "Drix Agency is a cinematic movie poster and key art studio. The site leads with the offer, then services (concept, photo manipulation, title treatments, campaign adaptations), a selected portfolio, the path from brief to files, and the questions filmmakers ask before they start.",
    image: "/assets/images/portfolio/cases/drix-agency-premium.jpg",
    liveUrl: "https://drix.agency/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "A poster studio sells a picture, but the buyer still has to understand the service, the process, and what they will receive. A gallery with no path to a brief does not turn a filmmaker into an enquiry.",
    built:
      "A marketing site organised around one action: tell us about the film. Services, portfolio, process, and FAQ each support that action. The public page explains the difference between a poster and key art, and what a delivery typically includes, without hiding the next step.",
    role: [
      "Information architecture for a studio site",
      "Service, portfolio, process, and FAQ pages",
      "Enquiry path from the homepage",
      "On-page structure for movie poster and key art queries",
    ],
    capabilities: ["Marketing site", "Portfolio grid", "Service pages", "FAQ", "Enquiry"],
    context: [
      "Filmmakers search for movie poster design, key art, festival one-sheets, and title treatments. The site uses those phrases as services, not as a pile of blog tags.",
      "The case describes the public site. It does not repeat the studio's own delivery counts, star ratings, or testimonials as a result of the build.",
    ],
    constraints: [
      "One primary action: start a conversation about a film.",
      "Portfolio work is the studio's, and is labelled as such.",
      "No conversion rate is claimed for the enquiry form.",
      "Client marketing numbers stay on their site.",
    ],
    approach: [
      "Open with the offer in one line: cinematic posters and key art.",
      "Split the work into services a buyer can name.",
      "Show process as discover, concept, refine, deliver.",
      "Answer the usual pre-sale questions on the page.",
    ],
    workflow: [
      "A visitor lands on the offer and the service list.",
      "They can open a portfolio piece or a service.",
      "The process section sets the sequence before a quote.",
      "The FAQ covers timing, revisions, file formats, and who the studio works with.",
      "The close asks for the film, not for a nine-field form.",
    ],
    outcome:
      "A live studio site at drix.agency with a clear service set, a portfolio, a process, and an FAQ. No enquiry volume or revenue is claimed.",
    result: null,
    faqs: [
      {
        q: "Is the Drix delivery count a result of this build?",
        a: "No. Any figures or testimonials on drix.agency belong to that studio. This page only describes the website.",
      },
      {
        q: "What kind of site is it?",
        a: "A marketing site for a poster and key art studio: services, portfolio, process, FAQ, and an enquiry. It is not a web app with accounts.",
      },
    ],
  },
  {
    slug: "ai-calling-agent",
    name: "AI Calling Agent",
    shortTitle: "AI Calling Agent Console",
    gigSlug: "ai-agents",
    category: "AI agent · Signed-in product",
    kind: "Client project",
    keywords: ["AI calling agent", "voice AI web application", "secure AI agent login"],
    blurb:
      "A signed-in product for an AI calling agent. The public URL opens on login, so private call data stays private.",
    summary:
      "AI Calling Agent is a product console. The public address opens on a sign-in screen. This case describes that entry point. Scripts, recordings, and account data are behind login and are not published here.",
    image: "/assets/images/portfolio/cases/ai-calling-agent-realistic.jpg",
    liveUrl: "https://ai-calling-agent-frontend.onrender.com/login",
    relatedAnswer: "what-an-ai-receptionist-can-and-cannot-do",
    problem:
      "A calling product that dumps its dashboard on the open web exposes client calls. The public face has to be a door, not the data.",
    built:
      "A front end whose public route is sign-in, titled AI Calling Agent. The build is the product shell a signed-in user enters. It is not a marketing page with a price list, and it is not described as a finished phone system for a named business.",
    role: [
      "Product front end",
      "Sign-in as the public entry",
      "Separation between the public URL and account data",
    ],
    capabilities: ["Web app", "Authentication", "AI calling product"],
    context: [
      "People searching for an AI calling agent want to know whether a product exists and how they get in. The honest public answer is: sign in.",
      "This is separate from the concept build Front Desk AI, which demonstrates a bounded receptionist. This URL is a client product.",
    ],
    constraints: [
      "No call recordings, phone numbers, or scripts are copied onto this case study.",
      "No claim that the agent books a calendar or hands off to a person, because that behaviour is not on the public page.",
      "No uptime or answer-rate figure.",
    ],
    approach: [
      "Treat the login screen as the public page.",
      "Keep the case study to what that page shows.",
      "Point the commercial question — what an assistant should refuse — at the answer article, not at private data.",
    ],
    workflow: [
      "A visitor opens the product URL.",
      "They meet a sign-in screen.",
      "Account features stay behind that sign-in.",
    ],
    outcome:
      "A live sign-in for an AI calling agent. Nothing behind the login is claimed as a metric.",
    result: null,
    faqs: [
      {
        q: "Can I see a demo of the calls?",
        a: "Not from this page. The public URL is a login. Call data is not part of the case study.",
      },
      {
        q: "Is this the same thing as the Front Desk AI concept?",
        a: "No. Front Desk AI is a labelled concept build. This is a separate client product with its own sign-in.",
      },
    ],
  },
  {
    slug: "postautopilot",
    name: "PostAutoPilot",
    shortTitle: "PostAutoPilot Social Distribution Site",
    gigSlug: "web-mobile",
    category: "SaaS website · Employee advocacy",
    kind: "Client project",
    keywords: ["employee advocacy platform", "social media management software", "team content distribution"],
    blurb:
      "A product site for creating a social post once and distributing it through a team's connected accounts.",
    summary:
      "PostAutoPilot is social media management and team content distribution. The site explains creating a post once, adapting it, and publishing through business accounts and connected employee accounts, with AutoPilot and Co-Pilot as the two ways a post goes out.",
    image: "/assets/images/portfolio/cases/postautopilot-premium.jpg",
    liveUrl: "https://www.postautopilot.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "A product that posts on behalf of employees is easy to misunderstand as a blast tool. The site has to say who writes, who approves, and which accounts post on their own.",
    built:
      "A product marketing site. It states the job in the first screen, then the three-step path (create once, make it personal, publish and share), the difference between automatic posting and review-before-share, and industry pages for teams who would use it. An FAQ answers what the product is before a signup.",
    role: [
      "Product narrative and page structure",
      "Feature sections for scheduling, journeys, and approval",
      "Industry paths",
      "FAQ for the buyer questions",
    ],
    capabilities: ["Product website", "FAQ", "Feature sections", "Industry pages"],
    context: [
      "The search is employee advocacy and social scheduling: one message, many personal accounts, with a review step where the network requires it.",
      "Analytics on the product are described on their site as a public preview. This case does not quote a reach or engagement number.",
    ],
    constraints: [
      "No claim about patent status beyond the wording the product already uses on its own page.",
      "No follower counts or ROI.",
      "The approval model is described, not measured.",
    ],
    approach: [
      "Lead with the outcome a buyer wants: the next customer might be in the team's network.",
      "Separate automatic posting from posts a person approves.",
      "Give industries their own path so the homepage stays one idea.",
      "Put the definition of the product in an FAQ.",
    ],
    workflow: [
      "The homepage states the product in one paragraph.",
      "Three steps show create, personalise, publish.",
      "AutoPilot and Co-Pilot explain which networks post immediately and which wait for approval.",
      "Industry links carry the same idea into a specific team.",
      "The FAQ answers what it is, who posts, and whether captions are identical.",
    ],
    outcome:
      "A live product site at postautopilot.com that explains team distribution without a performance claim on this page.",
    result: null,
    faqs: [
      {
        q: "Does this case study include the product's analytics?",
        a: "No. The product mentions analytics as a preview on its own site. No reach, click, or revenue figure is claimed here.",
      },
      {
        q: "What was built?",
        a: "The public product site: the explanation, the feature path, industry pages, and the FAQ. Private account data is not part of this write-up.",
      },
    ],
  },
  {
    slug: "able-athletics",
    name: "Able Athletics",
    shortTitle: "Able Athletics Nonprofit Website",
    gigSlug: "web-mobile",
    category: "Nonprofit website · Adaptive sports",
    kind: "Client project",
    keywords: ["adaptive sports nonprofit", "inclusive youth sports", "adaptive sports scholarships"],
    blurb:
      "A nonprofit site for adaptive sports: programs, events, scholarships, and a donation path.",
    summary:
      "Able Athletics is a nonprofit site about education and adaptive sports for youth who need accommodations. A visitor can read the mission, see upcoming events, apply for a scholarship, and donate.",
    image: "/assets/images/portfolio/cases/able-athletics-realistic.jpg",
    liveUrl: "https://ableathletics.org/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "A community organisation has two jobs online: explain the work, and give a person one next step — show up, apply, or give. A long statement with no action loses both.",
    built:
      "A public site with the mission, an events block, a scholarship prompt, and a donation section. Contact for technical support is on the page. The organisation's own seasonal counts stay on their site and are not used here as a build result.",
    role: [
      "Nonprofit page structure",
      "Events and scholarship paths",
      "Donation call to action",
      "Plain-language mission",
    ],
    capabilities: ["Nonprofit website", "Events", "Donation", "Scholarship link"],
    context: [
      "People search for adaptive sports, inclusion programs, and how to support a local organisation. The page answers what Able Athletics does before it asks for money.",
    ],
    constraints: [
      "Athlete, volunteer, therapist, and coach counts published by the organisation are not claimed as a result of the website.",
      "No fundraising total is stated here.",
      "The donation action is theirs to operate.",
    ],
    approach: [
      "State inclusion and education first.",
      "Put events and scholarships where a family can act.",
      "Keep donation as a clear second action, not the only sentence.",
    ],
    workflow: [
      "A visitor reads who the programs are for.",
      "They can open events or a scholarship application.",
      "A donation section explains that a gift puts an athlete on the field.",
      "Support email is on the page for technical help.",
    ],
    outcome:
      "A live nonprofit site at ableathletics.org. Participation numbers on that site are the organisation's, not a measurement of this build.",
    result: null,
    faqs: [
      {
        q: "Are the athlete and volunteer numbers yours?",
        a: "No. Able Athletics publishes its own seasonal counts. This case does not treat them as a website result.",
      },
      {
        q: "What can a visitor do?",
        a: "Read the mission, look at events, apply for a scholarship, or donate. Those paths are on the public site.",
      },
    ],
  },
  {
    slug: "vgc-international-college",
    name: "VGC International College",
    shortTitle: "VGC International College Website",
    gigSlug: "web-mobile",
    category: "Education website · Vancouver",
    kind: "Client project",
    keywords: ["English courses Vancouver", "international business programs", "university pathways Canada"],
    blurb:
      "A college site for English and international business programs in downtown Vancouver, with a brochure download.",
    summary:
      "VGC International College is in downtown Vancouver. The site presents English programs, business certificates, diplomas and co-op, and university pathways, plus a brochure download and two campus addresses.",
    image: "/assets/images/portfolio/cases/vgc-college-realistic.jpg",
    liveUrl: "https://vgc.ca/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "An international student has to see the program, the city, and the next step in one visit. A campus story that never offers a brochure or a program link wastes the search.",
    built:
      "A college marketing site. The headline is the school. Sections cover English, business programs, and university pathways. Campus addresses for Hastings and Granville are on the page, with a phone and email. Program claims and review counts on the college site are not repeated here.",
    role: [
      "Education site structure",
      "Program sections",
      "Brochure download",
      "Campus and contact details",
    ],
    capabilities: ["Education website", "Program pages", "Brochure", "Contact"],
    context: [
      "Searches include English courses in Vancouver, international business diploma, co-op, and university pathway without IELTS. The page names those programs in the school's own words.",
    ],
    constraints: [
      "Nationality counts, campus counts, and review scores on vgc.ca are the college's, not a result claimed here.",
      "No enrolment figure is invented.",
    ],
    approach: [
      "Name the school and the city in the first screen.",
      "Split English, business, and pathways so each search has a section.",
      "Offer the brochure as the concrete next step.",
      "Put both campuses where a student can check the address.",
    ],
    workflow: [
      "A visitor reads what VGC teaches.",
      "They open English, business, or pathways.",
      "They can download the brochure.",
      "Phone, email, and the two Vancouver addresses are in the footer area of the page.",
    ],
    outcome:
      "A live college site at vgc.ca. Academic statistics published there are not claimed as a build result.",
    result: null,
    faqs: [
      {
        q: "Did this build produce the college's review score?",
        a: "No. Reviews and program statistics on vgc.ca belong to the college. This page describes the website.",
      },
      {
        q: "Which queries does the page answer?",
        a: "English courses in Vancouver, international business programs, co-op, and university pathways, plus how to request the brochure.",
      },
    ],
  },
  {
    slug: "finjet-capital",
    name: "Finjet Capital",
    shortTitle: "Finjet Capital Services Website",
    gigSlug: "web-mobile",
    category: "Financial services website",
    kind: "Client project",
    keywords: ["financial services website", "wealth management", "investment banking"],
    blurb:
      "A services site for a California broker-dealer: wealth, banking, retirement, and a consultation form.",
    summary:
      "Finjet Capital's public site presents wealth management, investment banking, real estate, institutional trading, retirement planning, stocks, fixed income, and a consultation form. The office address and support email are on the page.",
    image: "/assets/images/portfolio/cases/finjet-capital-realistic.jpg",
    liveUrl: "https://finjetcapital.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "A firm with many service lines becomes a list. A visitor who wants retirement planning or a conversation should find that line and a form without reading the whole history.",
    built:
      "A multi-section services website. Each practice has its own block. A consultation form closes the page. Transaction figures, deal announcements, and membership marks on the firm's site are not restated here.",
    role: [
      "Services information architecture",
      "Practice sections",
      "Consultation form",
      "Contact block",
    ],
    capabilities: ["Services website", "Consultation form", "Contact"],
    context: [
      "The useful search is the service: wealth management, retirement planning, investment banking, or a consultation. The page is structured as those services.",
    ],
    constraints: [
      "No asset, transaction, or headcount figure from the firm's marketing is repeated here.",
      "No performance or return is claimed.",
      "This case is the website, not financial advice.",
    ],
    approach: [
      "Open with the firm, then the service grid.",
      "Give each practice a short explanation.",
      "End on a form a person can submit.",
      "Leave the firm's own announcements on their site.",
    ],
    workflow: [
      "A visitor scans the service lines.",
      "They read the practice that matches.",
      "They submit the consultation form or use the published email.",
    ],
    outcome:
      "A live services site at finjetcapital.com. No financial result is claimed for the build.",
    result: null,
    faqs: [
      {
        q: "Why are the firm's transaction figures not on this page?",
        a: "They are the firm's own marketing. This case study does not adopt them as a measured outcome of the website.",
      },
      {
        q: "What can a visitor do?",
        a: "Read the service lines and send a consultation request from the form on the site.",
      },
    ],
  },
  {
    slug: "wiki-studio-portal",
    name: "The Wiki Studio Portal",
    shortTitle: "Wiki Studio Team Portal",
    gigSlug: "web-mobile",
    category: "Client portal · Attendance and production",
    kind: "Client project",
    keywords: ["production team portal", "attendance portal", "private client portal"],
    blurb:
      "A sign-in portal for The Wiki Studio covering attendance, production, and the team.",
    summary:
      "The Wiki Studio portal is a signed-in tool. The public page is the sign-in, labelled for attendance, production, and the team. Day-to-day records stay behind that login.",
    image: "/assets/images/portfolio/cases/wiki-studio-portal-realistic.jpg",
    liveUrl: "http://portal.thewikistudio.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "Attendance and production notes do not belong on a public homepage. The portal's job is to let the team in and keep everyone else out.",
    built:
      "A sign-in screen for The Wiki Studio, described on the page as the attendance, production, and team portal. Internal records are not copied into this case study.",
    role: ["Portal front door", "Sign-in", "Separation of public and team data"],
    capabilities: ["Web app", "Authentication", "Team portal"],
    context: [
      "This sits beside the SendPilot campaigns site on a different subdomain. One is the public campaign product. This is the team door.",
    ],
    constraints: [
      "No attendance, client, or production records are published here.",
      "No user count.",
    ],
    approach: [
      "Make the public page the sign-in.",
      "Name what the portal is for, in the product's own line.",
      "Keep the case study on this side of the login.",
    ],
    workflow: [
      "A team member opens the portal URL.",
      "They sign in.",
      "Attendance and production stay inside the account.",
    ],
    outcome:
      "A live sign-in at portal.thewikistudio.com. Nothing inside the account is claimed as a metric.",
    result: null,
    faqs: [
      {
        q: "Can the public see the studio's production board?",
        a: "No. The public page is sign-in. This case does not describe private boards.",
      },
      {
        q: "How is this different from SendPilot?",
        a: "SendPilot is the campaigns site on campaigns.thewikistudio.com. This URL is the team portal.",
      },
    ],
  },
  {
    slug: "wiki-studio-campaigns",
    name: "SendPilot",
    shortTitle: "SendPilot Campaigns Site",
    gigSlug: "web-mobile",
    category: "Campaign product · The Wiki Studio",
    kind: "Client project",
    keywords: ["SendPilot", "campaign product", "The Wiki Studio campaigns"],
    blurb:
      "SendPilot, the campaigns product on The Wiki Studio's campaigns subdomain.",
    summary:
      "campaigns.thewikistudio.com presents SendPilot, The Wiki Studio's campaign product. It is the public companion to the studio's signed-in portal. A plain fetch of the page exposes the product name and little else, so this case does not invent a feature list.",
    image: "/assets/images/portfolio/cases/wiki-studio-campaigns-realistic.jpg",
    liveUrl: "https://campaigns.thewikistudio.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "A campaign tool needs a public name and a URL that is not the internal portal. Mixing team login with the product pitch confuses both audiences.",
    built:
      "A campaigns subdomain branded SendPilot, separate from portal.thewikistudio.com. The write-up stops where the public page stops: the product name and its place next to the studio portal.",
    role: ["Campaign product URL", "Separation from the team portal"],
    capabilities: ["Product site", "Campaigns"],
    context: [
      "People who already know The Wiki Studio need a stable URL for the campaign product. This subdomain is that URL.",
    ],
    constraints: [
      "No send volume, open rate, or client list is claimed.",
      "Features that are not readable on the public page are not invented here.",
    ],
    approach: [
      "Keep SendPilot on its own host name.",
      "Link the case to the portal case so the two products stay distinct.",
      "Describe only the public surface.",
    ],
    workflow: [
      "A visitor opens the campaigns subdomain.",
      "They meet SendPilot.",
      "Team operations remain on the portal.",
    ],
    outcome:
      "SendPilot is live at campaigns.thewikistudio.com. No campaign performance is claimed.",
    result: null,
    faqs: [
      {
        q: "What features does SendPilot include?",
        a: "Only what the public page shows. This case does not add a feature list that was not on that page.",
      },
      {
        q: "Where is the team login?",
        a: "On portal.thewikistudio.com, written up as its own case.",
      },
    ],
  },
  {
    slug: "jw-prestige",
    name: "JW Prestige",
    shortTitle: "JW Prestige Paris Chauffeur Site",
    gigSlug: "web-mobile",
    category: "Booking website · Paris chauffeur",
    kind: "Client project",
    keywords: ["chauffeur privé Paris", "Paris airport transfer", "luxury VTC booking"],
    blurb:
      "A French booking site for a Paris chauffeur: vehicle classes, an instant fare, airport transfer, and an FAQ.",
    summary:
      "JW Prestige is a private chauffeur service in Paris. The site, in French, offers an instant fare, Mercedes vehicle classes with starting prices, airport and station transfers, hourly hire, and an FAQ on booking and cost.",
    image: "/assets/images/portfolio/cases/jw-prestige-premium.jpg",
    liveUrl: "https://jwprivatecar.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "A luxury transfer is chosen on a phone, often in a second language, before the flight. The fare, the car, and how to book have to be on the first screen.",
    built:
      "A booking-led marketing site. The headline is the chauffeur service. A trip planner asks for an instant fare. Vehicle classes list passengers, luggage, and a starting price. Service blocks cover airport greeting, corporate travel, and payment. The FAQ answers why a private driver, what is included, and what a day costs. Prices on the site are the operator's.",
    role: [
      "Booking-first page structure",
      "Vehicle class blocks",
      "French-language service and FAQ",
      "Contact and reservation path",
    ],
    capabilities: ["Booking website", "Vehicle catalogue", "FAQ", "Quote form"],
    context: [
      "Searches include chauffeur privé Paris, transfert aéroport, and Mercedes avec chauffeur. The page is written in French for that demand.",
    ],
    constraints: [
      "Fares published on jwprivatecar.com are the operator's prices, not a result of the website.",
      "No booking-volume figure is claimed.",
      "City lists and fleet details are the service's own.",
    ],
    approach: [
      "Put the fare request above the story.",
      "Show the car classes with a starting price so the choice is concrete.",
      "Answer airport, hourly, and payment questions in an FAQ.",
      "Keep the phone and email on the page.",
    ],
    workflow: [
      "A visitor plans a trip and requests a fare.",
      "They compare vehicle classes.",
      "They read how airport pickup and hourly hire work.",
      "They book from the site, by phone, or by chat, as the page states.",
    ],
    outcome:
      "A live chauffeur site at jwprivatecar.com. No reservation count is claimed.",
    result: null,
    faqs: [
      {
        q: "Are the Mercedes prices a website result?",
        a: "No. They are the operator's published starting fares. This case does not treat them as a conversion metric.",
      },
      {
        q: "What language is the site?",
        a: "French. It targets chauffeur and airport-transfer searches in Paris and other French cities the operator lists.",
      },
    ],
  },
  {
    slug: "aaron-paderewski",
    name: "Aaron Christian Paderewski",
    shortTitle: "Aaron Paderewski Actor Portfolio",
    gigSlug: "web-mobile",
    category: "Actor portfolio",
    kind: "Client project",
    keywords: ["Aaron Christian Paderewski", "actor portfolio website", "film actor credits"],
    blurb:
      "An actor portfolio for Aaron Christian Paderewski, with film projects and a contact email.",
    summary:
      "aaronpaderewski.com is an actor portfolio. The public page names Aaron Christian Paderewski and points at film projects including Red Right Hand, The Inspectors, and Halloween, with a contact email.",
    image: "/assets/images/portfolio/cases/aaron-paderewski-realistic.jpg",
    liveUrl: "https://aaronpaderewski.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "A casting visitor needs the name, the work, and a way to write. A portfolio that hides the contact under a long bio fails that visit.",
    built:
      "A short portfolio site: the name, credited projects, and an email. It is a one-person site, not a studio platform.",
    role: ["Portfolio structure", "Project grid", "Contact"],
    capabilities: ["Portfolio website", "Project grid", "Contact"],
    context: [
      "The search is the person's name plus the film titles. The page puts those on the first screen.",
    ],
    constraints: [
      "No award count from the page is repeated here.",
      "Credits are the actor's, not a claim about the website's performance.",
    ],
    approach: [
      "Lead with the name.",
      "Show the projects as the proof.",
      "Keep email one step away.",
    ],
    workflow: [
      "A visitor lands on the name.",
      "They open a project.",
      "They email from the address on the page.",
    ],
    outcome:
      "A live actor portfolio at aaronpaderewski.com. No traffic figure is claimed.",
    result: null,
    faqs: [
      {
        q: "Is this a fan site?",
        a: "It is the public portfolio at aaronpaderewski.com, written up as client work. It is not a concept build.",
      },
      {
        q: "What is on the page?",
        a: "The actor's name, film projects, and a contact email.",
      },
    ],
  },
  {
    slug: "make-a-move",
    name: "Make A Move Ltd",
    shortTitle: "Make A Move Surrey Movers Site",
    gigSlug: "web-mobile",
    category: "Local service website · Movers",
    kind: "Client project",
    keywords: ["movers Surrey BC", "Lower Mainland moving company", "junk removal Surrey"],
    blurb:
      "A movers site for Surrey and the Lower Mainland: moving, junk removal, packing, cleaning, and a quote.",
    summary:
      "Make A Move Ltd is a moving company in Surrey, British Columbia. The site covers residential and commercial moving, junk removal, packing, cleaning, and storage, and asks the visitor to request a quote.",
    image: "/assets/images/portfolio/cases/make-a-move-realistic.jpg",
    liveUrl: "https://makeamoveltd.com/",
    relatedAnswer: "do-i-need-automation-or-a-better-form",
    problem:
      "A mover is hired from a phone search. The page has to name the city, the services, and the quote, or the visitor calls the next result.",
    built:
      "A local service site. The headline names Surrey and the Lower Mainland. Service blocks cover moving, junk removal, packing, and cleaning. The office phone and hours are on the page. Review text on the company site is not copied here.",
    role: [
      "Local service page structure",
      "Service blocks",
      "Quote and phone path",
    ],
    capabilities: ["Local business website", "Service pages", "Quote", "Phone"],
    context: [
      "Searches include movers Surrey BC, junk removal, and packing services in the Lower Mainland. The page uses those services as headings.",
    ],
    constraints: [
      "Years in business and satisfaction lines on the company site are not claimed as a website result.",
      "No lead-count is stated.",
    ],
    approach: [
      "Put the city and the service in the headline.",
      "Give each service its own block and a quote prompt.",
      "Keep the phone number visible.",
    ],
    workflow: [
      "A visitor sees movers in Surrey.",
      "They pick moving, junk, packing, or cleaning.",
      "They call or request a quote.",
    ],
    outcome:
      "A live movers site at makeamoveltd.com. No booking count is claimed.",
    result: null,
    faqs: [
      {
        q: "Does the site claim a satisfaction rate as your result?",
        a: "The company publishes its own promises. This case does not adopt them as a measured outcome.",
      },
      {
        q: "What should a visitor do next?",
        a: "Request a quote or call the number on the site. That is the action the page is built around.",
      },
    ],
  },
  {
    slug: "signal-auto-movers",
    name: "Signal Auto Movers",
    shortTitle: "Signal Auto Movers Transport Site",
    gigSlug: "web-mobile",
    category: "Auto transport website · United States",
    kind: "Client project",
    keywords: ["enclosed auto transport", "door-to-door car shipping", "classic car transport USA"],
    blurb:
      "An enclosed auto transport site: quote steps, door-to-door and terminal options, and a phone path.",
    summary:
      "Signal Auto Movers is an enclosed car shipping company in the United States. The site explains enclosed and open transport, door-to-door and terminal-to-terminal, and the steps from quote to dispatch. The phone number is on the page.",
    image: "/assets/images/portfolio/cases/signal-auto-movers-realistic.jpg",
    liveUrl: "https://signalmovers.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "Car shipping searches are full of lookalike brokers. The page has to say enclosed trailer, no payment before booking, and how a quote works, in that order.",
    built:
      "A service site for enclosed auto transport. Sections cover the carrier network, insurance, the quote, dispatch, and how an owner prepares the car. Testimonials on the company site are not copied here. A staging mailbox that appeared in one fetch is not published.",
    role: [
      "Service site structure",
      "Quote and dispatch steps",
      "Phone and SMS path",
    ],
    capabilities: ["Service website", "Quote steps", "Phone"],
    context: [
      "Searches include enclosed auto transport, door-to-door car shipping, and classic car transport in the US. Those phrases are the page's sections.",
    ],
    constraints: [
      "Client testimonials on signalmovers.com are not repeated here.",
      "No shipment count or insurance dollar amount is claimed.",
    ],
    approach: [
      "Lead with enclosed transport.",
      "Show quote, dispatch, and vehicle prep as three steps.",
      "Offer phone and text as the human path.",
    ],
    workflow: [
      "A visitor reads enclosed versus open transport.",
      "They see the quote and dispatch sequence.",
      "They call or text the number on the page.",
    ],
    outcome:
      "A live auto transport site at signalmovers.com. No shipping volume is claimed.",
    result: null,
    faqs: [
      {
        q: "Are customer quotes on this case study?",
        a: "No. The company publishes its own testimonials. This page describes the website.",
      },
      {
        q: "What is the next step on the site?",
        a: "A quote: car details, pickup and delivery, then dispatch. The phone number is on the page.",
      },
    ],
  },
  {
    slug: "iicon-shipping",
    name: "iIcon Shipping",
    shortTitle: "iIcon Shipping Florida to Jamaica",
    gigSlug: "web-mobile",
    category: "Freight website · Florida to Jamaica",
    kind: "Client project",
    keywords: ["Florida to Jamaica shipping", "package forwarding Jamaica", "air and sea freight Jamaica"],
    blurb:
      "A freight-forwarding site: a Florida delivery address, air and sea to Jamaica, tracking, and a quote form.",
    summary:
      "iIcon Shipping gives shoppers a Florida delivery address and forwards packages to Jamaica by air or sea. The site explains signup, shopping to that address, forwarding, tracking, invoice upload, and a quote form.",
    image: "/assets/images/portfolio/cases/iicon-shipping-realistic.jpg",
    liveUrl: "https://iiconshipping.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "Someone in Jamaica buying from a US store needs the address, the freight choice, and a way to see the package. A generic logistics page does not answer that.",
    built:
      "A service site aimed at US-to-Jamaica forwarding. Blocks cover a personal Florida address, air freight, sea freight, real-time tracking, and invoice upload. A four-step path runs from free signup to delivery in Jamaica. A quote form and two phone numbers are on the page. Review text on the company site is not copied, because the same paragraph is repeated under different names.",
    role: [
      "Service explanation",
      "Four-step shipping path",
      "Quote form and phone",
      "Tracking and invoice sections",
    ],
    capabilities: ["Logistics website", "Quote form", "Tracking explanation", "Signup path"],
    context: [
      "Searches include ship from Florida to Jamaica, US address for Jamaica, and air or sea freight to Kingston. The page is written for that route.",
    ],
    constraints: [
      "No package volume or delivery-time statistic is claimed here.",
      "Repeated review copy on the company site is not treated as proof.",
      "Warehouse addresses that the company sends only after signup are not published.",
    ],
    approach: [
      "Say the route in the headline: shop in the US, ship to Jamaica.",
      "Separate air and sea.",
      "Show signup, shop, forward, receive as four steps.",
      "Offer a quote form for anything that is not a standard parcel.",
    ],
    workflow: [
      "A visitor reads how the Florida address works.",
      "They compare air and sea.",
      "They sign up or request a quote.",
      "Tracking and invoice upload are explained as account features, not demonstrated with live customer data.",
    ],
    outcome:
      "A live forwarding site at iiconshipping.com. No shipment count is claimed.",
    result: null,
    faqs: [
      {
        q: "Do you publish customer reviews from iIcon here?",
        a: "No. The company site repeats one review under several names. This case does not use it.",
      },
      {
        q: "What is the service in one line?",
        a: "A Florida delivery address, then air or sea freight to Jamaica, with tracking explained on the site.",
      },
    ],
  },
  {
    slug: "michael-minor",
    name: "Michael Minor Entertainment",
    shortTitle: "Michael Minor Entertainment Website",
    gigSlug: "web-mobile",
    category: "Entertainer website · Live shows",
    kind: "Client project",
    keywords: ["Michael Minor Entertainment", "ventriloquist shows", "live entertainment booking"],
    blurb:
      "A show site for a singer, actor, and ventriloquist: clips, characters, and a booking contact.",
    summary:
      "Michael Minor Entertainment books live shows built from singing, ventriloquism, and comedy. The site presents featured shows, clips, and characters including Screetch, Grandpa, Clarence the Moose, and Guido the Rat, with an email and phone for bookings.",
    image: "/assets/images/portfolio/cases/michael-minor-realistic.jpg",
    liveUrl: "https://michaelminor.com/",
    relatedAnswer: "landing-page-or-web-app",
    problem:
      "A school or theatre books an act from a short visit. They need the kind of show, a clip, and a person to call. A bio with no booking path does not get the date.",
    built:
      "An entertainer site. The headline is the act. Sections cover shows, clips, and characters. Booking contact is an email and a phone number for schools, theatres, corporate events, and special appearances. Placeholder roster copy that is still on the live page is not described as a real cast.",
    role: [
      "Entertainer page structure",
      "Show and character sections",
      "Booking contact",
    ],
    capabilities: ["Entertainer website", "Show sections", "Booking contact"],
    context: [
      "Searches are the performer's name, ventriloquist shows, and school or corporate entertainment. The page leads with that act.",
    ],
    constraints: [
      "No ticket sales or attendance figure is claimed.",
      "Names that sit under placeholder text on the live site are not listed here as performers.",
    ],
    approach: [
      "Name the act in the first line.",
      "Show characters and clips as the proof.",
      "Put email and phone on the booking close.",
    ],
    workflow: [
      "A visitor reads what the show is.",
      "They watch a clip or meet a character.",
      "They email or call the booking contacts on the page.",
    ],
    outcome:
      "A live entertainer site at michaelminor.com. No booking count is claimed.",
    result: null,
    faqs: [
      {
        q: "Who is the act?",
        a: "Michael Minor, booked as a singer, actor, and ventriloquist for schools, theatres, and events. The characters named on the public show page are part of that act.",
      },
      {
        q: "How does someone book?",
        a: "Email or phone, both published on michaelminor.com. This case does not add a private number.",
      },
    ],
  },
];
