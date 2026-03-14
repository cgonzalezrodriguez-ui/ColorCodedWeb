"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Container from "../components/Container";

const FAQ_ITEMS = [
  {
    question: "What is COLOR CODED?",
    answer:
      "COLOR CODED is a music-learning tool that helps users read piano music through a color-based note system.",
  },
  {
    question: "Who is COLOR CODED for?",
    answer:
      "It is designed for beginners, returning players, and visual learners who want a more intuitive way to understand piano sheet music.",
  },
  {
    question: "How do I join the beta?",
    answer:
      "Use the Join Beta button on the website to sign up for updates and early access.",
  },
  {
    question: "I found a bug. How do I report it?",
    answer:
      "Please email support@color-coded.app with a description of the issue, what device you were using, and any screenshots if possible.",
  },
  {
    question: "Can I request a feature?",
    answer:
      "Yes. We welcome feedback and feature suggestions through support@color-coded.app.",
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <div className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Support
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Need help with COLOR CODED? We&apos;re here to help.
            </p>

            {/* Contact Support card */}
            <section className="mt-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-lg font-semibold text-white">Contact support</h2>
                <p className="mt-3 text-white/80">
                  Reach out anytime and we&apos;ll get back to you as soon as we can.
                </p>
                <p className="mt-4">
                  <span className="text-sm text-white/60">Email: </span>
                  <a href="mailto:support@color-coded.app" className="text-white font-medium underline hover:text-white/90">
                    support@color-coded.app
                  </a>
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Response time: We aim to respond within 2–3 business days.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-white">Frequently asked questions</h2>
              <div className="mt-6 divide-y divide-white/10">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={item.question}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
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
                          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="pb-4 text-sm leading-relaxed text-white/70">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-sm text-white/60">
                <Link href="/privacy" className="text-white/80 underline hover:text-white">
                  Privacy Policy
                </Link>
                {" · "}
                <Link href="/" className="text-white/80 underline hover:text-white">
                  Home
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </div>

      <footer className="mt-auto border-t border-white/10 py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/50">
            <span>© {new Date().getFullYear()} COLOR CODED. All rights reserved.</span>
            <nav className="flex gap-6">
              <Link href="/privacy" className="text-white/60 hover:text-white">Privacy</Link>
              <Link href="/support" className="text-white/60 hover:text-white">Support</Link>
              <Link href="/" className="text-white/60 hover:text-white">Home</Link>
            </nav>
          </div>
        </Container>
      </footer>
    </main>
  );
}
