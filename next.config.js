const withPlugins = require('next-compose-plugins')
// const withPrefresh = require('@prefresh/next')

const devMode = process.env.NODE_ENV !== 'production'

// const commonsChunkConfig = (config, test = /\.css$/) => {
//   config.plugins = config.plugins.map((plugin) => {
//     if (
//       plugin.constructor.name === 'CommonsChunkPlugin'
//       // disable filenameTemplate checks here because they never match
//       // (plugin.filenameTemplate === 'commons.js' ||
//       //     plugin.filenameTemplate === 'main.js')
//       // do check for minChunks though, because this has to (should?) exist
//       && plugin.minChunks != null
//     ) {
//       const defaultMinChunks = plugin.minChunks
//       plugin.minChunks = (module, count) => {
//         if (module.resource && module.resource.match(test)) {
//           return true
//         }
//         return defaultMinChunks(module, count)
//       }
//     }
//     return plugin
//   })

//   return config
// }

// const sourceMapsOptions = {
//   env: {
//     SENTRY_DSN: process.env.SENTRY_DSN,
//   },
// }

// Customise the default Next.js webpack settings
const nextConfig = {
  // poweredByHeader: false,
  // sassOptions: {
  //   cssModules: true,
  //   includePaths: [path.join(__dirname, 'assets', 'stylesheets')],
  //   cssLoaderOptions: {
  //     importLoaders: 1,
  //     localIdentName: `${devMode ? '[local]__' : ''}[hash:base64:5]`,
  //   },
  // },
  // cssOptions: {
  //   cssModules: false,
  // },
  // experimental: {
  //   modern: true,
  //   polyfillsOptimization: true
  // },
  webpack: (config, { isServer, buildId }) => {
    // config = commonsChunkConfig(config, /\.(sass|scss|css)$/)

    // if (!devMode) {
    //   const splitChunks = config.optimization && config.optimization.splitChunks
    //   if (splitChunks) {
    //     const cacheGroups = splitChunks.cacheGroups
    //     const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
    //     if (cacheGroups.framework) {
    //       cacheGroups.preact = Object.assign({}, cacheGroups.framework, { test: preactModules })
    //       cacheGroups.commons.name = 'framework'
    //     }
    //     else {
    //       cacheGroups.preact = {
    //         name: 'commons',
    //         chunks: 'all',
    //         test: preactModules
    //       }
    //     }
    //   }
    // }

    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {})
    // aliases.react = aliases['react-dom'] = 'preact/compat'
    // aliases['react-ssr-prepass'] = 'preact-ssr-prepass'
    console.log('DBUG ALIASES', aliases)

    // // inject Preact DevTools
    // if (devMode && !isServer) {
    //   const entry = config.entry
    //   config.entry = () => entry().then(entries => {
    //     entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || [])
    //     return entries
    //   })
    // }

    // config.node = {
    //   fs: 'empty',
    //   __dirname: true,
    // }

    // // Load environment variables
    // config.plugins.push(
    //   new webpack.EnvironmentPlugin(process.env),
    // )

    return config
  },
}

module.exports = withPlugins(
  [
    // [withPrefresh, {}],
  ],
  nextConfig,
)
