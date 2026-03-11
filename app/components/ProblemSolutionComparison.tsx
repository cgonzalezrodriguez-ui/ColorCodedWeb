import Container from "./Container";

const ROWS = [
  {
    problem: {
      title: "Too much translation",
      description:
        "Beginners often have to decode symbols into note names, then find keys — every note becomes a mini puzzle.",
    },
    solution: {
      title: "Instant color recognition",
      icon: "🎨",
      description:
        "Each note is mapped to a consistent color so players recognize patterns instantly instead of decoding note names.",
    },
  },
  {
    problem: {
      title: "Slow feedback loops",
      description:
        "When reading is hard, practice turns into stopping and starting instead of building flow and confidence.",
    },
    solution: {
      title: "Direct keyboard mapping",
      icon: "🎹",
      description:
        "The same colors appear on sheet music and the keyboard, creating a clear visual bridge between reading and playing.",
    },
  },
  {
    problem: {
      title: "Motivation drops early",
      description:
        "The hardest part should be the music, not the notation. Early friction makes it easy to quit.",
    },
    solution: {
      title: "Practice stays in flow",
      icon: "🎶",
      description:
        "With less mental translation, practice becomes smoother and more musical instead of stop-and-start.",
    },
  },
] as const;

function ProblemIcon({ title }: { title: string }) {
  const common = "h-5 w-5";

  if (title === "Too much translation") {
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

const cardBase =
  "group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5";
const iconBox =
  "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition group-hover:border-white/15 group-hover:text-white/80";
const iconBoxSolution =
  "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white/80 transition group-hover:border-white/15 group-hover:text-white";

export default function ProblemSolutionComparison() {
  return (
    <section id="problem" className="pb-20">
      <Container>
        <h2 className="text-2xl font-semibold">The problem → The solution</h2>
        <div className="mt-10 space-y-6">
          {ROWS.map((row) => (
            <div
              key={row.problem.title}
              className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]"
            >
              <div className={cardBase}>
                <div className={iconBox}>
                  <ProblemIcon title={row.problem.title} />
                </div>
                <div className="mt-4 text-sm font-medium text-white/85">
                  {row.problem.title}
                </div>
                <div className="mt-2 text-sm text-white/60 leading-relaxed">
                  {row.problem.description}
                </div>
              </div>

              <div
                className="flex justify-center text-white/40"
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>

              <div className={cardBase}>
                <div className={iconBoxSolution}>
                  <span aria-hidden>{row.solution.icon}</span>
                </div>
                <div className="mt-4 text-sm font-medium text-white/85">
                  {row.solution.title}
                </div>
                <div className="mt-2 text-sm text-white/60 leading-relaxed">
                  {row.solution.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
