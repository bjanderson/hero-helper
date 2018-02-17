const paths = require('../paths');

const entry = {
  main: [
    paths.mainTs
  ],

  polyfills: [
    paths.polyfills
  ],

  styles: [
    paths.styles
  ]
};

module.exports = entry;
