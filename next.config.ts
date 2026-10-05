import type { NextConfig } from "next";

// Sitio 100 % estático: `next build` genera la carpeta out/ (sin servidor).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
