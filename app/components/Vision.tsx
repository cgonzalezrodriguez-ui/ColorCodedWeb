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
            {/* Benefits list */}
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

          {/* Right: stylized visual */}
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="space-y-8">
                {/* Sheet music mockup */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                    Sheet music
                  </p>
                  <div className="relative flex items-start gap-2">
                    {/* Treble clef (stylized G clef) */}
                    <div className="shrink-0 text-white/50" aria-hidden>
                      <svg
                        className="h-11 w-7"
                        viewBox="0 0 28 56"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2v52M14 2c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm0 14c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7zm0 14c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7z" />
                      </svg>
                    </div>
                    {/* Staff lines + notes */}
                    <div className="min-w-0 flex-1">
                      <div className="relative h-14">
                        {/* 5 staff lines - slightly more visible */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="absolute left-0 right-0 h-px bg-white/35"
                            style={{ top: `${i * 25}%` }}
                            aria-hidden
                          />
                        ))}
                        {/* Note heads (circles) with stems - colored to show mapping to keys below */}
                        <div className="absolute left-8 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/70" aria-hidden />
                        <div className="absolute left-8 top-[36%] h-3 w-px bg-white/50" aria-hidden />
                        <div className="absolute left-14 top-[28%] h-2 w-2 rounded-full" style={{ backgroundColor: SHEET_MUSIC_COLORS[0] }} aria-hidden />
                        <div className="absolute left-14 top-[28%] h-3 w-px bg-white/50" aria-hidden />
                        <div className="absolute left-20 top-[44%] h-2 w-2 rounded-full" style={{ backgroundColor: SHEET_MUSIC_COLORS[1] }} aria-hidden />
                        <div className="absolute left-20 top-[44%] h-3 w-px bg-white/50" aria-hidden />
                        <div className="absolute left-26 top-[20%] h-2 w-2 rounded-full" style={{ backgroundColor: SHEET_MUSIC_COLORS[2] }} aria-hidden />
                        <div className="absolute left-26 top-[20%] h-3 w-px bg-white/50" aria-hidden />
                        <div className="absolute left-34 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full" style={{ backgroundColor: SHEET_MUSIC_COLORS[3] }} aria-hidden />
                        <div className="absolute left-34 top-[36%] h-3 w-px bg-white/50" aria-hidden />
                        <div className="absolute left-42 top-[36%] h-2 w-2 rounded-full" style={{ backgroundColor: SHEET_MUSIC_COLORS[4] }} aria-hidden />
                        <div className="absolute left-42 top-[36%] h-3 w-px bg-white/50" aria-hidden />
                      </div>
                  {/* Color mapping hint - colored markers aligned with note colors */}
                      <div className="mt-3 flex gap-1.5">
                        {SHEET_MUSIC_COLORS.map((hex, i) => (
                          <div
                            key={i}
                            className="h-2.5 w-3 rounded-sm"
                            style={{ backgroundColor: hex }}
                            aria-hidden
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Arrow - refined, centered */}
                <div className="flex justify-center py-1 text-white/25" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
