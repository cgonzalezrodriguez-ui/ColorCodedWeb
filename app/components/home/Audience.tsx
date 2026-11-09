"use client";

import Container from "../ui/Container";

const BUILT_FOR = [
  { icon: "\u{1F3B9}", title: "Beginners", line: "Skip the decoding. Start playing sooner." },
  { icon: "\u{1F441}", title: "Visual learners", line: "See the pattern, skip the lookup." },
  { icon: "\u{1F3B5}", title: "Returning players", line: "Get back into it without starting over." },
  { icon: "\u{1F468}\u{200D}\u{1F3EB}", title: "Teachers", line: "A visual layer for early instruction." },
  { icon: "\u{1F46A}", title: "Parents", line: "Help with practice, even if you don't read music." },
  { icon: "\u{1F3AF}", title: "Self-taught", line: "Stay in flow longer when practicing alone." },
];

export default function Audience() {
  return (
    <section className="py-16 sm:py-20">
      <div className="line-grow mx-auto mb-16 h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Built for</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUILT_FOR.map((item, i) => (
            <div key={item.title} className={`reveal reveal-delay-${Math.min(i + 1, 6)} group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1`}>
              <div className="text-3xl transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
              <h3 className="mt-4 text-sm font-semibold text-white/90">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/40">{item.line}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
