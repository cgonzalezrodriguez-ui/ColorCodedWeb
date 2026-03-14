import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
          {/* Left: brand + tagline */}
          <div className="max-w-sm">
            <p className="font-semibold tracking-tight text-white">COLOR CODED</p>
            <p className="mt-2 text-sm text-white/70">
              Helping musicians read piano music in color.
            </p>
          </div>

          {/* Right: links + contact */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            <nav className="flex flex-col gap-3 text-sm">
              <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                Links
              </span>
              <Link href="/privacy" className="text-white/70 hover:text-white">
                Privacy
              </Link>
              <Link href="/support" className="text-white/70 hover:text-white">
                Support
              </Link>
              <a
                href="mailto:support@color-coded.app"
                className="text-white/70 hover:text-white"
              >
                Contact
              </a>
            </nav>
            <div className="flex flex-col gap-3 text-sm">
              <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                Contact
              </span>
              <p className="text-white/70">
                Email:{" "}
                <a
                  href="mailto:support@color-coded.app"
                  className="underline hover:text-white"
                >
                  support@color-coded.app
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 COLOR CODED. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
