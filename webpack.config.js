// NMP Helper by Node
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                // use: ['style-loader', 'css-loader'], // Without extractTextPlugin
                loader: extractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                // use: ['url-loader', 'image-webpack-loader'],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000
                        },  
                    },
                    'image-webpack-loader'
                ],
                test: /\.(jpe?g|png|gif|svg)$/
            }
        ]
    },
    plugins: [
        new extractTextPlugin('styles.css')
    ]
};

module.exports = config;
