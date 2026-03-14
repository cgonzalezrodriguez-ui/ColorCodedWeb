import Link from "next/link";
import Nav from "../components/Nav";
import Container from "../components/Container";

export const metadata = {
  title: "Support — COLOR CODED",
  description: "ColorCoded support: getting started, FAQ, subscriptions, and token packs.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              ColorCoded Support
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              ColorCoded uses AI to scan your sheet music and color-code every note by pitch — so you can see at a glance which notes are C (red), D (orange), E (yellow), F (green), G (cyan), A (blue), and B (violet). It also suggests piano fingering numbers for each note.
            </p>

            <div className="mt-10 space-y-8 text-white/85">
              <section>
                <h2 className="text-xl font-semibold text-white">GETTING STARTED</h2>
                <ol className="mt-4 list-inside list-decimal space-y-2 pl-2 leading-relaxed text-white/80">
                  <li>Open the app and tap the scan button</li>
                  <li>Select a PDF of your sheet music</li>
                  <li>Choose which pages to analyze</li>
                  <li>The app detects noteheads, assigns pitches, and overlays color-coded circles on each note</li>
                  <li>Tap any note to edit its color, pitch, or fingering</li>
                  <li>Save to your library or export as a colored PDF</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="mt-4 space-y-6">
                  <div>
                    <p className="font-medium text-white/90">Q: Why aren&apos;t the staff lines detected correctly?</p>
                    <p className="mt-1 text-white/80">A: Staff detection works best with clean, high-resolution PDFs. Low-quality scans, photos taken at an angle, or pages with heavy markings may cause issues. Try using a cleaner PDF source. You can also manually adjust staff positions in Staff editing mode.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Q: Why are some notes the wrong color?</p>
                    <p className="mt-1 text-white/80">A: The AI detection isn&apos;t perfect — especially with complex scores, very dense passages, or unusual notation. Tap any note to correct its pitch, or use the editing tools to add or remove noteheads. Your corrections are saved to your library.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Q: How do I export my colored sheet music?</p>
                    <p className="mt-1 text-white/80">A: Tap the share button and select &quot;Export PDF.&quot; This creates a PDF with color-coded noteheads overlaid on your original sheet music. Exporting requires a signed-in account.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Q: What is the daily page limit?</p>
                    <p className="mt-1 text-white/80">A: Free accounts can analyze up to 10 pages per day. This resets at midnight. You can get more pages by subscribing or using tokens.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Q: How do tokens work?</p>
                    <p className="mt-1 text-white/80">A: Tokens let you analyze pages beyond the daily free limit. Each token is good for one additional page. You can earn tokens by creating an account (25 bonus tokens), redeeming promo codes, or purchasing token packs from the Profile screen.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Q: How do I restore my purchases?</p>
                    <p className="mt-1 text-white/80">A: Go to Profile and your purchases should sync automatically. Subscriptions and token balances are tied to your account and sync across devices when you sign in.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Q: How do I delete my account?</p>
                    <p className="mt-1 text-white/80">A: Go to the Profile section in the app. You&apos;ll find an option to delete your account. This permanently removes all your data from our servers. You can also email us at support@color-coded.app to request account deletion.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Q: What devices are supported?</p>
                    <p className="mt-1 text-white/80">A: ColorCoded requires iOS 16.0 or later. It works on iPhone and iPad.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">SUBSCRIPTION INFORMATION</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  ColorCoded offers the following auto-renewable subscriptions:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-2 text-white/80">
                  <li>Monthly: $7.99/month</li>
                  <li>Yearly: $59.99/year</li>
                </ul>
                <p className="mt-4 leading-relaxed text-white/80">
                  Subscriptions provide unlimited daily page analysis with no token cost.
                </p>
                <p className="mt-4 font-medium text-white/90">Important subscription details:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 pl-2 text-white/80">
                  <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
                  <li>Your subscription automatically renews unless you turn off auto-renewal at least 24 hours before the end of the current billing period</li>
                  <li>Your account will be charged for renewal within 24 hours before the end of the current period at the same price</li>
                  <li>You can manage and cancel your subscriptions by going to your device Settings &gt; Apple ID &gt; Subscriptions</li>
                  <li>Any unused portion of a free trial period (if offered) will be forfeited when you purchase a subscription</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">TOKEN PACKS (ONE-TIME PURCHASES)</h2>
                <ul className="mt-4 list-inside list-disc space-y-1 pl-2 text-white/80">
                  <li>10 tokens: $4.99</li>
                  <li>25 tokens: $9.99</li>
                  <li>50 tokens: $14.99</li>
                  <li>100 tokens: $19.99</li>
                </ul>
                <p className="mt-4 leading-relaxed text-white/80">
                  Tokens do not expire. Each token allows one additional page analysis beyond the daily free limit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">CONTACT &amp; SUPPORT</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  Having trouble or have a question not covered here?
                </p>
                <p className="mt-2 text-white/80">
                  Email us at:{" "}
                  <a href="mailto:support@color-coded.app" className="text-white underline hover:text-white/90">
                    support@color-coded.app
                  </a>
                </p>
                <p className="mt-2 text-white/80">
                  We typically respond within 48 hours.
                </p>
              </section>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-sm text-white/60">
                <Link href="/privacy" className="text-white/80 underline hover:text-white">
                  Privacy Policy
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
