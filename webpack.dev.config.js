var path = require('path');
var webpack = require('webpack');
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

// TODO: update to resolve path
// then update component and container imports

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.json$/, exclude: /node_modules/, loaders: ['json-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist',
    publicPath: '/dist/'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()]
};
