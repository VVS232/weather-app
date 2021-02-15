const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    devtool: "source-map",
    resolve: {
        fallback: {
            http: require.resolve("stream-http"),

            stream: require.resolve("stream-browserify"),
            https: require.resolve("https-browserify"),
            zlib: require.resolve("browserify-zlib"),
        },
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: "asset/resource",
            },
            { test: /\.html$/i, loader: "html-loader" },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new webpack.DefinePlugin({
            "process.env.weatherAPI": JSON.stringify(
                "981c52574a9fd3b050ded3e3e0e7d03b"
            ),
        }),
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
};
