/** @type{import("@storybook/react-webpack5").StorybookConfig} */
const path = require('path')
module.exports = {
  stories: ['../src/stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-jest',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'react-native-vector-icons',
        ],
      },
    },
  ],
  webpackFinal: config => {
    const vectorIconsPath = require.resolve('react-native-vector-icons');
    const toFind = 'node_modules/react-native-vector-icons/';
    const actualPath = vectorIconsPath.substring(
      0,
      vectorIconsPath.indexOf(toFind) + toFind.length,
    );
    const icons = new RegExp(`${actualPath}/.*`);
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: [icons],
    });
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {modulesToTranspile:['react-native-vector-icons']},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../src/assets'],
};
