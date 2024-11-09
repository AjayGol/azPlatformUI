import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import TabsBar from '../../components/TabsBar';
import {Tab} from '../../components/TabsBar/TabsBar.types';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {View} from 'react-native';
import Icon from '../../common/Icon/Icon';
import {colors} from '../../constants/colors';
import Button from '../../components/Button';

const links: Tab[] = [
  {id: 1, title: 'Tab 1'},
  {id: 2, title: 'Tab 2'},
  {id: 3, title: 'Tab 3'},
];

const files = [
  {
    id: 1,
    title: 'DE Fasenra IDA Feb23',
    fileIcon: (
      <View>
        <Icon
          lib="MaterialIcons"
          name="picture-as-pdf"
          size={20}
          color={colors.secondaryColor}
        />
      </View>
    ),
    closeIcon: (
      <View>
        <Icon lib="AntDesign" name="close" size={15} color={colors.textColor} />
      </View>
    ),
  },
  {
    id: 2,
    title: 'DE_CKD_AZ_Detail_Sept_2023',
    fileIcon: (
      <View>
        <Icon
          lib="MaterialIcons"
          name="picture-as-pdf"
          size={20}
          color={colors.secondaryColor}
        />
      </View>
    ),
    closeIcon: (
      <View>
        <Icon lib="AntDesign" name="close" size={15} color={colors.textColor} />
      </View>
    ),
  },
];

const meta: Meta<typeof TabsBar> = {
  title: 'components/TabsBar',
  component: TabsBar,
  decorators: [withTests({results})],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    links: links,
    selectedLink: links[0],
    onClick: () => {},
    tabTouchableOpacity: {},
    tabTextStyles: {},
    tabContainer: {},
  },
};

export const FilesTabsBar: Story = {
  args: {
    links: files,
    selectedLink: links[0],
    isFilesTab: true,
    rightIcons: (
      <View style={{flexDirection: 'row', gap: 10, marginHorizontal: 12}}>
        <Button
          size={'small'}
          icon={'dots-three-horizontal'}
          iconLib={'Entypo'}
          isInactive={true}
        />
        <Button
          size={'small'}
          icon={'close'}
          iconLib={'AntDesign'}
          isInactive={true}
        />
      </View>
    ),
    onClick: () => {},
    showToolTip: true,
  },
};
