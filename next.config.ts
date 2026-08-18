import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
    qualities: [60, 75, 80],
  },
};

export default nextConfig;