module.exports = {
  collectCoverageFrom: [
    'src/app/**/*.{ts}'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    "json",
    "lcov",
    "text-summary"
  ],

  globals: {
    '__TS_CONFIG__': {
      'target': 'es6',
      'module': 'commonjs',
      'moduleResolution': 'node'
    },
    'ts-jest': {
      'tsConfigFile': 'src/tsconfig.spec.json'
    },
    '__TRANSFORM_HTML__': true
  },

  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ],

  moduleNameMapper: {
    "\(.*)$.component.scss": "jest/scssStub.js"
  },

  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',

  testPathIgnorePatterns: [
    'config/',
    'coverage/',
    'dist/',
    'e2e/',
    'jest/',
    'node_modules/',
    'scripts/',
    'server/',
    'webpack/',
    'src/app/*.{js}',
    'src/app/*.{scss}'
  ],

  testRegex: "(\.)(spec)(\.)(ts)$",

  testResultsProcessor: 'jest-sonar-reporter',

  transform: {
    '^.+\\.(ts|html)$': '<rootDir>/jest/preprocessor.js'
  },

  transformIgnorePatterns: [
    'node_modules/(?!@ngrx)'
  ]
};
