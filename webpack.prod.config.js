var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    './app/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.json$/, exclude: /node_modules/, loaders: ['json-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  }
}
