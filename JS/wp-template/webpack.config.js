const path = require("path");
const webpackMerge = require("webpack-merge");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

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
        ],
      },
      plugins: [new FriendlyErrorsWebpackPlugin()],
      devtool: "cheap-eval-source-map",
    },
    loadModeConfig(env)
  );
