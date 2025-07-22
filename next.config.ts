import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.daress-media.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
