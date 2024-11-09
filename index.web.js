import React from 'react';
import {AppRegistry, Text} from 'react-native';
import appName from './app.json';

let App = function () {
  return <Text>Run: yarn storybook:web</Text>;
};

if (module.hot) {
  module.hot.accept();
}

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
