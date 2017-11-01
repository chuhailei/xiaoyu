const path = require('path');
const webpack = require('webpack');
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool:'eval-source-map',
  entry:path.resolve(__dirname,'./app/main.js'),
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'bundle.js'
  },
  devServer:{
    contentBase:path.join(__dirname,'app'),
    inline:true,
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
    new openBrowserWebpackPlugin({url:'http://localhost:8080'}),
    new htmlWebpackPlugin({
      title:'xiaoyu',
      template:'./app/index.html',
      filename:'index.html'
    }),
  ]
}
