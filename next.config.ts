import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-**" }],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      // These services have dedicated landing pages; avoid duplicate content.
      { source: "/services/electrical-repair", destination: "/electrical-repair", permanent: true },
      { source: "/services/electrical-wiring", destination: "/electrical-wiring", permanent: true },
      { source: "/services/ac-maintenance", destination: "/ac-maintenance", permanent: true },
      { source: "/services", destination: "/ac-services", permanent: false },
    ];
  },
};

export default nextConfig;
