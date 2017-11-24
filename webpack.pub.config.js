const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {

  entry:{
      app:path.resolve(__dirname,'./app/index.js'),
      venders:['react','react-dom','antd-mobile','react-router-dom','redux','react-redux']

      },
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'[name].[chunkhash:5].js'
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
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        use:[{loader:"url-loader?limit=10000&name=image/[hash:8].[name].[ext]"},{loader:"img-loader"}]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
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
      new ExtractTextPlugin({
        filename: 'css/[name].css'
      })
  ]
}
