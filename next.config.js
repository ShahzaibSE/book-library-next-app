/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    neon_psql: 'postgres://ShahzaibSE:45XjdAVRPMuF@ep-silent-lab-325030.us-east-2.aws.neon.tech/neondb',
    accessToken: "f2b978e7d9445f7981388e37e7633cfb38ea17b0b6db787d8a4bb6df8a79e33a"
  }
}

module.exports = nextConfig
