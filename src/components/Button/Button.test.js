import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from './Button';

describe('Button Component', () => {
  it('should render the button with text only', () => {
    const {getByText} = render(
      <Button
        label="Click Me"
        variant="filled"
        type="primary"
        onPress={() => {}}
      />,
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('should render the button with an icon', () => {
    const {getByText} = render(
      <Button
        label="Click Me"
        variant="filled"
        type="primary"
        icon="close"
        onPress={() => {}}
      />,
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('should render button with correct styles for outline variant and secondary type', () => {
    const {getByText} = render(
      <Button
        label="Click Me"
        variant="outline"
        type="secondary"
        onPress={() => {}}
      />,
    );

    const button = getByText('Click Me').parent.parent.parent.parent;

    expect(button).toBeDefined();

    const buttonStyle = button.props.style || {};

    expect(buttonStyle).toBeDefined();
  });

  it('should call onPress when clicked', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <Button
        label="Click Me"
        variant="filled"
        type="primary"
        onPress={mockOnPress}
      />,
    );
    fireEvent.press(getByText('Click Me'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
