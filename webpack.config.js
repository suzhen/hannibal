const webpack = require('webpack')
const path = require('path')
module.exports = {
  // entry: {app: [path.resolve(__dirname, 'src/components/app.jsx'),
  //               path.resolve(__dirname, 'src/components/app2.jsx')],
  //         vendor: ['react', 'react-dom']
  // },
  // entry: {app: {e1: path.resolve(__dirname, 'src/components/app.jsx'),
  //               e2: path.resolve(__dirname, 'src/components/app2.jsx')},
  //         vendor: ['react', 'react-dom']
  // },
  // entry: [path.resolve(__dirname, 'src/components/app.jsx'),
  //         path.resolve(__dirname, 'src/components/app2.jsx')],
  // entry: {e1: path.resolve(__dirname, 'src/components/app.jsx'),
  //         e2: path.resolve(__dirname, 'src/components/app2.jsx')},
  entry: path.resolve(__dirname, 'src/components/app.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    // filename: '[name].js'
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|build)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
  // ,
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js')
  // ]
}
