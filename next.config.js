/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: "/Portfolio/",
  basePath: "/Portfolio",
  distDir: "out",
  output: "export",
};

module.exports = nextConfig;
