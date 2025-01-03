import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asset.cloudinary.com',
        pathname: '/**', // Allows all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
