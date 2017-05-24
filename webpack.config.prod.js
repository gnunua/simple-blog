const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

console.warn("Webpack running in production mode");

const plugins = [
    new webpack.DllReferencePlugin({
        context: '.',
        manifest: require('./dist/vendor-manifest.json')
    }),

    new AddAssetHtmlPlugin({
        filepath: './dist/vendor.bundle.js',
        publicPath: "",
        outputPath: "",
        hash: true,
        includeSourcemap: false
    }),

    new HtmlWebpackPlugin({
        template: 'index.template.ejs',
        hash: true,
        title: 'blog'
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'version': JSON.stringify(require("./package.json").version)
    }),

    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: true,
        output: {
            comments: false
        },
        compress: {
            drop_console: true,
            warnings: false
        }
    })
];

module.exports = {
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
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
