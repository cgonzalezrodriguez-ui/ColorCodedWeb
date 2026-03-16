#!/usr/bin/env node
/**
 * Creates a square 512x512 favicon from /public/browsericon.png:
 * - Centers the source image on a square canvas
 * - Adds padding so the logo doesn't touch the edges
 * - Overwrites /public/browsericon.png
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const inputPath = path.join(projectRoot, "public", "browsericon.png");
const outputPath = path.join(projectRoot, "public", "browsericon.png");

const SIZE = 512;
const PADDING_PERCENT = 0.12; // 12% padding on each side
const INNER = Math.round(SIZE * (1 - 2 * PADDING_PERCENT)); // ~435px

async function main() {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const w = meta.width ?? 231;
  const h = meta.height ?? 230;

  // Resize to fit inside INNER x INNER (contain), then extend to 512x512 centered
  const scaled = await image
    .resize(INNER, INNER, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const resizedMeta = await sharp(scaled).metadata();
  const rw = resizedMeta.width ?? INNER;
  const rh = resizedMeta.height ?? INNER;

  const left = Math.round((SIZE - rw) / 2);
  const top = Math.round((SIZE - rh) / 2);
  const right = SIZE - rw - left;
  const bottom = SIZE - rh - top;

  await sharp(scaled)
    .extend({
      top,
      bottom,
      left,
      right,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outputPath);

  console.log(`Favicon saved: ${outputPath} (512x512, padding ~${Math.round(PADDING_PERCENT * 100)}%)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
