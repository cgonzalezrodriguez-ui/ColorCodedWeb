"use client";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
import ProblemSolutionComparison from "./components/ProblemSolutionComparison";
import HowItWorks from "./components/HowItWorks";
import StickerTip from "./components/StickerTip";
import BuiltFor from "./components/BuiltFor";
import Modal from "./components/Modal";
import Waitlist from "./components/Waitlist";
import WaitlistCard from "./components/WaitlistCard";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";

const BUILT_FOR = [
  {
    icon: "\u{1F3B9}",
    title: "Beginners",
    summary: "Skip the decoding. Start playing sooner.",
    expanded: "Instead of translating symbols to note names to keys, color lets beginners connect what they see on the page to what they play.",
  },
  {
    icon: "\u{1F441}",
    title: "Visual learners",
    summary: "See the pattern, skip the lookup.",
    expanded: "Consistent color mapping turns note recognition into something you see at a glance instead of something you figure out.",
  },
  {
    icon: "\u{1F3B5}",
    title: "Returning players",
    summary: "Get back into it without starting over.",
    expanded: "You remember how music feels. Color bridges the gap while your reading fluency catches up.",
  },
  {
    icon: "\u{1F468}\u{200D}\u{1F3EB}",
    title: "Teachers",
    summary: "A visual layer for early instruction.",
    expanded: "Use it to keep students engaged while they build note-to-key recognition.",
  },
  {
    icon: "\u{1F46A}",
    title: "Parents",
    summary: "Help with practice even if you don't read music.",
    expanded: "Color gives you a way to follow along and support your kid without needing to know the notes yourself.",
  },
  {
    icon: "\u{1F3AF}",
    title: "Self-taught players",
    summary: "Stay in flow longer when practicing alone.",
    expanded: "Less stopping to figure out notes means longer, more productive practice sessions.",
  },
];

const DEVELOPMENT_STATUS = [
  { title: "Status", description: "Actively building toward first release." },
  { title: "Current focus", description: "Note detection accuracy and clean color output." },
  { title: "What's next", description: "Better uploads, fingering improvements, and smoother practice flow." },
] as const;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  useEffect(() => {
    if (isModalOpen) setModalSubmitted(false);
  }, [isModalOpen]);

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav onJoinBeta={() => setIsModalOpen(true)} />
      <Hero />

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get updates"
        initialFocusSelector={modalSubmitted ? undefined : 'input[name="EMAIL"]'}
      >
        <WaitlistCard
          formIdBase="mc-embedded-modal"
          submitted={modalSubmitted}
          onSubmit={() => setModalSubmitted(true)}
        />
      </Modal>

      <div className="py-4"></div>

      <ProblemSolutionComparison />

      <HowItWorks />

      <StickerTip />

      <BuiltFor items={BUILT_FOR} />

      <section id="status" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">Development status</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {DEVELOPMENT_STATUS.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/80">{item.title}</div>
                <div className="mt-2 text-sm text-white/60">{item.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Waitlist />

      <Feedback />

      <FAQ />
    </main>
  );
}
