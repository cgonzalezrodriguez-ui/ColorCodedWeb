import Container from "./Container";

export default function Hero() {
  return (
    <section className="pt-10 pb-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
            Read piano music
            <span className="block">
              in{" "}
              <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                color
              </span>
              .
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            COLOR CODED turns sheet music into a color-based system that helps you
            recognize notes faster and play with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#how"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              See how it works
            </a>
            <a
              href="#vision"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:border-white/50"
            >
              Our vision
            </a>
          </div>

          <p className="mt-6 text-xs text-white/45">
            Built for beginners, returning players, and anyone who learns visually.
          </p>
        </div>
      </Container>
    </section>
  );
}