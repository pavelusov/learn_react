const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/app',
    output: {
        path: path.resolve(__dirname, 'dist', 'assets'),
        filename: 'bundle.js',
        // sourceMapFilename: 'bundle.map'
    },
    // devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'stage-3',
                            'react'
                        ]
                    }
                }
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    /*plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]*/
};
//https://github.com/babel/babel-loader
