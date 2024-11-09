import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import Header from './Header';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

// Mock data
const mockUserProfile = {
  firstName: 'Clark',
  lastName: 'Kent',
  email: 'clark.kent@astrazeneca.com',
  prid: 'kgrs984',
  lastVisited: '2024-08-06',
};

describe('Header Component', () => {
  it('renders Header with profile menu and interacts with it', async () => {
    const mockLogout = jest.fn();
    const mockExtraProfileSettings = [
      {
        icon: <VectorIcon name="user" size={18} />,
        label: 'Personal Settings',
        onClick: jest.fn(),
      },
      {
        icon: <VectorIcon name="cogs" size={18} />,
        label: 'Account Settings',
        onClick: jest.fn(),
      },
      {
        icon: <VectorIcon name="share" size={18} />,
        label: 'Share',
        onClick: jest.fn(),
      },
    ];

    const {getByTestId, findByText, queryByTestId} = render(
      <Header
        title="Optic"
        userProfile={mockUserProfile}
        disableProfile={false}
        extraProfileSettings={mockExtraProfileSettings}
        handleLogout={mockLogout}
      />,
    );

    expect(queryByTestId('profile-setting-1')).toBeNull();

    fireEvent.press(getByTestId('user-profile-button'));

    await waitFor(() => {
      expect(getByTestId('profile-setting-1')).toBeTruthy();
    });

    expect(await findByText('Clark, Kent')).toBeTruthy();
    expect(await findByText('clark.kent@astrazeneca.com')).toBeTruthy();
    expect(await findByText('ID: kgrs984')).toBeTruthy();
    expect(await findByText('Last Visited: 2024-08-06')).toBeTruthy();

    const settingButtons = await waitFor(() => [
      getByTestId('profile-setting-1'),
      getByTestId('profile-setting-2'),
      getByTestId('profile-setting-3'),
    ]);

    fireEvent.press(settingButtons[0]);
    expect(mockExtraProfileSettings[0].onClick).toHaveBeenCalled();

    fireEvent.press(settingButtons[1]);
  });

  it('renders Header with icons array and checks icons', () => {
    const {queryAllByTestId} = render(
      <Header
        title="Optic"
        userProfile={mockUserProfile}
        icons={[
          {
            icon: (
              <VectorIcon name="question-circle-o" size={18} testID="icon-1" />
            ),
            id: 1,
            onClick: jest.fn(),
          },
          {
            icon: <VectorIcon name="gear" size={18} testID="icon-2" />,
            id: 2,
            onClick: jest.fn(),
          },
          {
            icon: <VectorIcon name="bell" size={18} testID="icon-3" />,
            id: 3,
            onClick: jest.fn(),
          },
        ]}
      />,
    );

    const icons = queryAllByTestId(/icon-/);
    expect(icons).toHaveLength(3);
  });

  it('renders Header with single icon node', () => {
    const {getByTestId} = render(
      <Header
        title="Optic"
        userProfile={mockUserProfile}
        icons={<VectorIcon name="bell" size={18} testID="single-icon" />}
      />,
    );

    const icon = getByTestId('single-icon');
    expect(icon).toBeTruthy();
  });

  it('renders Header with icons and children', () => {
    const {getByTestId, queryAllByTestId} = render(
      <Header
        title="Optic"
        userProfile={mockUserProfile}
        icons={[
          {
            icon: (
              <VectorIcon name="question-circle-o" size={18} testID="icon-1" />
            ),
            id: 1,
            onClick: jest.fn(),
          },
        ]}>
        <Text testID="header-text">ASDF JKL;</Text>
      </Header>,
    );

    expect(getByTestId('header-text')).toBeTruthy();

    const icons = queryAllByTestId(/icon-/);
    expect(icons).toHaveLength(1);
  });

  it('clicking an icon triggers onClick', () => {
    const onClickMock = jest.fn();
    const iconsArray = [
      {
        icon: <VectorIcon name="bell" size={18} testID="clickable-icon" />,
        id: 1,
        onClick: onClickMock,
      },
    ];

    const {getByTestId} = render(<Header title="Optic" icons={iconsArray} />);

    fireEvent.press(getByTestId('clickable-icon'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
