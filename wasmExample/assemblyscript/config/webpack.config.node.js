

const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development', //development, production
    entry: path.resolve(__dirname, '../index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        mangleWasmImports: false
    },
    target: 'node',
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
            verbose: true
        })
    ],
}

