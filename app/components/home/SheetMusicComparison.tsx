"use client";

import { useRef } from "react";
import useScrollFade from "../../hooks/useScrollFade";
import Container from "../ui/Container";

export default function SheetMusicComparison() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const { progress: fadeProgress, toggle: toggleFade } = useScrollFade(fadeRef);
  return (
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
  );
}
