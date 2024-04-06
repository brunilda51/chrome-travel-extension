const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    contentScript: './src/content/index.ts',
    options: './src/options/index.tsx',
    background: './src/background/index.ts',
    popup: './src/popup/index.tsx',
  },
  output: {
    publicPath: '',
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup/popup.html',
      filename: 'popup.html', // Specify the filename for popup.html
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/options/options.html',
      filename: 'options.html', // Specify the filename for options.html
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
