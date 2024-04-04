const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    contentScript: './src/content/index.ts',
    background: './src/background/index.ts',
    react: './src/react/index.tsx',
  },
  output: {
    publicPath: '',
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '../' },
        { from: 'icons/*', to: '../images', context: 'src/assets/images/' },
      ],
      options: {},
    }),
  ],
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
};
