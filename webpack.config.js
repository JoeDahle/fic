var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loader: ['style-loader', 'css-loader']}
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass]
};
