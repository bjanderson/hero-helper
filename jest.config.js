module.exports = {

  preset: "jest-preset-angular",

  collectCoverageFrom: [
    'src/app/**/*.{ts}',
    '!src/app/**/index.ts',
    '!src/app/**/*.module.ts'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    "json",
    "lcov",
    "text-summary"
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

  testMatch: [
    "<rootDir>/src/app/**/__tests__/**/*.+(ts|js)?(x)",
    "<rootDir>/src/app/**/+(*.)+(spec|test).+(ts|js)?(x)"
  ],

  testResultsProcessor: 'jest-sonar-reporter'
};
