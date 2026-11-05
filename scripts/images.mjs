// Writes smaller copies of every WebP in public/ to public/_v/<path>-<width>.webp so the
// static export can serve responsive images (see lib/image-loader.ts). Run after adding or
// replacing an image: `npm run images`. Output is committed; the build does not need sharp.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export const WIDTHS = [480, 960];
const root = path.join(process.cwd(), "public");
const out = path.join(root, "_v");

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full !== out) yield* walk(full);
    } else if (entry.name.endsWith(".webp")) {
      yield full;
    }
  }
}

let count = 0;
for (const file of walk(root)) {
  const rel = path.relative(root, file).replace(/\.webp$/, "");
  for (const width of WIDTHS) {
    const target = path.join(out, `${rel}-${width}.webp`);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    await sharp(file).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(target);
    count++;
  }
}
console.log(`wrote ${count} variants to public/_v`);
