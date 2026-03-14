"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Container from "../components/Container";

const FAQ_ITEMS = [
  {
    question: "Why aren't the staff lines detected correctly?",
    answer:
      "Staff detection works best with clean, high-resolution PDFs. Low-quality scans, photos taken at an angle, or pages with heavy markings may cause issues. Try using a cleaner PDF source. You can also manually adjust staff positions in Staff editing mode.",
  },
  {
    question: "Why are some notes the wrong color?",
    answer:
      "The AI detection isn't perfect — especially with complex scores, very dense passages, or unusual notation. Tap any note to correct its pitch, or use the editing tools to add or remove noteheads. Your corrections are saved to your library.",
  },
  {
    question: "How do I export my colored sheet music?",
    answer:
      'Tap the share button and select "Export PDF." This creates a PDF with color-coded noteheads overlaid on your original sheet music. Exporting requires a signed-in account.',
  },
  {
    question: "What is the daily page limit?",
    answer:
      "Free accounts can analyze up to 10 pages per day. This resets at midnight. You can get more pages by subscribing or using tokens.",
  },
  {
    question: "How do tokens work?",
    answer:
      "Tokens let you analyze pages beyond the daily free limit. Each token is good for one additional page. You can earn tokens by creating an account (25 bonus tokens), redeeming promo codes, or purchasing token packs from the Profile screen.",
  },
  {
    question: "How do I restore my purchases?",
    answer:
      "Go to Profile and your purchases should sync automatically. Subscriptions and token balances are tied to your account and sync across devices when you sign in.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Go to the Profile section in the app. You'll find an option to delete your account. This permanently removes all your data from our servers. You can also email us at support@colorcoded.app to request account deletion.",
  },
  {
    question: "What devices are supported?",
    answer:
      "ColorCoded requires iOS 16.0 or later. It works on iPhone and iPad.",
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

            {/* Getting started */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-white">Getting started</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-white/80">
                <li>Open the app and tap the scan button</li>
                <li>Select a PDF of your sheet music</li>
                <li>Choose which pages to analyze</li>
                <li>The app detects noteheads, assigns pitches, and overlays color-coded circles on each note</li>
                <li>Tap any note to edit its color, pitch, or fingering</li>
                <li>Save to your library or export as a colored PDF</li>
              </ol>
            </section>

            {/* FAQ accordions */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-white">Frequently asked questions</h2>
              <div className="mt-6 divide-y divide-white/10">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={item.question}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left transition-colors duration-200 hover:text-white/90"
                      >
                        <span className="font-medium text-white">
                          {item.question}
                        </span>
                        <span
                          className={`shrink-0 transition-transform duration-200 ease-in-out ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        >
                          <svg
                            className="h-5 w-5 text-white/60"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="pb-4 text-sm leading-relaxed text-white/70">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Subscription information */}
            <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Subscription information</h2>
              <p className="mt-4 text-white/80">
                ColorCoded offers the following auto-renewable subscriptions:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-white/80">
                <li>Monthly: $7.99/month</li>
                <li>Yearly: $59.99/year</li>
              </ul>
              <p className="mt-4 text-white/80">
                Subscriptions provide unlimited daily page analysis with no token cost.
              </p>
              <p className="mt-4 font-medium text-white/95">Important subscription details:</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-white/80">
                <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
                <li>Your subscription automatically renews unless you turn off auto-renewal at least 24 hours before the end of the current billing period</li>
                <li>Your account will be charged for renewal within 24 hours before the end of the current period at the same price</li>
                <li>You can manage and cancel your subscriptions by going to your device Settings &gt; Apple ID &gt; Subscriptions</li>
                <li>Any unused portion of a free trial period (if offered) will be forfeited when you purchase a subscription</li>
              </ul>
            </section>

            {/* Token packs */}
            <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Token packs (one-time purchases)</h2>
              <ul className="mt-4 list-inside list-disc space-y-1 text-white/80">
                <li>10 tokens: $4.99</li>
                <li>25 tokens: $9.99</li>
                <li>50 tokens: $14.99</li>
                <li>100 tokens: $19.99</li>
              </ul>
              <p className="mt-4 text-white/80">
                Tokens do not expire. Each token allows one additional page analysis beyond the daily free limit.
              </p>
            </section>

            {/* Contact & support */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-white">Contact &amp; support</h2>
              <p className="mt-4 text-white/80">
                Having trouble or have a question not covered here?
              </p>
              <p className="mt-2">
                Email us at:{" "}
                <a href="mailto:support@colorcoded.app" className="text-white underline hover:text-white/90">
                  support@colorcoded.app
                </a>
              </p>
              <p className="mt-2 text-sm text-white/60">
                We typically respond within 48 hours.
              </p>
            </section>

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

      <footer className="mt-auto border-t border-white/10 py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/50">
            <span>© {new Date().getFullYear()} ColorCoded. All rights reserved.</span>
            <nav className="flex gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-white">Privacy</Link>
              <Link href="/support" className="text-white/60 hover:text-white">Support</Link>
              <Link href="/" className="text-white/60 hover:text-white">Home</Link>
            </nav>
          </div>
        </Container>
      </footer>
    </main>
  );
}
