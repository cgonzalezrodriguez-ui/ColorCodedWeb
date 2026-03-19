"use client";

import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-scale, .reveal-left, .reveal-right, .note-pop, .line-grow";
    const exitTimers = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cancel any pending removal
            const timer = exitTimers.get(entry.target);
            if (timer) {
              clearTimeout(timer);
              exitTimers.delete(entry.target);
            }
            entry.target.classList.add("visible");
          } else {
            // Delay removal to prevent flicker
            const timer = window.setTimeout(() => {
              entry.target.classList.remove("visible");
              exitTimers.delete(entry.target);
            }, 200);
            exitTimers.set(entry.target, timer);
          }
        });
      },
      { threshold: 0.05, rootMargin: "20px 0px -20px 0px" }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll(selectors).forEach((el) => observer.observe(el));
    });

    return () => {
      exitTimers.forEach((timer) => clearTimeout(timer));
      observer.disconnect();
    };
  }, []);
}
