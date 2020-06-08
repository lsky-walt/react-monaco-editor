const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/site/index.tsx'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: ['babel-loader', 'ts-loader'],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    shineout: 'window.Shineout',
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  devServer: {
    //这个本地开发环境运行时是基于哪个文件夹作为根目录
    contentBase: './dist',
    //当你有错误的时候在控制台打出
    stats: 'errors-only',
    //不启动压缩
    compress: false,
    host: 'localhost',
    port: 8080
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/site/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
}