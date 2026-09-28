import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: "/docs", destination: "https://app.oneai.network/docs", permanent: true },
      { source: "/about", destination: "/company", permanent: true },
      { source: "/oneai-core", destination: "/core", permanent: true },
      { source: "/agent-systems", destination: "/agent-os", permanent: true },
      { source: "/oneforge", destination: "/forge", permanent: true },
      { source: "/onevideo-studio", destination: "/video", permanent: true },
      { source: "/:locale(en|zh)/docs", destination: "https://app.oneai.network/docs", permanent: true },
      { source: "/:locale(en|zh)/about", destination: "/:locale/company", permanent: true },
      { source: "/:locale(en|zh)/oneai-core", destination: "/:locale/core", permanent: true },
      { source: "/:locale(en|zh)/agent-systems", destination: "/:locale/agent-os", permanent: true },
      { source: "/:locale(en|zh)/oneforge", destination: "/:locale/forge", permanent: true },
      { source: "/:locale(en|zh)/onevideo-studio", destination: "/:locale/video", permanent: true }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "pub-8e06b918e48646a6a0dd03b07ab0826d.r2.dev" }
    ]
  }
};

export default nextConfig;
