/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,


  images: {
    // remotePatterns: ['files.stripe.com'],
    remotePatterns: [{ hostname: 'files.stripe.com' }],
  }
};

export default nextConfig;
