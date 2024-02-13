/** @type {import('next').NextConfig} */
const nextConfig = {
  // add external images
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
};

module.exports = nextConfig;
