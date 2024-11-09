import React, {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import DropDownComponent from '../../components/DropDown';
import {Option, DropDownProps} from '../../components/DropDown/DropDown.types';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {Text, View} from 'react-native';

const meta: Meta<typeof DropDownComponent> = {
  title: 'components/DropDownMultiSelect',
  component: DropDownComponent,
  decorators: [withTests({results})],
} satisfies Meta<typeof DropDownComponent>;

export default meta;

type Story = StoryObj<DropDownProps>;

const options: Option[] = [
  {label: 'Option 1', value: 1},
  {label: 'Option 2', value: 2},
  {label: 'Option 3', value: 3},
  {label: 'Option 4', value: 4},
];

const DropDown: React.FC<DropDownProps> = args => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  return (
    <DropDownComponent
      {...args}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      multiSelect={true}
    />
  );
};

const DropDown2: React.FC<DropDownProps> = args => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  return (
    <DropDownComponent
      {...args}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      multiSelect={true}
      panelFooterTemplate={
        <View style={{padding: 10}}>
          <Text>{selectedValues.length} item selected.</Text>
        </View>
      }
    />
  );
};

export const DropDownWithSearch: Story = {
  render: args => <DropDown {...args} />,
  args: {
    label: 'Select a Nation',
    options: options,
    placeholder: 'Select a Nation',
    display: 'comma',
    disabled: false,
    showSelectAll: true,
    filter: true,
    isInvalid: false,
    emptyFilterMessage: 'No records found',
    multiSelect: true,
  },
};

export const CustomTempletes: Story = {
  render: args => <DropDown2 {...args} />,
  args: {
    label: 'Select a Nation',
    options: options,
    placeholder: 'Select a Nation',
    display: 'comma',
    disabled: false,
    showSelectAll: true,
    filter: true,
    isInvalid: false,
    emptyFilterMessage: 'No records found',
    multiSelect: true,
  },
};

export const DropDownWithoutSearch: Story = {
  render: args => <DropDown {...args} />,
  args: {
    options: options,
    placeholder: 'Select a Nation',
    display: 'comma',
    disabled: false,
    showSelectAll: true,
    filter: false,
    isInvalid: false,
    emptyFilterMessage: 'No records found',
    multiSelect: true,
  },
};

export const DisplayAsChip: Story = {
  render: args => <DropDown {...args} />,
  args: {
    label: 'Select a Nation',
    options: options,
    placeholder: 'Choose...',
    display: 'chip',
    disabled: false,
    showSelectAll: true,
    filter: true,
    isInvalid: false,
    emptyFilterMessage: 'No records found',
    multiSelect: true,
  },
};

export const ErrorState: Story = {
  render: args => <DropDown {...args} />,
  args: {
    options: options,
    placeholder: 'Select a Nation',
    display: 'chip',
    disabled: true,
    showSelectAll: true,
    filter: true,
    isInvalid: true,
    emptyFilterMessage: 'No records found',
    multiSelect: true,
  },
};
