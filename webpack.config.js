/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  context: resolve(__dirname, 'src'),
  entry: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './index.tsx'],
  output: {
    filename: 'hotloader.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    port: '8080',
    hot: true,
    noInfo: false,
    quiet: false,
    contentBase: resolve(__dirname, 'src'),
    publicPath: '/',
    open: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)?$/,
        use: 'eslint-loader',
        exclude: [resolve(__dirname, 'node_modules')]
      },
      {
        test: /\.(ts|tsx)?$/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        exclude: [resolve(__dirname, 'node_modules')]
      },
      { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true
            }
          },
          'css-loader'
        ]
      },
      { test: /\.png$/, use: 'url-loader?limit=100000' },
      { test: /\.jpg$/, use: 'file-loader' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css'
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'src/index.html') })
  ]
};
