import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import { getSharedWindowById, getSharedWindowIds, type ConditionStatus } from "@/data/shared-windows";

type SharedWindowPageProps = {
  params: {
    id: string;
  };
};

function formatWindowRange(startIso: string, endIso: string, timezone: string): string {
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    timeZone: timezone,
  });

  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  });

  return `${dateFormatter.format(new Date(startIso))} · ${timeFormatter.format(new Date(startIso))}-${timeFormatter.format(
    new Date(endIso),
  )}`;
}

function conditionTone(status: ConditionStatus): string {
  if (status === "match") {
    return "border-accent/45 bg-accent/14 text-text";
  }
  if (status === "watch") {
    return "border-amber/45 bg-amber/12 text-text";
  }
  return "border-danger/45 bg-danger/12 text-text";
}

function confidenceTone(state: "aligned" | "mixed" | "unstable"): string {
  if (state === "aligned") {
    return "bg-accent/16 text-accent";
  }
  if (state === "mixed") {
    return "bg-amber/14 text-amber";
  }
  return "bg-danger/14 text-danger";
}

export function generateStaticParams() {
  return getSharedWindowIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: SharedWindowPageProps): Promise<Metadata> {
  const data = getSharedWindowById(params.id);

  if (!data) {
    return {
      title: "Window not found",
      description: "This shared Prime Window is not available.",
    };
  }

  const title = `${data.spotName} Prime Window`;
  const description = `${data.summary} Shared from PrimeWindow for iOS.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/w/${data.id}`,
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
  };
}

export default function SharedWindowPage({ params }: SharedWindowPageProps) {
  const data = getSharedWindowById(params.id);

  if (!data) {
    notFound();
  }

  return (
    <main className="container-shell py-8 pb-14 md:py-10 md:pb-16">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-display text-2xl text-text">
            PrimeWindow
          </Link>
          <span className="rounded-full border border-border/75 bg-surface/45 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-muted">
            Shared window
          </span>
        </div>
        <a
          href={`primewindow://window/${data.id}`}
          className="rounded-md border border-accent/40 bg-accent/14 px-4 py-2 text-sm font-medium text-text transition hover:bg-accent/22"
        >
          Open in iOS app
        </a>
      </header>

      <Card className="mt-6 overflow-hidden p-5 md:p-7">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.12em] text-muted">Prime Window</p>
            <h1 className="mt-2 font-display text-4xl leading-tight text-text md:text-5xl">{data.spotName}</h1>
            <p className="mt-2 text-base text-muted">{formatWindowRange(data.startsAtIso, data.endsAtIso, data.timezone)}</p>
            <p className="mt-1 text-base text-muted">
              {data.areaName} · {data.activity}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{data.summary}</p>
          </div>

          <div className="rounded-lg border border-accent/40 bg-accent/14 px-4 py-3 text-center">
            <p className="text-xs uppercase tracking-[0.1em] text-muted">Confidence</p>
            <p className="mt-1 text-3xl text-text">{data.confidence}%</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 text-sm text-muted md:grid-cols-[auto_1fr_auto] md:items-center">
          <p>
            Shared by <span className="text-text">{data.sharedBy}</span>
          </p>
          <p className="rounded-md border border-border/70 bg-bg/26 px-3 py-2 text-text/90">“{data.shareNote}”</p>
          <a href="#join" className="text-text/85 underline decoration-border transition hover:text-text">
            Get alerts like this
          </a>
        </div>
      </Card>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <Card className="p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-muted">Location map</p>
                <p className="mt-1 text-sm text-muted">
                  {data.coordinates.lat.toFixed(3)}, {data.coordinates.lon.toFixed(3)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-accent/45 bg-accent/14 px-2.5 py-1 text-xs text-text">Wind</span>
                <span className="rounded-full border border-border/70 bg-surface/45 px-2.5 py-1 text-xs text-muted">Rain</span>
                <span className="rounded-full border border-border/70 bg-surface/45 px-2.5 py-1 text-xs text-muted">Cloud</span>
                <span className="rounded-full border border-border/70 bg-surface/45 px-2.5 py-1 text-xs text-muted">
                  Confidence
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/70 bg-[radial-gradient(circle_at_26%_30%,rgba(94,126,156,0.32),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(123,168,147,0.24),transparent_45%),linear-gradient(165deg,rgba(13,21,36,0.92),rgba(8,13,24,0.96))]">
              <div className="weather-overlay-grid absolute inset-0 opacity-70" />
              <div className="weather-overlay-sweep absolute inset-0 opacity-55" />
              <div className="absolute left-[52%] top-[56%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-glow" />
              <div className="absolute left-[52%] top-[56%] h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/35" />
              <div className="absolute bottom-3 left-3 rounded-md border border-border/75 bg-bg/72 px-3 py-2 text-xs text-muted backdrop-blur-sm">
                Weather overlays ready for API layers
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm uppercase tracking-[0.12em] text-muted">Hourly breakdown</p>
              <p className="text-xs text-muted">Window-centred view</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[36rem] w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-[0.08em] text-muted">
                    <th className="pb-3 pr-4 font-medium">Time</th>
                    <th className="pb-3 pr-4 font-medium">Wind</th>
                    <th className="pb-3 pr-4 font-medium">Gust</th>
                    <th className="pb-3 pr-4 font-medium">Rain</th>
                    <th className="pb-3 font-medium">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {data.hourly.map((row) => (
                    <tr key={row.label} className="border-t border-border/55 text-text/92">
                      <td className="py-3 pr-4">{row.label}</td>
                      <td className="py-3 pr-4">{row.wind}</td>
                      <td className="py-3 pr-4">{row.gust}</td>
                      <td className="py-3 pr-4">{row.rain}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="h-2.5 w-32 overflow-hidden rounded-full bg-surface/70">
                            <div className="h-full rounded-full bg-accent/75" style={{ width: `${row.confidence}%` }} />
                          </div>
                          <span className="text-xs text-muted">{row.confidence}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-5">
            <p className="text-sm uppercase tracking-[0.12em] text-muted">Condition match</p>
            <div className="mt-4 space-y-3">
              {data.conditionRows.map((row) => (
                <div key={row.name} className="rounded-md border border-border/65 bg-bg/24 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-sm text-text">{row.name}</p>
                    <span className={cn("rounded-full border px-2.5 py-0.5 text-xs", conditionTone(row.status))}>
                      {row.status === "match" ? "Matches" : row.status === "watch" ? "Watch" : "Off target"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted">
                    <p>Target: {row.target}</p>
                    <p>Forecast: {row.forecast}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <p className="text-sm uppercase tracking-[0.12em] text-muted">Weather details</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {data.weatherDetails.map((item) => (
                <div key={item.label} className="rounded-md border border-border/65 bg-bg/24 px-3 py-2.5">
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="mt-1 text-sm text-text">{item.value}</p>
                  {item.detail ? <p className="mt-0.5 text-xs text-muted">{item.detail}</p> : null}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <p className="text-sm uppercase tracking-[0.12em] text-muted">Confidence notes</p>
            <div className="mt-4 space-y-2.5">
              {data.confidenceNotes.map((note) => (
                <div key={note.title} className="rounded-md border border-border/65 bg-bg/24 px-3 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm text-text">{note.title}</p>
                    <span className={cn("rounded-full px-2 py-0.5 text-[11px] uppercase tracking-[0.08em]", confidenceTone(note.state))}>
                      {note.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{note.detail}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card id="join" className="p-5">
            <p className="text-sm uppercase tracking-[0.12em] text-muted">Want this for your own spots?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              PrimeWindow for iOS alerts you when your saved conditions line up. No repeated forecast checking.
            </p>
            <a
              href="/#early-access"
              className="mt-4 inline-flex rounded-md border border-accent/40 bg-accent/14 px-4 py-2 text-sm font-medium text-text transition hover:bg-accent/22"
            >
              Join early access
            </a>
          </Card>
        </div>
      </section>
    </main>
  );
}
