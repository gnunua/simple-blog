const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

console.warn("Webpack running in development mode");

const plugins = [

    new ExtractTextPlugin("styles.css"),

    new HtmlWebpackPlugin({
        template: 'index.template.ejs',
        hash: true,
        title: 'blog'
    }),

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
        'whatwg-fetch',
        './src/css/styles.css',
        './src/index.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js",
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },

    plugins: plugins
};
