import type { NextConfig } from "next";

const repoName = "e-cafe-services-portal"; // 👈 your GitHub repo name

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  distDir: "docs",
};

export default nextConfig;
