const webpack = require('webpack');

console.warn("Webpack building vendor bundle production");

const plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),

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
    }),

    new webpack.DllPlugin({
        name: 'vendor_lib',
        path: 'dist/vendor-manifest.json'
    })
];

module.exports = {
    entry: {
        vendor: [
            "react",
            "react-dom",
            "prop-types",
            "redux",
            "react-redux",
            "reselect",
            "redux-thunk"
        ]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: "/",
        filename: 'vendor.bundle.js',
        library: 'vendor_lib'
    },
    plugins: plugins
};
