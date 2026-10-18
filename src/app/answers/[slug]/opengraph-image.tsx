import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ANSWERS, answerBySlug } from "@/lib/answers";
import { gigBySlug } from "@/lib/gigs";
import { BRAND } from "@/lib/seo";

/**
 * A share card per article.
 *
 * Every one of these articles was sharing the single site-wide /brand/og.png,
 * so twenty-four different answers looked identical in a WhatsApp preview or a
 * LinkedIn post. These are drawn at build time from the article's own data —
 * nothing is fetched, and no third-party image is involved, so there is no
 * licence attached to any of it.
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${BRAND} — answer`;

// Generated for the same slugs the page is, so every article gets a card.
export function generateStaticParams() {
  return ANSWERS.map((answer) => ({ slug: answer.slug }));
}

const INK = "#252623";
const IVORY = "#F5F4EF";
const LIME = "#C3E635";
const MUTED = "#666A61";
const BORDER = "#DADDD3";

// Satori reads ttf, otf and woff — not woff2, which is why these are woff.
const fontDir = join(process.cwd(), "src/assets/fonts");
const [bold, medium] = await Promise.all([
  readFile(join(fontDir, "Manrope-ExtraBold.woff")),
  readFile(join(fontDir, "Manrope-Medium.woff")),
]);

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const answer = answerBySlug(slug);
  const gig = answer?.gigSlug ? gigBySlug(answer.gigSlug) : undefined;

  const title = answer?.title ?? "Answers";
  // Long questions need to step down a size or they overflow the card.
  const titleSize = title.length > 72 ? 60 : title.length > 52 ? 70 : 80;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: IVORY,
          padding: "64px 72px",
          fontFamily: "Manrope",
          position: "relative",
        }}
      >
        {/* The stepped lime blocks are the motif the site's hero uses. Each
            one sits a square further left and lower than the last, so they
            read as a descending stair rather than a single bar. */}
        <div
          style={{ position: "absolute", top: 0, right: 0, width: 96, height: 96, background: LIME }}
        />
        <div
          style={{ position: "absolute", top: 96, right: 96, width: 96, height: 96, background: LIME }}
        />
        {/* A third step would reach into the text column on the longest
            questions, so the stair stops at two. */}

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 18, height: 18, background: LIME }} />
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 2,
              color: MUTED,
            }}
          >
            {(gig?.shortName ?? "ANSWERS").toUpperCase()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            color: INK,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${BORDER}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, fontWeight: 800, color: INK }}>
            {BRAND}
          </div>
          {answer ? (
            <div style={{ display: "flex", fontSize: 24, fontWeight: 500, color: MUTED }}>
              {answer.readingMinutes} min read · updated {answer.updated}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Manrope", data: bold, style: "normal", weight: 800 },
        { name: "Manrope", data: medium, style: "normal", weight: 500 },
      ],
    },
  );
}
