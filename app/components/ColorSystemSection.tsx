// components/ColorSystemSection.tsx
import Container from "./Container";

type Note = {
  note: string;
  colorName: string;
  hex: string;
};

const NOTES: Note[] = [
  { note: "C", colorName: "Red",    hex: "#EF4444" },
  { note: "D", colorName: "Orange", hex: "#F97316" },
  { note: "E", colorName: "Yellow", hex: "#EAB308" },
  { note: "F", colorName: "Green",  hex: "#22C55E" },
  { note: "G", colorName: "Blue",   hex: "#3B82F6" },
  { note: "A", colorName: "Indigo", hex: "#6366F1" },
  { note: "B", colorName: "Violet", hex: "#A855F7" },
];

const BLACK_KEY_LAYOUT = [
  { colStart: 3, colorIndex: 0 }, // C♯ between C and D
  { colStart: 5, colorIndex: 1 }, // D♯ between D and E
  // no black key between E and F
  { colStart: 9, colorIndex: 3 }, // F♯ between F and G
  { colStart: 11, colorIndex: 4 }, // G♯ between G and A
  { colStart: 13, colorIndex: 5 }, // A♯ between A and B
] as const;

function Chip({ hex }: { hex: string }) {
  return (
    <span
      className="inline-block h-3 w-3 rounded-full ring-1 ring-white/15"
      style={{ backgroundColor: hex }}
      aria-hidden="true"
    />
  );
}

export default function ColorSystemSection() {
  return (
    <section id="color-system" className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium tracking-wide text-white/60">
            The Color System
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.5rem]">
            One note. One color. Everywhere.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Each pitch class (C through B) is assigned a consistent color. Octaves
            repeat, so the mapping stays predictable across the entire keyboard.
          </p>
        </div>

        {/* Legend */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {NOTES.map((n) => (
              <div
                key={n.note}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold">{n.note}</div>
                  <span
                    className="h-10 w-10 shrink-0 rounded-xl ring-1 ring-white/15"
                    style={{ backgroundColor: n.hex }}
                    aria-label={`${n.note} is ${n.colorName}`}
                  />
                </div>

                <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                  <Chip hex={n.hex} />
                  <span>{n.colorName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyboard visual */}
        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
          <div>
            <h3 className="text-lg font-semibold">How it looks on the keyboard</h3>
            <p className="mt-1 text-sm text-white/70">
              Colors repeat every octave — the same note always looks the same.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5">
            <div className="rounded-xl bg-gradient-to-b from-white/5 via-slate-900/60 to-black/80 p-3">
              <div className="relative mx-auto h-32 max-w-xl">
                {/* White keys: C D E F G A B */}
                <div className="flex h-full rounded-xl border border-white/10 bg-black/80 px-[3px] pb-[4px] pt-[6px] shadow-inner shadow-black/80">
                  {NOTES.map((n) => (
                    <div
                      key={`key-${n.note}`}
                      className="relative mx-[1.5px] flex flex-1 select-none flex-col items-center justify-between rounded-lg bg-[radial-gradient(circle_at_50%_0%,rgba(248,250,252,0.96),rgba(15,23,42,0.98))] shadow-[0_10px_24px_rgba(0,0,0,0.85)]"
                      aria-label={`Key ${n.note}`}
                    >
                      {/* Subtle colored top strip */}
                      <div
                        className="h-1.5 w-full rounded-t-lg"
                        style={{ background: n.hex, opacity: 0.9 }}
                      />
                      {/* Interior detail line */}
                      <div className="pointer-events-none absolute inset-x-2 top-3 h-[1px] rounded-full bg-black/10" />
                      {/* Note label pill */}
                      <div className="flex flex-1 items-end pb-2">
                        <span className="rounded-full bg-black/80 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white/90">
                          {n.note}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Black keys overlay in correct pattern */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(14, minmax(0, 1fr))",
                  }}
                >
                  {BLACK_KEY_LAYOUT.map(({ colStart, colorIndex }) => {
                    const color = NOTES[colorIndex].hex;
                    return (
                      <div
                        key={`${colStart}-${colorIndex}`}
                        style={{ gridColumnStart: colStart }}
                        className="flex items-start justify-center pt-[2px]"
                      >
                        <div className="relative h-full w-6 rounded-b-md border border-white/10 bg-black/95 shadow-[0_16px_32px_rgba(0,0,0,0.9)]">
                          {/* Colored accent on top of black key */}
                          <div
                            className="absolute inset-x-1 top-1 h-1 rounded-full"
                            style={{ background: color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-white/55">
              *Sharps and flats appear on the black keys with matching color accents.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}