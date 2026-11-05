import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    // Matches the widths scripts/images.mjs writes, plus the originals (1440 desktop shots).
    deviceSizes: [480, 960, 1440],
    imageSizes: [],
  },
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
