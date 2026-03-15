"use client";

import { useState } from "react";
import Container from "./Container";

const STEPS = [
  {
    step: 1,
    title: "Upload",
    description: "Add a photo or PDF of your sheet music.",
    id: "upload",
  },
  {
    step: 2,
    title: "Detect",
    description: "We identify notes and determine pitch automatically.",
    id: "detect",
  },
  {
    step: 3,
    title: "Colorize",
    description: "Each note is mapped to its consistent keyboard color.",
    id: "colorize",
  },
] as const;

const GRADIENT =
  "linear-gradient(90deg, #EF4444 0%, #F97316 18%, #EAB308 36%, #22C55E 54%, #3B82F6 72%, #6366F1 88%, #A855F7 100%)";

function PreviewUpload() {
  return (
    <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-8 sm:min-h-[320px]">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
        <svg className="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      </div>
      <p className="mt-4 text-sm font-medium text-white/70">Photo or PDF</p>
      <p className="mt-1 text-xs text-white/45">Drop your sheet music here</p>
    </div>
  );
}

function PreviewDetect() {
  return (
    <div className="flex h-full min-h-[280px] flex-col justify-center rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:min-h-[320px]">
      <div className="relative mx-auto h-24 w-full max-w-[200px]">
        {[22, 38, 54, 70, 86].map((y) => (
          <div
            key={y}
            className="absolute left-0 right-0 border-b border-white/12"
            style={{ top: `${y}%` }}
          />
        ))}
        {[
          { left: "18%", top: "32%" },
          { left: "42%", top: "52%" },
          { left: "66%", top: "32%" },
          { left: "82%", top: "52%" },
        ].map(({ left, top }) => (
          <div
            key={left}
            className="absolute h-4 w-4 rounded-full border-2 border-white/25 bg-transparent"
            style={{ left, top }}
          />
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-white/45">Detecting noteheads and pitch…</p>
    </div>
  );
}

function PreviewColorize() {
  const notes = [
    { color: "bg-red-500", left: "12%", top: "28%" },
    { color: "bg-orange-500", left: "28%", top: "50%" },
    { color: "bg-yellow-500", left: "44%", top: "28%" },
    { color: "bg-green-500", left: "60%", top: "50%" },
    { color: "bg-blue-500", left: "76%", top: "28%" },
  ];
  return (
    <div className="flex h-full min-h-[280px] flex-col justify-center rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:min-h-[320px]">
      <div className="relative mx-auto h-24 w-full max-w-[220px]">
        {[20, 35, 50, 65, 80].map((y) => (
          <div
            key={y}
            className="absolute left-0 right-0 border-b border-white/12"
            style={{ top: `${y}%` }}
          />
        ))}
        {notes.map(({ color, left, top }) => (
          <div
            key={left}
            className={`absolute h-4 w-4 rounded-full ${color} shadow-sm ring-1 ring-white/10`}
            style={{ left, top }}
          />
        ))}
      </div>
      <div
        className="mx-auto mt-4 h-1.5 w-24 rounded-full opacity-90"
        style={{ background: GRADIENT }}
        aria-hidden
      />
      <p className="mt-3 text-center text-xs text-white/50">One note, one color</p>
    </div>
  );
}

function PreviewPanel({ activeIndex }: { activeIndex: number }) {
  if (activeIndex === 0) return <PreviewUpload />;
  if (activeIndex === 1) return <PreviewDetect />;
  return <PreviewColorize />;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="pb-24 pt-6">
      <Container>
        <header className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            How it works
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            A simple pipeline that turns existing sheet music into a clearer, color-coded
            practice view.
          </p>
        </header>

        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:items-start">
          {/* Left: step list */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <ul className="flex flex-col" role="list">
              {STEPS.map((item, index) => {
                const isActive = activeStep === index;
                const isColorize = item.id === "colorize";
                return (
                  <li key={item.id}>
                    {index > 0 && (
                      <div className="my-2 border-t border-white/10" aria-hidden />
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`
                        w-full rounded-xl px-4 py-4 text-left transition-all duration-200
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                        ${isActive
                          ? "bg-white/[0.08] ring-1 ring-white/15"
                          : "hover:bg-white/[0.05]"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`
                            flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold tabular-nums
                            ${isActive
                              ? isColorize
                                ? "text-white"
                                : "bg-white/15 text-white"
                              : "bg-white/10 text-white/60"
                            }
                          `}
                          style={isActive && isColorize ? { background: GRADIENT } : undefined}
                        >
                          {item.step}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`
                              font-semibold tracking-tight
                              ${isActive ? "text-white" : "text-white/80"}
                            `}
                          >
                            {item.title}
                          </h3>
                          <p className="mt-0.5 text-sm text-white/55 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        {isActive && (
                          <svg
                            className="h-4 w-4 shrink-0 text-white/40"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.06l-4.5 4.25a.75.75 0 01-1.06-.02z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: preview panel */}
          <div
            className={`
              overflow-hidden rounded-2xl border bg-white/[0.04] shadow-[0_24px_48px_rgba(0,0,0,0.35)]
              lg:min-h-[360px]
              ${activeStep === 2 ? "border-white/15 ring-1 ring-white/10" : "border-white/10"}
            `}
          >
            {activeStep === 2 && (
              <div
                className="h-1 w-full opacity-90"
                style={{ background: GRADIENT }}
                aria-hidden
              />
            )}
            <div className="p-6 sm:p-8">
              <PreviewPanel activeIndex={activeStep} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
