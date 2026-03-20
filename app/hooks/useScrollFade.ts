"use client";

import { useEffect, useState, useRef, useCallback, type RefObject } from "react";

export default function useScrollFade(ref: RefObject<HTMLElement | null>): { progress: number; reset: () => void } {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [autoProgress, setAutoProgress] = useState(0);
  const hasTriggered = useRef(false);
  const isLocked = useRef(false);
  const durationRef = useRef(5000);

  const reset = useCallback(() => {
    hasTriggered.current = false;
    isLocked.current = true;
    durationRef.current = 2000;
    setAutoProgress(0);
    setScrollProgress(0);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      if (isLocked.current) return;
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          const duration = durationRef.current;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            setAutoProgress(eased);
            if (t >= 1) {
              isLocked.current = false;
              durationRef.current = 5000;
            }
            if (t < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return { progress: Math.max(scrollProgress, autoProgress), reset };
}
