import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '192.168.1.103:3000',
  ],
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
