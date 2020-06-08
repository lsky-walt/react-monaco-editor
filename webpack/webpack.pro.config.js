const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: 'index.monaco.editor.js',
    path: path.resolve(__dirname, '../dist/')
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: ['babel-loader', 'ts-loader'],
      exclude: /node_modules/
    }]
  },
  externals: {
    shineout: 'window.Shineout',
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}