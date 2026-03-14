import Container from "./Container";

export default function Hero() {
  return (
    <section className="pt-10 pb-20">
      <Container>
        <div className="mb-8 w-full text-center">
          <span className="text-5xl font-semibold leading-tight md:text-6xl">
            <span className="text-red-500">C</span>
            <span className="text-orange-500">O</span>
            <span className="text-yellow-500">L</span>
            <span className="text-green-500">O</span>
            <span className="text-blue-500">R</span>{" "}
            <span className="text-white">CODED</span>
          </span>
        </div>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
            Read piano music
            <br />
            in{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6)]">
              color.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            COLOR CODED turns sheet music into a color-based system that helps you
            recognize notes faster and play with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#how-it-works"
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