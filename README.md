# ColorCoded website

Start with `app/page.tsx`. It lists the homepage sections in the order they appear on the site.

## Where things live

| Folder or file | What you will find |
| --- | --- |
| `app/page.tsx` | Homepage layout and section order |
| `app/components/home/` | Sections currently used on the homepage |
| `app/components/layout/` | Shared navigation and footer |
| `app/components/ui/` | Reusable page container |
| `app/hooks/` | Scroll comparison and reveal animations |
| `app/privacy/page.tsx` | Privacy policy page |
| `app/support/page.tsx` | Support page |
| `app/layout.tsx` | Fonts, page metadata, and shared document layout |
| `app/globals.css` | Site colors, backgrounds, animations, and custom styles |
| `public/` | Images and other assets served by URL |
| `scripts/` | Favicon generation utilities |

## Common edits

- **Rainbow hero headline and download button:** `app/components/home/Hero.tsx`
- **Navigation links:** `app/components/layout/Nav.tsx`
- **Footer emails:** `app/components/layout/Footer.tsx`
- **Before/after sheet music:** `app/components/home/SheetMusicComparison.tsx`
- **Seven note colors:** `app/components/home/ColorSystem.tsx`
- **Who the app is for:** `app/components/home/Audience.tsx`
- **App screenshots:** `app/components/home/AppShowcaseEdit.tsx` and `AppShowcaseLibrary.tsx`
- **Sticker links:** `app/components/home/StickerShop.tsx`
- **Frequently asked questions:** `app/components/home/FAQ.tsx`

Most styling is written directly in each component with Tailwind classes. Shared custom CSS is in `app/globals.css`.

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Saved changes appear automatically.

If Turbopack fails on your machine, use:

```bash
npm run dev -- --webpack
```

## Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```


`node_modules/`, `.next/`, `next-env.d.ts`, and `*.tsbuildinfo` are installed or generated files. You generally do not need to open or edit them.
