const paths = require('../paths');

const output = {
  "chunkFilename": "[id].chunk.js",
  "crossOriginLoading": false,
  "filename": "[name].bundle.js",
  "path": paths.dist
};

module.exports = output;
