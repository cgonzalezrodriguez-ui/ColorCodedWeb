"use client";

import Container from "./Container";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden pb-20 pt-4"
      aria-labelledby="vision-heading"
    >
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
          <div className="reveal">
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
            <ul className="mt-8 space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" aria-hidden />
                Faster note recognition
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" aria-hidden />
                Less mental translation
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" aria-hidden />
                Practice focused on timing and musical feel
              </li>
            </ul>
          </div>

          {/* Right: iPhone frame */}
          <div className="reveal-scale reveal-delay-2 flex justify-center">
            <div
              className="relative w-56 sm:w-64 lg:w-72 transition-transform duration-500 ease-out"
              style={{ transform: "rotate(3deg)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(0deg) scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(3deg)"; }}
            >
              <div className="relative rounded-[3rem] bg-[#1a1a1a] p-[5px] shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.08)]">
                {/* Side buttons */}
                <div className="absolute -right-[2px] top-28 h-12 w-[3px] rounded-r-sm bg-[#2a2a2a]" />
                <div className="absolute -left-[2px] top-20 h-6 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
                <div className="absolute -left-[2px] top-32 h-10 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
                <div className="absolute -left-[2px] top-44 h-10 w-[3px] rounded-l-sm bg-[#2a2a2a]" />

                {/* Screen — screenshot includes its own status bar */}
                <div className="overflow-hidden rounded-[2.7rem]">
                  <img
                    src="/sim-arabesque.png"
                    alt="ColorCoded app showing Arabesque with color-coded noteheads"
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
