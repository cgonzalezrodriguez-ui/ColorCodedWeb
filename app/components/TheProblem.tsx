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

function ProblemIcon({ title }: { title: string }) {
  const common = "h-5 w-5";

  if (title === "Too much translation") {
    // Puzzle-like icon
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={common}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 4h4a2 2 0 012 2v2h1a2 2 0 110 4h-1v2a2 2 0 01-2 2h-1v-1a2 2 0 10-4 0v1H8a2 2 0 01-2-2v-2H5a2 2 0 110-4h1V6a2 2 0 012-2h2"
        />
      </svg>
    );
  }

  if (title === "Slow feedback loops") {
    // Refresh/clock hybrid icon
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={common}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-2.64-6.36" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 3v6h-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    );
  }

  // Motivation drops early
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={common}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l4 4 3-3 4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h3" />
    </svg>
  );
}

export default function TheProblem() {
  return (
    <section id="problem" className="pb-20">
      <Container>
        <h2 className="text-2xl font-semibold">The problem</h2>
        <p className="mt-5 max-w-3xl text-white/70">
          For many beginners, reading sheet music isn’t just learning notes — it’s
          translating multiple layers at once.
          <br />
          That cognitive load slows practice and makes progress feel harder than it
          should.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROBLEM_POINTS.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition group-hover:border-white/15 group-hover:text-white/80">
                <ProblemIcon title={item.title} />
              </div>
              <div className="mt-4 text-sm font-medium text-white/85">
                {item.title}
              </div>
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

