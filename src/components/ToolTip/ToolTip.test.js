import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ToolTip} from './ToolTip';
import {Text} from 'react-native';
import {colors} from '../../constants/colors';

// Mock the `isWeb` constant to control environment-specific behavior
jest.mock('../../constants/constant', () => ({
  isWeb: false, // Set to true for web environment tests
}));

describe('ToolTip Component', () => {
  const mockTooltipContent = (
    <Text style={{color: colors.red}}>Tooltip Content</Text>
  );
  const mockChild = <Text>Child Content</Text>;

  it('should render the tooltip when pressed on native environment', () => {
    const {getByText, queryByText} = render(
      <ToolTip tooltip={mockTooltipContent}>{mockChild}</ToolTip>,
    );

    // Initially, tooltip should not be visible
    expect(queryByText('Tooltip Content')).toBeNull();

    // Press the child to toggle tooltip visibility
    fireEvent.press(getByText('Child Content'));

    // Now the tooltip should be visible
    expect(getByText('Tooltip Content')).toBeTruthy();
  });

  it('should not render the tooltip when no tooltip content is provided', () => {
    const {queryByText, getByText} = render(<ToolTip>{mockChild}</ToolTip>);

    // Press the child to toggle tooltip visibility
    fireEvent.press(getByText('Child Content'));

    // Tooltip content should not be visible
    expect(queryByText('Tooltip Content')).toBeNull();
  });

  it('should handle hover events correctly on web', () => {
    // Switch to web environment for this test
    jest.mock('../../constants/constant', () => ({
      isWeb: true,
    }));

    const {getByText, queryByText} = render(
      <ToolTip tooltip={mockTooltipContent}>{mockChild}</ToolTip>,
    );

    // Initially, tooltip should not be visible
    expect(queryByText('Tooltip Content')).toBeNull();

    // Simulate hover events
    fireEvent(getByText('Child Content'), 'onHoverIn');

    // Tooltip should be visible on hover
    expect(getByText('Tooltip Content')).toBeTruthy();
  });

  it('should apply correct positioning and styles', () => {
    const {getByText} = render(
      <ToolTip
        tooltip={mockTooltipContent}
        position="top"
        contentStyle={{color: colors.black}}
        backgroundColor="blue"
        disableShadow={false}>
        {mockChild}
      </ToolTip>,
    );

    // Press the child to toggle tooltip visibility
    fireEvent.press(getByText('Child Content'));

    const tooltipContent = getByText('Tooltip Content');

    // Check if the tooltip content is visible
    expect(tooltipContent).toBeTruthy();

    // Validate the styles applied
    expect(tooltipContent.props.style).toEqual(
      expect.objectContaining({color: colors.red}),
    );
  });
});
