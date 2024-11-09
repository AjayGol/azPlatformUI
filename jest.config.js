module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json', 'lib'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-reanimated|@react-native-community|react-native-vector-icons|react-native-walkthrough-tooltip|react-native-document-picker)/)',
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^react-native-popover-view$':
      '<rootDir>/__mocks__/react-native-popover-view.js',
    '^react-native-linear-gradient$':
      '<rootDir>/__mocks__/react-native-linear-gradient.js',
  },
};
