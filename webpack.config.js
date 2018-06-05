const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  //mode 가 development 면 개발용, production 이면 배포용
  entry: {
    bundle: __dirname + '/src/index.js'
    //현재 key가 bundle 인데, 빌드 결과물이 bundle.js 로 만들어진다.
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  devServer: {
    overlay: true
  }
};