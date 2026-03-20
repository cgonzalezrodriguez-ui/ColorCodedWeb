import type { CSSProperties } from "react";

export default function HeroBackgroundLayer() {
  const backgroundImage = `
radial-gradient(ellipse 150% 95% at -15% 35%, rgba(239, 68, 68, 0.28) 0%, rgba(249, 115, 22, 0.24) 40%, rgba(249, 115, 22, 0.0) 68%),
radial-gradient(ellipse 145% 100% at 115% 38%, rgba(59, 130, 246, 0.28) 0%, rgba(168, 85, 247, 0.22) 42%, rgba(168, 85, 247, 0.0) 72%),
radial-gradient(ellipse 135% 85% at 55% 84%, rgba(234, 179, 8, 0.16) 0%, rgba(34, 197, 94, 0.12) 45%, rgba(34, 197, 94, 0.0) 66%),
radial-gradient(ellipse 145% 85% at 50% 98%, rgba(34, 197, 94, 0.09) 0%, rgba(34, 197, 94, 0.0) 65%)
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
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={style} />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[1]" style={vignetteStyle} />
    </>
  );
}

