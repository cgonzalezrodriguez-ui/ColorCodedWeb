"use client";

import { useState } from "react";
import Container from "./Container";

const FAQ_ITEMS = [
  {
    question: "Is this for beginners only?",
    answer:
      "Beginners love it, but it's also great for returning players and visual learners.",
  },
  {
    question: "When is the app launching?",
    answer:
      "We're building the first release now. This site will update as we get closer.",
  },
] as const;

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pb-24">
      <Container>
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-6 divide-y divide-white/10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaqIndex(isOpen ? null : index)
                  }
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left transition-colors duration-200 hover:text-white/90"
                >
                  <span className="font-medium text-white">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-200 ease-in-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      className="h-5 w-5 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-4 text-sm text-white/60">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
