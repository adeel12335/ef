import LegalPage, { LegalTodo } from "@/components/legal/LegalPage";
import {
  jurisdiction,
  legalName,
  privacyEmail,
  processors,
  tradingAs,
} from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "What this site collects, who can see it and how long it is kept. No cookies, no analytics, no tracking — only the enquiry form.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      slug="privacy"
      title="Privacy Policy"
      intro="What this site collects, who can see it, how long it is kept, and what you can ask me to do with it."
    >
      <section>
        <h3>The short version</h3>
        <p>
          This site sets no cookies, runs no analytics and embeds no trackers.
          The only personal data it collects is what you type into the enquiry
          form — your name, your email address and your message — which is
          emailed to me so I can reply. Nothing is sold, and nothing is used for
          advertising.
        </p>
      </section>

      <section>
        <h3>Who is responsible for your data</h3>
        <p>
          {legalName}
          {tradingAs ? `, operating as ${tradingAs},` : ""} is the data
          controller for this website. I am an independent developer based in{" "}
          {jurisdiction}, working with clients internationally.
        </p>
        {privacyEmail ? (
          <p>
            For any question about your data, or to exercise any of the rights
            below, email <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
          </p>
        ) : (
          <LegalTodo>
            A monitored email address for privacy requests. Data-protection law
            expects a contact route for access and deletion requests, and the
            enquiry form is not a good one — someone asking you to delete their
            data should not have to submit more of it. Set{" "}
            <code>privacyEmail</code> in <code>src/lib/legal.ts</code>.
          </LegalTodo>
        )}
      </section>

      <section>
        <h3>What this site collects</h3>
        <p>
          The enquiry, a short abuse count, and a spam check:
        </p>
        <ul>
          <li>
            <strong>Enquiry form submissions.</strong> Your name, email address
            and the message you write. You choose what goes in the message, so
            please do not include anything sensitive — passwords, card details
            or confidential documents — in a first contact.
          </li>
          <li>
            <strong>Your IP address, briefly.</strong> The contact route counts
            recent submissions per IP address to stop automated abuse. That
            count is held in the server&rsquo;s memory for ten minutes and is
            never written to a database or a file. It is discarded when the
            window passes or the server restarts.
          </li>
          <li>
            <strong>A reCAPTCHA check on the enquiry form.</strong> Google
            receives a token for that check, which can include your IP address
            and browser data, so a script cannot send the form. The message
            itself is not sent to Google.
          </li>
        </ul>
        <p>
          Your web host will also keep its own server logs, which typically
          record IP addresses and the pages requested. That is standard for any
          website and is outside this site&rsquo;s own code.
        </p>
      </section>

      <section>
        <h3>What this site does not do</h3>
        <p>
          Stated plainly, because most privacy policies bury it:
        </p>
        <ul>
          <li>This site does not set its own cookies, and there is no analytics cookie. Google reCAPTCHA on the enquiry form may set a cookie to tell a person from a script.</li>
          <li>No analytics, no tag manager, no pixels, no session recording, no heatmaps.</li>
          <li>No advertising networks, and no selling of personal data. The only sharing is with the services listed below, to deliver the enquiry and to run the spam check.</li>
          <li>No profiling and no automated decision-making about you.</li>
          <li>
            Fonts are served from this site rather than from Google Fonts, so
            loading a page does not pass your IP address to a third party.
          </li>
        </ul>
      </section>

      <section>
        <h3>Why I process it, and on what basis</h3>
        <p>
          Your enquiry is processed so I can reply to it and, if we work
          together, so I can quote and deliver the work. Under UK and EU data
          protection law the lawful basis is legitimate interests — responding
          to someone who deliberately contacted me — and, once we agree a
          project, performance of a contract.
        </p>
        <p>
          The brief IP count and the reCAPTCHA check exist to keep the form
          usable and are also a legitimate interest: without them, the form
          can be flooded with spam.
        </p>
      </section>

      <section>
        <h3>Who else can see it</h3>
        <p>
          Only the services needed to deliver the email and serve the site.
          Each is bound by its own agreement and may not use your data for its
          own purposes.
        </p>
        <ul>
          {processors.map((p) => (
            <li key={p.name}>
              <strong>{p.name}</strong> — {p.role}. Receives: {p.data}. Processed
              in {p.where}.
              {p.url ? (
                <>
                  {" "}
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    Their privacy policy
                  </a>
                  .
                </>
              ) : null}
            </li>
          ))}
        </ul>
        <p>
          Because I work internationally, your data may be processed outside
          your own country — including in the United States. Where that applies
          to UK or EU personal data, the transfer relies on the provider&rsquo;s
          own safeguards, such as standard contractual clauses.
        </p>
        <p>
          I will also disclose data if the law genuinely requires it. I will
          tell you if that happens, unless I am forbidden from doing so.
        </p>
      </section>

      <section>
        <h3>How long it is kept</h3>
        <ul>
          <li>
            <strong>Enquiries that do not become projects:</strong> kept for up
            to 12 months in my email, then deleted. Enquiries are often picked
            up again months later, which is the only reason for keeping them at
            all.
          </li>
          <li>
            <strong>Project correspondence:</strong> kept for as long as the
            project runs and for 6 years afterwards, because tax and contract
            records have to be retained.
          </li>
          <li>
            <strong>Rate-limit counts:</strong> ten minutes, in memory only.
          </li>
        </ul>
      </section>

      <section>
        <h3>Your rights</h3>
        <p>
          Wherever you are, you can ask me to show you what I hold about you,
          correct it, or delete it, and I will do so. If you are in the UK or
          EU, you also have the right to restrict or object to processing, to
          receive your data in a portable format, and to complain to your data
          protection authority — in the UK that is the Information
          Commissioner&rsquo;s Office.
        </p>
        <p>
          There is nothing to opt out of here in the marketing sense: I do not
          run a mailing list and I do not send unsolicited email.
        </p>
      </section>

      <section>
        <h3>Security, honestly described</h3>
        <p>
          Enquiries are sent over an encrypted connection and the secrets that
          send them are stored as server environment variables, never in the
          website code or in a repository. Access to client systems is requested
          at the narrowest scope that does the job, granted from your own
          accounts rather than copied, and revocable by you at any time.
        </p>
        <p>
          No system is perfectly secure, and anyone claiming otherwise is
          selling something. If a breach ever affected your data, I would tell
          you and the relevant authority within the time the law requires.
        </p>
      </section>

      <section>
        <h3>Children</h3>
        <p>
          This is a business-to-business service and is not directed at
          children. I do not knowingly collect data from anyone under 16.
        </p>
      </section>

      <section>
        <h3>Changes</h3>
        <p>
          If this policy changes, the date at the top changes with it. Material
          changes affecting people who have already contacted me will be
          notified by email where I have an address for them.
        </p>
      </section>

      <p className="ef-note">
        This policy describes how this website is actually built — the data
        points above were taken from the code, not from a template. It is still
        a draft prepared without legal advice; have it reviewed before you rely
        on it commercially.
      </p>
    </LegalPage>
  );
}
