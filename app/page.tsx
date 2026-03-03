import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";

const PROBLEM_POINTS = [
  {
    title: "Too much translation",
    description:
      "Beginners often have to decode symbols into note names, then find keys — every note becomes a mini puzzle.",
  },
  {
    title: "Slow feedback loops",
    description:
      "When reading is hard, practice turns into stopping and starting instead of building flow and confidence.",
  },
  {
    title: "Motivation drops early",
    description:
      "The hardest part should be the music, not the notation. Early friction makes it easy to quit.",
  },
] as const;

const HOW_IT_WORKS_STEPS = [
  ["1. Upload", "Import a photo or PDF of your sheet music."],
  ["2. Detect", "We detect noteheads and determine their pitch."],
  ["3. Colorize", "Notes get color-coded and mapped to the keyboard."],
] as const;

const BUILT_FOR = [
  {
    title: "Beginners",
    description: "A clearer path from page to keys without extra decoding.",
  },
  {
    title: "Visual learners",
    description: "A consistent color language that’s easier to recognize at a glance.",
  },
  {
    title: "Returning players",
    description: "Get back into reading with less friction and more momentum.",
  },
  {
    title: "Teachers",
    description: "A supportive layer that helps students build early confidence.",
  },
  {
    title: "Parents",
    description: "Make practice feel more approachable without constant prompting.",
  },
  {
    title: "Self-guided practice",
    description: "Stay in flow longer while reinforcing note-to-key connections.",
  },
] as const;

const DEVELOPMENT_STATUS = [
  {
    title: "Status",
    description: "Actively building the first release.",
  },
  {
    title: "Current focus",
    description: "Reliable note detection and consistent, readable color output.",
  },
  {
    title: "What’s next",
    description: "Better uploads, stronger accuracy, and a smoother practice workflow.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "Is this for beginners only?",
    answer:
      "Beginners love it, but it’s also great for returning players and visual learners.",
  },
  {
    question: "When is the app launching?",
    answer: "We’re building the first release now. This site will update as we get closer.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />

      {/* Problem */}
      <section id="problem" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">The problem</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            For many beginners, reading sheet music isn’t just learning notes — it’s
            translating multiple layers at once. That cognitive load slows practice and
            makes progress feel harder than it should.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PROBLEM_POINTS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/80">{item.title}</div>
                <div className="mt-2 text-sm text-white/60">{item.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product preview */}
      <section id="preview" className="pb-20">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-black/30 p-5">
                <div className="text-sm text-white/70">Sheet → Color overlay</div>
                <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-white/10 to-white/0" />
                <div className="mt-4 flex gap-2 text-xs text-white/60">
                  <span className="rounded-full bg-red-500/20 px-3 py-1">C</span>
                  <span className="rounded-full bg-yellow-500/20 px-3 py-1">D</span>
                  <span className="rounded-full bg-green-500/20 px-3 py-1">E</span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1">F</span>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1">G</span>
                </div>
              </div>

              <div className="rounded-2xl bg-black/30 p-5">
                <div className="text-sm text-white/70">Color → Keyboard mapping</div>
                <div className="mt-4 h-36 rounded-xl bg-gradient-to-br from-white/10 to-white/0" />
                <div className="mt-4 text-xs text-white/60">
                  Same colors on the keys so your brain connects notes instantly.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section id="vision" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            Music reading should feel direct and encouraging. COLOR CODED adds a consistent
            color layer to sheet music and maps it to the keyboard — reducing translation so
            practice can focus on timing, feel, and repetition instead of constant decoding.
          </p>
        </Container>
      </section>

      {/* How it works */}
      <section id="how" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            A simple pipeline that turns existing sheet music into a clearer, color-coded
            practice view.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/80">{title}</div>
                <div className="mt-2 text-sm text-white/60">{desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Built for */}
      <section id="built-for" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">Built for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {BUILT_FOR.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/80">{item.title}</div>
                <div className="mt-2 text-sm text-white/60">{item.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Development status */}
      <section id="status" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">Development status</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {DEVELOPMENT_STATUS.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-white/80">{item.title}</div>
                <div className="mt-2 text-sm text-white/60">{item.description}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="pb-24">
        <Container>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/80">{item.question}</div>
                <div className="mt-2 text-sm text-white/60">{item.answer}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} COLOR CODED. All rights reserved.
          </div>
        </Container>
      </footer>
    </main>
  );
}