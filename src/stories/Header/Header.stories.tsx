import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import Header from '../../components/Header';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {View} from 'react-native';
import TabsBar from '../../components/TabsBar';
import SideBar from '../../components/SideBar';
import DropDown from '../../components/DropDown';
import SideBarHeader from '../../components/SideBar/Component/SideBarHeader';

const meta: Meta<typeof Header> = {
  title: 'components/Header',
  component: Header,
  decorators: [withTests({results})],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const userProfile = {
  firstName: 'Clark',
  lastName: 'Kent',
  email: 'clark.kent@astrazeneca.com',
  prid: 'kgrs984',
};

export const HeaderWithTitle: Story = {
  args: {
    title: 'Optic',
    disableProfile: true,
  },
};

export const HeaderWithProfileMenu: Story = {
  args: {
    title: 'Optic',
    userProfile,
    disableProfile: false,
    extraProfileSettings: [
      {
        icon: <Icon name="location-pin" size={18} />,
        label: 'Personal Settings',
        onClick: () => {},
      },
      {
        icon: <Icon name="user" size={18} />,
        label: 'Option 2',
        onClick: () => {},
      },
      {
        icon: <Icon name="share" size={18} />,
        label: 'Option 3',
        onClick: () => {},
      },
    ],
  },
};

export const HeaderWithIconsLogoWithIconsArray: Story = {
  args: {
    title: 'Optic',
    userProfile,
    disableProfile: false,
    icons: [
      {
        icon: <VectorIcon name="question-circle-o" size={18} />,
        id: 1,
        onClick: () => {},
      },
      {
        icon: <VectorIcon name="gear" size={18} />,
        id: 2,
        onClick: () => {},
      },
      {
        icon: <VectorIcon name="bell" size={18} />,
        id: 3,
        onClick: () => {},
      },
    ],
  },
};

export const HeaderWithIconsLogoWithIconsJSX: Story = {
  args: {
    title: 'Optic',
    userProfile,
    disableProfile: false,
    icons: (
      <View>
        <VectorIcon name="bell" size={18} color={'#FFF'} />
      </View>
    ),
  },
};

export const HeaderWithIconsAndMultiSelect: Story = {
  args: {
    title: 'Optic',
    userProfile,
    disableProfile: false,
    icons: [
      {
        icon: <VectorIcon name="question-circle-o" size={18} />,
        id: 1,
        onClick: () => {},
      },
      {
        icon: <VectorIcon name="gear" size={18} />,
        id: 2,
        onClick: () => {},
      },
      {
        icon: <VectorIcon name="bell" size={18} />,
        id: 3,
        onClick: () => {},
      },
    ],
    extraProfileSettings: [
      {
        icon: <Icon name="location-pin" size={18} />,
        label: 'Personal Settings',
        onClick: () => {},
      },
      {
        icon: <Icon name="user" size={18} />,
        label: 'Option 2',
        onClick: () => {},
      },
      {
        icon: <Icon name="share" size={18} />,
        label: 'Option 3',
        onClick: () => {},
      },
    ],
    handleLogout: () => {},
    children: (
      <View>
        <DropDown
          display="comma"
          emptyFilterMessage="No records found"
          filter
          label="Select Options"
          multiSelect
          options={[
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
            {
              label: 'Option 3',
              value: 3,
            },
            {
              label: 'Option 4',
              value: 4,
            },
          ]}
          placeholder="Choose..."
          showSelectAll
          type="menu"
        />
      </View>
    ),
  },
};

const HeaderWithIconsAndMultiSelectAndSubNavTemplete = () => {
  const icons = [
    {
      icon: <VectorIcon name="question-circle-o" size={18} />,
      id: 1,
      onClick: () => {},
    },
    {
      icon: <VectorIcon name="gear" size={18} />,
      id: 2,
      onClick: () => {},
    },
    {
      icon: <VectorIcon name="bell" size={18} />,
      id: 3,
      onClick: () => {},
    },
  ];

  return (
    <>
      <Header title="Application Name" icons={icons} userProfile={userProfile}>
        <DropDown
          display="comma"
          emptyFilterMessage="No records found"
          filter
          label="Select Options"
          multiSelect
          options={[
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
            {
              label: 'Option 3',
              value: 3,
            },
            {
              label: 'Option 4',
              value: 4,
            },
          ]}
          placeholder="Choose..."
          showSelectAll
          type="menu"
        />
      </Header>
      <View>
        <TabsBar
          links={[
            {id: 1, title: 'Tab 1'},
            {id: 2, title: 'Tab 2'},
            {id: 3, title: 'Tab 3'},
          ]}
          selectedLink={{id: 1, title: 'Tab 1'}}
          onClick={() => {}}
        />
      </View>
    </>
  );
};

export const HeaderWithIconsAndMultiSelectAndSubNav =
  HeaderWithIconsAndMultiSelectAndSubNavTemplete.bind({});

const HeaderWithIconsAndSingleSelectAndSubNavTemplete = () => {
  const icons = [
    {
      icon: <VectorIcon name="question-circle-o" size={18} />,
      id: 1,
      onClick: () => {},
    },
    {
      icon: <VectorIcon name="gear" size={18} />,
      id: 2,
      onClick: () => {},
    },
    {
      icon: <VectorIcon name="bell" size={18} />,
      id: 3,
      onClick: () => {},
    },
  ];

  return (
    <>
      <Header title="Application Name" icons={icons} userProfile={userProfile}>
        <DropDown
          display="comma"
          emptyFilterMessage="No records found"
          filter={false}
          label="Select Options"
          multiSelect={false}
          options={[
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
            {
              label: 'Option 3',
              value: 3,
            },
            {
              label: 'Option 4',
              value: 4,
            },
          ]}
          placeholder="Choose..."
          showSelectAll
          type="menu"
        />
      </Header>
      <View>
        <TabsBar
          links={[
            {id: 1, title: 'Tab 1'},
            {id: 2, title: 'Tab 2'},
            {id: 3, title: 'Tab 3'},
          ]}
          selectedLink={{id: 1, title: 'Tab 1'}}
          onClick={() => {}}
        />
      </View>
    </>
  );
};

export const HeaderWithIconsAndSingleSelectAndSubNav =
  HeaderWithIconsAndSingleSelectAndSubNavTemplete.bind({});

const SideBarWithSubNavTemplete = () => {
  const icons = [
    {
      icon: <VectorIcon name="question-circle-o" size={18} />,
      id: 1,
      onClick: () => {},
    },
    {
      icon: <VectorIcon name="gear" size={18} />,
      id: 2,
      onClick: () => {},
    },
    {
      icon: <VectorIcon name="bell" size={18} />,
      id: 3,
      onClick: () => {},
    },
  ];

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <SideBar
          list={[
            {
              activeIcon: 'grid',
              activeIconLib: 'Ionicons',
              iconSize: 25,
              id: 1,
              inActiveIcon: 'grid-outline',
              inActiveIconLib: 'Ionicons',
              path: '',
              title: 'Home',
            },
            {
              activeIcon: 'wallet',
              activeIconLib: 'Ionicons',
              iconSize: 25,
              id: 2,
              inActiveIcon: 'wallet-outline',
              inActiveIconLib: 'Ionicons',
              path: '',
              title: 'Wallet',
            },
            {
              activeIcon: 'settings',
              activeIconLib: 'Ionicons',
              iconSize: 25,
              id: 3,
              inActiveIcon: 'settings-outline',
              inActiveIconLib: 'Ionicons',
              path: '',
              title: 'Settings',
            },
          ]}
          onPressItem={() => {}}
          selectedItem={{
            activeIcon: 'grid',
            activeIconLib: 'Ionicons',
            iconSize: 25,
            id: 1,
            inActiveIcon: 'grid-outline',
            inActiveIconLib: 'Ionicons',
            path: '',
            title: 'Home',
          }}
          disableHeader={false}
          disableFooter={false}
          header={
            <SideBarHeader
              iconLib="Fontisto"
              iconName="nav-icon-grid"
              iconSize={25}
              onPressIcon={() => {}}
            />
          }
        />

        <View style={{flex: 1}}>
          <Header
            title="Application Name"
            icons={icons}
            userProfile={userProfile}
          />

          <TabsBar
            links={[
              {id: 1, title: 'Tab 1'},
              {id: 2, title: 'Tab 2'},
              {id: 3, title: 'Tab 3'},
            ]}
            selectedLink={{id: 1, title: 'Tab 1'}}
            onClick={() => {}}
          />
        </View>
      </View>
    </>
  );
};

const HeaderWithSidebarTemplete = () => {
  const icons = [
    {
      icon: <VectorIcon name="question-circle-o" size={18} />,
      id: 1,
      onClick: () => {},
    },
    {
      icon: <VectorIcon name="gear" size={18} />,
      id: 2,
      onClick: () => {},
    },
    {
      icon: <VectorIcon name="bell" size={18} />,
      id: 3,
      onClick: () => {},
    },
  ];

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <SideBar
          list={[
            {
              activeIcon: 'grid',
              activeIconLib: 'Ionicons',
              iconSize: 25,
              id: 1,
              inActiveIcon: 'grid-outline',
              inActiveIconLib: 'Ionicons',
              path: '',
              title: 'Home',
            },
            {
              activeIcon: 'wallet',
              activeIconLib: 'Ionicons',
              iconSize: 25,
              id: 2,
              inActiveIcon: 'wallet-outline',
              inActiveIconLib: 'Ionicons',
              path: '',
              title: 'Wallet',
            },
            {
              activeIcon: 'settings',
              activeIconLib: 'Ionicons',
              iconSize: 25,
              id: 3,
              inActiveIcon: 'settings-outline',
              inActiveIconLib: 'Ionicons',
              path: '',
              title: 'Settings',
            },
          ]}
          onPressItem={() => {}}
          selectedItem={{
            activeIcon: 'grid',
            activeIconLib: 'Ionicons',
            iconSize: 25,
            id: 1,
            inActiveIcon: 'grid-outline',
            inActiveIconLib: 'Ionicons',
            path: '',
            title: 'Home',
          }}
          disableHeader={false}
          disableFooter={false}
          header={
            <SideBarHeader
              iconLib="Fontisto"
              iconName="nav-icon-grid"
              iconSize={25}
              onPressIcon={() => {}}
            />
          }
        />

        <View style={{flex: 1}}>
          <Header
            title="Application Name"
            icons={icons}
            userProfile={userProfile}
          />
        </View>
      </View>
    </>
  );
};

export const HeaderWithSideBar = HeaderWithSidebarTemplete.bind({});
export const HeaderWithSidebarWithSubNav = SideBarWithSubNavTemplete.bind({});

export const HeaderWithProxyProfiles: Story = {
  args: {
    title: 'Optic',
    userProfile,
    disableProfile: false,
    handleLogout: () => {},
    userProfileArray: [
      {
        prid: 'kgrs984',
        email: 'clark.kent@astrazeneca.com',
        firstName: 'Kent',
        lastName: 'Clark',
        territoryName: 'Chicago',
        lastVisited: '02 Jul 2024 11:47',
        proxy: false,
      },
      {
        prid: 'khjk768',
        email: 'abby.grider@astrazeneca.com',
        firstName: 'Abby',
        lastName: 'Grider',
        territoryName: 'Washington',
        lastVisited: '02 Jul 2022 11:47',
        proxy: true,
      },
    ],
  },
};
