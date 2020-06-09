const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../lib/')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              importLoaders: 2
            }
          },
          'postcss-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      }
    ]
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