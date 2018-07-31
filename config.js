const ip = require('ip').address();
const path = require('path')

var config = {
  env: process.env.NODE_ENV || 'development',
  server_port: 3000,
  server_host: ip,
}
config.dev = config.env === 'development';
config.prod = config.env === 'production';
config.publicPath = config.prod ? `/` : `http://${config.server_host}:${config.server_port}/`;
config.devTool = config.prod ? undefined : "source-map";
console.log(config);
module.exports = config;
