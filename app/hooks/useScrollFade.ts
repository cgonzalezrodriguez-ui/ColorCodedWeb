"use client";

import { useEffect, useState, useRef, type RefObject } from "react";

export default function useScrollFade(ref: RefObject<HTMLElement | null>): number {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [autoProgress, setAutoProgress] = useState(0);
  const hasTriggered = useRef(false);

  // Scroll-driven progress
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.7;
      const end = windowH * 0.15;
      const raw = 1 - (rect.top - end) / (start - end);
      setScrollProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  // Auto-play on first intersection
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            setAutoProgress(eased);
            if (t < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return Math.max(scrollProgress, autoProgress);
}
