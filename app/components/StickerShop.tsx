import Container from "./Container";

const ETSY_ROWS = [
  ["#DC2626","#DC2626","#DC2626","#DC2626","#DC2626","#DC2626","#DC2626","#DC2626"],
  ["#DC2626","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E"],
  ["#F28014","#F28014","#F28014","#F28014","#F28014","#F28014","#F28014","#F28014"],
  ["#F28014","#FB923C","#FB923C","#FB923C","#FB923C","#FB923C","#FB923C","#FB923C"],
  ["#F7D11F","#F7D11F","#F7D11F","#F7D11F","#F7D11F","#F7D11F","#F7D11F","#F7D11F"],
  ["#FACC15","#FACC15","#FACC15","#FACC15","#FACC15","#FACC15","#FACC15","#FACC15"],
  ["#16A34A","#16A34A","#16A34A","#16A34A","#16A34A","#16A34A","#16A34A","#16A34A"],
  ["#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D"],
  ["#0891B2","#0891B2","#0891B2","#0891B2","#0891B2","#0891B2","#0891B2","#0891B2"],
  ["#06B6D4","#06B6D4","#06B6D4","#06B6D4","#06B6D4","#06B6D4","#06B6D4","#06B6D4"],
  ["#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB"],
  ["#7C3AED","#7C3AED","#7C3AED","#7C3AED","#7C3AED","#7C3AED","#7C3AED","#7C3AED"],
  ["#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB"],
  ["#EC4899","#EC4899","#EC4899","#EC4899","#EC4899","#EC4899","#EC4899","#EC4899"],
];


const MINI_ROWS = [["#E0292E","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E"],["#E0292E","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E","#E0292E"],["#F28014","#F28014","#F28014","#F28014","#F28014","#F28014","#F28014","#F28014"],["#F28014","#F28014","#F28014","#F28014","#F28014","#F28014","#F28014","#F28014"],["#F7D11F","#F7D11F","#F7D11F","#F7D11F","#F7D11F","#F7D11F","#F7D11F","#F7D11F"],["#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D"],["#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D","#33B83D"],["#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB"],["#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB"],["#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB","#1F5CEB"],["#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB"],["#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB","#B838DB"],["#EC4899","#EC4899","#EC4899","#EC4899","#EC4899","#EC4899","#EC4899","#EC4899"]];

const KEY_COLORS = [
  { note: "C", hex: "#E0292E" },
  { note: "D", hex: "#F28014" },
  { note: "E", hex: "#F7D11F" },
  { note: "F", hex: "#33B83D" },
  { note: "G", hex: "#1F5CEB" },
  { note: "A", hex: "#1F5CEB" },
  { note: "B", hex: "#B838DB" },
];

const STICKERS = [
  { id: "etsy", name: "Rainbow Dot Sticker Sheet", desc: "Colorful circle dots on a sheet. Peel, stick, done.", store: "Etsy", rotate: "1deg", url: "https://www.etsy.com/listing/249252840/dot-stickers-new-rainbow-colors-fits-all" },
  { id: "mini", name: "Mini Color Dot Stickers", desc: "Compact rainbow columns. Clean layout, easy to peel.", store: "Amazon", rotate: "-1deg", url: "https://www.amazon.com/dp/B0CKZHPZG1?tag=colorcodedapp-20" },
  { id: "keys", name: "Rainbow Piano Key Stickers", desc: "Color-coded key labels with note letters. Made for piano.", store: "Amazon", rotate: "1.5deg", url: "https://www.amazon.com/dp/B0CXFBTWJH?tag=colorcodedapp-20" },
];

function DotSheet({ rows, rotate }: { rows: string[][]; rotate: string }) {
  return (
    <div className="flex items-center justify-center py-5 px-4">
      <div className="rounded-xl bg-white px-3 py-2.5 shadow-xl shadow-black/30" style={{ transform: `rotate(${rotate})` }}>
        <div className="flex flex-col gap-1">{rows.map((row, ri) => (<div key={ri} className="flex gap-1">{row.map((hex, ci) => (<div key={ci} className="h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5" style={{ backgroundColor: hex }} />))}</div>))}</div>
      </div>
    </div>
  );
}

function KeySheet({ rotate }: { rotate: string }) {
  return (
    <div className="flex items-center justify-center py-5 px-4">
      <div className="rounded-xl bg-white px-3 py-2.5 shadow-xl shadow-black/30" style={{ transform: `rotate(${rotate})` }}>
        <div className="flex flex-col gap-1">{[0,1,2,3].map((row) => (<div key={row} className="flex gap-0.5">{KEY_COLORS.map(({ note, hex }) => (<div key={`${row}-${note}`} className="flex h-5 w-5 items-center justify-center rounded-sm text-[7px] font-bold text-white sm:h-6 sm:w-6 sm:text-[8px]" style={{ backgroundColor: hex }}>{note}</div>))}</div>))}</div>
      </div>
    </div>
  );
}

export default function StickerShop() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">Recommended</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Grab some stickers.</h2>
          <p className="mt-4 text-base text-white/40">Any rainbow dot stickers work. Here are a few we like.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3">
          {STICKERS.map((item) => (<a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="reveal group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1"><div className="border-b border-white/[0.04] bg-white/[0.015]">{item.id === "keys" ? <KeySheet rotate={item.rotate} /> : <DotSheet rows={item.id === "etsy" ? ETSY_ROWS : MINI_ROWS} rotate={item.rotate} />}</div><div className="flex flex-1 flex-col p-5"><span className="text-[10px] font-bold uppercase tracking-widest text-white/25">{item.store}</span><h3 className="mt-2 text-sm font-semibold text-white/90">{item.name}</h3><p className="mt-1 flex-1 text-xs leading-relaxed text-white/40">{item.desc}</p><div className="mt-3 flex items-center gap-1 text-xs font-medium text-white/50 transition-colors group-hover:text-white/70">Shop now<svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></div></div></a>))}
        </div>
        <p className="mt-6 text-center text-[11px] text-white/20">Some links may be affiliate links.</p>
      </Container>
    </section>
  );
}
