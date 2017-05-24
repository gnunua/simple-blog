const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.warn("Webpack running in development mode");

const plugins = [
    new HtmlWebpackPlugin({
        template: 'index.template.ejs',
        hash: true,
        title: 'blog'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'version': JSON.stringify(require("./package.json").version)
    })
];

module.exports = {
    devServer: {
        inline: true,
        contentBase: './',
        port: 3333,
        historyApiFallback: true
    },
    devtool: 'source-map',

    entry: [
        'babel-polyfill',
        './src/index.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            }
        ]
    },

    plugins: plugins
};
