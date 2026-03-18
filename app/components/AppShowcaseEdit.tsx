"use client";

import Container from "./Container";

function PhoneFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative w-48 sm:w-56 lg:w-60 ${className ?? ""}`}>
      <div className="relative rounded-[2.5rem] bg-[#1a1a1a] p-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)]">
        <div className="absolute -right-[2px] top-24 h-10 w-[3px] rounded-r-sm bg-[#2a2a2a]" />
        <div className="absolute -left-[2px] top-16 h-5 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
        <div className="absolute -left-[2px] top-26 h-8 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
        <div className="absolute -left-[2px] top-36 h-8 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
        <div className="overflow-hidden rounded-[2.3rem]">
          <img src={src} alt={alt} className="block w-full" />
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "1", title: "Scan", desc: "Upload or photograph sheet music. The app detects notes automatically — but no scanner is perfect." },
  { num: "2", title: "Edit", desc: "Select any note to fix, move, or delete. Clean up false detections in a couple taps." },
  { num: "3", title: "Play", desc: "Your score is ready — color-coded noteheads with pitch labels and fingering suggestions." },
];

export default function AppShowcaseEdit() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
            How it works
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Scan. Edit. Play.
          </h2>
          <p className="mt-4 text-base text-white/40">
            Three steps from paper to color-coded music.
          </p>
        </div>

        {/* Phones row */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-3 items-start gap-4 lg:gap-8">
          {/* Phone 1 — Scan */}
          <div className="reveal reveal-delay-1 flex justify-center">
            <div
              className="transition-transform duration-500 ease-out"
              style={{ transform: "rotate(-2deg)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(0deg) scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(-2deg)"; }}
            >
              <PhoneFrame src="/sim-step1-raw.png" alt="Scanned score with some false detections" />
            </div>
          </div>

          {/* Phone 2 — Edit (two stacked, fan apart on hover) */}
          <div className="reveal reveal-delay-2 flex justify-center">
            <div className="group relative h-[420px] w-48 sm:h-[480px] sm:w-56 lg:w-60 cursor-pointer">
              {/* Back phone (editor) — fans right */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 transition-all duration-500 ease-out group-hover:-translate-x-[20%] group-hover:rotate-3">
                <PhoneFrame src="/sim-editor.png" alt="Editor view with color wheel and toolbar" />
              </div>
              {/* Front phone (delete view) — fans left */}
              <div className="absolute left-1/2 top-4 -translate-x-1/2 z-10 transition-all duration-500 ease-out group-hover:-translate-x-[80%] group-hover:-rotate-3">
                <PhoneFrame src="/sim-step2-edit.png" alt="Editing view showing note deletion" />
              </div>
            </div>
          </div>

          {/* Phone 3 — Play */}
          <div className="reveal reveal-delay-3 flex justify-center">
            <div
              className="transition-transform duration-500 ease-out"
              style={{ transform: "rotate(2deg)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(0deg) scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(2deg)"; }}
            >
              <PhoneFrame src="/sim-step3-final.png" alt="Final color-coded score with fingering" />
            </div>
          </div>
        </div>

        {/* Labels row — always aligned */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 gap-4 lg:gap-8">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold text-white/70">
                {step.num}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/45">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
