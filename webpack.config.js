const webpack = require('webpack')
const ProcessEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
})

const config = {
  entry: [
    "./app/index.jsx"
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: __dirname + '/app',
      loader: 'babel'
    }]
  },
  plugins: [
    ProcessEnvPlugin,
    HtmlWebpackPluginConfig
  ]
};

module.exports = config;
