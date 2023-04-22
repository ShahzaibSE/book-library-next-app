/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    neon_psql: 'postgres://ShahzaibSE:45XjdAVRPMuF@ep-silent-lab-325030.us-east-2.aws.neon.tech/neondb'
  }
}

module.exports = nextConfig
