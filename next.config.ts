import type { NextConfig } from "next";

const repoName = "e-cafe-services-portal"; // 👈 your GitHub repo name

const nextConfig: NextConfig = {
  // Tell Next.js to generate a static export
  output: "export",

  // Make Next put the build directly into /docs instead of /out
  // so GitHub Pages can read it
  distDir: "docs",

  // Important for GitHub Pages (project site):
  // Your site will be served from /<repo-name>
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
