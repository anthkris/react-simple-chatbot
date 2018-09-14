const path = require('path');

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
    extensions: ['.js', '.jsx'],
  },
  plugins: [],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
};
