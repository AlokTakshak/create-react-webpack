const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");

//Compressing the bundle before serving
module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    open: true,
    port: process.env.PORT,
    publicPath: "/"
  },
  devtool: "source-map"
});
