/*
 * @description   ¯\(ツ)/¯
 * @since         Monday, 9 18th 2023, 16:49:27 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.html$/,
        loader: 'text-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          'postcss-loader',
          // 'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  optimization: {
    minimizer: [],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          // filename: '[name].bundle.js',
          chunks: 'all',
          // enforce: true,
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
    // static: '/',
    open: true,
    compress: true,
    hot: true,
    port: 3000,
    allowedHosts: 'all',
    client: {
      logging: 'info',
      progress: true,
      reconnect: true,
    },
    // http2: true,
    headers: {
      'X-Custom-Foo': 'bar-custom',
    },
  },
});
