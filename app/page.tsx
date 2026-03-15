"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
import ProblemSolutionComparison from "./components/ProblemSolutionComparison";
import ColorSystemSection from "./components/ColorSystemSection";
import Vision from "./components/Vision";
import BuiltFor from "./components/BuiltFor";
import Modal from "./components/Modal";
import Waitlist from "./components/Waitlist";
import WaitlistCard from "./components/WaitlistCard";
import FAQ from "./components/FAQ";

const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Upload",
    description: "Add a photo or PDF of your sheet music.",
    icon: (
      <svg className="h-8 w-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    accent: false,
  },
  {
    step: 2,
    title: "Detect",
    description: "We identify notes and determine their pitch automatically.",
    icon: (
      <svg className="h-8 w-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    accent: false,
  },
  {
    step: 3,
    title: "Colorize",
    description: "Each note is mapped to its consistent keyboard color.",
    icon: (
      <svg className="h-8 w-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.38 3.39a15.995 15.995 0 004.769-2.245 4.5 4.5 0 00-3.77-4.028 4.5 4.5 0 00-4.028 3.77 15.996 15.996 0 01-2.245 4.769" />
      </svg>
    ),
    accent: true,
  },
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
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [betaModalSubmitted, setBetaModalSubmitted] = useState(false);

  useEffect(() => {
    if (isBetaModalOpen) setBetaModalSubmitted(false);
  }, [isBetaModalOpen]);

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav onJoinBeta={() => setIsBetaModalOpen(true)} />
      <Hero />

      <Modal
        open={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
        title="Join beta"
        initialFocusSelector={betaModalSubmitted ? undefined : 'input[name="EMAIL"]'}
      >
        <WaitlistCard
          formIdBase="mc-embedded-modal"
          submitted={betaModalSubmitted}
          onSubmit={() => setBetaModalSubmitted(true)}
        />
      </Modal>

      <div className="py-4"></div>

      {/* Vision */}
      <Vision />

      {/* Problem → Solution comparison */}
      <ProblemSolutionComparison />

      {/* Color System (NEW) */}
      <ColorSystemSection />

      {/* How it works */}
      <section id="how-it-works" className="pb-24 pt-4">
        <Container>
          <h2 className="text-2xl font-semibold sm:text-3xl">How it works</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            A simple pipeline that turns existing sheet music into a clearer, color-coded
            practice view.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-0">
            {HOW_IT_WORKS_STEPS.flatMap((item, index) => {
              const card = (
                <div
                  key={item.title}
                  className={`
                    relative flex min-h-[200px] flex-col rounded-3xl border p-8
                    md:min-h-[260px] md:p-10
                    ${item.accent
                      ? "border-white/15 bg-white/[0.07] ring-1 ring-white/10"
                      : "border-white/10 bg-white/5"
                    }
                  `}
                >
                  {/* Subtle color accent bar on Colorize card */}
                  {item.accent && (
                    <div
                      className="absolute inset-x-0 top-0 h-1 rounded-t-3xl opacity-90"
                      style={{
                        background: "linear-gradient(90deg, #EF4444 0%, #F97316 18%, #EAB308 36%, #22C55E 54%, #3B82F6 72%, #6366F1 88%, #A855F7 100%)",
                      }}
                      aria-hidden
                    />
                  )}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    {item.icon}
                  </div>
                  <span className="mt-6 block text-xs font-medium tracking-wide text-white/50">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65 sm:text-base">
                    {item.description}
                  </p>
                </div>
              );
              const connector = index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div
                  key={`connector-${item.title}`}
                  className="hidden items-center justify-center py-10 md:flex md:w-12"
                  aria-hidden
                >
                  <svg className="h-5 w-5 text-white/20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.06l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </div>
              );
              return connector ? [card, connector] : [card];
            })}
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

      {/* Built for */}
      <BuiltFor items={BUILT_FOR} />

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
    </main>
  );
}