module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native', 'jest'],
  rules: {
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-color-literals': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true, // Include this line to support jest environment
  },
};
