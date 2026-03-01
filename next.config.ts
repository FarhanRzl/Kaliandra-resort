import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/pages', 
        destination: '/',  
        permanent: true,
      },
    ];
  },
};

export default nextConfig;