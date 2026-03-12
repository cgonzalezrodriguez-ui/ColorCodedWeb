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

        {/* Simple keyboard visual */}
        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
          <div>
            <h3 className="text-lg font-semibold">How it looks on the keyboard</h3>
            <p className="mt-1 text-sm text-white/70">
              Colors repeat every octave — the same note always looks the same.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5">
            {/* White keys row (C D E F G A B) */}
            <div className="grid grid-cols-7 gap-2">
              {NOTES.map((n) => (
                <div
                  key={`key-${n.note}`}
                  className="relative h-16 rounded-xl border border-white/10 bg-white/5"
                >
                  <div
                    className="absolute inset-x-2 top-2 h-2 rounded-full"
                    style={{ backgroundColor: n.hex }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/70">
                    {n.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Optional: small note explaining sharps/flats */}
            <p className="mt-4 text-xs text-white/55">
              *Sharps and flats are shown as colored triangular markers.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}