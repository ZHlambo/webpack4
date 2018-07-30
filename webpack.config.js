const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var config = require('./config');

var webpackConfig = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_[hash:10].js",
    // bundle.js的输入调用路径
    publicPath: config.publicPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      favicon: path.resolve(__dirname, "src", "static", "favicon.ico"),
      filename: 'index.html', // 必须index.html 否则host访问到的将是资源路径
      inject: 'body', // 打包的js插入的地方 body|head
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符(压缩)
      },
      // projectPath: `http://${config.server_host}:${config.server_port}/`
    }),
    new MiniCssExtractPlugin({
      filename: "[name]_[hash:10].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),//source tree
  ],
  module: {
    rules: [{
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
              sourceMap: true,
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          "sass-loader",
            // MiniCssExtractPlugin.loader,
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        // styles: {
        //   name: 'styles',
        //   test: /\.scss|css$/,
        //   chunks: 'all',    // merge all the css chunk to one file
        //   enforce: true
        // }
      }
    }
  },
  resolve: {
    // module搜索路径
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  devtool: config.devTool,
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true
  },
}


module.exports = webpackConfig;
