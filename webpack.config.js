const webpack = require('webpack');
const zopfli = require('@gfx/zopfli');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: `${__dirname}/client/src/index.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      compressionOptions: {
        numiterations: 15,
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      },
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
  },
};

// new CompressionPlugin({
//   filename: '[path].gz[query]',
//   algorithm: 'gzip',
//   test: /\.js$|\.css$|\.html$/,
//   threshold: 10240,
//   minRatio: 0.8,
// }),

// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   context: __dirname + '/client',
//   entry: '/index.js',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-react', '@babel-preset-env']
//         },
//       },
//     ],
//   },
//   output: {
//     path: __dirname + '/dist',
//     filename: 'bundle.js',
//   }
// };
