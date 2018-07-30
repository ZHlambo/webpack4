const path = require("path");
var webpackConfig = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require("./config");

var options = {
  contentBase: path.resolve(__dirname, "dist"),
  hot: true,
  host: config.server_host,
  compress: true,
  historyApiFallback:true,
  stats: {
    colors: true,
    errors: true,
    warnings: true,
    modules: false, // 输出modules编译
    chunks: false,
  }
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);
var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, options);
console.log(`App is run in url http://${config.server_host}:${config.server_port}`);

server.listen(config.server_port);
