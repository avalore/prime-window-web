export function CredibilityStrip() {
  return (
    <section className="section-gap container-shell reveal">
      <div className="rounded-lg border border-border/65 bg-surface/35 px-6 py-5 md:flex md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.12em] text-muted">Why we built this</p>
          <p className="mt-2 text-sm text-muted">
            If you want the full context behind PrimeWindow, read the founder note.
          </p>
        </div>
        <a
          href="/the-problem-with-weather-apps"
          className="mt-3 inline-flex text-sm text-text underline decoration-border transition hover:text-accent md:mt-0"
        >
          Read: The Problem With Weather Apps
        </a>
      </div>
    </section>
  );
}
