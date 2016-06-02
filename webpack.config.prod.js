/* eslint-disable strict */
'use strict';

const APP_NAME = process.env.APP_NAME;

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/init/main',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[id]-[hash].chunk.js',
    publicPath: process.env.BASE_URL, // needs to be root
  },
  resolve: {
    root: __dirname,
    extensions: [ '', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/init/index.html',
      NODE_ENV: process.env.NODE_ENV,
      APP_NAME,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version),
      'process.env': {
        APP_NAME: JSON.stringify(APP_NAME),
        NODE_ENV: JSON.stringify('production'),
        AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
        AUTH0_PUB_KEY: JSON.stringify(process.env.AUTH0_PUB_KEY),
        BASE_URL: JSON.stringify(process.env.BASE_URL),
      },
    }),
    new ExtractTextPlugin('[name]-[hash].css', {
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [ /node_modules/, /__tests__/ ],
        loader: 'babel-loader',
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap!postcss-loader') },
    ],
  },
};
