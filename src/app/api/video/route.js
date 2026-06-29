import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
  const videoPath = path.join(process.cwd(), "public", "titan-herosection.mp4");

  if (!fs.existsSync(videoPath)) {
    return new NextResponse("Video not found", { status: 404 });
  }

  // Since the video is small (approx. 4.6MB), reading it into a buffer
  // completely eliminates Node-to-Web stream conversion and backpressure issues.
  const fileBuffer = fs.readFileSync(videoPath);
  const fileSize = fileBuffer.length;
  const range = req.headers.get("range");

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize || end >= fileSize) {
      return new NextResponse("Requested range not satisfiable", {
        status: 416,
        headers: {
          "Content-Range": `bytes */${fileSize}`,
        },
      });
    }

    const chunksize = end - start + 1;
    // subarray() is extremely fast as it returns a view without copying the memory
    const slicedBuffer = fileBuffer.subarray(start, end + 1);

    return new NextResponse(slicedBuffer, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize.toString(),
        "Content-Type": "video/mp4",
      },
    });
  } else {
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Length": fileSize.toString(),
        "Content-Type": "video/mp4",
        "Accept-Ranges": "bytes",
      },
    });
  }
}
