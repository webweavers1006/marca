/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from external sources for file uploads
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
