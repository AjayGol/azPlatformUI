import type {Meta, StoryObj} from '@storybook/react';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import ToolTip from '../../components/ToolTip';
import {Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {colors} from '../../constants/colors';
import Icon from '../../common/Icon';
const meta: Meta<typeof ToolTip> = {
  title: 'components/Tooltip',
  component: ToolTip,
  decorators: [withTests({results})],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleTooltip: Story = {
  args: {
    position: 'bottom',
    children: (
      <Button
        icon="close"
        variant="filled"
        isInactive={true}
        type="primary"
        onPress={() => {
          alert('Pressed');
        }}
      />
    ),
    tooltip: (
      <View>
        <Text style={{color: colors.white}}>Close</Text>
      </View>
    ),
  },
};

export const TooltipWithMultiline: Story = {
  args: {
    position: 'bottom',
    children: <Button label="Tooltip with Multiline" />,
    tooltip: (
      <View style={{alignItems: 'center'}}>
        <Icon name="info" lib={'Feather'} size={20} color={colors.white} />
        <Text style={{color: colors.white, marginTop: 5}}>
          {'This is First Line text\nThis is Second Line'}
        </Text>
      </View>
    ),
  },
};
