import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/45 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <Link href="/open-letter" className="transition-colors hover:text-text">
            Open letter
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-text">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-text">
            Terms
          </Link>
          <a href="mailto:hello@primewindow.app" className="transition-colors hover:text-text">
            Contact
          </a>
        </div>
        <p>© {new Date().getFullYear()} PrimeWindow</p>
      </div>
    </footer>
  );
}
