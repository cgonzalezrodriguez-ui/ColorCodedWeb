import Container from "./Container";

const SOLUTION_ACCENT_COLORS = ["#ef4444", "#3b82f6", "#22c55e"] as const;

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

const problemCardBase =
  "group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5";
const problemIconBox =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition group-hover:text-white/60";

function SolutionCard({
  title,
  icon,
  description,
  accentColor,
}: {
  title: string;
  icon: string;
  description: string;
  accentColor: string;
}) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-lg">
      <div
        className="absolute inset-0 rounded-3xl opacity-[0.06] transition-opacity group-hover:opacity-10"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 20% 30%, ${accentColor}, transparent)`,
        }}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xl transition group-hover:shadow-lg"
            style={{
              borderColor: `${accentColor}40`,
              backgroundColor: `${accentColor}15`,
              boxShadow: `0 0 20px ${accentColor}25`,
            }}
          >
            <span aria-hidden>{icon}</span>
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-white/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function ProblemSolutionComparison() {
  return (
    <section id="problem" className="pb-20">
      <Container>
        {/* Header row: Problems | (arrow column) | Solutions */}
        <div className="hidden items-center justify-between gap-10 pb-8 lg:flex">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold text-white">Sheet music</h2>
          </div>
          <div className="w-40" aria-hidden />
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold text-white">
              <span className="bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#6366f1,#a855f7)] bg-clip-text text-transparent">
                ColorCoded
              </span>
            </h2>
          </div>
        </div>

        {/* Mobile headers */}
        <div className="flex flex-col gap-2 pb-4 lg:hidden">
          <h2 className="text-base font-semibold text-white/80">Sheet music</h2>
          <h2 className="text-base font-semibold text-white/80">
            <span className="bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#6366f1,#a855f7)] bg-clip-text text-transparent">
              ColorCoded
            </span>
          </h2>
        </div>

        {/* Rows: [problem] [arrow] [solution] */}
        <div className="space-y-8">
          {ROWS.map((row, index) => {
            const accentColor = SOLUTION_ACCENT_COLORS[index % SOLUTION_ACCENT_COLORS.length];
            return (
              <div
                key={row.problem.title}
                className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_9rem_1fr]"
              >
                {/* Problem card — monochrome */}
                <div className={problemCardBase}>
                  <div className="flex items-center gap-3">
                    <div className={problemIconBox}>
                      <ProblemIcon title={row.problem.title} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {row.problem.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {row.problem.description}
                  </p>
                </div>

                {/* Arrow connector between cards */}
                <div className="flex items-center justify-center lg:py-0" aria-hidden>
                  {/* Desktop: horizontal arrow */}
                  <div className="hidden w-full max-w-[9rem] items-center lg:flex">
                    <span className="h-[3px] w-full rounded-full bg-[linear-gradient(to_right,rgba(148,163,184,0.6),rgba(148,163,184,0.5),#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#6366f1,#a855f7)]" />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="ml-2 h-5 w-5 shrink-0 text-white/70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>

                  {/* Mobile: vertical/downward connector */}
                  <div className="flex flex-col items-center lg:hidden">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4 text-white/40"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14m0 0l-5-5m5 5l5-5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Solution card — colored accent */}
                <SolutionCard
                  title={row.solution.title}
                  icon={row.solution.icon}
                  description={row.solution.description}
                  accentColor={accentColor}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
