"use client";

import Container from "../ui/Container";

const COLORS = [
  { note: "C", name: "Red", hex: "#E0292E" },
  { note: "D", name: "Orange", hex: "#F28014" },
  { note: "E", name: "Yellow", hex: "#F7D11F" },
  { note: "F", name: "Green", hex: "#33B83D" },
  { note: "G", name: "Cyan", hex: "#00ADC7" },
  { note: "A", name: "Indigo", hex: "#1F5CEB" },
  { note: "B", name: "Violet", hex: "#B838DB" },
];

export default function ColorSystem() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">The system</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Seven notes. Seven colors.</h2>
          <p className="mt-4 text-base text-white/40">One mapping that repeats every octave.</p>
        </div>
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-4 sm:gap-5">
          {COLORS.map(({ note, hex }, i) => (
            <div key={note} className="note-pop flex flex-col items-center gap-3" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="piano-key flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-xl sm:h-20 sm:w-20 sm:text-2xl" style={{ backgroundColor: hex, boxShadow: `0 8px 40px ${hex}40` }}>{note}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
