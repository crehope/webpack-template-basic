const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports={
  //진입점
  entry:'./js/main.js',

  //결과물(번들)을 반환하는 설정
  output:{
  //    path:path.resolve(__dirname, 'dist'),
  //    filename:'main.js',
    clean:true
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns:[
        {from: 'static'}
      ]
    })
  ],

  module:{

    rules: [
      {
        test: /\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use:[
          'babel-loader'
        ]
      }
    ]

  }
  

  // ,

  // devServer:{
  //   host: 'localhost'
  // }

}