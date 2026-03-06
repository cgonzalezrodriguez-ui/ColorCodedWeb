"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
import ColorSystemSection from "./components/ColorSystemSection";

const PROBLEM_POINTS = [
  {
    title: "Too much translation",
    description:
      "Beginners often have to decode symbols into note names, then find keys — every note becomes a mini puzzle.",
  },
  {
    title: "Slow feedback loops",
    description:
      "When reading is hard, practice turns into stopping and starting instead of building flow and confidence.",
  },
  {
    title: "Motivation drops early",
    description:
      "The hardest part should be the music, not the notation. Early friction makes it easy to quit.",
  },
] as const;

const HOW_IT_WORKS_STEPS = [
  ["1. Upload", "Import a photo or PDF of your sheet music."],
  ["2. Detect", "We detect noteheads and determine their pitch."],
  ["3. Colorize", "Notes get color-coded and mapped to the keyboard."],
] as const;

const BUILT_FOR = [
  {
    icon: "🎹",
    title: "Beginners",
    description: "Learn faster without decoding notes.",
  },
  {
    icon: "👁",
    title: "Visual learners",
    description: "Instant color recognition.",
  },
  {
    icon: "👨‍🏫",
    title: "Teachers",
    description: "A new tool for teaching music.",
  },
  {
    icon: "🎵",
    title: "Returning players",
    description: "Rebuild reading skills quickly.",
  },
];

const DEVELOPMENT_STATUS = [
  {
    title: "Status",
    description: "Actively building the first release.",
  },
  {
    title: "Current focus",
    description: "Reliable note detection and consistent, readable color output.",
  },
  {
    title: "What’s next",
    description: "Better uploads, stronger accuracy, and a smoother practice workflow.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "Is this for beginners only?",
    answer:
      "Beginners love it, but it’s also great for returning players and visual learners.",
  },
  {
    question: "When is the app launching?",
    answer:
      "We’re building the first release now. This site will update as we get closer.",
  },
] as const;

export default function Home() {
  const [ctaClicked, setCtaClicked] = useState(false);

  function handleCtaClick() {
    setCtaClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />

      <div className="py-4">
        <Container>
          <p className="text-center text-sm text-white/50">
            Designed and approved by musicians.
          </p>
        </Container>
      </div>

      {/* Problem */}
      <section id="problem" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">The problem</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            For many beginners, reading sheet music isn’t just learning notes — it’s
            translating multiple layers at once. That cognitive load slows practice and
            makes progress feel harder than it should.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PROBLEM_POINTS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/80">{item.title}</div>
                <div className="mt-2 text-sm text-white/60">{item.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product preview */}
      <section id="preview" className="pb-20">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="overflow-hidden rounded-2xl bg-black/30">
              <Image
                src="/mary-had-a-little-lamb.jpg"
                alt="Color-coded sheet music preview"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/60">
              Real-time note detection with consistent color mapping.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section id="vision" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            Music reading should feel direct and encouraging. COLOR CODED adds a consistent
            color layer to sheet music and maps it to the keyboard — reducing translation so
            practice can focus on timing, feel, and repetition instead of constant decoding.
          </p>
        </Container>
      </section>

      {/* How it works */}
      <section id="how" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            A simple pipeline that turns existing sheet music into a clearer, color-coded
            practice view.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map(([title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/80">{title}</div>
                <div className="mt-2 text-sm text-white/60">{desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Color System (NEW) */}
      <ColorSystemSection />

      {/* Built for */}
      <section id="built-for" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">Built for</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BUILT_FOR.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="text-4xl" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Development status */}
      <section id="status" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">Development status</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {DEVELOPMENT_STATUS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/80">{item.title}</div>
                <div className="mt-2 text-sm text-white/60">{item.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="cta" className="pb-20">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <h2 className="text-2xl font-semibold">Be first to try COLOR CODED</h2>
            <p className="mt-4 mx-auto max-w-2xl text-white/70">
              Join the beta and experience a simpler way to read piano music.
            </p>
            <button
              type="button"
              onClick={handleCtaClick}
              className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Join the Beta
            </button>
            {ctaClicked && (
              <p className="mt-4 text-sm text-white/60">Beta signups opening soon.</p>
            )}
            <p className="mt-6 text-xs text-white/50">Launching first on iOS.</p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="pb-24">
        <Container>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/80">{item.question}</div>
                <div className="mt-2 text-sm text-white/60">{item.answer}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} COLOR CODED. All rights reserved.
          </div>
        </Container>
      </footer>
    </main>
  );
}