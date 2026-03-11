import Container from "./Container";

const SOLUTION_POINTS = [
  {
    title: "Instant color recognition",
    description:
      "Each note is mapped to a consistent color so players recognize patterns instantly instead of decoding note names.",
  },
  {
    title: "Direct keyboard mapping",
    description:
      "The same colors appear on sheet music and the keyboard, creating a clear visual bridge between reading and playing.",
  },
  {
    title: "Practice stays in flow",
    description:
      "With less mental translation, practice becomes smoother and more musical instead of stop-and-start.",
  },
] as const;

const ACCENT_COLORS = ["#ef4444", "#f97316", "#22c55e"] as const;

export default function TheSolution() {
  return (
    <section id="solution" className="pb-20">
      <Container>
        <h2 className="text-2xl font-semibold">The solution</h2>
        <p className="mt-5 max-w-3xl text-white/70">
          COLOR CODED removes the translation step and lets players recognize notes
          instantly.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SOLUTION_POINTS.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 pt-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
            >
              <div
                className="mb-4 h-0.5 w-10 rounded-full"
                style={{ background: ACCENT_COLORS[index % ACCENT_COLORS.length] }}
                aria-hidden
              />
              <div className="text-sm font-medium text-white/85">{item.title}</div>
              <div className="mt-2 text-sm text-white/60 leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

