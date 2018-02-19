const fs = require('fs');
const path = require('path');

const paths = {
  app: path.resolve('./src/app'),
  assets: path.resolve('./src/assets'),
  dist: path.resolve('./dist'),
  e2e: path.resolve('./e2e'),
  e2eTsConfig: path.resolve('./e2e/tsconfig.e2e.json'),
  favicon: path.resolve('./src/favicon.ico'),
  genDirNodeModules: path.resolve('./src/$$_gendir/node_modules'),
  htmlIndex: path.resolve('./src/index.html'),
  mainTs: path.resolve('./src/main.ts'),
  nodeModules: path.resolve('./node_modules'),
  packageJson: path.resolve('./package.json'),
  polyfills: path.resolve('./src/polyfills.ts'),
  projectRoot: path.resolve('./'),
  src: path.resolve('./src'),
  styles: path.resolve('./src/styles.scss')
};

// console.log('\npaths: ', paths, '\n');

module.exports = paths;
