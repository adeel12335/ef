import Link from "next/link";
import LegalPage, { LegalTodo } from "@/components/legal/LegalPage";
import type { LegalFaq } from "@/components/legal/LegalPage";
import { REFUND_STAGES, advancePercent, refundDays } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Refund & Cancellation Policy",
  description: `When the ${advancePercent}% advance is refundable, exactly which situations earn a 100% refund, and how a part-way cancellation is calculated — with worked examples.`,
  path: "/refunds",
});

/**
 * Worked examples are computed from the same constants the policy quotes, so
 * the arithmetic shown to a client can never drift from the stated rules. The
 * fee is a representative mid-range package, not a quote.
 */
const EXAMPLE_FEE = 300;
const advanceOf = (fee: number) => Math.round((fee * advancePercent) / 100);
const chargeOf = (fee: number, percent: number) =>
  Math.round((fee * percent) / 100);

/** Percentage payable once the given stage is complete. */
const pct = (num: string) =>
  REFUND_STAGES.find((s) => s.num === num)?.charged ?? 0;

/**
 * One text node, not a "$" plus a number. Keeping it whole is what stops a
 * figure wrapping as "$15 / 0" at narrow widths.
 */
function Money({ amount }: { amount: number }) {
  return <>{`$${amount.toLocaleString("en-US")}`}</>;
}

/**
 * The questions people actually type before paying a freelancer an advance.
 * Each answer stands alone, because an assistant quoting one will not carry
 * the rest of the page with it. These are rendered visibly below.
 */
const REFUND_FAQS: LegalFaq[] = [
  {
    q: "Is the advance refundable?",
    a: `Yes, in full, until work starts. The ${advancePercent}% advance is not a non-refundable booking fee. Cancel before I begin work described in the scope and you get all of it back with no deductions. Once work starts it is drawn down against completed stages instead.`,
  },
  {
    q: "When do I get a 100% refund?",
    a: "If you cancel before work starts, if I cannot deliver what the written scope describes, if I end the project for my own reasons, if I miss the deadline by a margin you cannot work with, or if nothing usable was delivered and I cannot fix it. Duplicate payments are also returned in full.",
  },
  {
    q: "What happens if I cancel half-way through a project?",
    // Percentages read from the stage table so the answer cannot drift from it.
    a: `You pay for the stages already completed and the rest is refunded. Completing discovery costs ${pct("01")}% of the fee, a delivered written scope ${pct("02")}%, and a delivered working build ${pct("03")}%. A stage only counts once its deliverable is in your hands, so work in progress is not charged.`,
  },
  {
    q: "Can I get a refund after the work is delivered?",
    a: "Defects are fixed free during your support period, and if a defect cannot be fixed that part of the fee is refunded. Changing your mind about what you wanted is not refundable, because the work matches the scope you approved before paying. Changes are quoted separately.",
  },
  {
    q: "How long does a refund take?",
    a: `Within ${refundDays} days of agreeing the amount, usually sooner. It goes back to the same account and method you paid from. Where a bank or processor deducts a transfer or conversion fee I cannot recover, the refund is of the amount I actually received.`,
  },
  {
    q: "Do you charge a cancellation fee?",
    a: "No. There is no separate cancellation fee, admin fee or restocking charge anywhere in this policy. You pay for work completed and nothing else. If no work was completed, you pay nothing.",
  },
];

export default function RefundsPage() {
  const advance = advanceOf(EXAMPLE_FEE);

  // The three shapes a cancellation can take: all back, some back, more owed.
  const plan = REFUND_STAGES.find((s) => s.num === "02")!;
  const build = REFUND_STAGES.find((s) => s.num === "03")!;
  const planCharge = chargeOf(EXAMPLE_FEE, plan.charged);
  const buildCharge = chargeOf(EXAMPLE_FEE, build.charged);

  return (
    <LegalPage
      slug="refunds"
      title="Refund & Cancellation Policy"
      faqs={REFUND_FAQS}
      intro={`What happens to your money if a project stops — before it starts, part-way through, or after delivery. Written in plain numbers, including when you get 100% back and how the ${advancePercent}% advance is treated.`}
    >
      <section>
        <h3>The short version</h3>
        <p>
          <strong>You pay for the work that gets done, and nothing else.</strong>{" "}
          If a project stops, I charge for the stages that are finished and
          refund the rest. That is the whole rule — the table and the examples
          below just show what it comes to in practice.
        </p>
        <div className="ef-table">
          <table>
            <thead>
              <tr>
                <th scope="col">If this happens</th>
                <th scope="col">You get back</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">You cancel before I start work</th>
                <td>Everything paid, including the full advance</td>
              </tr>
              <tr>
                <th scope="row">You cancel part-way through</th>
                <td>Everything except the stages already completed</td>
              </tr>
              <tr>
                <th scope="row">I cannot deliver what we agreed</th>
                <td>Everything paid, whatever work I had done</td>
              </tr>
              <tr>
                <th scope="row">A defect I cannot fix</th>
                <td>The part of the fee covering what does not work</td>
              </tr>
              <tr>
                <th scope="row">You change your mind after delivery</th>
                <td>Nothing — but defects are still fixed free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Why this is a cancellation policy, not a returns policy</h3>
        <p>
          A returns policy covers goods you can post back. This is custom work.
          Once a workflow is built, an assistant is configured against your
          business, or a site is designed around your content, there is no
          object to return and the hours are already spent — so &ldquo;send it
          back for a refund&rdquo; has nothing to attach to.
        </p>
        <p>
          What actually comes up is cancellation: one of us stops the project,
          and we need a rule for the money. That rule is below, and it is based
          on <strong>work completed</strong>, not on whether you still want the
          result.
        </p>
        <p>
          The one sense in which something is returned is access. On any
          cancellation I hand over everything produced and paid for, delete or
          return any files of yours I hold, and remove my access to your
          accounts. You are never left with my credentials inside your systems.
        </p>
      </section>

      <section>
        <h3>The advance, and when it comes back</h3>
        <LegalTodo>
          Confirm the advance percentage. It comes from{" "}
          <code>advancePercent</code> in <code>src/lib/legal.ts</code> and needs
          to match what your invoices say.
        </LegalTodo>
        <p>
          Every project starts with an advance of{" "}
          <strong>{advancePercent}% of the agreed fee</strong>, paid after you
          accept the written scope and before I begin. The balance is due on
          delivery.
        </p>
        <p>What the advance is for, stated honestly:</p>
        <ul>
          <li>
            <strong>It reserves your delivery window.</strong> I work on a small
            number of projects at a time. Accepting yours means turning down or
            delaying others for those dates.
          </li>
          <li>
            <strong>It funds the first stages.</strong> Discovery and scoping
            happen before anything is visible, and they are where most of the
            thinking goes.
          </li>
          <li>
            <strong>It is a commitment, not a penalty.</strong> It is part of
            your fee — not an extra charge, and not a fee for the privilege of
            booking.
          </li>
        </ul>
        <p>
          <strong>The advance is fully refundable until I start work.</strong>{" "}
          It is not a non-refundable booking fee, and this page does not contain
          the words &ldquo;all deposits are final&rdquo;. Once work begins it
          stops being refundable in full and starts being drawn down against
          completed stages, exactly as set out below.
        </p>
        <p>
          &ldquo;Started&rdquo; has a specific meaning: I have begun work
          described in the scope. A discovery call, a quote, a scope discussion
          or an email exchange is not starting — those happen before you pay
          anything.
        </p>
      </section>

      <section>
        <h3>When you get a full refund</h3>
        <div className="ef-keybox">
          <p>
            <strong>You get 100% of everything paid, in these cases:</strong>
          </p>
          <ul>
            <li>
              <strong>You cancel before I start.</strong> No deductions, no
              explanation required, no questions about why.
            </li>
            <li>
              <strong>I cannot deliver what the scope describes.</strong>{" "}
              Whether because I misjudged the work, something turned out to be
              technically impossible, or a platform will not allow it — if I
              cannot deliver the agreed result, you get everything back
              regardless of how much I had already done. Any finished work is
              yours to keep anyway.
            </li>
            <li>
              <strong>I end the project for my own reasons.</strong> Illness,
              capacity, circumstances — if I am the one walking away, the cost
              of that is mine, not yours.
            </li>
            <li>
              <strong>
                I miss the agreed deadline by a margin you cannot work with
              </strong>
              , and the delay is mine rather than a wait for something from you
              or a third party.
            </li>
            <li>
              <strong>Nothing usable was delivered.</strong> If the project
              reached handover and what arrived does not do the core thing the
              scope said it would, and I cannot fix it, the whole fee is
              refunded — not a portion of it.
            </li>
            <li>
              <strong>You paid twice, or paid the wrong amount.</strong>{" "}
              Duplicate and overpayments are returned as soon as I notice or you
              tell me, whichever is first.
            </li>
          </ul>
        </div>
        <p>
          A full refund in the second and third cases is not conditional on you
          giving back partial work. You keep what exists. I would rather hand
          over something half-finished you can take to someone else than hold it
          hostage against money I did not earn.
        </p>
      </section>

      <section>
        <h3>Cancelling part-way through</h3>
        <p>
          Either of us can end a project in writing at any time. If you are the
          one ending it, you pay for the stages completed and the rest is
          refunded. The stages are the same four shown on the{" "}
          <Link href="/service">services page</Link>, so you can see at any point in a
          project where your money stands.
        </p>
        <div className="ef-table">
          <table>
            <thead>
              <tr>
                <th scope="col">Stage reached</th>
                <th scope="col">What that means</th>
                <th scope="col" className="num">
                  Payable
                </th>
                <th scope="col" className="num">
                  Refundable
                </th>
              </tr>
            </thead>
            <tbody>
              {/* data-label supplies the column name when this collapses to
                  stacked cards on a phone, where the header row is hidden. */}
              {REFUND_STAGES.map((s) => (
                <tr key={s.num}>
                  <th scope="row">{s.stage}</th>
                  <td>{s.reached}</td>
                  <td className="num" data-label="Payable">
                    {s.charged}%
                  </td>
                  <td className="num" data-label="Refundable">
                    {100 - s.charged}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          A stage counts as reached only when its deliverable has actually been
          handed to you — a written summary, a written scope, working software
          you can try. Work in progress on the next stage is not charged, so
          there is no argument about how far through something I had got.
        </p>
        <p>
          The jump between planning and build is the big one, because that is
          where most of the hours are. If you are unsure about a project, the
          cheapest moment to stop is after the written scope: you walk away
          having paid {plan.charged}% and holding a document that describes
          exactly what should be built, which you can take to anyone.
        </p>
      </section>

      <section>
        <h3>Three worked examples</h3>
        <p>
          All three use a{" "}
          <strong>
            <Money amount={EXAMPLE_FEE} /> project
          </strong>{" "}
          with a {advancePercent}% advance of <Money amount={advance} /> paid up
          front. The figures are illustrative — your scope states your own fee.
        </p>

        <div className="ef-example">
          <p className="ef-example__title">1. Cancelled before work started</p>
          <dl>
            <dt>Advance paid</dt>
            <dd>
              <Money amount={advance} />
            </dd>
            <dt>Payable for work completed (none)</dt>
            <dd>
              <Money amount={0} />
            </dd>
            <dt className="total">Refunded to you</dt>
            <dd className="total">
              <Money amount={advance} />
            </dd>
          </dl>
          <p>You get the whole advance back. Nothing is withheld.</p>
        </div>

        <div className="ef-example">
          <p className="ef-example__title">
            2. Cancelled after the written scope was delivered
          </p>
          <dl>
            <dt>Advance paid</dt>
            <dd>
              <Money amount={advance} />
            </dd>
            <dt>
              Payable — stage {plan.num} complete ({plan.charged}% of{" "}
              <Money amount={EXAMPLE_FEE} />)
            </dt>
            <dd>
              <Money amount={planCharge} />
            </dd>
            <dt className="total">Refunded to you</dt>
            <dd className="total">
              <Money amount={advance - planCharge} />
            </dd>
          </dl>
          <p>
            You have paid for the discovery and the plan, you keep both
            documents, and the remaining <Money amount={advance - planCharge} />{" "}
            of your advance comes back. Nothing further is owed.
          </p>
        </div>

        <div className="ef-example">
          <p className="ef-example__title">
            3. Cancelled after the build was delivered for testing
          </p>
          <dl>
            <dt>Advance paid</dt>
            <dd>
              <Money amount={advance} />
            </dd>
            <dt>
              Payable — stage {build.num} complete ({build.charged}% of{" "}
              <Money amount={EXAMPLE_FEE} />)
            </dt>
            <dd>
              <Money amount={buildCharge} />
            </dd>
            <dt className="total">Balance you still owe</dt>
            <dd className="total">
              <Money amount={buildCharge - advance} />
            </dd>
          </dl>
          <p>
            This is the case worth understanding before you start, because it is
            the one where cancelling costs you money rather than returning it.
            The working software exists, so it is payable, and{" "}
            <Money amount={buildCharge} /> is more than the{" "}
            <Money amount={advance} /> advance. You receive the build and
            whatever documentation exists at that point.
          </p>
        </div>
      </section>

      <section>
        <h3>After delivery: defects versus changes</h3>
        <p>
          Every package includes a support period — 7, 14 or 30 days depending
          on the package, stated in your scope. During it I fix{" "}
          <strong>defects</strong> free: cases where the delivered work does not
          do what the written scope says it does.
        </p>
        <p>
          If I cannot fix a defect, that portion of the fee is refunded. If the
          defect means the whole thing does not do its core job, the whole fee
          is refunded — see the full-refund section above.
        </p>
        <p>What is not a defect, and so is not refundable:</p>
        <ul>
          <li>
            <strong>Wanting something different.</strong> If the work matches
            the scope and you now want it to do something else, that is a
            change. Changes get quoted. This is the most common refund request
            on freelance projects, and the reason the scope is written down
            before anyone pays.
          </li>
          <li>
            <strong>Third-party platform changes.</strong> An API changing, a
            model being deprecated, a tool raising its prices or shutting down.
            Keeping a system working through those is maintenance.
          </li>
          <li>
            <strong>Breakage after handover</strong> caused by edits made by you
            or someone else, or by revoked access or an unpaid platform
            subscription.
          </li>
          <li>
            <strong>An AI assistant giving an unexpected answer</strong> inside
            its agreed scope. Models are probabilistic. What I guarantee is the
            scope boundaries and the human handoff that contain that — not that
            a model will never be wrong. This is stated in the{" "}
            <Link href="/terms">Terms</Link> too, because it is the single most
            important expectation to get right before you hire anyone for this
            kind of work.
          </li>
          <li>
            <strong>Business results.</strong> No number of leads, bookings,
            sales or hours saved is promised anywhere on this site, so none can
            be refunded against. If someone promises you a figure, ask them to
            put it in the contract and watch what happens.
          </li>
        </ul>
      </section>

      <section>
        <h3>Third-party costs are not refundable by me</h3>
        <p>
          Model usage, platform subscriptions, telephony minutes, domains and
          hosting are billed to you by those providers, in your own accounts. I
          never hold that money, so I cannot refund it — their own policies
          apply, and most charge for usage already consumed.
        </p>
        <p>
          This is deliberate. Your accounts stay yours, which means you keep
          control of the running costs and can cancel them the moment a project
          stops. Where I can see a configuration that does the same job for
          less, I will say so during the build rather than afterwards.
        </p>
      </section>

      <section>
        <h3>How a refund is paid</h3>
        <p>
          Back the same way you paid, in the same currency, within {refundDays}{" "}
          days of us agreeing the amount — usually sooner. You will not have to
          chase it, and there is nothing to fill in or apply for.
        </p>
        <p>
          Where a bank or payment provider deducts a transfer or conversion fee
          that I cannot recover, the refund is of the amount that actually
          reached me. That is the only deduction there is.
        </p>
      </section>

      <section>
        <h3>Orders placed through a marketplace</h3>
        <p>
          If you order through a platform such as Upwork or Fiverr, that
          platform holds the money and its own refund and dispute rules decide
          what happens to it. This page describes work contracted directly with
          me. Where the two differ, the platform&rsquo;s rules win for orders
          placed on it, because I cannot overrule an escrow.
        </p>
      </section>

      <section>
        <h3>How to ask for a refund</h3>
        <p>
          Write to me through the <Link href="/contact">contact form</Link> or by
          email and tell me three things: what you expected, what you got, and
          what you would like to happen. You do not need to argue a case or
          quote this page back at me.
        </p>
        <p>
          I would much rather hear that something is not right early, while it
          is still cheap to fix, than find out through a chargeback. A
          chargeback costs us both a fee and takes weeks; an email usually takes
          a day. If you do raise a chargeback or a platform dispute without
          contacting me first, I will respond to it with the scope, the
          deliverables and this policy — but nobody wins that version of the
          conversation.
        </p>
      </section>

      <section>
        <h3>Common questions</h3>
        {/* Same text as the FAQPage markup on this page — they are generated
            from one array, so they cannot diverge. */}
        <dl className="ef-legal-faq">
          {REFUND_FAQS.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h3>If we disagree</h3>
        <p>
          Tell me what you think is fair and why. Almost every dispute on
          projects this size traces back to a scope that was vaguer than either
          of us realised, and rereading it together settles it more often than
          not. If it genuinely cannot be settled, the{" "}
          <Link href="/terms">Terms of Service</Link> set out the governing law and
          the limits of liability.
        </p>
        <p>
          Your statutory rights come first. If consumer-protection law where you
          live gives you a right to cancel or a refund beyond what is written
          here — a statutory cooling-off period, for instance — that law
          applies and this page does not reduce it.
        </p>
      </section>

      <p className="ef-note">
        This policy is a draft describing how I intend to handle cancellations
        and refunds. It was prepared without legal advice and has not been
        reviewed by a lawyer. Consumer-protection rules in your clients&rsquo;
        countries may give them rights beyond what is written here, and those
        rights take precedence — have this reviewed before relying on it
        commercially.
      </p>
    </LegalPage>
  );
}
