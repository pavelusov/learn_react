const path = require('path');

module.exports = env => {
    return {
        entry: './src/app',
        output: {
            path: path.resolve(__dirname, 'dist', 'assets'),
            filename: 'bundle.js',
            sourceMapFilename: 'bundle.map'
        },
        devtool: '#source-map',
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: false,
            port: 8080,
            publicPath: "/assets/"
        },
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
        }
    }
};
//https://github.com/babel/babel-loader
