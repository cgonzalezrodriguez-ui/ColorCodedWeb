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
      className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] lg:shrink-0"
      aria-label="Product preview: before and after"
    >
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-medium uppercase tracking-wider text-white/45">
          {currentLabel}
        </p>
        <div className="relative overflow-hidden rounded-xl bg-white/5 px-2 pb-2 pt-1">
          <div
            className={`transition-opacity duration-700 ${
              showBefore ? "opacity-100" : "opacity-0"
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
            className={`absolute inset-x-2 bottom-2 top-1 transition-opacity duration-700 ${
              showBefore ? "opacity-0" : "opacity-100"
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
