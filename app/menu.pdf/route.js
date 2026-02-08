import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const pdfPath = path.join(
    process.cwd(),
    "Menu",
    "vrundavan-restaurant-menu_compressed.pdf"
  );

  const pdfBuffer = await readFile(pdfPath);

  return new Response(pdfBuffer, {
    headers: {
      "content-type": "application/pdf",
      "cache-control": "public, max-age=3600",
    },
  });
}
