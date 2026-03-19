import Container from "./Container";
import HeroBackgroundLayer from "./HeroBackgroundLayer";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-24">
      <HeroBackgroundLayer />
      <Container>
        <div className="relative z-[2] max-w-3xl">
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
            Read piano music
            <br className="lg:hidden" />
            {" "}in{" "}
            <span className="hero-rainbow-text hero-rainbow-glow bg-clip-text text-transparent">
              color.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/65">
            Upload sheet music. Get back color-coded notes, pitch labels, and
            fingering suggestions - automatically.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#how-it-works" className="rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/60">How it works</a>
            <a href="#updates" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.45)]">Get notified</a>
          </div>
          <p className="mt-7 text-xs text-white/40">Launching soon on iOS.</p>
        </div>
      </Container>
    </section>
  );
}
