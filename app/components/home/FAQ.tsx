"use client";

import { useState } from "react";
import Container from "../ui/Container";

const FAQ_ITEMS = [
  {
    question: "Is this for beginners only?",
    answer:
      "Beginners love it, but it's also great for returning players and visual learners.",
  },
  {
    question: "Is the app available now?",
    answer:
      "We're working toward a first release now. Sign up above and we'll email you when it's ready.",
  },
  {
    question: "Do I need to know how to read sheet music?",
    answer:
      "No. ColorCoded is designed to make reading sheet music more intuitive. The color system helps connect notes on the page to keys on the keyboard, so beginners can start recognizing patterns faster while still learning traditional notation.",
  },
  {
    question: "Does this replace traditional sheet music?",
    answer:
      "No. ColorCoded is meant to support traditional notation, not replace it. The goal is to reduce the initial friction of reading music so learners can focus more on rhythm, expression, and practice.",
  },
  {
    question: "What devices will ColorCoded work on?",
    answer:
      "Yes! ColorCoded is available now on the App Store for iPhone. iPad support is planned.",
  },
  {
    question: "What type of sheet music can I upload?",
    answer:
      "You can upload photos or PDFs of standard sheet music. ColorCoded detects noteheads and maps them to the color system automatically.",
  },
  {
    question: "Is ColorCoded free?",
    answer:
      "You get 10 free scans per day. If you need more, subscription plans and token packs are available. Core features like editing, the color system, and the public library are always free.",
  },
  {
    question: "How accurate is the note detection?",
    answer:
      "It works well on clean, printed sheet music. Handwritten scores and low-quality photos may need more manual cleanup. That's why the editor exists - you can fix anything the scanner misses.",
  },
  {
    question: "Can I use it while practicing at the piano?",
    answer:
      "Yes. You can prop your phone on the piano stand, AirDrop the colored PDF to an iPad, or print it out. Whatever works best for your setup.",
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
