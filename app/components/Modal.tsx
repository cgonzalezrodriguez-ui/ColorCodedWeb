"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Modal({
  open,
  onClose,
  title,
  initialFocusSelector,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  initialFocusSelector?: string;
  children: ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const t = window.setTimeout(() => {
      const root = panelRef.current;
      if (!root) return;

      if (initialFocusSelector) {
        const el = root.querySelector<HTMLElement>(initialFocusSelector);
        if (el) {
          el.focus();
          return;
        }
      }

      root.focus();
    }, 0);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, initialFocusSelector]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
        onMouseDown={onClose}
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className={`relative w-full max-w-xl outline-none transition-all duration-200 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="rounded-3xl border border-white/10 bg-black/90 shadow-2xl shadow-black/40">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            aria-label="Close modal"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

