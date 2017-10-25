const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry:{
      app:path.resolve(__dirname,'./app/main.js'),
      venders:['react','react-dom']

      },
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'[name].js'
  },

  module:{
    rules:[
      {
        test:/\.js[x]?$/,
        use:{loader:'babel-loader'},
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[{loader:"style-loader"},{loader:"css-loader"}]
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'xiaoyu',
      template:'./app/index.html',
      filename:'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({name:'venders',filename:'venders.bundle.js'}),
    new webpack.optimize.UglifyJsPlugin(),

  ]
}
