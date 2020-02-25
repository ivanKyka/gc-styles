const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, './examples/index.js'),
    output: {
        path: path.join(__dirname, "build"),
        filename: "index-bundle.js",
        publicPath: "./"
    },
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
                test: /\.path$/,
                loader: 'svg-inline-loader'
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
