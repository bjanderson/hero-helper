const paths = require('../paths');

const devServer = require('./dev-server');
const entry = require('./entry');
const node = require('./node');
const output = require('./output');
const plugins = require('./plugins');
const resolve = require('./resolve');
const resolveLoader = require('./resolve-loader');
const rules = require('./rules');

module.exports = {
  devServer,
  entry,
  module: { rules },
  node,
  output,
  plugins,
  resolve,
  resolveLoader
};
