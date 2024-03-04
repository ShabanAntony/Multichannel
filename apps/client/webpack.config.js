const { composePlugins, withNx } = require('@nx/webpack')
const { withReact } = require('@nx/react')
const { name } = require('../../package.json')
const path = require('path')

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx({
    skipTypeChecking: true,
  }),
  withReact({
    svgr: true,
  }),
  (config) => {
    // TODO: now we have some bug with NX where we cannot configure output fonts name
    config.output.assetModuleFilename = ({ filename }) => {
      const isFont = /\.(woff(2)?|ttf|eot)$/.test(filename)
      const isSVG = /\.(svg)$/.test(filename)

      return isFont
        ? 'assets/fonts/[name][hash:7][ext]'
        : isSVG
        ? 'assets/images/[name].[hash:7][ext]'
        : 'assets/[name].[hash:7][ext]'
    }

    config.module.rules.forEach(({ test, use }) => {
      if (test.toString().includes('svg')) {
        use[1].options.name = 'assets/images/[name].[hash:7].[ext]'
      }
    })

    return {
      ...config,
      devServer: {
        ...config.devServer,
        liveReload: process.env.NODE_ENV === 'development',
        open: [`/${name}`],
        static: {
          directory: path.join(__dirname, 'src', 'assets'),
        },
      },
    }
  },
)
