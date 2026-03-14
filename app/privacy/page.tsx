import Link from "next/link";
import Nav from "../components/Nav";
import Container from "../components/Container";

export const metadata = {
  title: "Privacy Policy — COLOR CODED",
  description: "COLOR CODED privacy policy. What we collect, how we use it, and your choices.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Effective date: March 13, 2026
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">
              COLOR CODED respects your privacy. This page explains what information we collect, how we use it, and your choices.
            </p>

            <div className="mt-10 space-y-8 text-white/85">
              <section>
                <h2 className="text-xl font-semibold text-white">1. Information we collect</h2>
                <ul className="mt-4 list-inside list-disc space-y-2 pl-2 leading-relaxed text-white/80">
                  <li>Account information such as name, email address, and login details if a user creates an account</li>
                  <li>Usage information such as app interactions, pages visited, and feature usage</li>
                  <li>Device and technical information such as browser type, device type, IP address, and operating system</li>
                  <li>User-submitted content if users upload or submit material through the app</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">2. How we use information</h2>
                <ul className="mt-4 list-inside list-disc space-y-2 pl-2 leading-relaxed text-white/80">
                  <li>To provide and improve the app and website</li>
                  <li>To personalize the user experience</li>
                  <li>To communicate updates, support responses, and service announcements</li>
                  <li>To monitor performance, fix bugs, and improve features</li>
                  <li>To maintain safety, security, and prevent misuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">3. Sharing of information</h2>
                <ul className="mt-4 list-inside list-disc space-y-2 pl-2 leading-relaxed text-white/80">
                  <li>We do not sell personal information</li>
                  <li>We may share information with service providers that help us operate the app or website</li>
                  <li>We may disclose information if required by law or to protect rights and safety</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">4. Data retention</h2>
                <p className="mt-4 leading-relaxed">
                  We keep information only as long as needed to provide services, comply with legal obligations, and resolve disputes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">5. Your choices</h2>
                <ul className="mt-4 list-inside list-disc space-y-2 pl-2 leading-relaxed text-white/80">
                  <li>Users may contact us to request access, correction, or deletion of their information</li>
                  <li>Users may opt out of non-essential communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">6. Children&apos;s privacy</h2>
                <p className="mt-4 leading-relaxed">
                  COLOR CODED is not intended for children under 13, and we do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">7. Changes to this policy</h2>
                <p className="mt-4 leading-relaxed">
                  We may update this policy from time to time, and changes will be posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">8. Contact us</h2>
                <p className="mt-4 leading-relaxed">
                  For privacy questions, contact:{" "}
                  <a href="mailto:support@color-coded.app" className="text-white underline hover:text-white/90">
                    support@color-coded.app
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-sm text-white/60">
                Effective date: March 13, 2026
              </p>
              <p className="mt-4 text-sm text-white/60">
                <Link href="/support" className="text-white/80 underline hover:text-white">
                  Support
                </Link>
                {" · "}
                <Link href="/" className="text-white/80 underline hover:text-white">
                  Home
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
