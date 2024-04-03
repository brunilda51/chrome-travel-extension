/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = path.join(__dirname, '..', 'src');

module.exports = {
  entry: [
    path.join(srcDir, 'main.ts'),
  ],
  output: {
    publicPath: '',
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  optimization: {
    runtimeChunk: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '../' },
        { from: 'icons/*', to: '../images', context: 'src/assets/images/' },
      ],
      options: {},
    }),
  ],
};
