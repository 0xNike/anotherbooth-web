import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Single static marketing page — exported to plain HTML/CSS/JS in `out/`.
  output: "export",
  images: {
    // A static export ships no image-optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
