"use client";

import { useEffect, useRef, useState } from 'react';
import { SCORE_COLORS } from './score/clementi';

export default function MusicScore() {
  const originalRef = useRef<HTMLDivElement>(null);
  const coloredRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [view, setView] = useState<'demo' | 'original' | 'colored'>('demo');

  useEffect(() => {
    let cancelled = false;
    import('./score/engrave').then(async ({ engraveScore }) => {
      if (cancelled || !originalRef.current || !coloredRef.current) return;
      await engraveScore(originalRef.current, coloredRef.current);
      if (!cancelled) setReady(true);
    }).catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, []);

  // Start the one-time demonstration when the sheet becomes visible.
  const [demoStarted, setDemoStarted] = useState(false);
  useEffect(() => {
    if (!ready || !sheetRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setDemoStarted(true); observer.disconnect(); }
    }, { threshold: 0.25 });
    observer.observe(sheetRef.current);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <figure ref={sheetRef} className="music-sheet" data-view={view} data-demo={demoStarted} aria-label="Clementi Sonatina in C Major, opening eight measures, interactive piano score">
      <div className="music-sheet-toggle" role="group" aria-label="Score appearance">
        <button type="button" aria-pressed={view === 'original'} aria-controls="hero-engraved-score" onClick={() => setView('original')}>Original</button>
        <button type="button" aria-pressed={view !== 'original'} aria-controls="hero-engraved-score" onClick={() => setView('colored')}>ColorCoded</button>
      </div>
      <header className="music-sheet-title"><h2>Sonatina in C Major</h2><p>Op. 36, No. 1</p></header>
      <div className="music-sheet-credits"><span title="Editorial tempo marking; the source edition marks Spiritoso">Allegro</span><span>M. Clementi</span></div>
      <p className="music-sheet-scroll-hint">Swipe to read the full score <span aria-hidden="true">→</span></p>
      <div className="music-sheet-scroll" tabIndex={0} role="region" aria-label="Piano score. Scroll horizontally on smaller screens.">
        <div id="hero-engraved-score" className="music-sheet-notation" aria-busy={!ready && !failed}>
          {!ready && <p className="music-sheet-loading" role="status">{failed ? 'The score could not load. Please refresh to try again.' : 'Preparing the score…'}</p>}
          <div ref={originalRef} className="music-sheet-original" />
          <div ref={coloredRef} className="music-sheet-colored" />
        </div>
      </div>
      <figcaption className="music-sheet-legend">{Object.entries(SCORE_COLORS).map(([pitch, color]) => <span key={pitch}><i style={{ background: color }} aria-hidden="true" />{pitch.toUpperCase()}<span className="music-sheet-color-name"> = {{ c: 'red', d: 'orange', e: 'yellow', f: 'green', g: 'cyan', a: 'blue', b: 'violet' }[pitch]}</span></span>)}</figcaption>
      <a className="sr-only" href="https://www.mutopiaproject.org/ftp/ClementiM/O36/sonatina-1/sonatina-1.ly">Public-domain score source: Mutopia, measures 1–8. Tempo label and short phrase slurs are editorial.</a>
    </figure>
  );
}
