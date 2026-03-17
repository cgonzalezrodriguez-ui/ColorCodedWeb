"use client";

import { useEffect, useState } from "react";
import Container from "./Container";

export default function HowItWorks() {
  const [showColor, setShowColor] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowColor((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="pb-24 pt-6">
      <Container>
        <header className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            How it works
          </h2>
          <p className="mt-4 text-base text-white/60">
            Upload a photo or PDF. The app detects notes, assigns colors, and adds
            pitch labels and fingering — all automatically.
          </p>
        </header>

        <div
          className="group relative mx-auto max-w-5xl cursor-pointer"
          onClick={() => setShowColor((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowColor((prev) => !prev);
            }
          }}
          aria-label="Toggle between original and color-coded sheet music"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30">
            <img
              src="/mary-before.png"
              alt="Original sheet music — Mary Had a Little Lamb"
              className="block w-full"
            />
            <img
              src="/mary-after.png"
              alt="Color-coded sheet music with noteheads, pitch labels, and fingering"
              className="absolute top-0 left-0 w-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: showColor ? 1 : 0 }}
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-500 ${
                !showColor
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white/5 text-white/40 border border-white/5"
              }`}
            >
              Sheet music
            </span>
            <svg className="h-4 w-4 text-white/30" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-500 ${
                showColor
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white/5 text-white/40 border border-white/5"
              }`}
            >
              <span className="bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#6366f1,#a855f7)] bg-clip-text text-transparent">
                Color Coded
              </span>
            </span>
          </div>
          <p className="mt-3 text-center text-xs text-white/30">Click to toggle</p>
        </div>
      </Container>
    </section>
  );
}
