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
  {
    num: "1",
    title: "Scan",
    desc: "Upload or photograph sheet music. The app detects notes automatically - but no scanner is perfect.",
    src: "/sim-step1-raw.png",
    alt: "Scanned score with some false detections",
    rotate: "-2deg",
  },
  {
    num: "2",
    title: "Edit",
    desc: "Select any note to fix, move, or delete. Clean up false detections in a couple taps.",
    src: "/sim-step2-edit.png",
    alt: "Editing view showing lasso selection",
    rotate: "0deg",
  },
  {
    num: "3",
    title: "Play",
    desc: "Your score is ready - color-coded noteheads with pitch labels and fingering suggestions.",
    src: "/sim-step3-final.png",
    alt: "Final color-coded score with fingering",
    rotate: "2deg",
  },
  {
    num: "4",
    title: "Share",
    desc: "Export as a PDF to print, AirDrop to an iPad, or save to your personal library for later.",
    src: "/sim-step4-share.png",
    alt: "Share sheet showing print and export options",
    rotate: "-1deg",
  },
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
            Scan. Edit. Play. Share.
          </h2>
          <p className="mt-4 text-base text-white/40">
            Four steps from paper to color-coded music.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-12">
          {STEPS.map((step, i) => (
            <div key={step.num} className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center`}>
              <div
                className="transition-transform duration-500 ease-out"
                style={{ transform: `rotate(${step.rotate})` }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(0deg) scale(1.05)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${step.rotate})`; }}
              >
                <PhoneFrame src={step.src} alt={step.alt} />
              </div>
              <div className="mt-8">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold text-white/70">
                  {step.num}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/45">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
