import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />

      {/* Product preview */}
      <section className="pb-20">
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
            Traditional sheet music forces beginners to translate symbols into letters,
            then into keys. COLOR CODED removes a step by turning notes into a consistent
            color language — so learning feels faster, clearer, and more motivating.
          </p>
        </Container>
      </section>

      {/* How it works */}
      <section id="how" className="pb-20">
        <Container>
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1. Upload", "Import a photo or PDF of your sheet music."],
              ["2. Detect", "We detect noteheads and determine their pitch."],
              ["3. Colorize", "Notes get color-coded and mapped to the keyboard."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/80">{title}</div>
                <div className="mt-2 text-sm text-white/60">{desc}</div>
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/80">Is this for beginners only?</div>
              <div className="mt-2 text-sm text-white/60">
                Beginners love it, but it’s also great for returning players and visual learners.
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/80">When is the app launching?</div>
              <div className="mt-2 text-sm text-white/60">
                We’re building the first release now. This site will update as we get closer.
              </div>
            </div>
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