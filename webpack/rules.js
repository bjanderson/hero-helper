const paths = require('../paths');

const postcssPlugins = require('./postcss-plugins');

const rules = [];

const angularCompilerPluginRule = {
  test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
  loader: '@ngtools/webpack'
};
rules.push(angularCompilerPluginRule);

const html = {
  test: /\.html$/,
  loader: 'raw-loader'
};
rules.push(html);

const files = {
  test: /\.(eot|svg|cur)$/,
  loader: 'file-loader',
  options: {
    name: '[name].[hash:20].[ext]',
    limit: 10000
  }
};
rules.push(files);

const urls = {
  test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
  loader: 'url-loader',
  options: {
    name: '[name].[hash:20].[ext]',
    limit: 10000
  }
};
rules.push(urls);

const cssLoaderOptions = {
  loader: 'css-loader',
  options: {
    sourceMap: false,
    import: false
  }
};

const postCssLoaderOptions = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: postcssPlugins,
    sourceMap: false
  }
};

const sassLoaderOptions = {
  loader: 'sass-loader',
  options: {
    sourceMap: false,
    precision: 8,
    includePaths: []
  }
};

const excludes = {
  exclude: [
    paths.styles
  ],

  test: /\.scss$|\.sass$/,

  use: [
    'exports-loader?module.exports.toString()',
    cssLoaderOptions,
    postCssLoaderOptions,
    sassLoaderOptions
  ]
};
rules.push(excludes);

const includes = {
  include: [
    paths.styles
  ],

  test: /\.scss$|\.sass$/,

  use: [
    'style-loader',
    cssLoaderOptions,
    postCssLoaderOptions,
    sassLoaderOptions
  ]
};
rules.push(includes);

const typescript = {
  test: /\.ts$/,
  use: [
    'awesome-typescript-loader',
    'angular2-template-loader'
  ],
  exclude: [/\.(spec|e2e)\.ts$/]
};
rules.push(typescript);

module.exports = rules;
