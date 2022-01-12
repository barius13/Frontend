/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.discord.com"],
    },
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
    }
};