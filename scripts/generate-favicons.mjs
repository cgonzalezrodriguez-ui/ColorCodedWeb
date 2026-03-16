#!/usr/bin/env node
/**
 * Generates standard favicon files from /public/browsericon.png (512x512):
 * - public/favicon.ico (16x16 + 32x32)
 * - public/apple-touch-icon.png (180x180)
 * - public/icon-192.png (192x192)
 * - public/icon-512.png (512x512)
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const inputPath = path.join(publicDir, "browsericon.png");

async function main() {
  const source = sharp(inputPath);

  // 1. favicon.ico: 16x16 and 32x32
  const png16 = await source.clone().resize(16, 16).png().toBuffer();
  const png32 = await source.clone().resize(32, 32).png().toBuffer();
  const ico = await pngToIco([png16, png32]);
  await fs.writeFile(path.join(publicDir, "favicon.ico"), ico);
  console.log("Created public/favicon.ico (16x16, 32x32)");

  // 2. apple-touch-icon.png (180x180)
  await source
    .clone()
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("Created public/apple-touch-icon.png (180x180)");

  // 3. icon-192.png (192x192)
  await source
    .clone()
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, "icon-192.png"));
  console.log("Created public/icon-192.png (192x192)");

  // 4. icon-512.png (512x512) — source is already 512x512, just copy
  await source
    .clone()
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, "icon-512.png"));
  console.log("Created public/icon-512.png (512x512)");

  console.log("Done. Favicon files are in /public.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
