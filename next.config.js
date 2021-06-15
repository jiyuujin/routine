const nextConfig = {
    target: 'serverless',
    eslint: {
        // TODO: false to be enable eslint-config-next
        ignoreDuringBuilds: true,
    },
    env: {
        NEXT_ROUTINE_API: process.env.NEXT_ROUTINE_API,
    },
}

module.exports = nextConfig
