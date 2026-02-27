import type { Metadata } from "next";
import Link from "next/link";

import { EarlyAccessForm } from "@/components/sections/early-access-form";

export const metadata: Metadata = {
  title: "The Problem with Weather Apps",
  description: "A practical look at where forecast apps fall short and what PrimeWindow does differently.",
};

export default function WeatherAppsProblemPage() {
  return (
    <main className="container-shell py-12 md:py-16">
      <Link href="/" className="text-sm text-muted transition-colors hover:text-text">
        ← Back to PrimeWindow
      </Link>

      <article className="mx-auto mt-8 max-w-3xl space-y-12">
        <header className="space-y-5">
          <h1 className="font-display text-4xl text-text md:text-5xl">The Problem with Weather Apps</h1>
        </header>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">Intro</h2>
          <p className="leading-relaxed text-muted">
            There&apos;s a particular kind of frustration that only people who depend on weather really understand.
          </p>
          <p className="leading-relaxed text-muted">
            You wake up early, make a coffee, open two or three weather apps and start doing the usual routine: wind
            graphs, maps, rain radar, switching models, trying to make a call from a bunch of numbers.
          </p>
          <p className="leading-relaxed text-muted">
            And what you&apos;re really trying to answer is one simple question:
          </p>
          <p className="text-lg leading-relaxed text-text">
            <strong>When and where is it good for what I want to do?</strong>
          </p>
          <p className="leading-relaxed text-muted">
            Not &ldquo;what&apos;s the weather doing?&rdquo; Not &ldquo;what&apos;s the temperature at 3pm?&rdquo; Just:
            is it on - or not?
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">A life built around wind</h2>
          <p className="leading-relaxed text-muted">
            Over the years I&apos;ve been lucky enough to be involved in a few airsports: paragliding, skydiving,
            speedflying, and more recently BASE jumping.
          </p>
          <p className="leading-relaxed text-muted">
            They&apos;re all different, but they all share the same dependency: the right conditions. Too windy, wrong
            direction, rain moving in, gusts too high - it doesn&apos;t matter how motivated you are, you&apos;re not
            going.
          </p>
          <p className="leading-relaxed text-muted">
            Living in the UK doesn&apos;t make it easier. You can have nothing usable for days and then, randomly, a
            narrow window appears on a Tuesday afternoon. If you miss it, you miss it.
          </p>
          <p className="leading-relaxed text-muted">
            I&apos;ve spent an embarrassing amount of time over the years checking forecasts, trying to work out in
            advance when and where things might line up. Eventually it clicked that I wasn&apos;t really interested in
            &ldquo;weather&rdquo; - I was interested in opportunities.
          </p>

          <figure className="rounded-lg border border-border/65 bg-surface/35 p-4" data-placeholder="PLACEHOLDER_IMAGE_01">
            <div className="rounded-md border border-dashed border-border/70 bg-bg/30 p-6 text-sm text-muted">
              [Screenshot placeholder: PLACEHOLDER_IMAGE_01 - A personal photo (paragliding / speedflying / skydiving
              / BASE - anything that shows the reality of the hobby)]
            </div>
            <figcaption className="mt-2 text-xs text-muted">A regular day out when everything lines up.</figcaption>
          </figure>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">The problem with weather apps</h2>
          <p className="leading-relaxed text-muted">
            Weather apps are impressive now. The maps are beautiful, radar is sharp, and switching between models is
            easy.
          </p>
          <p className="leading-relaxed text-muted">
            But almost all of them assume the same thing: that you want to see weather data.
          </p>
          <p className="leading-relaxed text-muted">I don&apos;t. I want to go flying.</p>
          <p className="leading-relaxed text-muted">
            Weather is just the constraint between me and the thing I care about.
          </p>
          <p className="leading-relaxed text-muted">
            Most other types of software have moved beyond simply presenting raw information. Accounting software
            doesn&apos;t just list transactions - it gives you forecasts and highlights problems before you run into
            them. Budgeting apps don&apos;t just show your balance - they tell you if you&apos;re on track. Sat-nav
            doesn&apos;t just display a map and traffic - it tells you the best route and when to leave.
          </p>
          <p className="leading-relaxed text-muted">They take data and turn it into a decision.</p>
          <p className="leading-relaxed text-muted">
            Weather apps mostly still stop one step earlier. They give you wind speeds, gusts, rainfall percentages and
            model comparisons - and expect you to synthesise it all yourself.
          </p>
          <p className="leading-relaxed text-muted">
            That gap between data and decision is exactly what I wanted to fix.
          </p>
          <p className="leading-relaxed text-muted">
            Weather apps mostly still present information and leave the interpretation to you. So you end up mentally
            combining wind speed, direction, gusts, rainfall probability, time windows, daylight hours, and location -
            and then deciding if it&apos;s good enough. And you repeat that process again tomorrow.
          </p>
          <p className="text-lg leading-relaxed text-text">
            The core question never changes: <strong>when and where is it good for what I want to do?</strong>
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">The hacks before PrimeWindow</h2>
          <p className="leading-relaxed text-muted">
            I&apos;ve tried to solve this for myself more times than I can count.
          </p>
          <p className="leading-relaxed text-muted">
            I&apos;ve used alert features inside apps like Windy. They work, but they often feel bolted on - buried in
            menus, limited, awkward to manage across multiple locations, and never quite the main point of the app.
          </p>

          <figure className="rounded-lg border border-border/65 bg-surface/35 p-4" data-placeholder="PLACEHOLDER_IMAGE_02">
            <div className="rounded-md border border-dashed border-border/70 bg-bg/30 p-6 text-sm text-muted">
              [Screenshot placeholder: PLACEHOLDER_IMAGE_02 - Screenshot of a &ldquo;Windy&rdquo; alert setup (or
              similar existing app alert UI)]
            </div>
            <figcaption className="mt-2 text-xs text-muted">
              Alerts exist, but they&apos;re rarely the main experience.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-muted">
            Then I went full engineer about it. Bash scripts on cron jobs, pulling weather APIs and sending push
            notifications via ntfy.sh. It worked... until it didn&apos;t. It was brittle, adding locations was a faff,
            tweaking conditions wasn&apos;t friendly, and sharing a window with friends in a WhatsApp group definitely
            wasn&apos;t smooth.
          </p>

          <figure className="rounded-lg border border-border/65 bg-surface/35 p-4" data-placeholder="PLACEHOLDER_IMAGE_03">
            <div className="rounded-md border border-dashed border-border/70 bg-bg/30 p-6 text-sm text-muted">
              [Screenshot placeholder: PLACEHOLDER_IMAGE_03 - Screenshot/snippet of a bash script / cron /
              notification setup (can be blurred)]
            </div>
            <figcaption className="mt-2 text-xs text-muted">
              It worked, but it wasn&apos;t something I could recommend to anyone.
            </figcaption>
          </figure>

          <p className="leading-relaxed text-muted">
            A couple of years ago I started building an iOS app to do it properly. I&apos;m an iOS engineer
            professionally, so it felt like the obvious route. I got pretty close, then life happened - family, work,
            other commitments - and the project sat half-finished.
          </p>
          <p className="leading-relaxed text-muted">
            Recently, with tools like Codex and Claude speeding up development, I picked it back up. This time I kept
            it simple and stayed stubbornly focused on the core problem.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">What PrimeWindow is (and isn&apos;t)</h2>
          <p className="leading-relaxed text-muted">PrimeWindow is not another weather app.</p>
          <p className="leading-relaxed text-muted">
            It doesn&apos;t try to replace your favourite forecast tool. It doesn&apos;t show radar or big scrolling
            charts. It&apos;s not competing on visualising data.
          </p>
          <p className="leading-relaxed text-muted">Instead, you tell it:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>what you do</li>
            <li>the conditions you need</li>
            <li>the location</li>
          </ul>
          <p className="leading-relaxed text-muted">...then you leave.</p>
          <p className="leading-relaxed text-muted">
            PrimeWindow keeps an eye on the forecast for you. When your conditions line up, it tells you. It also
            gives you a sense of confidence based on the models it&apos;s using.
          </p>
          <p className="leading-relaxed text-muted">
            It&apos;s worth saying this plainly: it won&apos;t always be perfect. Forecasting is probabilistic and
            different models can disagree. PrimeWindow is built to cut down the constant manual checking - not pretend
            uncertainty doesn&apos;t exist.
          </p>
          <p className="leading-relaxed text-muted">Right now it focuses on the basics:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted">
            <li>wind speed</li>
            <li>wind direction</li>
            <li>gusts</li>
            <li>wind at height</li>
            <li>rain</li>
            <li>daylight</li>
          </ul>
          <p className="leading-relaxed text-muted">
            Over time I want to add more sport-specific signals (things like swell, thermal updraft potential, pressure
            changes, and so on), but I&apos;m intentionally keeping the first versions simple and solid rather than
            trying to support everything at once.
          </p>
          <p className="leading-relaxed text-muted">
            If you want to double-check or go deeper, PrimeWindow can deep link out to other weather apps. Think of it
            as a jumping-off point: it tells you when it&apos;s worth looking more closely, instead of repeatedly
            scanning forecasts &ldquo;just in case&rdquo;.
          </p>

          <figure className="rounded-lg border border-border/65 bg-surface/35 p-4" data-placeholder="PLACEHOLDER_IMAGE_04">
            <div className="rounded-md border border-dashed border-border/70 bg-bg/30 p-6 text-sm text-muted">
              [Screenshot placeholder: PLACEHOLDER_IMAGE_04 - Screenshot of PrimeWindow &ldquo;Create conditions /
              preset&rdquo; screen]
            </div>
            <figcaption className="mt-2 text-xs text-muted">Tell it what you need once.</figcaption>
          </figure>

          <figure className="rounded-lg border border-border/65 bg-surface/35 p-4" data-placeholder="PLACEHOLDER_IMAGE_05">
            <div className="rounded-md border border-dashed border-border/70 bg-bg/30 p-6 text-sm text-muted">
              [Screenshot placeholder: PLACEHOLDER_IMAGE_05 - Screenshot of a PrimeWindow notification /
              &ldquo;window found&rdquo; card]
            </div>
            <figcaption className="mt-2 text-xs text-muted">
              PrimeWindow only interrupts you when it matters.
            </figcaption>
          </figure>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">Focused alerts, done properly</h2>
          <p className="leading-relaxed text-muted">
            Alerts aren&apos;t an add-on in PrimeWindow. They are the product.
          </p>
          <p className="leading-relaxed text-muted">
            You define your rules. PrimeWindow evaluates them continuously. When a genuine window appears - not just
            &ldquo;weather happening&rdquo;, but your conditions - you get notified.
          </p>
          <p className="leading-relaxed text-muted">
            Something like: &ldquo;Tuesday 14:00-17:00 looks good at Mam Tor for paragliding. Light NW, low gusts, no
            rain.&rdquo;
          </p>
          <p className="leading-relaxed text-muted">That&apos;s the whole point.</p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">Sharing windows</h2>
          <p className="leading-relaxed text-muted">
            Most of these sports aren&apos;t solo. When it looks good, you want your friends to know too.
          </p>
          <p className="leading-relaxed text-muted">
            Instead of sending screenshots and debating in group chats, PrimeWindow lets you share a clear, structured
            window - location, time range, conditions, and confidence - via a simple link.
          </p>

          <figure className="rounded-lg border border-border/65 bg-surface/35 p-4" data-placeholder="PLACEHOLDER_IMAGE_06">
            <div className="rounded-md border border-dashed border-border/70 bg-bg/30 p-6 text-sm text-muted">
              [Screenshot placeholder: PLACEHOLDER_IMAGE_06 - Screenshot of a shared window view (in-app or web)]
            </div>
            <figcaption className="mt-2 text-xs text-muted">
              Less back-and-forth, more &ldquo;shall we go?&rdquo;
            </figcaption>
          </figure>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">Presets and standard locations</h2>
          <p className="leading-relaxed text-muted">
            Another thing I&apos;ve noticed: everyone ends up recreating the same setup.
          </p>
          <p className="leading-relaxed text-muted">
            If you paraglide in the UK, you probably fly the same hills as everyone else. PrimeWindow will ship with
            basic sport presets and (soon) standard locations, and you can always customise everything.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">Why I&apos;m releasing it</h2>
          <p className="leading-relaxed text-muted">
            I&apos;ve been using PrimeWindow myself for a few months now. The biggest difference is how much less time
            I spend checking weather apps.
          </p>
          <p className="leading-relaxed text-muted">
            I don&apos;t constantly reopen forecasts to see if anything changed. I don&apos;t sit there trying to
            interpret three different charts. I just get told when it&apos;s worth paying attention.
          </p>
          <p className="leading-relaxed text-muted">
            This isn&apos;t venture-funded and it&apos;s not designed to become bloated. It&apos;s built to solve a
            specific problem properly.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">Pricing</h2>
          <p className="leading-relaxed text-muted">
            I&apos;d love to make it a one-time purchase. Realistically, weather APIs and infrastructure cost money, so
            it&apos;ll likely be a small subscription with a strong yearly option - something like £0.99/month or
            £9.99/year - mainly so I&apos;m not out of pocket for running it.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl text-text">What&apos;s next</h2>
          <p className="leading-relaxed text-muted">
            I&apos;m releasing PrimeWindow for testing soon, with a proper launch not long after.
          </p>
          <p className="leading-relaxed text-muted">
            If you paraglide, sail, kitesurf, climb, fish, shoot - anything that depends on specific conditions -
            I&apos;d love you to try it.
          </p>
        </section>

        <section className="space-y-4 rounded-lg border border-border/65 bg-surface/30 p-5 md:p-6">
          <h2 className="text-2xl text-text">Get notified when PrimeWindow launches</h2>
          <p className="leading-relaxed text-muted">
            If you want to be one of the first testers (and get launch details when it&apos;s ready), leave your email
            and I&apos;ll let you know.
          </p>
          <EarlyAccessForm />
        </section>

        <p className="text-lg text-text">- Louis</p>
      </article>
    </main>
  );
}
