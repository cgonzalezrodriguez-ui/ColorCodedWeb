"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";

type MobileLink = { label: string; href: string; cta?: boolean };
const MOBILE_LINKS_BASE: MobileLink[] = [
  { label: "Vision", href: "/#vision" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Support", href: "/support" },
  { label: "Join Beta", href: "/#join-beta", cta: true },
];

export default function Nav({ onJoinBeta }: { onJoinBeta?: () => void }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileLinks: MobileLink[] = isHome
    ? MOBILE_LINKS_BASE
    : [{ label: "Home", href: "/" }, ...MOBILE_LINKS_BASE];

  function handleJoinBetaClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isHome) {
      e.preventDefault();
      if (onJoinBeta) {
        onJoinBeta();
        return;
      }
      document.getElementById("join-beta")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  const navLinkClass = "text-sm text-white/70 hover:text-white whitespace-nowrap";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 py-3 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-md md:py-3.5">
      <Container>
        <div className="flex items-center justify-between">
          {/* Left group: logo + primary nav (Vision, How it works, FAQ) */}
          <div className="flex items-center gap-8">
            <Link href="/" className="-ml-1 flex shrink-0 items-center md:-ml-0.5">
              <Image
                src="/logofixed.jpg"
                alt="C CODED"
                width={96}
                height={32}
                className="h-6 w-auto md:h-7"
              />
            </Link>
            <nav
              className="hidden items-center gap-8 md:flex"
              aria-label="Primary"
            >
              <Link className={navLinkClass} href="/#vision">
                Vision
              </Link>
              <Link className={navLinkClass} href="/#how-it-works">
                How it works
              </Link>
              <Link className={navLinkClass} href="/#faq">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Right group: Privacy, Support, Join Beta */}
          <div className="hidden items-center gap-7 md:ml-auto md:flex md:shrink-0">
            {!isHome && (
              <Link className={navLinkClass} href="/">
                Home
              </Link>
            )}
            <Link className={navLinkClass} href="/privacy">
              Privacy
            </Link>
            <Link className={navLinkClass} href="/support">
              Support
            </Link>
            <Link
              href="/#join-beta"
              onClick={handleJoinBetaClick}
              className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Join Beta
            </Link>
          </div>

          {/* Mobile: hamburger button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden ${mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"} absolute left-0 right-0 top-full z-40 border-b border-white/10 bg-black/98 shadow-lg backdrop-blur-sm transition-[visibility,opacity] duration-200 ease-out`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col py-4">
          {mobileLinks.map(({ label, href, cta }) => (
            <Link
              key={href + label}
              href={href}
              onClick={(e) => {
                if (label === "Join Beta") handleJoinBetaClick(e as React.MouseEvent<HTMLAnchorElement>);
                closeMobileMenu();
              }}
              className={
                cta
                  ? "mx-4 mt-2 rounded-full bg-white py-3 text-center text-sm font-medium text-black hover:bg-white/90"
                  : "block px-6 py-3 text-base text-white/80 hover:bg-white/5 hover:text-white"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop when menu open (tap to close) */}
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}