const path = require("path");
const webpackMerge = require("webpack-merge");
const WebpackBar = require("webpackbar");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const loadModeConfig = (env) =>
  require(`./build-configs/${env.mode}.config`)(env);

module.exports = (env) =>
  webpackMerge(
    {
      context: path.resolve(__dirname, "src"),
      mode: env.mode,
      entry: "./index.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
      },
      module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "[path]/[name].[ext]",
                  limit: 5000,
                },
              },
            ],
          },
          {
            test: /\.html$/,
            use: "html-loader",
          },
          { test: /\.hbs$/, use: "handlebars-loader" },
        ],
      },
      plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new CleanWebpackPlugin(),
        new WebpackBar(),
      ],
      devtool: "cheap-eval-source-map",
    },
    loadModeConfig(env)
  );
