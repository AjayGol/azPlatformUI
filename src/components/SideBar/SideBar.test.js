import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SideBar} from './SideBar'; // Adjust import path as needed
import {Text} from 'react-native';

// Mock the Icon component if needed
jest.mock('../../common/Icon', () => 'Icon');

describe('SideBar Component', () => {
  const mockOnPressItem = jest.fn();
  const mockHeader = <Text>Header Content</Text>;
  const mockFooter = <Text>Footer Content</Text>;
  const mockList = [
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

  it('should render the sidebar with items', () => {
    const {getByText} = render(
      <SideBar
        list={mockList}
        onPressItem={mockOnPressItem}
        selectedItem={mockList[0]}
        slideIn={false}
      />,
    );

    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Wallet')).toBeTruthy();
  });

  it('should render header and footer when provided', () => {
    const {getByText} = render(
      <SideBar
        list={mockList}
        onPressItem={mockOnPressItem}
        header={mockHeader}
        footer={mockFooter}
        slideIn={false}
      />,
    );

    expect(getByText('Header Content')).toBeTruthy();
    expect(getByText('Footer Content')).toBeTruthy();
  });

  it('should not render header and footer when disabled', () => {
    const {queryByText} = render(
      <SideBar
        list={mockList}
        onPressItem={mockOnPressItem}
        disableHeader={true}
        disableFooter={true}
        header={mockHeader}
        footer={mockFooter}
        slideIn={false}
      />,
    );

    expect(queryByText('Header Content')).toBeFalsy();
    expect(queryByText('Footer Content')).toBeFalsy();
  });

  it('should select item and call onPressItem handler', () => {
    const {getByText} = render(
      <SideBar
        list={mockList}
        onPressItem={mockOnPressItem}
        selectedItem={mockList[0]}
        slideIn={false}
      />,
    );

    fireEvent.press(getByText('Wallet'));

    expect(mockOnPressItem).toHaveBeenCalledWith(mockList[1]);
  });
  it('should apply correct styles for selected and hover states', () => {
    const {getByTestId} = render(
      <SideBar
        list={mockList}
        selectedItem={mockList[0]}
        onPressItem={() => {}}
      />,
    );

    const homeItem = getByTestId('vertical1');

    expect(homeItem).toBeDefined();

    const homeStyle = homeItem.props.style || {};

    expect(homeStyle).toEqual({
      borderColor: 'transparent',
      borderWidth: 1.5,
    });
  });
});
