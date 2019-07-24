const baseConfig = require("./webpack.config.base");
var BrotliPlugin = require("brotli-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const merge = require("webpack-merge");

//if don't want compressed output remove all plugins
module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    }),
    new BrotliPlugin({
      asset: `[path].br[query]`,
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});
