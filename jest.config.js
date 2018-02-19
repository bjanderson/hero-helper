module.exports = {
  collectCoverageFrom: [
    'src/app/**/*.{ts}'
  ],

  coverageDirectory: 'coverage',

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


  mapCoverage: true,

  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],

  moduleNameMapper: {
    "\.scss$": "jest/scssStub.js"
  },

  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',

  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/e2e/',
    'src/app/*.{js}',
    'src/app/*.{scss}'
  ],

  testRegex: "(\.)(spec)(\.)(ts)$",

  testResultsProcessor: 'jest-sonar-reporter',

  transform: {
    // '^.+\\.(ts|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
    '^.+\\.(ts|html)$': '<rootDir>/jest/preprocessor.js'
  },

  transformIgnorePatterns: [
    'node_modules/(?!@ngrx)'
  ]
};
