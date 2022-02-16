const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js'],
  },
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
     },
     {//fonts
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
     },
     {
      test: /\.html$/i,
      loader: "html-loader",
     }
   ],
  },
  mode: "development",
  plugins: [
   new HtmlWebpackPlugin({
     title: 'Setting up webpack 4',
     template: './src/index.html',
     inject: true,
     minify: {
       removeComments: true,
       collapseWhitespace: true
     },
   })
 ]

}