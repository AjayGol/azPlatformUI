import React from 'react';
import { StoryFn } from "@storybook/react";
import './vector-icons';
import theme from '../src/constants/theme';
import { PaperProvider, Provider, ThemeProvider } from "react-native-paper";
import { withTests } from '@storybook/addon-jest';
import results from '../jest-test-results.json'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: { excludeDecorators: true },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <PaperProvider>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
      </PaperProvider>

    ),
    withTests({
      results,
      filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
    }),
  ],
};


export default preview;
