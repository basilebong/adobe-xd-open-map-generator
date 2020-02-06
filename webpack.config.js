/* eslint-disable */
const path = require("path");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: __dirname,
    filename: "main.js",
    libraryTarget: "umd"
  },
  devtool: "none",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(t|j)s(x?)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(t|j)s(x?)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: true
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    scenegraph: "scenegraph"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "./src/"), "node_modules"]
  }
};
