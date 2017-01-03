module.exports = {
	devServer: {
		contentBase: './public',
		inline: true
	},
	devtool: 'cheap-module-source-map',
	entry: './src/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				loader: 'babel',
				query: {
		          	presets: ['es2015', 'react']
		        }
			}
		]
	},
	output: {
		path: './public/assets',
		filename: 'bundle.js'
	}
}
