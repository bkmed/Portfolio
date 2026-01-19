const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: "/Portfolio/",
  basePath: "/Portfolio",
  output: "export",
  outputFileTracingRoot: __dirname,
};

module.exports = withPWA(nextConfig);
