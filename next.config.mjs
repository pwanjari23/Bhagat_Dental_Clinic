/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Prevent ESLint 9 CI/CD prompt or flat config conflict from blocking Vercel build
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
