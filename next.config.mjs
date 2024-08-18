/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Use `false` for a temporary redirect (307)
      },
    ];
  },
};

export default nextConfig;
