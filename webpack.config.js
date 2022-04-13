const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  }, 
  module: {
    rules:[
      { test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.(eot|svg|ttf|woff|woff2|otf)$/, loader: 'file-loader'}
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new CopyPlugin([
      { from: '_redirects' }
    ])
  ],
  devServer: {
    historyApiFallback: true,
  }
}