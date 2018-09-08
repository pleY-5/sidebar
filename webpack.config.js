const path = require('path');
const clientDIR = path.join(__dirname, '/client');
const publicDIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${clientDIR}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: publicDIR
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ]
  }
};