const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {

  const inputDir = path.resolve(__dirname, 'asset_source');
  const outputDir = path.resolve(__dirname, 'source', 'assets');

  return {
    entry: path.resolve(inputDir, 'main.js'),
    output: {
      path: outputDir, // string
      filename: 'main.js',
      publicPath: '/assets/',
    },
    module: {
      // configuration regarding modules
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'file-loader', // Output css file
              options: {
                name: '[name].css',
              },
            },
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                config: {
                  ctx: {
                    cssnano: argv.mode !== 'development',
                  },
                },
              },
            }, {
              loader: 'sass-loader', // compiles Sass to CSS
            },
          ],
        },
      ],
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    context: __dirname, // string (absolute path!)
    target: 'web',
    plugins: [
      new CleanWebpackPlugin([outputDir]),
      new CopyWebpackPlugin([
        {
          from: path.resolve(inputDir, 'static'),
          to: path.resolve(outputDir, 'static'),
        },
      ]),
    ],
    optimization: {
      minimize: argv.mode !== 'development',
    },
  };
};
