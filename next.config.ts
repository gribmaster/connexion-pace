import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sahradyan.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
