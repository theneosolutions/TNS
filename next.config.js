/** @type {import('next').NextConfig} */
module.exports = {
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
