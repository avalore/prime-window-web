import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for PrimeWindow.",
};

export default function TermsPage() {
  return (
    <main className="container-shell py-12 md:py-16">
      <Link href="/" className="text-sm text-muted transition-colors hover:text-text">
        ← Back to PrimeWindow
      </Link>
      <div className="mt-8 max-w-3xl space-y-8">
        <h1 className="font-display text-4xl text-text">Terms</h1>

        <section className="space-y-2">
          <h2 className="text-xl text-text">Using PrimeWindow</h2>
          <p className="text-muted">
            PrimeWindow is provided to help with planning. It does not replace your own judgement on local conditions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-text">Early access</h2>
          <p className="text-muted">
            During early access, features may change and availability may vary while we improve reliability.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-text">Accounts and communication</h2>
          <p className="text-muted">
            If you join early access, you agree to receive messages about access, updates, and key product changes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-text">Contact</h2>
          <p className="text-muted">Questions about these terms can be sent to hello@primewindow.app.</p>
        </section>
      </div>
    </main>
  );
}
