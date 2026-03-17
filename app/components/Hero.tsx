"use client";

import Container from "./Container";
import HeroProductPreview from "./HeroProductPreview";

export default function Hero({ onJoinBeta }: { onJoinBeta?: () => void }) {
  return (
    <section className="hero-bg pt-20 pb-20 md:pt-28 md:pb-24">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-white/45">
              COLOR CODED
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-white md:text-6xl">
              Read piano music
              <br className="lg:hidden" />
              {" "}in{" "}
              <span className="hero-rainbow-text hero-rainbow-glow bg-clip-text text-transparent">
                color.
              </span>
            </h1>

            <p className="mt-8 text-lg text-white/70">
              COLOR CODED turns sheet music into a color-based system that helps you
              recognize notes faster and play with confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-5">
              <a
                href="#how-it-works"
                className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/70"
              >
                See how it works
              </a>
              <a
                href="#join-beta"
                onClick={(e) => {
                  e.preventDefault();
                  onJoinBeta?.();
                }}
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_28px_rgba(0,0,0,0.45)]"
              >
                Join Beta
              </a>
            </div>

            <p className="mt-8 text-xs text-white/45">
              Built for beginners, returning players, and anyone who learns visually.
            </p>
          </div>
          <HeroProductPreview />
        </div>
      </Container>
    </section>
  );
}
