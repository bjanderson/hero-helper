const rxPaths = require('rxjs/_esm5/path-mapping');

const resolveLoader = {
  alias: rxPaths(),

  modules: [
    './node_modules'
  ]
};

module.exports = resolveLoader;
