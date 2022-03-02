/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: "https://api.kythi.com",
    CDN_URL: "https://s3.us-east-2.wasabisys.com",
    CDN_BUCKET: "kythi",
    ReCAPTCHA_KEY: "6Lf5RnseAAAAABmOZgW-GfybGm3exHBtNStx_ioa",
  },
  images: {
    domains: ['cdn.discordapp.com']
  }
};
