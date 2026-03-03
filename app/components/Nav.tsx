"use client";

import Container from "./Container";

export default function Nav() {
  function scrollToCta(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-baseline gap-1 leading-none">
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-base font-semibold text-transparent">
              C
            </span>
            <span className="text-xs font-semibold tracking-widest text-white/80">
              CODED
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm text-white/70">
              <a className="hover:text-white" href="#vision">Vision</a>
              <a className="hover:text-white" href="#how">How it works</a>
              <a className="hover:text-white" href="#faq">FAQ</a>
            </nav>
            <a
              href="#cta"
              onClick={scrollToCta}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
            >
              Join Beta
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}