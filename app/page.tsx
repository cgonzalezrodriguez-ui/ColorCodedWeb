"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
import ColorSystemSection from "./components/ColorSystemSection";
import Waitlist from "./components/Waitlist";
import FAQ from "./components/FAQ";

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
    summary: "Learn faster without decoding every note.",
    expanded:
      "COLOR CODED helps beginners connect sheet music to the keyboard more directly. Instead of constantly translating symbols into note names first, they can recognize patterns faster and build confidence earlier.",
  },
  {
    icon: "👁",
    title: "Visual learners",
    summary: "Instant color recognition for faster understanding.",
    expanded:
      "For visual learners, consistent color mapping makes note recognition more intuitive. It reduces mental friction and makes it easier to follow music at a glance.",
  },
  {
    icon: "🎵",
    title: "Returning players",
    summary: "Rebuild reading skills with less friction.",
    expanded:
      "Returning players often remember how music feels before they fully regain reading fluency. COLOR CODED makes re-entry smoother by reducing the effort needed to interpret notation.",
  },
  {
    icon: "👨‍🏫",
    title: "Teachers",
    summary: "A supportive tool for music instruction.",
    expanded:
      "Teachers can use COLOR CODED as a support layer for early learning, helping students stay engaged while reinforcing note-to-key relationships.",
  },
  {
    icon: "👪",
    title: "Parents",
    summary: "Make practice feel more approachable at home.",
    expanded:
      "Parents who are helping children practice can benefit from a clearer and more visual system. It makes practice sessions feel less intimidating and easier to support.",
  },
  {
    icon: "🎯",
    title: "Self-guided practice",
    summary: "Stay in flow longer while practicing alone.",
    expanded:
      "Independent learners can use COLOR CODED to reduce stop-and-start practice. It supports longer, more focused sessions while reinforcing recognition over time.",
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

export default function Home() {
  const [selectedAudience, setSelectedAudience] = useState<string | null>("Beginners");
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
                src="/mary-had-a-little-lambfixed.jpg"
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
      <section
        id="vision"
        className="relative overflow-hidden pb-20 pt-4"
        aria-labelledby="vision-heading"
      >
        {/* Subtle background polish */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(59, 130, 246, 0.4), transparent), radial-gradient(ellipse 60% 40% at 30% 60%, rgba(168, 85, 247, 0.3), transparent)",
          }}
        />
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: copy */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                Our vision
              </p>
              <h2
                id="vision-heading"
                className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                Vision
              </h2>
              <div className="mt-6 space-y-4 text-white/70">
                <p className="max-w-xl leading-relaxed">
                  Music reading should feel direct and encouraging.
                </p>
                <p className="max-w-xl leading-relaxed">
                  COLOR CODED adds a consistent color layer to sheet music and
                  maps it to the keyboard, reducing the need for constant
                  translation.
                </p>
                <p className="max-w-xl leading-relaxed">
                  That lets practice focus more on timing, feel, and repetition.
                </p>
              </div>
              {/* Focus shift callout */}
              <div className="mt-8 flex flex-wrap gap-8 rounded-2xl border border-white/10 bg-white/5 p-5 sm:gap-12 sm:p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Focus on
                  </p>
                  <ul className="mt-2 space-y-1 text-sm font-medium text-white/90">
                    <li>Timing</li>
                    <li>Feel</li>
                    <li>Repetition</li>
                  </ul>
                </div>
                <div className="h-12 w-px shrink-0 bg-white/15 sm:h-auto sm:w-px sm:min-h-[3.5rem]" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Not on
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-white/60">
                    <li>Constant decoding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: stylized visual */}
            <div className="hidden lg:block">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
                <div className="space-y-6">
                  {/* Sheet music mockup */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                      Sheet music
                    </p>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="h-px w-full bg-white/20"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <div className="mt-3 flex gap-2">
                      {["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#6366F1"].map(
                        (hex, i) => (
                          <div
                            key={i}
                            className="h-3 w-4 rounded-sm"
                            style={{ backgroundColor: hex }}
                            aria-hidden
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center text-white/30" aria-hidden>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  {/* Keyboard mockup */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                      Color-coded keys
                    </p>
                    <div className="flex gap-1">
                      {["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#6366F1", "#A855F7"].map(
                        (hex, i) => (
                          <div
                            key={i}
                            className="h-12 flex-1 rounded-md"
                            style={{ backgroundColor: hex }}
                            aria-hidden
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUILT_FOR.map((item) => {
              const isExpanded = selectedAudience === item.title;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    setSelectedAudience(isExpanded ? null : item.title)
                  }
                  className={`cursor-pointer rounded-3xl border p-8 text-left transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-white/30 hover:shadow-lg ${
                    isExpanded
                      ? "border-white/25 bg-white/10 ring-2 ring-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="text-5xl" aria-hidden>
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{item.summary}</p>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pt-4 text-sm text-white/80 leading-relaxed">
                      {item.expanded}
                    </p>
                  </div>
                </button>
              );
            })}
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

      {/* CTA / Waitlist */}
      <Waitlist />

      {/* FAQ */}
      <FAQ />

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