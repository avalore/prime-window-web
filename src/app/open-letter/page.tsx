import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open letter",
  description: "Why PrimeWindow exists, what is wrong with forecast workflows, and what is being built instead.",
};

export default function OpenLetterPage() {
  return (
    <main className="container-shell py-12 md:py-16">
      <Link href="/" className="text-sm text-muted transition-colors hover:text-text">
        ← Back to PrimeWindow
      </Link>

      <article className="mx-auto mt-8 max-w-3xl space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.14em] text-muted">Open letter</p>
          <h1 className="font-display text-4xl text-text md:text-5xl">Why I am building PrimeWindow</h1>
          <p className="text-base leading-relaxed text-muted">
            This page is for the full story: what feels broken in normal forecast workflows, what Prime Windows are,
            and what I am learning as I build.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl text-text">The problem with forecast apps</h2>
          <p className="leading-relaxed text-muted">
            Most apps show plenty of data, then leave the decision to you. If you care about conditions, that often
            means checking several apps repeatedly and still not feeling sure.
          </p>
          <p className="leading-relaxed text-muted">
            PrimeWindow is an attempt to reduce that loop. Tell it your spots. Tell it your conditions. Get a clear
            alert when a Prime Window is approaching.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl text-text">What I am trying instead</h2>
          <p className="leading-relaxed text-muted">
            This section can explain your product principles, design choices, and the limits you want to be honest
            about.
          </p>
          <p className="leading-relaxed text-muted">
            You can also describe how confidence should be presented to people who want to make plans, not analyse raw
            model output.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl text-text">Build notes</h2>
          <p className="leading-relaxed text-muted">
            Use this space for implementation details, architecture notes, and trade-offs from shipping an iOS app that
            sends useful alerts without noise.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl text-text">Past experiments</h2>
          <p className="leading-relaxed text-muted">
            Share old prototypes, what failed, and what changed your mind. That context is often what technical readers
            care about most.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl text-text">Where this goes next</h2>
          <p className="leading-relaxed text-muted">
            Outline where PrimeWindow can go, what you are cautious about, and what feedback you are looking for from
            early users.
          </p>
        </section>
      </article>
    </main>
  );
}
