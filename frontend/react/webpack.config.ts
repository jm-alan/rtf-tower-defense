import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader']
      }
    ]
  }
};
