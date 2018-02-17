const webpack = require('webpack');

const paths = require('../paths');

const devtool = 'inline-source-map';

const resolve = {
  extensions: [ '.js', '.json', '.ts' ]
};

const cssRule = {
  test: /\.css$/,
  use: ['to-string-loader', 'css-loader']
};

const htmlRule = {
  test: /\.html$/,
  use: 'raw-loader'
};

const istanbulRule = {
  test: /.ts$/,
  exclude: /(node_modules|\.spec\.ts|\.e2e\.ts$)/,
  loader: 'istanbul-instrumenter-loader',
  enforce: 'post'
};

const jsonRule = {
  test: /\.json$/,
  use: 'json-loader'
};

const sassRule = {
  test: /\.scss$/,
  use: ['to-string-loader', 'css-loader', 'sass-loader']
};

const typeScriptRule = {
  test: /\.ts$/,
  use: [
    {
      loader: 'awesome-typescript-loader',
      options: {
        configFileName: 'tsconfig.json'
      }
    },
    {
      loader: 'angular2-template-loader'
    }
  ],

  exclude: [
    /\.e2e\.ts$/,
    /node_modules/
  ]
};

const rules = [
  cssRule,
  htmlRule,
  istanbulRule,
  jsonRule,
  sassRule,
  typeScriptRule,
];

const contextReplacementPlugin = new webpack.ContextReplacementPlugin(
  /angular(\\|\/)core(\\|\/)@angular/,
  paths.src,
  {}
);

const noEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();

const sourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin({
  filename: null,
  test: /\.(ts|js)($|\?)/i
});

const plugins = [
  contextReplacementPlugin,
  noEmitOnErrorsPlugin,
  sourceMapDevToolPlugin,
];

module.exports = {
  devtool,
  resolve,
  module: { rules },
  plugins
};
