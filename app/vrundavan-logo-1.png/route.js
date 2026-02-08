import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "Menu", "vrundavan-logo-1.png");
  const fileBuffer = await readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=3600",
    },
  });
}
