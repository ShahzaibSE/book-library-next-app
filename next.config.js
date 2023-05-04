/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    neon_psql: 'postgres://ShahzaibSE:45XjdAVRPMuF@ep-silent-lab-325030.us-east-2.aws.neon.tech/neondb',
    accessToken: "27c624cbb4bb2098ada2a08a6ecd743b0a67b086a7df4ea96ef4de9cbd770ef6"
  }
}

module.exports = nextConfig
