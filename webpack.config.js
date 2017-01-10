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
    HtmlWebpackPluginConfig
  ]
};

module.exports = config;
