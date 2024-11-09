import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import SpeedDials from '../../components/SpeedDials';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {SpeedDialProps} from '../../components/SpeedDials/SpeedDials.types';
import {Provider as PaperProvider} from 'react-native-paper';

const meta: Meta<typeof SpeedDials> = {
  title: 'components/SpeedDials',
  component: SpeedDials,
  argTypes: {
    items: {
      required: true,
      description: 'Items for speed dial',
      table: {type: {summary: 'array'}},
    },
    direction: {
      required: false,
      description:
        'direction property is used to define the position of the items related to the button and default is ',
      table: {type: {summary: 'string'}},
      options: ['right', 'left', 'up', 'down'],
      control: {type: 'select'},
    },
    transitionDelay: {
      required: false,
      description: 'Transition Delay, default is 250',
      table: {type: {summary: 'number'}},
    },
    showIcon: {
      required: false,
      description:
        '"Main·icon·for·Speed·Dial,·default·is·\'reorder-three-outline\'"',
      table: {type: {summary: 'string'}},
    },
    hideIcon: {
      required: false,
      description:
        '"Close·Icon·when·all·items·are·displayed,·default·is·\'close-outline\'"',
      table: {type: {summary: 'string'}},
    },

    disabled: {
      required: false,
      description: 'Disable Spped Dial',
      table: {type: {summary: 'boolean'}},
    },
  },
  decorators: [
    withTests({results}),
    Story => (
      <PaperProvider>
        <Story />
      </PaperProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

const Template: StoryObj<typeof SpeedDials> = {
  render: (args: SpeedDialProps) => <SpeedDials {...args} />,
};

export const Speed_Dial_Component: StoryObj<typeof SpeedDials> = {
  ...Template,
  args: {
    direction: 'right',
    transitionDelay: 250,
    disabled: false,
    showIcon: {
      onPress: () => alert('default'),
      icon: 'reorder-three-outline',
      size: 'small',
      iconLib: 'Ionicons',
      badgeNumber: 10,
      variant: 'filled',
      shouldNotFillColor: true,
    },
    hideIcon: {
      onPress: () => alert('default'),
      icon: 'close-outline',
      size: 'small',
      iconLib: 'Ionicons',
      badgeNumber: 10,
      variant: 'filled',
      shouldNotFillColor: true,
    },
    items: [
      {
        onPress: () => alert('Pressed 1'),
        icon: 'refresh',
        size: 'small',
        iconLib: 'Ionicons',
        badgeNumber: 10,
        variant: 'filled',
        shouldNotFillColor: true,
      },
      {
        onPress: () => alert('Pressed 2'),
        icon: 'edit-2',
        size: 'small',
        iconLib: 'Feather',
        badgeNumber: 10,
        variant: 'filled',
        shouldNotFillColor: true,
      },
      {
        onPress: () => alert('Pressed 3'),
        icon: 'trash-2',
        size: 'small',
        iconLib: 'Feather',
        badgeNumber: 10,
        variant: 'filled',
        shouldNotFillColor: true,
      },
    ],
  },
};
