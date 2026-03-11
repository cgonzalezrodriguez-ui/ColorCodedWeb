import Container from "./Container";

const PROBLEM_POINTS = [
  {
    title: "Too much translation",
    description:
      "Beginners often have to decode symbols into note names, then find keys — every note becomes a mini puzzle.",
  },
  {
    title: "Slow feedback loops",
    description:
      "When reading is hard, practice turns into stopping and starting instead of building flow and confidence.",
  },
  {
    title: "Motivation drops early",
    description:
      "The hardest part should be the music, not the notation. Early friction makes it easy to quit.",
  },
] as const;

export default function TheProblem() {
  return (
    <section id="problem" className="pb-20">
      <Container>
        <h2 className="text-2xl font-semibold">The problem</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          For many beginners, reading sheet music isn’t just learning notes — it’s
          translating multiple layers at once. That cognitive load slows practice and
          makes progress feel harder than it should.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PROBLEM_POINTS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm text-white/80">{item.title}</div>
              <div className="mt-2 text-sm text-white/60">{item.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

