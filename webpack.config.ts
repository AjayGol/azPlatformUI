const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appDirectory = path.resolve(__dirname);

const babelLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/,
  include: [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'index.web.js'),
    path.resolve(__dirname, 'App.tsx'),
    path.resolve(__dirname, 'components'),
    path.resolve(__dirname, 'node_modules/react-native'),
  ],
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: [
        'module:@react-native/babel-preset',
        '@babel/preset-env',
        '@babel/preset-react',
      ],
      plugins: [
        'transform-inline-environment-variables',
        '@babel/plugin-transform-runtime',
        'react-native-reanimated/plugin',
      ],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  type: 'asset/resource',
  generator: {
    filename: 'images/[name][ext][query]',
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'rnw_blogpost.bundle.js',
  },
  resolve: {
    extensions: [
      '.web.js',
      '.js',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.jsx',
    ],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    },
  },
  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'android/app/src/main/res/drawable', to: 'images'},
        {from: 'src/assets/Fonts', to: 'fonts'},
        {
          from: 'src/assets/Images',
          to: 'Images',
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      serveIndex: true,
    },
    devMiddleware: {
      publicPath: '/',
      writeToDisk: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
};
