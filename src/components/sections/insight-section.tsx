import type { CSSProperties } from "react";

export function InsightSection() {
  const prompts = [
    "You check two or three weather apps before breakfast.",
    "You compare models and graphs every hour.",
    "You still miss a short, usable window.",
  ];

  return (
    <section className="section-gap container-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
      <div className="reveal">
        <p className="text-sm uppercase tracking-[0.14em] text-muted">The problem</p>
        <h2 className="mt-3 max-w-[20ch] font-display text-3xl leading-tight text-text md:text-4xl">
          Forecast data is not decision clarity.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          Raw data is useful, but it still leaves the hard part with you: deciding if it is actually on.
        </p>
      </div>
      <ul className="reveal space-y-3 text-lg text-text" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
        {prompts.map((prompt) => (
          <li
            key={prompt}
            className="rounded-md border border-border/70 bg-surface/35 px-4 py-3 shadow-soft"
          >
            {prompt}
          </li>
        ))}
      </ul>
    </section>
  );
}
