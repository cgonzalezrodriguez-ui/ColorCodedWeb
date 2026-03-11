"use client";

import Container from "./Container";

type BuiltForItem = {
  icon: string;
  title: string;
  summary: string;
  expanded: string;
};

export default function BuiltFor({
  items,
  selectedAudience,
  setSelectedAudience,
}: {
  items: BuiltForItem[];
  selectedAudience: string | null;
  setSelectedAudience: (value: string | null) => void;
}) {
  return (
    <section id="built-for" className="pb-20">
      <Container>
        <h2 className="text-2xl font-semibold">Built for</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const isExpanded = selectedAudience === item.title;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() =>
                  setSelectedAudience(isExpanded ? null : item.title)
                }
                className={`cursor-pointer rounded-3xl border p-8 text-left transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-white/30 hover:shadow-lg ${
                  isExpanded
                    ? "border-white/25 bg-white/10 ring-2 ring-white/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="text-5xl" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{item.summary}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-4 text-sm text-white/80 leading-relaxed">
                    {item.expanded}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

