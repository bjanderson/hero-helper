function setConfiguration(config) {
  const configuration = {

    autoWatch: false,

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    browsers: [ 'ChromeHeadless' ],

    colors: true,

    coverageReporter: {
      type: 'in-memory'
    },

    exclude: [ ],

    files: [{
      included: true,
      pattern: './karma-test-shim.js',
      served: true,
      watched: false
    }],

    frameworks: ['jasmine'],

    logLevel: config.LOG_INFO,

    preprocessors: {
      './karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
    },

    port: 9876,

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html'
    },

    reporters: [ 'progress', 'coverage', 'remap-coverage' ],

    singleRun: true,

    webpack: require('./webpack-test-config.js'),

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    }
  };

  config.set(configuration);
}

module.exports = setConfiguration;
