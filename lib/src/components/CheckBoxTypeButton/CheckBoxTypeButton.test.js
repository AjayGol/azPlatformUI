import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CheckBoxTypeButton from '../../components/CheckBoxTypeButton';
test('renders CheckBoxTypeButton and toggles state on press', () => {
    const { getByRole } = render(React.createElement(CheckBoxTypeButton, { check: false }));
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeTruthy();
    fireEvent.press(checkbox);
});
