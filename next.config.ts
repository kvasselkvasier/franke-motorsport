import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignoriere Type-Checking Fehler während des Builds
    ignoreBuildErrors: false,
  },
  typedRoutes: true,
  async redirects() {
    return [
      // Redirect von vercel.app zur Hauptdomain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'franke-motorsport.vercel.app',
          },
        ],
        destination: 'https://franke-motorsport.de/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
