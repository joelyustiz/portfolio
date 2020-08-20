const path = require('path');
const webpack = require('webpack');
const TersetJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => ({
  mode: env.NODE_ENV === 'production' ? 'production' : 'none',
  entry: {
    modules: ['react', 'react-dom'],
  },
  optimization: {
    minimizer: [new TersetJSPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['js/*.dll.js*'],
    }),
  ],
});
