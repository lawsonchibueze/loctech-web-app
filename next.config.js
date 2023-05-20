/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "loctechsite-storage-f79d8bac111646-staging.s3.us-west-2.amazonaws.com",
      "res.cloudinary.com",
      "a6e8z9v6.stackpathcdn.com",
    ],
  },
};

module.exports = nextConfig;
