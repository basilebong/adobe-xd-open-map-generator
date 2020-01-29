/* eslint-disable */
const path = require("path");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: __dirname,
    filename: "main.js",
    libraryTarget: "commonjs2"
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
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "entry",
                targets: {
                  esmodules: false
                },
                modules: "commonjs"
              }
            ],
            "@babel/preset-react"
          ]
          // plugins: ["transform-es2015-modules-commonjs"]
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
