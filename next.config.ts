import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Adding this to help with hydration issues
  experimental: {
    // This improves hydration errors detection
    strictNextHead: true
  },
};

export default nextConfig;
