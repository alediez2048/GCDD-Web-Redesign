import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/GCDD-Web-Redesign',
  assetPrefix: '/GCDD-Web-Redesign',
};

export default nextConfig;
