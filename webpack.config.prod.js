const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, 'hack-id-bot/main.js'),
  externals: { 'styled-components': 'styled-components' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-simple-chatbot.js',
    publicPath: '/',
    library: 'ReactSimpleChatbot',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.html'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new LodashModuleReplacementPlugin(),
    new UglifyJsPlugin({
      comments: false,
    }),
    // new BundleAnalyzerPlugin(),
    new HTMLWebpackPlugin({
      template: 'hack-id-bot/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader" // translates CSS into CommonJS
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
};
