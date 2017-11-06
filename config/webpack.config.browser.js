var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.config.base');
var path = require('path');
var outputFile = 'vue-holder';
var globalName = 'VueHolder';
module.exports = merge(base, {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: outputFile + '.browser.js',
		library: globalName,
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: false
		})
	]
});