"use client";

import useReveal from "./hooks/useReveal";
import Nav from "./components/layout/Nav";
import Hero from "./components/home/Hero";
import Container from "./components/ui/Container";
import FAQ from "./components/home/FAQ";
import FeedbackCard from "./components/home/FeedbackCard";
import Footer from "./components/layout/Footer";
import StickerShop from "./components/home/StickerShop";
import AppShowcaseEdit from "./components/home/AppShowcaseEdit";
import AppShowcaseLibrary from "./components/home/AppShowcaseLibrary";

import SheetMusicComparison from "./components/home/SheetMusicComparison";
import ColorSystem from "./components/home/ColorSystem";
import Audience from "./components/home/Audience";

// Homepage sections appear below in the same order as the website.
export default function Home() {
  useReveal();

  return (
    <main className="page-bg min-h-screen text-white overflow-x-clip" data-background="3">
      <Nav />

      <Hero />

      <SheetMusicComparison />

      <ColorSystem />

      {/* ── SCAN / EDIT / PLAY ── */}
      <div id="how-it-works" className="scroll-mt-24">
        <AppShowcaseEdit />
      </div>

      {/* ── PUBLIC LIBRARY ── */}
      <AppShowcaseLibrary />

      {/* ── STICKERS ── */}
      <StickerShop />

      <Audience />

      <section className="py-16 sm:py-20">
        <Container>
          <FeedbackCard />
        </Container>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
