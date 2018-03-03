const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/index.js'),
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
					cacheDirectory: true,
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
		modules: ['node_modules', 'src']
	}
}
