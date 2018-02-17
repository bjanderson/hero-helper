
Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

require('rxjs/Rx');

require('zone.js/dist/zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');

APP_METADATA = {
  'ENV': 'env-test',
  'VERSION': 'version-test'
};

// selectively disable console output in tests
// comment out the ones that you want to appear with your tests
console.debug = () => undefined;
console.dir = () => undefined;
console.error = () => undefined;
console.info = () => undefined;
console.log = () => undefined;
console.trace = () => undefined;
console.warn = () => undefined;

const testContext = require.context('../../src', true, /\.spec\.ts/);

const modules = testContext.keys().map(testContext);
