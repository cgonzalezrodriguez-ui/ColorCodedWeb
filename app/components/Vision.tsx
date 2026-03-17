import Image from "next/image";
import Container from "./Container";

/** Sheet music image for the Vision section upper panel (file in public/images/). */
const SHEET_MUSIC_IMAGE_SRC = "/sheet-musicF.png";

const KEYBOARD_COLORS = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#6366F1", "#A855F7"];
const KEYBOARD_NOTES = ["C", "D", "E", "F", "G", "A", "B"];

/** Black keys sit in gaps between white keys; no black key between E and F (index 2). */
const BLACK_KEY_AFTER_WHITE_INDEX = [0, 1, 3, 4, 5];

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
                {/* Sheet music panel — image source: SHEET_MUSIC_IMAGE_SRC */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                    Sheet music
                  </p>
                  <div className="relative h-44 w-full overflow-hidden rounded-xl">
                    <Image
                      src={SHEET_MUSIC_IMAGE_SRC}
                      alt="Traditional sheet music"
                      fill
                      className="object-contain object-center"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
                {/* Arrow - refined, centered */}
                <div className="flex justify-center py-1 text-white/25" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                {/* Keyboard mockup — piano layout with black keys above gaps */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                    Color-coded keys
                  </p>
                  <div className="relative flex flex-col">
                    {/* Black keys — same flex/gap as white keys so each sits in the gap between two white keys */}
                    <div
                      className="pointer-events-none relative z-10 flex gap-1"
                      style={{ height: "2rem", marginBottom: "-0.75rem" }}
                      aria-hidden
                    >
                      {KEYBOARD_NOTES.map((_, slotIndex) => (
                        <div key={slotIndex} className="flex flex-1 justify-end">
                          {BLACK_KEY_AFTER_WHITE_INDEX.includes(slotIndex) ? (
                            <div
                              className="h-8 w-5 shrink-0 translate-x-1/2 rounded-b rounded-t-sm bg-black shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
                              style={{ minWidth: "1.25rem" }}
                            />
                          ) : null}
                        </div>
                      ))}
                    </div>
                    {/* White keys row */}
                    <div className="flex gap-1">
                      {KEYBOARD_COLORS.map((hex, i) => (
                        <div
                          key={i}
                          className="flex h-12 flex-1 select-none items-center justify-center rounded-b-md rounded-t-md text-lg font-bold text-white/95"
                          style={{ backgroundColor: hex }}
                          aria-label={`Key ${KEYBOARD_NOTES[i] ?? ""}`}
                        >
                          {KEYBOARD_NOTES[i]}
                        </div>
                      ))}
                    </div>
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
