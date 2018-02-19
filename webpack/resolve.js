const rxPaths = require('rxjs/_esm5/path-mapping');

const paths = require('../paths');

const resolve = {
  alias: rxPaths(),

  extensions: [
    '.js',
    '.ts'
  ],

  mainFields: [
    'browser',
    'main',
    'module'
  ],

  modules: [
    './node_modules'
  ],

  symlinks: true
};

module.exports = resolve;
