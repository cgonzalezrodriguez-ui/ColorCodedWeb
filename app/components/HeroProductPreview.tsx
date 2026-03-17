import Image from "next/image";

export default function HeroProductPreview() {
  return (
    <div
      className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] lg:shrink-0"
      aria-label="Product preview: before and after"
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-wider text-white/45">
            Before
          </p>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white/5">
            <Image
              src="/mary-black.png"
              alt="Sheet music before COLOR CODED"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 50vw, 240px"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-wider text-white/45">
            After
          </p>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white/5">
            <Image
              src="/mary-had-a-little-lambfixed.jpg"
              alt="Sheet music after COLOR CODED with color-coded notes"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 50vw, 240px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
