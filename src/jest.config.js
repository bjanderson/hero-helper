module.exports = {

  collectCoverageFrom: [
    'src/app/**/*.{ts}',
    '!src/app/**/index.ts',
    '!src/app/**/*.module.ts'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    "lcov",
    "text-summary"
  ],

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
    "<rootDir>/src/app/**/*.spec.ts"
  ]
};
