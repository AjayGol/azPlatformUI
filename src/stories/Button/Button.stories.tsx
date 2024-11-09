import type {Meta, StoryObj} from '@storybook/react';
import Button from '../../components/Button';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  decorators: [withTests({results})],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllButton: Story = {
  args: {
    icon: 'close',
    label: 'Button',
    variant: 'filled',
    type: 'primary',
    tooltip: 'All Button',
    id: 'All_Button',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const DisabledButton: Story = {
  args: {
    icon: 'close',
    label: 'Disabled Button',
    variant: 'filled',
    type: 'primary',
    disabled: true,
    tooltip: 'Disabled Button',
    id: 'Disabled_Button',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const CancelButtonWithBackgroundColor: Story = {
  args: {
    label: 'Cancel',
    variant: 'filled',
    type: 'primary',
    tooltip: 'Cancel',
    id: 'Cancel',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const CancelButtonWithoutBackgroundColor: Story = {
  args: {
    label: 'Cancel',
    variant: 'outline',
    type: 'primary',
    tooltip: 'Cancel',
    id: 'Cancel_',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const SaveButtonWithoutBackgroundColor: Story = {
  args: {
    label: 'Save',
    variant: 'outline',
    type: 'primary',
    tooltip: 'Save Button Without Background Color',
    id: 'SaveWithBg',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const SaveButtonWithBackgroundColor: Story = {
  args: {
    label: 'Save',
    variant: 'filled',
    type: 'primary',
    tooltip: 'Save',
    id: 'Save',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const ToolTipButton: Story = {
  args: {
    icon: 'info',
    variant: 'filled',
    type: 'primary',
    iconLib: 'AntDesign',
    tooltip: 'Info',
    id: 'Info',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const CrossButton: Story = {
  args: {
    icon: 'close',
    variant: 'filled',
    type: 'primary',
    iconLib: 'EvilIcons',
    tooltip: 'Close',
    id: 'CrossButton',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const PlusButton: Story = {
  args: {
    icon: 'plus',
    variant: 'filled',
    type: 'primary',
    iconLib: 'AntDesign',
    tooltip: 'Add',
    id: 'Add',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const ListButton: Story = {
  args: {
    icon: 'list',
    variant: 'filled',
    type: 'primary',
    tooltip: 'List',
    id: 'List',
    onPress: () => {
      alert('Pressed');
    },

    // iconLib: 'Feather',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    icon: 'close',
    variant: 'filled',
    type: 'primary',
    tooltip: 'Close',
    id: 'ButtonWithIcon',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const ButtonWithIconLabel: Story = {
  args: {
    icon: 'close',
    variant: 'filled',
    type: 'primary',
    label: 'Close',
    tooltip: 'Close',
    id: 'ButtonWithIconLabel',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const ActiveButton: Story = {
  args: {
    icon: 'close',
    variant: 'filled',
    type: 'secondary',
    tooltip: 'Close',
    id: 'ActiveButton',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const InactiveButton: Story = {
  args: {
    icon: 'close',
    variant: 'filled',
    isInactive: true,
    type: 'primary',
    tooltip: 'Close',
    id: 'InactiveButton',
    onPress: () => {
      alert('Pressed');
    },
  },
};

export const BadgeButton: Story = {
  args: {
    icon: 'close',
    variant: 'filled',
    isInactive: true,
    type: 'primary',
    badgeNumber: 5,
    tooltip: 'Close',
    id: 'BadgeButton',
    onPress: () => {
      alert('Pressed');
    },
  },
};
