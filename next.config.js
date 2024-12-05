/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                hostname: "img.clerk.com",
            },
        ],
    },
    reactStrictMode: true,
}
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/img\.clerk\.com\//,
            handler: "CacheFirst",
            options: {
                cacheName: "clerk-images",
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 60 * 60 * 24 * 30,
                },
            },
        },
        {
            urlPattern: /^\/dashboard$/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'dashboardCache',
                expiration: {
                    maxEntries: 200,
                },
            },
        },
        {
            urlPattern: /^\/$/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'rootCache',
                expiration: {
                    maxEntries: 200,
                },
            },
        },
    ],
});

module.exports = withPWA(nextConfig);