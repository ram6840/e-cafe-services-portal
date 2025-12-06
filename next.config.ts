import type { NextConfig } from "next";

const repoName = "e-cafe-services-portal"; // <= your GitHub repo name

const nextConfig: NextConfig = {
  output: "export",                  // static export for GitHub Pages :contentReference[oaicite:1]{index=1}
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
