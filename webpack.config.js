'use strict'

const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer')

const yaml = require('js-yaml')
const fs = require('fs')

const EXPORT_VAR = 'gblib'

const exportsList = []

if (process.env.DEV_MODE !== 'prod') {
  let jsConf = {
    name: 'js',
    context: __dirname + '/js/',
    entry: yaml.safeLoad(fs.readFileSync('js/bundles-config.yaml', 'utf8')),
    output: {
      path: __dirname + '/public/res/js/',
      publicPath: '/res/js/dev/',
      filename: '[name].js'
    },
    externals: {
      jQuery: 'jQuery'
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'EXPORT_VAR': JSON.stringify(EXPORT_VAR)
      })
    ],

    resolve: {
      extensions: ['.js'],
      modules: [
        path.resolve('./node_modules/'),
        path.resolve('./js/')
      ]
    },

    resolveLoader: {
      modules: ['node_modules'],
      mainFields: ['loader', 'main'],
      extensions: ['.js']
    },

    devtool: 'inline-module-source-map',
    watch: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 100,
      poll: 500
    }
  }

  exportsList.push(jsConf)
}

let cssConf = {
  name: 'css',
  context: __dirname + '/sass/',
  entry: yaml.safeLoad(fs.readFileSync('sass/bundles-config.yaml', 'utf8')),

  output: {
    path: __dirname + '/bin/',
    publicPath: '/public/res/css/',
    filename: '[name].min.css'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {discardComments: {removeAll: true}},
        canPrint: false
    })
  ],

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract([
          {loader: 'css-loader', options: {importLoaders: 1, sourceMap: true}},

          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                })
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve('./sass/'),
                path.resolve('./node_modules/')
              ],
              sourceMap: true
            }
          }
        ])

      },
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        // include: path.resolve('./public/res/img/'),

        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  },

  watch: process.env.DEV_MODE !== 'prod'
}

exportsList.push(cssConf)

console.log('DEV_MODE', process.env.DEV_MODE !== 'prod')

/**
 *
 */
module.exports = exportsList
