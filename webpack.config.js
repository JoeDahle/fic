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

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// TODO: update to resolve path
// then update component and container imports

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.json$/, exclude: /node_modules/, loaders: ['json-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.png$/i, use: ['url-loader?limit=10000', 'img-loader']}
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass,
    new BrowserSyncPlugin({
      // proxy browsersync thorugh webpack dev server
      host: 'localhost',
      port: 8090,
      proxy: 'http://localhost:8080'
    },
    {
      // Prevent browsersync from reloading, let webpack dev server do it
      reload: false
    })
  ]
};
