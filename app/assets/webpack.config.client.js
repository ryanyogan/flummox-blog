var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: __dirname,

  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/assets',
      'webpack/hot/only-dev-server',
      './javascripts/client_application.cjsx'
    ],
    server: [
      './javascripts/component_render_server_static.js'
    ]
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/javascripts',
    publicPath: 'http://localhost8080/assets/javascripts'
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.cjsx', '.coffee'],
    modulesDirectories: ['node_modules', 'javascripts']
  },

  module: {
    loaders: [
      { test: /\.js?$/,    loaders: ['react-hot']},
      { test: /\.jsx?$/,   loaders: ['react-hot', 'jsx-loader'] },
      { test: /\.cjsx?$/,  loaders: ['react-hot', 'coffee', 'cjsx'] },
      { test: /\.coffee$/, loaders: 'coffee' },
      { test: /\.json$/,   loaders: 'json-loader' }
    ]
  },

  node: {
    net: 'emoty',
    fs: 'empty'
  }
};
