/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: "/Portfolio/",
  basePath: "/Portfolio",
  output: "export",
};

module.exports = nextConfig;
