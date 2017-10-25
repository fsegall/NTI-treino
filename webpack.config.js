var path = require('path')
var webpack = require('webpack')
var Extractor = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'main': './app/scripts/main.js',
    'styles': './app/styles/styles.less',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  externals: {
    jquery : 'jQuery'
  },
  module: {
    rules: [{
      test: /\.pug$/, loader: 'pug-loader'
    }, {
      test: /\.less$/,
      loader: Extractor.extract(['css-loader', 'less-loader'])
    }, {
      test: /\.(svg|woff|ttf|eot|woff2)$/,
      loaders: ['file-loader?name=fonts/[name].[hash:base64:5].[ext]']
    }]
  },
  plugins: [
    new Extractor('[name].css')
  ],
  devServer: {
    contentBase: path.resolve('./app'),
    publicPath: '/dist/'
  }
};
