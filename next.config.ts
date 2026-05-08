import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.net',
        port: '',
        pathname: '/**', // разрешает любые пути на этом домене
      },
    ],
  },
};

export default nextConfig;
