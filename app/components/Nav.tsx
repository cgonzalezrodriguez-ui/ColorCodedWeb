import Container from "./Container";

export default function Nav() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-sm tracking-widest text-white/80">COLOR CODED</div>

          <nav className="flex gap-6 text-sm text-white/70">
            <a className="hover:text-white" href="#vision">Vision</a>
            <a className="hover:text-white" href="#how">How it works</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}