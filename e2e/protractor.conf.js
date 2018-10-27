// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {

  allScriptsTimeout: 11000,

  baseUrl: 'http://localhost:4200/',

  capabilities: {
    'browserName': 'chrome'
  },

  directConnect: true,

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    print: function() {},
    showColors: true,
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },

  SELENIUM_PROMISE_MANAGER: false,

  specs: [
    './src/**/*.e2e-spec.ts'
  ],

};
