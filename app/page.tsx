"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
import TheProblem from "./components/TheProblem";
import ColorSystemSection from "./components/ColorSystemSection";
import Vision from "./components/Vision";
import BuiltFor from "./components/BuiltFor";
import Modal from "./components/Modal";
import Waitlist from "./components/Waitlist";
import WaitlistCard from "./components/WaitlistCard";
import FAQ from "./components/FAQ";

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

      <div className="py-4">
        <Container>
          <p className="text-center text-sm text-white/50">
            Designed and approved by musicians.
          </p>
        </Container>
      </div>

      {/* Vision */}
      <Vision />

      {/* Problem */}
      <TheProblem />

      {/* Color System (NEW) */}
      <ColorSystemSection />

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