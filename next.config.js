const nextConfig = {
    target: 'serverless',
    env: {
        NEXT_ROUTINE_API: process.env.NEXT_ROUTINE_API,
    },
}

module.exports = nextConfig
