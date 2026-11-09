import Link from "next/link";
import Nav from "../components/layout/Nav";
import Container from "../components/ui/Container";

export const metadata = {
  title: "Support - ColorCoded",
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
              ColorCoded scans your sheet music and color-codes every note by pitch, so you can see at a glance which notes are which. C is red, D is orange, E is yellow, F is green, G is cyan, A is blue, and B is violet. It also provides fingering suggestions to help guide your hands.
            </p>

            <div className="mt-10 space-y-8 text-white/85">
              <section>
                <h2 className="text-xl font-semibold text-white">GETTING STARTED</h2>
                <ol className="mt-4 list-inside list-decimal space-y-2 pl-2 leading-relaxed text-white/80">
                  <li>Open the app and tap the + button</li>
                  <li>Choose &quot;New Image&quot; to import from your photo library, or use your camera to capture a page</li>
                  <li>Choose which pages to analyze</li>
                  <li>The app detects noteheads, assigns pitches, and overlays colored circles on each note</li>
                  <li>Tap the pencil icon to edit colors, pitches, or fingerings</li>
                  <li>Save to your library or share as a colored PDF</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="mt-4 space-y-6">
                  <div>
                    <p className="font-medium text-white/90">Can I use this with any sheet music?</p>
                    <p className="mt-1 text-white/80">Yes. If it&apos;s printed sheet music, ColorCoded can read it. Method books, recital pieces, stuff from your teacher, pages you found online. It&apos;s your music. Just snap a photo or import an image and you&apos;re good to go.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">What is the public library?</p>
                    <p className="mt-1 text-white/80">The public library is a collection of pre-analyzed beginner and intermediate pieces that are ready to explore right away. No importing needed. It&apos;s a good way to see how the app works before you try your own music.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Why aren&apos;t the staff lines detected correctly?</p>
                    <p className="mt-1 text-white/80">Staff detection works best with clean, well-lit images. Low-quality photos, pages shot at an angle, or music with heavy pencil markings can cause issues. Try getting a straight-on photo with good lighting. You can also manually adjust staff positions using the staff editing tool.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Why are some notes the wrong color?</p>
                    <p className="mt-1 text-white/80">The detection isn&apos;t perfect, especially with complex scores, dense passages, or unusual notation. Tap the pencil icon, then tap any note to correct its pitch. You can also add or remove noteheads. Your corrections are saved to your library.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Why are fingering numbers missing on some notes?</p>
                    <p className="mt-1 text-white/80">Fingering suggestions work best on beginner and intermediate pieces. On more complex music, the engine may not generate suggestions for every note. You can always add or edit fingerings manually in edit mode.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">Do my saved edits sync across devices?</p>
                    <p className="mt-1 text-white/80">Yes. As long as you&apos;re signed in with the same account, your library and edits sync across all your devices.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">How do I share my colored sheet music?</p>
                    <p className="mt-1 text-white/80">Tap the share button (the square with an arrow) to export a PDF with color-coded noteheads overlaid on your original sheet music.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">What is the daily page limit?</p>
                    <p className="mt-1 text-white/80">Free accounts can analyze up to 10 pages per day. This resets at midnight. You can get more pages by subscribing or purchasing tokens.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">How do tokens work?</p>
                    <p className="mt-1 text-white/80">Tokens let you analyze pages beyond the daily free limit. Each token covers one additional page. You get 25 bonus tokens when you create an account, and you can earn more through promo codes or buy token packs from the Profile screen.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">How do I restore my purchases?</p>
                    <p className="mt-1 text-white/80">Go to Profile and your purchases should sync automatically. Subscriptions and token balances are tied to your account and follow you across devices when you sign in.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">How do I delete my account?</p>
                    <p className="mt-1 text-white/80">Go to the Profile section in the app. You&apos;ll find an option to delete your account. This permanently removes all your data from our servers. You can also email us at{" "}
                      <a href="mailto:support@color-coded.app" className="text-white underline hover:text-white/90">
                        support@color-coded.app
                      </a>{" "}
                      to request deletion.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white/90">What devices are supported?</p>
                    <p className="mt-1 text-white/80">ColorCoded requires iOS 16.0 or later and works on both iPhone and iPad.</p>
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
                  Tokens do not expire. Each token covers one additional page analysis beyond the daily free limit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">CONTACT</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  Have a question not covered here? Email us at{" "}
                  <a href="mailto:support@color-coded.app" className="text-white underline hover:text-white/90">
                    support@color-coded.app
                  </a>
                  . We&apos;ll get back to you as soon as we can.
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
