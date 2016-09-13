var webpack = require('webpack');
var path = require('path');

var config = {
  entry: __dirname + '/src/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [],
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    exprContextCritical: false,
    preLoaders: [
      {test: /\.ts$/, loader: 'tslint-loader'}
    ],
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'},
      {test: /\.json$/, loader: 'json-loader'}
    ],
    postLoaders: [
      {test: /\.spec\.ts$/, loader: 'webpack-espower-loader'}
    ]
  },
  devtool: '#source-map'
};

module.exports = config;
