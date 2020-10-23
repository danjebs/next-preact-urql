const withPlugins = require('next-compose-plugins')
const withPrefresh = require('@prefresh/next')

const nextConfig = {
  webpack: (config, { isServer, buildId }) => {
    const aliases = config.resolve.alias || (config.resolve.alias = {})
    aliases.react = aliases['react-dom'] = 'preact/compat'
    // aliases['react-ssr-prepass'] = 'preact-ssr-prepass'

    return config
  },
}

module.exports = withPlugins(
  [
    [withPrefresh, {}],
  ],
  nextConfig,
)
