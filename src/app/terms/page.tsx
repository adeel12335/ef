import Link from "next/link";
import LegalPage, { LegalTodo } from "@/components/legal/LegalPage";
import {
  advancePercent,
  businessStatus,
  jurisdiction,
  legalName,
  tradingAs,
} from "@/lib/legal";
import { PRICE_FROM, PRICE_TO } from "@/lib/gigs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Service",
  description:
    "The terms I work under: fixed scope and price, what you provide, who owns the work, support periods and limits of liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      slug="terms"
      title="Terms of Service"
      intro="The terms every project runs under — what is agreed, what you provide, who owns the result, and where the limits are."
    >
      <section>
        <h3>Who these terms are with</h3>
        <p>
          These terms apply between you and {legalName} ({businessStatus})
          {tradingAs ? `, trading as ${tradingAs}` : ""}. &ldquo;I&rdquo; means
          me; &ldquo;you&rdquo; means the person or business engaging me.
        </p>
        <p>
          A project is governed by these terms together with the written scope
          for that project. Where the two disagree, the written scope wins —
          it is the document describing your actual job.
        </p>
      </section>

      <section>
        <h3>How a project is agreed</h3>
        <ul>
          <li>
            Nothing is binding until there is a written scope and you have
            accepted it. Prices published on this site — currently from $
            {PRICE_FROM} to ${PRICE_TO} — are starting points for the scope
            described, not quotes for your project.
          </li>
          <li>
            The scope states what is being built, what it connects to, what is
            deliberately excluded, the timeline and the price.
          </li>
          <li>
            If the scope changes, we agree the change and its cost in writing
            before I act on it. I will not do extra work and invoice you for it
            afterwards, and I will not absorb significant extra work silently.
          </li>
        </ul>
      </section>

      <section>
        <h3>Payment</h3>
        <LegalTodo>
          Your actual payment terms — the advance percentage, when the balance
          falls due, and any late-payment interest. The wording below is a
          reasonable default for freelance work, not a decision I can make for
          you. The advance figure comes from{" "}
          <code>advancePercent</code> in <code>src/lib/legal.ts</code>, so
          changing it there updates this page and the{" "}
          <Link href="/refunds">Refund Policy</Link> together.
        </LegalTodo>
        <ul>
          <li>
            An advance of {advancePercent}% is payable before work starts; the
            balance is due on delivery, before handover of credentials and
            source files.
          </li>
          <li>Invoices are payable within 14 days.</li>
          <li>Prices exclude any taxes, duties or payment-processor fees that apply to you.</li>
          <li>Third-party running costs — model usage, telephony, hosting, platform subscriptions — are yours and are billed by those providers directly, not by me.</li>
          <li>
            If a project is cancelled, the advance is refunded in full before
            work starts and drawn down against completed stages afterwards. The{" "}
            <Link href="/refunds">Refund &amp; Cancellation Policy</Link> sets out the
            stages and the arithmetic.
          </li>
        </ul>
      </section>

      <section>
        <h3>What I am responsible for</h3>
        <ul>
          <li>Delivering what the written scope describes, working with reasonable skill and care.</li>
          <li>Telling you promptly if something will be late, when I know — not at the deadline.</li>
          <li>Providing written documentation and a handover session as part of every project.</li>
          <li>Honouring the post-launch support period stated in your scope.</li>
        </ul>
      </section>

      <section>
        <h3>What you are responsible for</h3>
        <p>
          Most delays on projects like these come from this side, so it is worth
          being explicit:
        </p>
        <ul>
          <li>
            Providing content, access and decisions within a reasonable time.
            Timelines assume responses within about five working days; longer
            gaps move the delivery date.
          </li>
          <li>
            Having the right to give me the access you give me, and the rights
            to any content, data or branding you supply.
          </li>
          <li>
            Accounts and subscriptions with third-party platforms, in your own
            name. I work inside your accounts rather than holding your business
            inside mine.
          </li>
          <li>
            Reviewing the work during the project and during any agreed review
            window. Sign-off is deemed given if a delivery goes 14 days without
            a response.
          </li>
        </ul>
      </section>

      <section>
        <h3>Who owns the work</h3>
        <ul>
          <li>
            On full payment, you own the deliverables made specifically for
            you — the configurations, workflows, prompts, designs and custom
            code described in your scope.
          </li>
          <li>
            I keep ownership of anything pre-existing: my own libraries,
            boilerplate, tooling and general know-how. You get a perpetual,
            non-exclusive licence to use those as part of your deliverables.
          </li>
          <li>
            Third-party components keep their own licences, which pass to you
            on their own terms.
          </li>
          <li>
            Until you have paid in full, the deliverables remain mine.
          </li>
          <li>
            I may describe the work in general terms as a portfolio piece. I
            will not publish your data, screenshots of your systems, or your
            name without your written agreement.
          </li>
        </ul>
      </section>

      <section>
        <h3>AI systems: what I can and cannot promise</h3>
        <p>
          This matters more here than in ordinary software work, so it is
          stated plainly rather than buried.
        </p>
        <ul>
          <li>
            AI models are probabilistic. An assistant can produce an incorrect
            or unexpected response even when it is correctly built. I design
            scope boundaries and human handoffs to contain that, and I test
            against realistic scenarios, but I cannot guarantee that a model
            will never produce a wrong answer.
          </li>
          <li>
            You remain responsible for what your business says to its customers,
            including through a system I build. Where that matters — pricing,
            policies, regulated advice — the agreed design is that the assistant
            escalates to a person rather than answering.
          </li>
          <li>
            I make no guarantee of business outcomes. Nothing I build comes with
            a promised number of leads, bookings, conversions, revenue or hours
            saved, and no such figure is claimed anywhere on this site.
          </li>
          <li>
            Third-party platforms change. Models are deprecated, APIs change and
            pricing moves. Keeping a system working through those changes is
            maintenance, not a defect, unless it falls inside your support
            period.
          </li>
        </ul>
      </section>

      <section>
        <h3>Support and defects</h3>
        <p>
          Every project includes a support period stated in your scope — 7, 14
          or 30 days depending on the package. During it, I fix defects: places
          where the delivered work does not do what the scope says it does, at
          no extra cost.
        </p>
        <p>
          New features, changes of mind, and breakage caused by third-party
          changes or by edits made by someone else are not defects. They can be
          quoted separately or covered by a maintenance arrangement.
        </p>
      </section>

      <section>
        <h3>Confidentiality</h3>
        <p>
          I treat your business information, data and credentials as
          confidential, and will not share them beyond what a project requires.
          I am happy to sign your NDA before we discuss anything sensitive. The
          same obligation applies to anything I share with you.
        </p>
      </section>

      <section>
        <h3>Limits of liability</h3>
        <LegalTodo>
          Liability caps are the clause most worth a lawyer&rsquo;s eye, and
          what is enforceable depends on where you and your clients are. The cap
          below is conventional for freelance work but is a starting point.
        </LegalTodo>
        <ul>
          <li>
            My total liability for any project is limited to the fees you paid
            me for that project.
          </li>
          <li>
            I am not liable for indirect or consequential loss, including lost
            profit, lost business, lost data or reputational harm.
          </li>
          <li>
            Nothing here limits liability for death or personal injury caused by
            negligence, for fraud, or for anything else that cannot lawfully be
            limited.
          </li>
          <li>
            You are responsible for keeping your own backups of your systems and
            data.
          </li>
        </ul>
      </section>

      <section>
        <h3>Ending a project</h3>
        <p>
          Either of us may end a project in writing. What happens to money is in
          the <Link href="/refunds">Refund &amp; Cancellation Policy</Link>. On
          termination I hand over everything produced and paid for, and remove
          my access to your systems.
        </p>
      </section>

      <section>
        <h3>Governing law</h3>
        <p>
          These terms are governed by the laws of {jurisdiction}, and its courts
          have jurisdiction over any dispute. If you are a consumer rather than
          a business, this does not remove rights you have under the law of your
          own country.
        </p>
        <p>
          Before anyone goes near a court, I would rather talk. Most
          disagreements on projects this size come from an unclear scope, and
          are cheaper to fix by rereading it together.
        </p>
      </section>

      <p className="ef-note">
        These terms are a draft describing how I actually work. They were
        prepared without legal advice and have not been reviewed by a lawyer.
        Have them checked against the markets you sell into before relying on
        them.
      </p>
    </LegalPage>
  );
}
