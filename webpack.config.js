const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'xhrHandler',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    ],
  },
};
