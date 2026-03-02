import { open, stat } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET(request) {
  const pdfPath = path.join(process.cwd(), "Menu", "vrundavan-restaurant-menu_compressed_2.pdf");

  try {
    const fileStat = await stat(pdfPath);
    const fileSize = fileStat.size;

    const rangeHeader = request.headers.get("range");

    const commonHeaders = {
      "content-type": "application/pdf",
      "content-disposition": 'inline; filename="menu.pdf"',
      "accept-ranges": "bytes",
      "cache-control": "public, max-age=3600",
    };

    if (!rangeHeader) {
      const fileHandle = await open(pdfPath, "r");
      try {
        const buffer = Buffer.allocUnsafe(fileSize);
        await fileHandle.read(buffer, 0, fileSize, 0);

        return new Response(buffer, {
          headers: {
            ...commonHeaders,
            "content-length": String(fileSize),
          },
        });
      } finally {
        await fileHandle.close();
      }
    }

    const match = /^bytes=(\d+)-(\d*)$/i.exec(rangeHeader.trim());
    if (!match) {
      return new Response(null, {
        status: 416,
        headers: {
          ...commonHeaders,
          "content-range": `bytes */${fileSize}`,
        },
      });
    }

    const start = Number(match[1]);
    const end = match[2] ? Number(match[2]) : Math.min(start + 1024 * 1024 - 1, fileSize - 1);

    if (Number.isNaN(start) || Number.isNaN(end) || start >= fileSize || end >= fileSize || start > end) {
      return new Response(null, {
        status: 416,
        headers: {
          ...commonHeaders,
          "content-range": `bytes */${fileSize}`,
        },
      });
    }

    const chunkSize = end - start + 1;
    const fileHandle = await open(pdfPath, "r");
    try {
      const buffer = Buffer.allocUnsafe(chunkSize);
      await fileHandle.read(buffer, 0, chunkSize, start);

      return new Response(buffer, {
        status: 206,
        headers: {
          ...commonHeaders,
          "content-length": String(chunkSize),
          "content-range": `bytes ${start}-${end}/${fileSize}`,
        },
      });
    } finally {
      await fileHandle.close();
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    const status = /enoent/i.test(message) ? 404 : 500;
    return new Response(message, { status });
  }
}
