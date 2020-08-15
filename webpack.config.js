const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");

/**
 * @returns import('webpack').Configuration
 */
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "output.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    usedExports: true,
    // minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
      }),
    ],
  },
};
