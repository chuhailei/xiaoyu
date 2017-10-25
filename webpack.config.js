var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool:'eval-source-map',
  entry:path.resolve(__dirname,'./app/main.js'),
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'bundle.js'
  },
  devServer:{
    contentBase:path.join(__dirname,'dist'),
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
  }
}
