const path              = require('path');
const merge             = require('webpack-merge');
const webpack           = require('webpack');
const NpmInstallPlugin  = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss            = require('precss');
const autoprefixer      = require('autoprefixer');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry:{
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: PATHS.app
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?sourceMap')
      },
      { test: /\.(jpe?g|png)$/, 
        loader: 'url', 
        query: {limit: 10240},
        include: PATHS.app
      },
      { 
        test: /\.json$/, 
        loader: "json-loader" 
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  sassLoader: {
    includePaths: [path.resolve(PATHS.app)]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx','.scss']
  }
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,

      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      stats: 'errors-only',
      devtool: 'eval-source-map',

      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common,{
    devtool: 'eval-source-map'
  });
}