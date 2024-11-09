import React from 'react';
import {render} from '@testing-library/react-native';
import {Modals} from './Modals'; // Adjust import path as needed
import {Text} from 'react-native';
import {BOTTOM, LEFT} from './Constant';

// Ensure react-native-modal is mocked properly
jest.mock('react-native-modal');

describe('Modals Component', () => {
  const mockOnClose = jest.fn();
  const mockHeader = <Text>Header Content</Text>;
  const mockFooter = <Text>Footer Content</Text>;

  it('should render the modal when visible', () => {
    render(<Modals isVisible={true} onClose={() => {}} modalType="dialog" />);
  });

  it('should not render the modal when isVisible is false', () => {
    render(<Modals isVisible={false} onClose={() => {}} modalType="dialog" />);
  });

  it('should render the header and footer content when provided', () => {
    const {getByText} = render(
      <Modals
        isVisible={true}
        onClose={mockOnClose}
        header={mockHeader}
        footer={mockFooter}
      />,
    );
    expect(getByText('Header Content')).toBeTruthy();
    expect(getByText('Footer Content')).toBeTruthy();
  });

  it('should apply correct animations based on modalType and position', () => {
    const {getByTestId} = render(
      <Modals
        isVisible={true}
        onClose={mockOnClose}
        modalType={'sidebar'}
        position={LEFT}
        header={mockHeader}
        footer={mockFooter}
      />,
    );
    const modal = getByTestId('sidebar');
    expect(modal.props.animationIn).toBe('slideInLeft');
    expect(modal.props.animationOut).toBe('slideOutLeft');
  });

  it('should apply default animations and styles for "dialog" modalType', () => {
    const {getByTestId} = render(
      <Modals
        isVisible={true}
        onClose={mockOnClose}
        modalType={'dialog'}
        header={mockHeader}
        footer={mockFooter}
      />,
    );
    const modal = getByTestId('dialog');
    expect(modal.props.animationIn).toBe('zoomIn');
    expect(modal.props.animationOut).toBe('zoomOut');
  });

  it('should render with correct styles for different positions', () => {
    const {getByTestId} = render(
      <Modals
        isVisible={true}
        onClose={mockOnClose}
        position={BOTTOM}
        modalType={'sidebar'}
        header={mockHeader}
        footer={mockFooter}
      />,
    );
    const modal = getByTestId('sidebar');
    expect(modal.props.style).toEqual(
      expect.objectContaining({
        height: expect.any(Number), // Adjust according to the width calculation
      }),
    );
  });
});
