const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(`${__dirname}/examples/index.js`)
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        inline: true,
        contentBase: './',
        historyApiFallback: true,
        watchOptions: {
            ignored: /\/node_modules\/.*/
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            // SERVER_API_URL: JSON.stringify("")
        }),
        new HtmlWebpackPlugin({
            template: './examples/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg|less)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name].[ext]',
                            context: 'src'
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader?name=./fonts/[name].[ext]'
                    }
                ]
            }

        ]
    }
};
