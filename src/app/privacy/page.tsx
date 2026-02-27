import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for PrimeWindow.",
};

export default function PrivacyPage() {
  return (
    <main className="container-shell py-12 md:py-16">
      <Link href="/" className="text-sm text-muted transition-colors hover:text-text">
        ← Back to PrimeWindow
      </Link>
      <div className="mt-8 max-w-3xl space-y-8">
        <h1 className="font-display text-4xl text-text">Privacy</h1>

        <section className="space-y-2">
          <h2 className="text-xl text-text">What we collect</h2>
          <p className="text-muted">
            During early access, we collect your email and any optional details you share, such as activities and
            location.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-text">Why we collect it</h2>
          <p className="text-muted">We use this information to manage early access and send relevant product updates.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-text">Your choices</h2>
          <p className="text-muted">You can request deletion of your details at any time by emailing hello@primewindow.app.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-text">Updates</h2>
          <p className="text-muted">We may update this page as PrimeWindow grows. Significant changes will be highlighted clearly.</p>
        </section>
      </div>
    </main>
  );
}
