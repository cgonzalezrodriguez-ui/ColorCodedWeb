"use client";

import Image from "next/image";
import Link from "next/link";
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
          <Link href="/" className="flex items-center">
            <Image
              src="/logofixed.jpg"
              alt="C CODED"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

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