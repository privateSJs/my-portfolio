import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true // Required for static export
  },
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
}

export default nextConfig;
