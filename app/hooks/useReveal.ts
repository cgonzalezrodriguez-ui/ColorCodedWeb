"use client";

import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-scale, .reveal-left, .reveal-right, .note-pop, .line-grow";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll(selectors).forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, []);
}
