const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'hack-id-bot/main.js'),
  output: {
    path: path.resolve(__dirname, 'hack-id-bot'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'hack-id-bot'),
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.html'],
  },
  plugins: [
     new HTMLWebpackPlugin({
      template: 'hack-id-bot/index.html'
    })
  ],
  devtool: 'source-map',
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
