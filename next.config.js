/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "loctechsite-storage-f79d8bac111646-staging.s3.us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
