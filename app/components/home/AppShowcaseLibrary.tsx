"use client";

import Container from "../ui/Container";

export default function AppShowcaseLibrary() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: copy */}
          <div className="reveal">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Start immediately
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Browse the public library.
            </h2>
            <div className="mt-6 space-y-4 text-white/70">
              <p className="max-w-xl leading-relaxed">
                Don&apos;t have sheet music on hand? No problem. The public library has pre-scanned pieces ready to open - from beginner études to intermediate classics.
              </p>
              <p className="max-w-xl leading-relaxed">
                Pick a piece, tap, and start reading in color. No scanning required.
              </p>
            </div>
          </div>

          {/* Right: iPhone frame */}
          <div className="reveal-scale reveal-delay-1 flex justify-center">
            <div
              className="relative w-56 sm:w-64 lg:w-72 transition-transform duration-500 ease-out"
              style={{ transform: "rotate(2deg)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(0deg) scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(2deg)"; }}
            >
              <div className="relative rounded-[3rem] bg-[#1a1a1a] p-[5px] shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.08)]">
                <div className="absolute -right-[2px] top-28 h-12 w-[3px] rounded-r-sm bg-[#2a2a2a]" />
                <div className="absolute -left-[2px] top-20 h-6 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
                <div className="absolute -left-[2px] top-32 h-10 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
                <div className="absolute -left-[2px] top-44 h-10 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
                <div className="overflow-hidden rounded-[2.7rem]">
                  <img
                    src="/sim-library.png"
                    alt="ColorCoded public library showing pre-scanned pieces"
                    className="block w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
