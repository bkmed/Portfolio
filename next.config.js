/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/Portfolio/",
  basePath: "/Portfolio",
  outputFileTracingRoot: __dirname,
  turbopack: {},
};

module.exports = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
})(nextConfig);
