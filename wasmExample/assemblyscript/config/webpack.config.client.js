

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../build')
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        port: 9000,
    },
    optimization: {
        mangleWasmImports: true,
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            template: path.resolve(__dirname, '../fibonacci.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}

