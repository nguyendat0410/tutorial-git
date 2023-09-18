/*
 * @description   ¯\(ツ)/¯
 * @since         Monday, 9 18th 2023, 16:34:18 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpe?g|gif|png|PNG|ico|ogg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/inline',
      },
      { test: /\.ejs$/, use: [{ loader: 'ejs-loader', options: { esModule: false } }] },
    ],
  },
  resolve: {
    alias: {},
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [new CleanWebpackPlugin()],
};
