var path = require('path')
var projectRoot = path.resolve(__dirname)
module.exports = {
  // entry point of our application
  entry: './main.js',
  // where to place the compiled bundle
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel?presets=es2015',
        include: projectRoot,
        exclude: /node_modules/
      }
    ]
  },
}
