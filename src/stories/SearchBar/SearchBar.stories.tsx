import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import SearchBar from '../../components/SearchBar';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {ButtonProp} from '../../components/SearchBar/SearchBar.types';
import TextInput from '../../components/TextInput';
import {DynamicDimension} from '../../constants/DynamicDimension';
const left: ButtonProp[] = [
  {
    icon: 'grid',
    variant: 'filled',
    type: 'secondary',
    size: 'small',
    disabled: false,
    iconLib: 'Ionicons',
    tooltip: 'Grid View',
    id: 'L0',
  },
  {
    icon: 'list',
    variant: 'outline',
    type: 'primary',
    size: 'small',
    disabled: false,
    iconLib: 'Feather',
    id: 'L1',
    tooltip: 'List View',
  },
];

const right: ButtonProp[] = [
  {
    icon: 'close',
    variant: 'outline',
    type: 'primary',
    size: 'small',
    disabled: false,
    tooltip: 'Clear',

    iconLib: 'EvilIcons',
    id: 'R0',
    shouldNotFillColor: true,
    isInactive: true,
    onPress: () => {
      alert('close');
    },
  },
  {
    icon: 'filter',
    variant: 'outline',
    type: 'primary',
    tooltip: 'Filter',
    size: 'small',
    disabled: false,
    iconLib: 'FontAwesome',
    isInactive: true,
    badgeNumber: 5,
    id: 'R1',
    shouldNotFillColor: true,
    onPress: () => {
      alert('filter');
    },
  },

  {
    icon: 'eye',
    variant: 'outline',
    tooltip: 'Preview',
    type: 'primary',
    size: 'small',
    disabled: false,
    iconLib: 'AntDesign',
    isInactive: true,
    id: 'R2',
    shouldNotFillColor: true,
    onPress: () => {
      alert('eye');
    },
  },
  {
    icon: 'download',
    variant: 'outline',
    type: 'primary',
    tooltip: 'Download',
    size: 'small',
    disabled: false,
    iconLib: 'Foundation',
    isInactive: true,
    id: 'R3',
    shouldNotFillColor: true,
    onPress: () => {
      alert('download');
    },
  },

  {
    icon: 'share-social',
    variant: 'outline',
    type: 'primary',
    tooltip: 'Share',
    size: 'small',
    disabled: false,
    iconLib: 'Ionicons',
    isInactive: true,
    id: 'R4',
    shouldNotFillColor: true,
    onPress: () => {
      alert('share-social');
    },
  },
  {
    icon: 'heart',
    variant: 'outline',
    type: 'primary',
    tooltip: 'Favourite',
    size: 'small',
    disabled: false,
    iconLib: 'FontAwesome',

    id: 'R5',
    onPress: () => {
      alert('heart');
    },
  },
];

const SearchBarWrapper = () => {
  const {isMobileView, width} = DynamicDimension();

  return (
    <SearchBar
      left={left}
      right={right}
      selectedLeftItem={left[0]}
      position="center"
      // eslint-disable-next-line react/no-children-prop
      children={
        <TextInput
          placeholder={'Search Here'}
          heading={''}
          invalid={false}
          leftIconLib={'AntDesign'}
          leftIconName={'search1'}
          sortIconName={'sort'}
          sortIconSize={20}
          sortIconLib={'MaterialCommunityIcons'}
          sortVisible={true}
          tooltip="tooltip sort"
          id="3"
          tooltipPosition="bottom"
          autoFocus={false}
          disabled={false}
          required={false}
          label={''}
          leftIconSize={16}
          multiline={false}
          rightIconSize={20}
          rightIconLib={'AntDesign'}
          rightIconName={''}
          autoCorrect={false}
          floatingLabel={false}
          inputContainerStyle={{width: isMobileView ? width / 3 : 306}}
        />
      }
    />
  );
};
const meta: Meta<typeof SearchBar> = {
  title: 'components/SearchBar',
  component: SearchBar,
  decorators: [withTests({results})],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Searchbar: Story = {
  render: () => <SearchBarWrapper />,
};
