'use strict'

const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/webpack.config');
const webpack = require('webpack');
const path = require('path');
const compiler = webpack(config);
// 如果Node的环境变量中没有设置当前的环境（NODE_ENV），则使用config中的配置作为当前的环境
// if (!process.env.NODE_ENV) {
//   process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
// }
// 根据 Node 环境来引入相应的 webpack 配置
// var webpackConfig = process.env.NODE_ENV === 'testing'
//   ? require('./webpack.prod.conf')
//   : require('./webpack.dev.conf')

const server = new WebpackDevServer(compiler, {
    inline: true, // 自动刷新
    hot: true, // 开启热模块替换
    contentBase: path.resolve(__dirname, './dist'), //默认会以根文件夹提供本地服务器，这里指定文件夹
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: 3000, //如果省略，默认8080
    publicPath: "/"
});
server.listen(3000, 'localhost', function (err) {
    if (err) throw err
})