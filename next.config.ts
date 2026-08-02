import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "pub-8e06b918e48646a6a0dd03b07ab0826d.r2.dev" }
    ]
  }
};

export default nextConfig;
