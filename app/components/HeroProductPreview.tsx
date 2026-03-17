 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroProductPreview() {
  const [showBefore, setShowBefore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBefore((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentLabel = showBefore ? "Before" : "After";

  return (
    <div
      className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition-all duration-250 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_26px_60px_rgba(0,0,0,0.8)] hover:brightness-110 lg:shrink-0"
      aria-label="Product preview: before and after"
      onClick={() => setShowBefore((prev) => !prev)}
      role="button"
      tabIndex={0}
    >
      <div className="flex cursor-pointer flex-col gap-1.5">
        <p className="text-xs font-medium uppercase tracking-wider text-white/45">
          {currentLabel}
        </p>
        <div className="relative overflow-hidden rounded-xl bg-white/5 px-2 pb-2 pt-1">
          <div
            className={`transform-gpu filter transition-all duration-700 ease-out ${
              showBefore
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-105 blur-sm"
            }`}
          >
            <Image
              src="/mary-black.png"
              alt="Sheet music before COLOR CODED"
              width={640}
              height={853}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 50vw, 240px"
            />
          </div>
          <div
            className={`absolute inset-x-2 bottom-2 top-1 transform-gpu filter transition-all duration-700 ease-out ${
              showBefore
                ? "opacity-0 scale-95 blur-sm"
                : "opacity-100 scale-100 blur-0"
            }`}
          >
            <Image
              src="/mary-had-a-little-lambfixed.jpg"
              alt="Sheet music after COLOR CODED with color-coded notes"
              width={640}
              height={853}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 50vw, 240px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
