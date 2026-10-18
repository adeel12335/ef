"use client";

import { useEffect, useState } from "react";

/**
 * The rotating half of the hero headline: "I BUILD" + [AI SYSTEMS / AI AGENTS /
 * AUTOMATIONS / WEB APPS / MOBILE APPS].
 *
 * A vertical slide-and-fade rather than a typewriter. At 120px display type a
 * caret and per-character reveal reads as a gimmick, and because the text is
 * centred it would grow out from the middle rather than left to right. The
 * swap keeps the headline legible at every frame.
 *
 * Accessibility
 * - The word is aria-hidden; the h1 carries a stable aria-label instead, so a
 *   screen reader is not told the heading changed every 2.6 seconds. The label
 *   lives on the h1 rather than as hidden text here because Chrome painted a
 *   clipped span at this font size regardless of the clip.
 * - Under prefers-reduced-motion the words still change — that is content, not
 *   decoration — but they cut instead of sliding.
 * - Rotation pauses on hover and while the tab is hidden.
 */

const WORDS = ["AI SYSTEMS", "AI AGENTS", "AUTOMATIONS", "WEB APPS", "MOBILE APPS"];

const INTERVAL = 2600;

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      // Nothing to animate while the tab is in the background.
      if (document.hidden) return;
      setIndex((i) => (i + 1) % WORDS.length);
    }, INTERVAL);

    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <span
      className="text ef-rotate"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* key forces a remount per word, which restarts the entrance animation */}
      <span className="ef-rotate__word" key={index} aria-hidden="true">
        {WORDS[index]}
      </span>
    </span>
  );
}
