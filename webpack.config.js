/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");

module.exports = {
    entry: {
        app: `${path.join(__dirname, "src")}/main.ts`,
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        hot: true,
        historyApiFallback: { disableDotRule: true },
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "@": path.join(__dirname, "src"),
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: `${path.join(__dirname, "public")}/index.html`,
        }),
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime/]),
    ],
};
