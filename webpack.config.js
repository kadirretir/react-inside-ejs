const path = require('path');

module.exports = {
  mode: 'development',
  entry: './react/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react']
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Webpack'e .js ve .jsx dosyalarını kabul etmesini söylüyoruz
  }
};