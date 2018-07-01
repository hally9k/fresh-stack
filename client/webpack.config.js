const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const addon = require('./serve/addon').default

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: ['react-hot-loader/patch', path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                loader: require.resolve('babel-loader'),
                options: {
                    plugins: ['react-hot-loader/babel']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'static/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'src']
    },
    serve: {
        add: addon,
        host: '0.0.0.0',
        port: 9090,
        hot: {
            hot: true,
            host: '0.0.0.0',
            port: 9091
        }
    }
}
