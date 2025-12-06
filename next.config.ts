import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/e-cafe",
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
