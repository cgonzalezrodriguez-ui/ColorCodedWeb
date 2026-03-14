import Link from "next/link";
import Nav from "../components/Nav";
import Container from "../components/Container";

export const metadata = {
  title: "Privacy Policy — COLOR CODED",
  description: "ColorCoded privacy policy. What we collect, how we use it, and your rights.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              ColorCoded Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Effective Date: March 13, 2026
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">
              ColorCoded (&quot;we,&quot; &quot;our,&quot; or &quot;the app&quot;) is developed by Damian Gonzalez and Braden Boucher. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>

            <div className="mt-10 space-y-8 text-white/85">
              <section>
                <h2 className="text-xl font-semibold text-white">INFORMATION WE COLLECT</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-white/80">
                  <p><strong className="text-white/90">Account Information:</strong><br />
                  When you create an account or sign in, we collect your email address, display name, and authentication provider (Apple ID or Google account). This information is used solely to identify your account and enable cloud sync across your devices.</p>
                  <p><strong className="text-white/90">User Content:</strong><br />
                  When you use the app, the following data is created and stored:</p>
                  <ul className="list-inside list-disc space-y-1 pl-2">
                    <li>Sheet music images you scan or import (PDF pages)</li>
                    <li>Analysis results including detected noteheads, staff positions, pitch assignments, and fingering suggestions</li>
                    <li>Your manual edits and corrections to note colors, fingering numbers, and notehead positions</li>
                    <li>Library entries you save</li>
                  </ul>
                  <p><strong className="text-white/90">Usage Data:</strong><br />
                  We track the number of pages analyzed per day to enforce free-tier daily limits. This count is stored per account and resets daily.</p>
                  <p><strong className="text-white/90">Purchase Information:</strong><br />
                  If you subscribe or purchase token packs, Apple handles all payment processing through your Apple ID. We never see or store your credit card or payment information. We store only whether your account has an active subscription and your current token balance.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">HOW YOUR DATA IS STORED</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  Your data is stored using Google Firebase services:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-2 text-white/80">
                  <li><strong className="text-white/90">Firebase Authentication:</strong> manages your sign-in credentials</li>
                  <li><strong className="text-white/90">Cloud Firestore:</strong> stores your account info, library metadata, note data, and usage counts</li>
                  <li><strong className="text-white/90">Firebase Cloud Storage:</strong> stores your sheet music images</li>
                </ul>
                <p className="mt-4 leading-relaxed text-white/80">
                  Data is also cached locally on your device for offline use. When you sign out, local data is cleared from the device.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">HOW WE USE YOUR DATA</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  We use your data exclusively to:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-2 text-white/80">
                  <li>Provide the core app functionality (scanning, analysis, color-coding, fingering suggestions)</li>
                  <li>Sync your library across your devices</li>
                  <li>Enforce free-tier usage limits</li>
                  <li>Process promo code and token redemptions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">WHAT WE DO NOT DO</h2>
                <ul className="mt-4 list-inside list-disc space-y-2 pl-2 leading-relaxed text-white/80">
                  <li>We do not sell your data to anyone</li>
                  <li>We do not share your data with third-party advertisers</li>
                  <li>We do not use your data for ad targeting</li>
                  <li>We do not track your location</li>
                  <li>We do not access your contacts, camera roll, microphone, or any data beyond what you explicitly provide to the app</li>
                  <li>We do not use third-party analytics or tracking SDKs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">THIRD-PARTY SERVICES</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  The app uses the following third-party services:
                </p>
                <ul className="mt-2 space-y-2 text-white/80">
                  <li>
                    <strong className="text-white/90">Firebase by Google</strong> (authentication, database, storage)<br />
                    <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-white/80 underline hover:text-white">Privacy Policy</a>
                  </li>
                  <li>
                    <strong className="text-white/90">Google Sign-In</strong> (optional sign-in method)<br />
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-white/80 underline hover:text-white">Privacy Policy</a>
                  </li>
                  <li>
                    <strong className="text-white/90">Apple StoreKit</strong> (in-app purchases and subscriptions). Apple handles all payment data under their own privacy policy:<br />
                    <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-white/80 underline hover:text-white">https://www.apple.com/legal/privacy/</a>
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-white/80">
                  No other third-party services receive your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">DATA RETENTION AND DELETION</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  Your data is stored as long as you maintain an account. You can delete individual library entries at any time from within the app. You can delete your entire account and all associated data from the Profile section of the app. Upon account deletion, all your data is permanently removed from our servers.
                </p>
                <p className="mt-4 leading-relaxed text-white/80">
                  To request data deletion via email, contact us at{" "}
                  <a href="mailto:support@color-coded.app" className="text-white underline hover:text-white/90">
                    support@color-coded.app
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">CHILDREN&apos;S PRIVACY</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  ColorCoded is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at{" "}
                  <a href="mailto:support@color-coded.app" className="text-white underline hover:text-white/90">
                    support@color-coded.app
                  </a>{" "}
                  and we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">CHANGES TO THIS POLICY</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  We may update this Privacy Policy from time to time. Changes will be posted at this URL with an updated effective date. Your continued use of the app after changes are posted constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">CONTACT US</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  If you have questions about this Privacy Policy or your data, contact us at:{" "}
                  <a href="mailto:support@color-coded.app" className="text-white underline hover:text-white/90">
                    support@color-coded.app
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-sm text-white/60">
                Effective Date: March 13, 2026
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
