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
        {/* Column headers with long arrow (desktop) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:items-center lg:mb-8">
          <h2 className="text-xl font-semibold text-white">Problems</h2>
          <div
            className="flex min-w-[140px] items-center justify-center gap-2 px-4"
            aria-hidden
          >
            <span className="h-px flex-1 max-w-[120px] bg-white/25" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 shrink-0 text-white/50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white text-right">
            Solutions
          </h2>
        </div>

        {/* Two columns: problems | solutions (desktop); stacked (mobile) */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left column: Problems */}
          <div>
            <h2 className="text-xl font-semibold text-white lg:hidden">
              Problems
            </h2>
            <div className="mt-4 space-y-6 lg:mt-0">
              {ROWS.map((row) => (
                <div key={row.problem.title} className={problemCardBase}>
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
              ))}
            </div>
          </div>

          {/* Mobile divider */}
          <div
            className="flex items-center gap-2 lg:hidden"
            aria-hidden
          >
            <span className="h-px flex-1 bg-white/10" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 shrink-0 text-white/30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          {/* Right column: Solutions */}
          <div>
            <h2 className="text-xl font-semibold text-white lg:hidden">
              Solutions
            </h2>
            <div className="mt-4 space-y-6 lg:mt-0">
              {ROWS.map((row, index) => (
                <SolutionCard
                  key={row.solution.title}
                  title={row.solution.title}
                  icon={row.solution.icon}
                  description={row.solution.description}
                  accentColor={
                    SOLUTION_ACCENT_COLORS[
                      index % SOLUTION_ACCENT_COLORS.length
                    ]
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
