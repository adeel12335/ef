/**
 * FAQ content for structured data.
 *
 * IMPORTANT: these must stay word-for-word identical to the accordion markup in
 * src/app/page.tsx. Google requires FAQ structured data to match what the
 * visitor actually sees, and marking up an answer that is not on the page can
 * get the rich result suppressed. If you edit a question or answer on the page,
 * edit it here too.
 */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Can I book a single gig instead of a full project?",
    a: "Yes. The gigs are fixed-scope on purpose — one automation, one agent, one site — so you can start with the piece that hurts most. If what you need sits outside a listed gig, describe it and I will scope it properly instead of forcing it into a package.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope, and on how quickly access and feedback come back — those two usually matter more than the build itself. You get an estimated timeline with the written scope, and I would rather give you a realistic date than a flattering one.",
  },
  {
    q: "Do you work with clients internationally?",
    a: "Yes — remote by default. I am based in Pakistan and work with businesses worldwide. Calls are scheduled to suit your hours and the rest runs asynchronously, so neither of us is waiting on the other to be awake.",
  },
  {
    q: "Can you work with the tools we already use?",
    a: "Usually, yes. Most business tools expose an API, a webhook or an export, and that is normally enough. The first thing I check is what your tools actually allow, because that shapes what is sensible to build — and if something genuinely cannot be connected, you hear that before work starts.",
  },
  {
    q: "How do you handle access and sensitive information?",
    a: "I ask for the narrowest access that does the job, and only when it is needed. Credentials stay in your accounts, granted to me rather than copied, and are yours to revoke at any point including the day the project ends. Nothing sensitive goes into frontend code or a repository.",
  },
];
