const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var debug = process.env.NODE_ENV !== "production";
module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../src/index.js')
    ], //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'bundle/[name]_[hash:8].js' // 打包后文件
    },
    mode: "development", 
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
    },
    devtool: 'cheap-module-eval-source-map',
    watch: true,
    resolve:{
        alias: {
            _COMPONENTS: path.resolve(__dirname, '../src/components'),
            _STYLES: path.resolve(__dirname, '../src/style'),
            _CONTAINERS: path.resolve(__dirname, '../src/containers'),
            _ACTIONS: path.resolve(__dirname, '../src/redux/actions'),
            _REDUCERS: path.resolve(__dirname, '../src/redux/reducers'),
        },
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css|scss$/,
                //下面两行，作用相同，选择自己比较喜欢的样式即可
                use: ['style-loader', 'css-loader?modules']
                // loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [
        //组件的状态被保存，热更新
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            ReactDOM:'react-dom',
            Component:['react','Component'],
            Fragment:['react','Fragment'],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        }),
    ]
}