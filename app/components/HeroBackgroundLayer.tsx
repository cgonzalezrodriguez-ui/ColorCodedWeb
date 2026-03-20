import type { CSSProperties } from "react";

export default function HeroBackgroundLayer() {
  const backgroundImage = `
radial-gradient(ellipse 150% 40% at -15% 8%, rgba(239, 68, 68, 0.28) 0%, rgba(249, 115, 22, 0.22) 40%, transparent 70%),
radial-gradient(ellipse 145% 40% at 115% 8%, rgba(59, 130, 246, 0.26) 0%, rgba(168, 85, 247, 0.20) 42%, transparent 72%),
radial-gradient(ellipse 120% 30% at 50% 35%, rgba(34, 197, 94, 0.14) 0%, rgba(59, 130, 246, 0.10) 50%, transparent 70%),
radial-gradient(ellipse 130% 30% at 30% 55%, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%),
radial-gradient(ellipse 130% 30% at 70% 75%, rgba(168, 85, 247, 0.14) 0%, rgba(139, 92, 246, 0.10) 50%, transparent 70%),
radial-gradient(ellipse 140% 25% at 50% 95%, rgba(139, 92, 246, 0.16) 0%, transparent 65%)
`;

  const style: CSSProperties = {
    backgroundImage,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundBlendMode: "soft-light",
    filter: "blur(42px) saturate(1.5) contrast(1.05)",
    transform: "scale(1.12)",
  };

  const vignetteStyle: CSSProperties = {
    backgroundImage: `
radial-gradient(ellipse at center, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.12) 38%, rgba(0, 0, 0, 0.58) 72%, rgba(0, 0, 0, 0.82) 100%),
linear-gradient(to bottom, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.25) 100%)
`.trim(),
  };

  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 h-full" style={style} />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] h-full" style={vignetteStyle} />
    </>
  );
}

