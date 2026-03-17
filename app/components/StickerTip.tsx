import Container from "./Container";

const COLORS = [
  { note: "C", hex: "#EF4444" },
  { note: "D", hex: "#F97316" },
  { note: "E", hex: "#EAB308" },
  { note: "F", hex: "#22C55E" },
  { note: "G", hex: "#3B82F6" },
  { note: "A", hex: "#6366F1" },
  { note: "B", hex: "#A855F7" },
];

export default function StickerTip() {
  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
          <p className="text-sm font-medium tracking-wide text-white/50">Take it off-screen</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Add colored stickers to your keys.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">Match the colors on your sheet music to the keys on your keyboard. Same note, same color — on the page and under your fingers.</p>
          <div className="mx-auto mt-8 flex max-w-md gap-1.5 sm:gap-2">
            {COLORS.map(({ note, hex }) => (
              <div key={note} className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-4 sm:rounded-xl sm:py-5">
                <div className="h-4 w-4 rounded-full shadow-md ring-1 ring-white/20 sm:h-5 sm:w-5" style={{ backgroundColor: hex }} aria-hidden />
                <span className="text-xs font-medium text-white/70 sm:text-sm">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
