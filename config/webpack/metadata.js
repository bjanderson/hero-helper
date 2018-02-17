const paths = require('../paths');

const METADATA = {
  ENV: process.env.NODE_ENV,
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  VERSION: require(paths.packageJson).version
};

if (METADATA.ENV === 'production' || METADATA.ENV === 'aot') {
  METADATA.port = process.env.PORT || 3001;
}

console.log('METADATA: ', JSON.stringify(METADATA, null, 2));

module.exports = METADATA;
