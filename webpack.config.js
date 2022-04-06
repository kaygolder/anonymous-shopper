const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public', 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    mode: 'development',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };