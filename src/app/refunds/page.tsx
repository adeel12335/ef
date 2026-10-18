import LegalPage, { LegalTodo } from "@/components/legal/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Refund & Cancellation Policy",
  description:
    "When a deposit is refundable, what happens if either side cancels mid-project, and what counts as a defect rather than a change of mind.",
  path: "/refunds",
});

export default function RefundsPage() {
  return (
    <LegalPage
      slug="refunds"
      title="Refund & Cancellation Policy"
      intro="What happens to money if a project stops — before it starts, part-way through, or after delivery."
    >
      <section>
        <h3>Why this is not a returns policy</h3>
        <p>
          A returns policy covers goods you can send back. This is custom work:
          once a workflow is built or an assistant is configured for your
          business, there is nothing to return and the time is already spent.
          So this policy covers cancellation and refunds instead, which is the
          thing that actually comes up.
        </p>
      </section>

      <section>
        <h3>The short version</h3>
        <ul>
          <li>Before I start: full refund of anything paid.</li>
          <li>Part-way through: you pay for work completed, the rest is refunded.</li>
          <li>After delivery: defects are fixed free during your support period; a change of mind is not refundable.</li>
          <li>If I cannot deliver what was agreed: you get a full refund.</li>
        </ul>
      </section>

      <section>
        <h3>Before work begins</h3>
        <p>
          If you cancel after paying a deposit but before I have started, you
          get all of it back. No deductions and no explanation needed.
          &ldquo;Started&rdquo; means I have begun work described in the scope,
          not that we have had a call.
        </p>
      </section>

      <section>
        <h3>Part-way through</h3>
        <p>
          Either of us can end a project in writing. When that happens:
        </p>
        <ul>
          <li>
            I invoice for work genuinely completed up to that point, assessed
            against the stages in your scope — not as a flat percentage.
          </li>
          <li>Anything you have paid beyond that is refunded within 14 days.</li>
          <li>
            If the completed work exceeds the deposit, the balance for it is
            payable.
          </li>
          <li>
            You receive everything produced and paid for, including partial
            work, with whatever documentation exists at that point.
          </li>
        </ul>
        <p>
          If I am the one ending it — because I cannot deliver what was agreed,
          or my circumstances change — you get a full refund of everything paid,
          regardless of work completed, and any finished work is yours anyway.
        </p>
      </section>

      <section>
        <h3>After delivery</h3>
        <p>
          Your support period — 7, 14 or 30 days depending on the package —
          covers <strong>defects</strong>: cases where the delivered work does
          not do what the written scope says it does. Those are fixed at no
          cost, and if I cannot fix one, that portion of the fee is refunded.
        </p>
        <p>What is not a defect:</p>
        <ul>
          <li>
            Wanting something different from what the scope described. That is a
            change, and changes are quoted.
          </li>
          <li>
            A third-party platform changing its API, pricing or model, or
            deprecating something the build relied on.
          </li>
          <li>Breakage caused by edits made by you or someone else after handover.</li>
          <li>
            An AI assistant producing an unexpected response within its agreed
            scope. Models are probabilistic; the scope boundaries and human
            handoff are how that is contained, and they are what I guarantee —
            not that a model will never be wrong.
          </li>
          <li>
            The work not producing a business result. No number of leads,
            bookings or hours saved is promised anywhere, so none can be
            refunded against.
          </li>
        </ul>
      </section>

      <section>
        <h3>Third-party costs</h3>
        <p>
          Platform subscriptions, model usage, telephony and hosting are billed
          to you by those providers, not by me. I cannot refund them, and their
          own refund policies apply. Where I can see a cheaper configuration
          that does the same job, I will say so during the build.
        </p>
      </section>

      <section>
        <h3>How to ask</h3>
        <p>
          Write to me and say what happened. I would rather hear that something
          is not right early, while it is still cheap to fix, than discover it
          in a chargeback. Refunds are issued by the method you paid with,
          normally within 14 days of agreeing the amount.
        </p>
        <LegalTodo>
          Your refund processing details — the payment methods you accept, who
          covers transfer fees on an international refund, and whether you work
          through a marketplace like Upwork or Fiverr whose own refund rules
          would override this page for those orders.
        </LegalTodo>
      </section>

      <section>
        <h3>If we disagree</h3>
        <p>
          Tell me what you think is fair and why. In my experience disputes on
          projects this size trace back to an unclear scope, and rereading it
          together usually settles it. If it does not, the{" "}
          <a href="/terms">Terms of Service</a> set out the governing law.
        </p>
      </section>

      <p className="ef-note">
        This policy is a draft describing how I intend to handle cancellations.
        It was prepared without legal advice. Consumer-protection rules in your
        clients&rsquo; countries may give them rights beyond what is written
        here, and those rights take precedence — have this reviewed before
        relying on it.
      </p>
    </LegalPage>
  );
}
