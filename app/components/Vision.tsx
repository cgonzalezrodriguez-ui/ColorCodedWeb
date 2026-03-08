import Container from "./Container";

const SHEET_MUSIC_COLORS = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#6366F1"];
const KEYBOARD_COLORS = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#6366F1", "#A855F7"];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden pb-20 pt-4"
      aria-labelledby="vision-heading"
    >
      {/* Subtle background polish */}
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
          <div>
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
            {/* Focus shift callout */}
            <div className="mt-8 flex flex-wrap gap-8 rounded-2xl border border-white/10 bg-white/5 p-5 sm:gap-12 sm:p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                  Focus on
                </p>
                <ul className="mt-2 space-y-1 text-sm font-medium text-white/90">
                  <li>Timing</li>
                  <li>Feel</li>
                  <li>Repetition</li>
                </ul>
              </div>
              <div className="h-12 w-px shrink-0 bg-white/15 sm:h-auto sm:w-px sm:min-h-[3.5rem]" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                  Not on
                </p>
                <ul className="mt-2 space-y-1 text-sm text-white/60">
                  <li>Constant decoding</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: stylized visual */}
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="space-y-6">
                {/* Sheet music mockup */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                    Sheet music
                  </p>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-px w-full bg-white/20"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex gap-2">
                    {SHEET_MUSIC_COLORS.map((hex, i) => (
                      <div
                        key={i}
                        className="h-3 w-4 rounded-sm"
                        style={{ backgroundColor: hex }}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center text-white/30" aria-hidden>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                {/* Keyboard mockup */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                    Color-coded keys
                  </p>
                  <div className="flex gap-1">
                    {KEYBOARD_COLORS.map((hex, i) => (
                      <div
                        key={i}
                        className="h-12 flex-1 rounded-md"
                        style={{ backgroundColor: hex }}
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
