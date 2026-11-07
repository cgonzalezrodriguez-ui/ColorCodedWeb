"use client";

import { useEffect, useState, useRef } from "react";
import useScrollFade from "./hooks/useScrollFade";
import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import PremiumHero from "./components/PremiumHero";
import Container from "./components/Container";
import Modal from "./components/Modal";
import WaitlistCard from "./components/WaitlistCard";
import FAQ from "./components/FAQ";
import FeedbackCard from "./components/FeedbackCard";
import Footer from "./components/Footer";
import StickerShop from "./components/StickerShop";
import AppShowcaseEdit from "./components/AppShowcaseEdit";
import AppShowcaseLibrary from "./components/AppShowcaseLibrary";

const COLORS = [
  { note: "C", name: "Red", hex: "#E0292E" },
  { note: "D", name: "Orange", hex: "#F28014" },
  { note: "E", name: "Yellow", hex: "#F7D11F" },
  { note: "F", name: "Green", hex: "#33B83D" },
  { note: "G", name: "Cyan", hex: "#00ADC7" },
  { note: "A", name: "Indigo", hex: "#1F5CEB" },
  { note: "B", name: "Violet", hex: "#B838DB" },
];

const BUILT_FOR = [
  { icon: "\u{1F3B9}", title: "Beginners", line: "Skip the decoding. Start playing sooner." },
  { icon: "\u{1F441}", title: "Visual learners", line: "See the pattern, skip the lookup." },
  { icon: "\u{1F3B5}", title: "Returning players", line: "Get back into it without starting over." },
  { icon: "\u{1F468}\u{200D}\u{1F3EB}", title: "Teachers", line: "A visual layer for early instruction." },
  { icon: "\u{1F46A}", title: "Parents", line: "Help with practice, even if you don't read music." },
  { icon: "\u{1F3AF}", title: "Self-taught", line: "Stay in flow longer when practicing alone." },
];


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const fadeRef = useRef<HTMLDivElement>(null);
  const { progress: fadeProgress, toggle: toggleFade } = useScrollFade(fadeRef);

  useReveal();

  useEffect(() => {
    if (isModalOpen) setModalSubmitted(false);
  }, [isModalOpen]);

  return (
    <main className="page-bg min-h-screen text-white overflow-x-clip" data-background="3">
      <Nav />

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get updates"
        initialFocusSelector={modalSubmitted ? undefined : 'input[name="EMAIL"]'}
      >
        <WaitlistCard formIdBase="mc-embedded-modal" submitted={modalSubmitted} onSubmit={() => setModalSubmitted(true)} />
      </Modal>

      <PremiumHero />

      {/* ── CROSSFADE ── */}
      <section id="transformation" className="py-16 sm:py-20">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">The solution</p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              See the{" "}
              <span className="hero-rainbow-text bg-clip-text text-transparent">difference.</span>
            </h2>
          </div>
          <div ref={fadeRef} onClick={toggleFade} className="reveal-scale reveal-delay-1 relative mx-auto mt-12 max-w-[900px] cursor-pointer overflow-hidden rounded-3xl border border-white/[0.08] bg-white shadow-2xl shadow-black/50">
            <img src="/mary-before.png" alt="Original sheet music" className="block w-full" />
            <img
              src="/mary-after.png"
              alt="Color-coded sheet music"
              className="absolute top-0 left-0 w-full transition-none"
              style={{ opacity: fadeProgress }}
            />
          </div>
          <p className={`mt-4 text-center text-xs text-white/30`}>Tap to compare</p>
        </Container>
      </section>

      {/* ── COLOR SYSTEM ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">The system</p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Seven notes. Seven colors.</h2>
            <p className="mt-4 text-base text-white/40">One mapping that repeats every octave.</p>
          </div>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-4 sm:gap-5">
            {COLORS.map(({ note, hex }, i) => (
              <div key={note} className="note-pop flex flex-col items-center gap-3" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="piano-key flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-xl sm:h-20 sm:w-20 sm:text-2xl" style={{ backgroundColor: hex, boxShadow: `0 8px 40px ${hex}40` }}>{note}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* ── SCAN / EDIT / PLAY ── */}
      <div id="how-it-works" className="scroll-mt-24">
        <AppShowcaseEdit />
      </div>

      {/* ── PUBLIC LIBRARY ── */}
      <AppShowcaseLibrary />

      {/* ── VISION ── */}

      {/* ── STICKERS ── */}
      <StickerShop />

      {/* ── BUILT FOR ── */}
      <section className="py-16 sm:py-20">
        <div className="line-grow mx-auto mb-16 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Built for</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BUILT_FOR.map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${Math.min(i + 1, 6)} group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1`}>
                <div className="text-3xl transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                <h3 className="mt-4 text-sm font-semibold text-white/90">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/40">{item.line}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <FeedbackCard />
        </Container>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
