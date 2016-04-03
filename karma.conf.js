/* eslint-disable strict, no-unused-vars */
'use strict';

const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [ 'tests.webpack.js' ],
    preprocessors: {
      'tests.webpack.js': ['webpack'],
    },
    reporters: ['dots'],
    webpack: {
      resolve: {
        root: __dirname,
        extensions: [ '', '.js', '.jsx' ],
      },
      module: {
        loaders: [
          {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'},
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
