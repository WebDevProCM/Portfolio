/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.extensions.push('.ts', '.tsx');
    }

    return config;
  },
};

export default nextConfig;
