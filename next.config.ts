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
		domains: ["images.unsplash.com", "images.pexels.com", "tse2.mm.bing.net"], // Add your image host domain here
  },
};

export default nextConfig;
