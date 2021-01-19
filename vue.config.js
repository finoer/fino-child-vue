const path = require('path');
// const upload = require('./config/upload')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { StatsWriterPlugin } = require("webpack-stats-plugin")
const moduleInfo = require('./vf2e.config.json')

const env = process.env.NODE_ENV
const externals = env === 'development' ? {} : {
  'vue-router': 'Router',
  'vue': 'Vue'
}

module.exports = {
  lintOnSave: true,
  publicPath: env === 'development' ? moduleInfo.domain : moduleInfo.domain,
  outputDir: "output",
  configureWebpack: {
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src'),
        '@utils': path.resolve(__dirname, './utils'),
        '@components': path.resolve(__dirname, './components'),
        'Packs': path.resolve('../../packages')
      }
    },
    externals,

    plugins: [
      new CopyWebpackPlugin([

      ]),
      new StatsWriterPlugin({
        filename: `${moduleInfo.name}/stats.js`, // Default,

        transform(data, opts) {
          const allAssets = Object.keys(opts.compiler.assets)

          let i = allAssets.length - 1;

          while (i > 0) {
            const item = allAssets[i]
            if (item.indexOf('.map') > -1 || item.indexOf('.html') > -1) {
              allAssets.splice(i, 1)
            }
            i--
          }

          const content = `$event.notify('baseInfoLoaded', ${JSON.stringify(allAssets)})`
          return content
        }
      }),


    ]
  },
  chainWebpack: config => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    port: 8081,
    proxy: {
    }

  },
}
