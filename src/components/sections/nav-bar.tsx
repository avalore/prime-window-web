import Link from "next/link";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#confidence", label: "Confidence" },
  { href: "/the-problem-with-weather-apps", label: "The problem" },
  { href: "#early-access", label: "Early access" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/35 bg-bg/72 backdrop-blur-md">
      <div className="container-shell flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-display text-[1.2rem] tracking-[0.01em] text-text">
            PrimeWindow
          </Link>
          <span className="hidden rounded-full border border-border/80 bg-surface/50 px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-muted sm:inline-flex">
            iOS app
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-text focus-visible:text-text"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-text focus-visible:text-text"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>
        <a
          href="#early-access"
          className="rounded-md border border-accent/35 bg-accent/12 px-4 py-2 text-sm font-medium text-text shadow-soft transition hover:bg-accent/20"
        >
          Join early access
        </a>
      </div>
    </header>
  );
}
