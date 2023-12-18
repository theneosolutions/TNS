/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backendstrapi.theneosolutions.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};
