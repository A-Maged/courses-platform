const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
	devtool: 'source-map',
	mode: 'development',

	entry: ['./resources/assets/js/index.js', './resources/assets/sass/app.sass'],

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'public/js')
	},

	module: {
		rules: [
			/* ES6 */
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},

			/* SASS */
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader', // translates CSS into CommonJS
					'sass-loader' // compiles Sass to CSS
				]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '../css/app.css'
		}),

		new LiveReloadPlugin({
			hostname: '172.17.0.2'
		})
	]
};
