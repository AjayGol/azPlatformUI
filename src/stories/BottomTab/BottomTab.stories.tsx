import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import BottomTab from '../../components/BottomTab';
import {TabList} from '../../components/BottomTab/BottomTab.types';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/colors';
import {HELVETICA_NEUE_REGULAR} from '../../assets/Fonts';
import Icon from '../../common/Icon';
import ProfileComponent from '../../components/Header/Components/UserProfile/ProfileComponent';

const list: TabList[] = [
  {
    id: 1,
    title: 'Home',
    activeIcon: 'home',
    inActiveIcon: 'grid-outline',
    iconSize: 25,
    activeIconLib: 'Foundation',
    inActiveIconLib: 'Ionicons',
    isPopoverVisible: false,
    onPress(item) {
      alert(`Home Clicked ${item}`);
    },
  },
  {
    id: 2,
    title: 'External Links',
    activeIcon: 'external-link',
    inActiveIcon: 'wallet-outline',
    iconSize: 25,
    activeIconLib: 'Feather',
    inActiveIconLib: 'Ionicons',
    popoverView: (
      <View
        style={{
          padding: 20,
          maxWidth: 230,
          width: 230,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: colors.textColor,
              fontSize: 16,
              fontFamily: HELVETICA_NEUE_REGULAR,
              textDecorationLine: 'underline',
            }}>
            Atlas
          </Text>
          <Text
            style={{
              color: colors.textColor,
              fontSize: 16,
              fontFamily: HELVETICA_NEUE_REGULAR,
              textDecorationLine: 'underline',
            }}>
            PromoMats
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: colors.textColor,
              fontSize: 16,
              fontFamily: HELVETICA_NEUE_REGULAR,
              textDecorationLine: 'underline',
            }}>
            MedComms
          </Text>
          <Text
            style={{
              color: colors.textColor,
              fontSize: 16,
              fontFamily: HELVETICA_NEUE_REGULAR,
              textDecorationLine: 'underline',
            }}>
            Veeva CRM
          </Text>
        </View>
      </View>
    ),
  },
  {
    id: 3,
    title: 'Help',
    activeIcon: 'help-circle',
    inActiveIcon: 'settings-outline',
    iconSize: 25,
    activeIconLib: 'Feather',
    inActiveIconLib: 'Ionicons',
    popoverView: (
      <View
        style={{
          padding: 20,
        }}>
        <Text
          style={{
            color: colors.textColor,
            fontSize: 16,
            fontFamily: HELVETICA_NEUE_REGULAR,
            textDecorationLine: 'underline',
          }}>
          Help
        </Text>
        <Text
          style={{
            color: colors.textColor,
            fontSize: 16,
            fontFamily: HELVETICA_NEUE_REGULAR,
            textDecorationLine: 'underline',
            marginTop: 20,
          }}>
          About
        </Text>
        <Text
          style={{
            color: colors.textColor,
            fontSize: 16,
            fontFamily: HELVETICA_NEUE_REGULAR,
            textDecorationLine: 'underline',
            marginTop: 20,
          }}>
          Contact Us
        </Text>
        <Text
          style={{
            color: colors.textColor,
            fontSize: 16,
            fontFamily: HELVETICA_NEUE_REGULAR,
            textDecorationLine: 'underline',
            marginTop: 20,
          }}>
          Legal Notice & Terms of Use
        </Text>
        <Text
          style={{
            color: colors.textColor,
            fontSize: 16,
            fontFamily: HELVETICA_NEUE_REGULAR,
            textDecorationLine: 'underline',
            marginTop: 20,
          }}>
          Privacy
        </Text>
      </View>
    ),
  },

  {
    id: 4,
    title: 'Profile',
    activeIcon: 'user',
    inActiveIcon: 'settings-outline',
    iconSize: 25,
    activeIconLib: 'FontAwesome6',
    inActiveIconLib: 'Ionicons',
    popoverView: (
      <ProfileComponent
        handleLogout={() => alert('Sign Out Successfully')}
        userProfile={{
          firstName: 'Clark',
          lastName: 'Kent',
          email: 'clark.kent@astrazeneca.com',
          prid: 'kgrs984',
        }}
        extraProfileSettings={[
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
        ]}
        userProfileArray={[]}
      />
    ),
  },
  {
    id: 5,
    title: 'More',
    activeIcon: 'more-horizontal',
    inActiveIcon: 'settings-outline',
    iconSize: 25,
    activeIconLib: 'Feather',
    inActiveIconLib: 'Ionicons',
    popoverView: (
      <View
        style={{
          padding: 20,
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          disabled>
          <Icon name="download" lib="Foundation" size={20} color={'#C2C2C2'} />
          <Text
            style={{
              color: '#C2C2C2',
              fontSize: 14,
              fontFamily: HELVETICA_NEUE_REGULAR,
              marginStart: 10,
            }}>
            Downloads
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
          <Icon
            name="wifi"
            lib="FontAwesome"
            size={20}
            color={colors.primaryColor}
          />
          <Text
            style={{
              color: colors.primaryColor,
              fontSize: 14,
              fontFamily: HELVETICA_NEUE_REGULAR,
              marginStart: 10,
            }}>
            Connectivity
          </Text>
        </TouchableOpacity>
      </View>
    ),
  },
];

const meta = {
  title: 'components/BottomTab',
  component: BottomTab,
  decorators: [withTests({results})],
} satisfies Meta<typeof BottomTab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    list: list,
  },
};
