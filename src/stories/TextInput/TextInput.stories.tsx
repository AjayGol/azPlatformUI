import type {Meta, StoryObj} from '@storybook/react';

import TextInput from '../../components/TextInput';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {SortOption} from '../../components/TextInput/TextInput.types';

const meta = {
  title: 'components/TextInput',
  component: TextInput,
  decorators: [withTests({results})],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInputWithoutLabel: Story = {
  args: {
    placeholder: '',
    heading: '',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: false,
    required: false,
    label: '',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};

export const TextInputWithLabel: Story = {
  args: {
    placeholder: '',
    heading: '',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: false,
    required: false,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};

export const RequiredTextInputWithLabel: Story = {
  args: {
    placeholder: '',
    heading: '',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: false,
    required: true,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};

export const FloatingLabelTextInput: Story = {
  args: {
    placeholder: '',
    heading: '',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: false,
    required: true,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: true,
    inputContainerStyle: {width: 306},
  },
};

export const TextInputWithLeftIcon: Story = {
  args: {
    placeholder: '',
    heading: '',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: 'search1',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: false,
    required: true,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};

const sortOptions: SortOption[] = [
  {
    title: 'Newest First',
    value: 'new',
    onPress: option => {
      console.log(option);
    },
  },
  {
    title: 'Oldest First',
    value: 'old',
    onPress: option => {
      console.log(option);
    },
  },
  {
    title: 'A - Z',
    value: 'az',
    onPress: option => {
      console.log(option);
    },
  },
  {
    title: 'Z - A',
    value: 'za',
    onPress: option => {
      console.log(option);
    },
  },
  {
    title: 'Recently Opened',
    value: 'recent',
    onPress: option => {
      console.log(option);
    },
  },
];

export const TextInputWithSortIcon: Story = {
  args: {
    placeholder: '',
    heading: '',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: 'sort',
    sortIconSize: 20,
    tooltip: 'ToolTip TextInput',
    id: '2',
    tooltipPosition: 'bottom',
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: true,
    sortOptions: sortOptions,
    selectedSortOption: 'old',
    onSortClick: () => {},
    autoFocus: false,
    disabled: false,
    required: true,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};

export const TextInputWithRightIcon: Story = {
  args: {
    placeholder: '',
    heading: '',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: false,
    required: true,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: 'search1',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};

export const DisableTextInput: Story = {
  args: {
    placeholder: '',
    heading: '',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: true,
    required: true,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};

export const TextInputWithHeading: Story = {
  args: {
    placeholder: '',
    heading: 'Oops!! Something went wrong...',
    invalid: false,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: false,
    required: false,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};

export const InvalidTextInput: Story = {
  args: {
    placeholder: '',
    heading: 'Oops!! Something went wrong...',
    invalid: true,
    leftIconLib: 'AntDesign',
    leftIconName: '',
    sortIconName: '',
    sortIconSize: 20,
    sortIconLib: 'MaterialCommunityIcons',
    sortVisible: false,
    autoFocus: false,
    disabled: false,
    required: false,
    label: 'Username',
    leftIconSize: 20,
    multiline: false,
    rightIconSize: 20,
    rightIconLib: 'AntDesign',
    rightIconName: '',
    autoCorrect: false,
    floatingLabel: false,
    inputContainerStyle: {width: 306},
  },
};
