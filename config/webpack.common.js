const path = require('path');

var webpack = require('webpack');
var helpers = require('./config-helpers');

module.exports = function(dev) {
  return {
    entry: {
      vendor: './app/vendor.js',
      app: './app/main.js'
    },
    resolve: {
      extensions: ['.js']
    },
    output: {
      path: helpers.root('dist'),
      publicPath: '/dist/',
      filename: '[name].js'
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }]
    }
  }
}
