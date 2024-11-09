import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TextInput} from './TextInput'; // Adjust import path as needed
import {colors} from '../../constants/colors';

jest.mock('react-native-paper', () => ({
  TextInput: 'TextInput',
}));

// Mock Icon component
jest.mock('../../common/Icon', () => 'Icon');

describe('TextInput Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render with placeholder text', () => {
    const {getByPlaceholderText} = render(
      <TextInput placeholder="Enter text here" />,
    );
    expect(getByPlaceholderText('Enter text here')).toBeTruthy();
  });

  it('should display label and apply floating label behavior', () => {
    const {getByText} = render(
      <TextInput label="Test Label" floatingLabel focus={true} value="Test" />,
    );
    const label = getByText('Test Label');
    expect(label).toBeTruthy();
  });

  it('should render and handle icon clicks', () => {
    const leftIconClick = jest.fn();
    const rightIconClick = jest.fn();
    const {getByTestId} = render(
      <TextInput
        leftIconName="left-icon"
        rightIconName="right-icon"
        leftIconClick={leftIconClick}
        rightIconClick={rightIconClick}
      />,
    );

    // Check if icons are rendered
    expect(getByTestId('left-icon')).toBeTruthy();
    expect(getByTestId('right-icon')).toBeTruthy();

    // Simulate icon clicks
    fireEvent.press(getByTestId('left-icon'));
    expect(leftIconClick).toHaveBeenCalled();

    fireEvent.press(getByTestId('right-icon'));
    expect(rightIconClick).toHaveBeenCalled();
  });

  it('should render sort icon and call onSortClick when clicked', () => {
    const mockOnSortClick = jest.fn();
    const {getByTestId} = render(
      <TextInput
        sortIconName="sort"
        sortIconLib="MaterialCommunityIcons"
        onSortClick={mockOnSortClick}
      />,
    );
    expect(getByTestId('sort-icon')).toBeTruthy();
    fireEvent.press(getByTestId('sort-icon'));
    expect(mockOnSortClick).toHaveBeenCalled();
  });

  it('should apply correct styles', () => {
    const {getByTestId} = render(
      <TextInput
        placeholder="Test"
        invalid={true}
        autoFocus={true}
        inputContainerStyle={{borderColor: 'red'}}
      />,
    );

    // Check if border color is red due to invalid state
    const inputContainer = getByTestId('input-container');
    expect(inputContainer.props.style.borderColor).toBe('red');
  });

  it('should render heading and handle validation styling', () => {
    const {getByText} = render(
      <TextInput heading="Test Heading" invalid={true} />,
    );
    const heading = getByText('Test Heading');
    expect(heading).toBeTruthy();
    expect(heading.props.style.color).toBe(colors.red); // Should be red when invalid
  });

  it('should correctly apply disabled and multiline props', () => {
    const {getByPlaceholderText} = render(
      <TextInput
        placeholder="Enter text"
        disabled={true}
        multiline={true}
        onChangeText={() => {}}
      />,
    );
    const input = getByPlaceholderText('Enter text');

    expect(input.props.disabled).toBe(true);
    expect(input.props.multiline).toBe(true);
  });

  it('should render required asterisk if required prop is true', () => {
    const {getByText} = render(
      <TextInput label="Username" required={true} onChangeText={() => {}} />,
    );
    expect(getByText('*')).toBeTruthy();
  });
});
