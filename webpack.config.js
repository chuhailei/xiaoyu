const path = require('path');
const webpack = require('webpack');
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool:'eval-source-map',
  entry:path.resolve(__dirname,'./app/index.js'),
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
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        use:[{loader:"url-loader?limit=10000"},{loader:"img-loader"}]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
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
