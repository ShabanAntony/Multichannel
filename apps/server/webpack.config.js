const { composePlugins, withNx } = require('@nx/webpack')

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx({
    skipTypeChecking: true,
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return {
      ...config,
      devServer: {
        ...config.devServer,
        liveReload: process.env.NODE_ENV === 'development',
      },
    }
  },
)
