module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    '@babel/plugin-transform-runtime',
    'react-native-reanimated/plugin',
    '@babel/plugin-syntax-jsx',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
