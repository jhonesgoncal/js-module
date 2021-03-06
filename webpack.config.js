const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
	devtool: 'source-map',
	entry: {
		filename: './app.js'
	},
	output: {
		filename: './build.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						['es2015', {modules: false}]
					]
				}
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
	            compress: {
	      			warnings: false
	      		},
	            output: { 
	            	comments: false 
	            },
	            sourceMap: true
	        }
		}),

		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
		})
	]
}