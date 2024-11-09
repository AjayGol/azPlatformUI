import React from 'react';
import {render} from '@testing-library/react-native';
import {SearchBar} from './SearchBar'; // Adjust import path as needed
import TextInput from '../TextInput'; // Ensure this import path is correct
// Mock the SpeedDials component if needed
jest.mock('../SpeedDials', () => 'SpeedDials');

// Mock the DynamicDimension hook if needed
jest.mock('../../constants/DynamicDimension', () => ({
  DynamicDimension: jest.fn(() => ({isMobileView: false, width: 0})),
}));

describe('SearchBar Component', () => {
  const mockOnPressLeft = jest.fn();
  const mockOnPressRight = jest.fn();

  const left = [
    {
      icon: 'grid',
      variant: 'filled',
      type: 'secondary',
      size: 'small',
      disabled: false,
      iconLib: 'Ionicons',
      id: 'L0',
      onPress: mockOnPressLeft,
    },
  ];

  const right = [
    {
      icon: 'close',
      variant: 'outline',
      type: 'primary',
      size: 'small',
      disabled: false,
      iconLib: 'EvilIcons',
      id: 'R0',
      onPress: mockOnPressRight,
    },
  ];

  it('should render the SearchBar with buttons and children', () => {
    const {getByPlaceholderText, getByTestId} = render(
      <SearchBar
        left={left}
        right={right}
        selectedLeftItem={left[0]}
        selectedRightItem={right[0]}
        position="center">
        <TextInput placeholder="Search Here" />
      </SearchBar>,
    );

    expect(getByPlaceholderText('Search Here')).toBeTruthy();
    expect(getByTestId('left-button')).toBeTruthy();
    expect(getByTestId('right-button')).toBeTruthy();
  });

  it('should render children when provided', () => {
    const {getByPlaceholderText} = render(
      <SearchBar left={left} right={right} position="center">
        <TextInput placeholder="Search Here" />
      </SearchBar>,
    );

    expect(getByPlaceholderText('Search Here')).toBeTruthy();
  });

  it('should render SpeedDials when isMobileView is true', () => {
    jest.mock('../../constants/DynamicDimension', () => ({
      DynamicDimension: jest.fn(() => ({isMobileView: true, width: 0})),
    }));
    const {getByTestId} = render(
      <SearchBar left={left} right={right} position="center" />,
    );

    expect(getByTestId('speed-dial')).toBeTruthy();
  });

  it('should not render SpeedDials when isMobileView is false', () => {
    const {queryByTestId} = render(
      <SearchBar left={left} right={right} position="center" />,
    );

    expect(queryByTestId('speed-dial')).toBeNull();
  });
});
