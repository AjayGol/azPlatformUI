import type {Meta, StoryObj} from '@storybook/react';
import SideBar from '../../components/SideBar';
import {SideBarItem} from '../../components/SideBar/SideBar.types';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import SideBarHeader from '../../components/SideBar/Component/SideBarHeader';
import SideBarFooter from '../../components/SideBar/Component/SideBarFooter';
import React from 'react';
import {FX_HUB_LOGO} from '../../assets/Images';

const list: SideBarItem[] = [
  {
    id: 1,
    title: 'Home',
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    path: '',
    iconSize: 25,
    activeIconLib: 'Ionicons',
    inActiveIconLib: 'Ionicons',
  },
  {
    id: 2,
    title: 'Wallet',
    activeIcon: 'wallet',
    inActiveIcon: 'wallet-outline',
    path: '',
    iconSize: 25,
    activeIconLib: 'Ionicons',
    inActiveIconLib: 'Ionicons',
  },
  {
    id: 3,
    title: 'Settings',
    activeIcon: 'settings',
    inActiveIcon: 'settings-outline',
    path: '',
    iconSize: 25,
    activeIconLib: 'Ionicons',
    inActiveIconLib: 'Ionicons',
  },
];

const meta = {
  title: 'components/SideBar',
  component: SideBar,
  decorators: [withTests({results})],
} satisfies Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NormalSideBar: Story = {
  args: {
    list: list,
    selectedItem: list[0],
    disableFooter: true,
    disableHeader: true,
    onPressItem: (sideBarObj: SideBarItem) => {
      console.log(`${sideBarObj.title} Pressed`);
    },
  },
};

export const SideBarWithHeader: Story = {
  args: {
    list: list,
    selectedItem: list[0],
    disableFooter: true,
    disableHeader: false,
    header: (
      <SideBarHeader
        iconLib="Fontisto"
        iconName="nav-icon-grid"
        iconSize={25}
        onPressIcon={() => {}}
      />
    ),
    onPressItem: (sideBarObj: SideBarItem) => {
      console.log(`${sideBarObj.title} Pressed`);
    },
  },
};

export const SideBarWithFooter: Story = {
  args: {
    list: list,
    selectedItem: list[0],
    disableFooter: false,
    disableHeader: true,
    footer: (
      <SideBarFooter
        title="Powered by"
        imgSource={FX_HUB_LOGO}
        onPress={() => {}}
      />
    ),
    onPressItem: (sideBarObj: SideBarItem) => {
      console.log(`${sideBarObj.title} Pressed`);
    },
  },
};

export const SideBarWithHeaderAndFooter: Story = {
  args: {
    list: list,
    selectedItem: list[0],
    disableFooter: false,
    disableHeader: false,
    footer: (
      <SideBarFooter
        title="Powered by"
        imgSource={FX_HUB_LOGO}
        onPress={() => {}}
      />
    ),
    header: (
      <SideBarHeader
        iconLib="Fontisto"
        iconName="nav-icon-grid"
        iconSize={25}
        onPressIcon={() => {}}
      />
    ),
    onPressItem: (sideBarObj: SideBarItem) => {
      console.log(`${sideBarObj.title} Pressed`);
    },
  },
};

export const SideBarWithSlideIn: Story = {
  args: {
    list: list,
    selectedItem: list[0],
    disableFooter: false,
    disableHeader: false,
    slideIn: true,
    footer: (
      <SideBarFooter
        title="Powered by"
        imgSource={FX_HUB_LOGO}
        onPress={() => {}}
      />
    ),
    header: (
      <SideBarHeader
        iconLib="Fontisto"
        iconName="nav-icon-grid"
        iconSize={25}
        onPressIcon={() => {}}
      />
    ),
    onPressItem: (sideBarObj: SideBarItem) => {
      console.log(`${sideBarObj.title} Pressed`);
    },
  },
};
