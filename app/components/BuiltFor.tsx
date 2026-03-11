"use client";

import { useMemo, useState } from "react";
import Container from "./Container";

type BuiltForItem = {
  icon: string;
  title: string;
  summary: string;
  expanded: string;
};

function firstSentence(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return "";
  const idx = trimmed.indexOf(". ");
  return idx === -1 ? trimmed : `${trimmed.slice(0, idx + 1)}`;
}

export default function BuiltFor({ items }: { items: BuiltForItem[] }) {
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);

  const selectedSet = useMemo(
    () => new Set(selectedTitles),
    [selectedTitles],
  );

  return (
    <section id="built-for" className="pb-20">
      <Container>
        <h2 className="text-2xl font-semibold">Built for</h2>
        <p className="mt-2 text-sm text-white/50">Select all that apply.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const isSelected = selectedSet.has(item.title);
            const extra = firstSentence(item.expanded);
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  setSelectedTitles((prev) =>
                    prev.includes(item.title)
                      ? prev.filter((t) => t !== item.title)
                      : [...prev, item.title],
                  );
                }}
                className={`group cursor-pointer rounded-3xl border p-8 text-left transition-all duration-200 ease-out hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
                  isSelected
                    ? "border-white/30 bg-white/10 ring-1 ring-white/15 shadow-lg shadow-white/5"
                    : "border-white/10 bg-white/5"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-5xl" aria-hidden>
                    {item.icon}
                  </div>
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-3.5 w-3.5 text-white/80"
                        aria-hidden
                      >
                        <path
                          d="M16.25 5.75L8.375 13.625L3.75 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Selected
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{item.summary}</p>
                <p
                  className={`mt-3 overflow-hidden text-sm leading-relaxed text-white/80 transition-all duration-300 ease-in-out ${
                    isSelected ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {extra}
                </p>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

