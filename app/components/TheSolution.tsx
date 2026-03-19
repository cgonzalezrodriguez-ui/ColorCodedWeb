import Container from "./Container";

const SOLUTION_POINTS = [
  {
    title: "Instant color recognition",
    icon: "🎨",
    description:
      "Each note is mapped to a consistent color so players recognize patterns instantly instead of decoding note names.",
  },
  {
    title: "Direct keyboard mapping",
    icon: "🎹",
    description:
      "The same colors appear on sheet music and the keyboard, creating a clear visual bridge between reading and playing.",
  },
  {
    title: "Practice stays in flow",
    icon: "🎶",
    description:
      "With less mental translation, practice becomes smoother and more musical instead of stop-and-start.",
  },
] as const;

export default function TheSolution() {
  return (
    <section id="solution" className="pb-20">
      <Container>
        <h2 className="text-2xl font-semibold">The solution</h2>
        <p className="mt-5 max-w-3xl text-white/70">
          ColorCoded removes the translation step and lets players recognize notes
          instantly.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SOLUTION_POINTS.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 pt-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white/80 transition group-hover:border-white/15 group-hover:text-white">
                <span aria-hidden>{item.icon}</span>
              </div>
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

