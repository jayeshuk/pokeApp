module.exports = {
  rootDir: './',
  preset: 'react-native',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
};
