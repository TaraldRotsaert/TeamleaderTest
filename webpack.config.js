const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};

const commonConfig = merge([
  {
    entry: [path.join(PATHS.src, "css/style.css"), path.join(PATHS.src, "js/script.js")],
    output: {
      path: PATHS.dist,
      filename: `js/script.[hash].js`
    },
    module: {
      rules: [
        {
          test: /\.js/,
          use: [ 'babel-loader?cacheDirectory' ],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  }
]);

const productionConfig = merge([
  {
    plugins: [
      new CriticalPlugin({
        src: 'index.html',
        inline: true,
        minify: true,
        dest: 'index.html'
      })
    ]
  }
]);

const developmentConfig = merge([
  {
    devServer: {
      overlay: true,
      contentBase: PATHS.src
    }
  }
]);

module.exports = env => {
  if (process.env.NODE_ENV === "production") {
    console.log("building production");
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};