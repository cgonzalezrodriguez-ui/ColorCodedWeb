import Container from "./Container";

export default function Hero() {
  return (
    <section className="hero-bg pt-20 pb-20 md:pt-28 md:pb-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-white/45">
            COLOR CODED
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-white md:text-6xl">
            Read piano music
            <br className="lg:hidden" />
            {" "}in{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6)]">
              color.
            </span>
          </h1>

          <p className="mt-8 text-lg text-white/70">
            COLOR CODED turns sheet music into a color-based system that helps you
            recognize notes faster and play with confidence.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#how-it-works"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              See how it works
            </a>
            <a
              href="#join-beta"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:border-white/50"
            >
              Join Beta
            </a>
          </div>

          <p className="mt-8 text-xs text-white/45">
            Built for beginners, returning players, and anyone who learns visually.
          </p>
        </div>
      </Container>
    </section>
  );
}
