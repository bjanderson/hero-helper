module.exports = {
  mapCoverage: true,
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

  // testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  testRegex: "(\.)(spec)(\.)(ts)$",

  setupTestFrameworkScriptFile: '<rootDir>/jest/setupJest.ts',
  transform: {
    // '^.+\\.(ts|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
    '^.+\\.(ts|html)$': '<rootDir>/jest/preprocessor.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx)'
  ],
  collectCoverageFrom: [
    'src/app/module/**/*.{ts}',
    '!src/app/*.{ts}',
    '!src/app/**/*.{js}',
    '!src/app/environment/*.{ts}',
    '!src/app/language/*.{ts}',
    '!src/app/**/*.module.{ts}',
    '!src/app/**/*.interface.{ts}',
    '!src/app/**/*.state.{ts}',
    '!src/app/**/*.entity.{ts}'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/e2e/',
    'src/app/*.{js}',
    'src/app/*.{scss}'
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  moduleNameMapper: {
    // "app/(.*)": "<rootDir>/src/app/$1",
    // "@common/(.*)": "<rootDir>/src/app/common/$1",
    "\.scss$": "jest/scssStub.js"
  }
};
