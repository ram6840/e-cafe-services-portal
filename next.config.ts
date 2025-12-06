import type { NextConfig } from "next";

const repoName = "e-cafe-services-portal"; // 👈 your GitHub repo name

const nextConfig: NextConfig = {
  output: "export",                 // static HTML export (needed for GitHub Pages)
  basePath: `/${repoName}`,         // app lives at /<repoName>
  assetPrefix: `/${repoName}/`,     // make assets load from /<repoName>/_next
  distDir: "docs",                  // put build output directly into /docs
};

export default nextConfig;
