const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSass = new ExtractTextPlugin({
    filename: '../css/app.css'
});

// TODO:
//      source map
//      uglifyjs  https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
//      minify images
//      BrowserSync

module.exports = {
    entry: [
        './resources/assets/js/index.js',
        './resources/assets/sass/app.sass'
    ],
    devtool: 'source-map',

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
                test: /\.sass$/,
                use: extractSass.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    plugins: [extractSass]
};
