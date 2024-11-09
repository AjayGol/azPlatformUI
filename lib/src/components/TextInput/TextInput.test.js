import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TextInput } from './TextInput';
import { colors } from '../../constants/colors';
jest.mock('react-native-paper', () => ({
    TextInput: 'TextInput',
}));
jest.mock('../../common/Icon', () => 'Icon');
describe('TextInput Component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should render with placeholder text', () => {
        const { getByPlaceholderText } = render(React.createElement(TextInput, { placeholder: "Enter text here" }));
        expect(getByPlaceholderText('Enter text here')).toBeTruthy();
    });
    it('should display label and apply floating label behavior', () => {
        const { getByText } = render(React.createElement(TextInput, { label: "Test Label", floatingLabel: true, focus: true, value: "Test" }));
        const label = getByText('Test Label');
        expect(label).toBeTruthy();
    });
    it('should render and handle icon clicks', () => {
        const leftIconClick = jest.fn();
        const rightIconClick = jest.fn();
        const { getByTestId } = render(React.createElement(TextInput, { leftIconName: "left-icon", rightIconName: "right-icon", leftIconClick: leftIconClick, rightIconClick: rightIconClick }));
        expect(getByTestId('left-icon')).toBeTruthy();
        expect(getByTestId('right-icon')).toBeTruthy();
        fireEvent.press(getByTestId('left-icon'));
        expect(leftIconClick).toHaveBeenCalled();
        fireEvent.press(getByTestId('right-icon'));
        expect(rightIconClick).toHaveBeenCalled();
    });
    it('should render sort icon and call onSortClick when clicked', () => {
        const mockOnSortClick = jest.fn();
        const { getByTestId } = render(React.createElement(TextInput, { sortIconName: "sort", sortIconLib: "MaterialCommunityIcons", onSortClick: mockOnSortClick }));
        expect(getByTestId('sort-icon')).toBeTruthy();
        fireEvent.press(getByTestId('sort-icon'));
        expect(mockOnSortClick).toHaveBeenCalled();
    });
    it('should apply correct styles', () => {
        const { getByTestId } = render(React.createElement(TextInput, { placeholder: "Test", invalid: true, autoFocus: true, inputContainerStyle: { borderColor: 'red' } }));
        const inputContainer = getByTestId('input-container');
        expect(inputContainer.props.style.borderColor).toBe('red');
    });
    it('should render heading and handle validation styling', () => {
        const { getByText } = render(React.createElement(TextInput, { heading: "Test Heading", invalid: true }));
        const heading = getByText('Test Heading');
        expect(heading).toBeTruthy();
        expect(heading.props.style.color).toBe(colors.red);
    });
    it('should correctly apply disabled and multiline props', () => {
        const { getByPlaceholderText } = render(React.createElement(TextInput, { placeholder: "Enter text", disabled: true, multiline: true, onChangeText: () => { } }));
        const input = getByPlaceholderText('Enter text');
        expect(input.props.disabled).toBe(true);
        expect(input.props.multiline).toBe(true);
    });
    it('should render required asterisk if required prop is true', () => {
        const { getByText } = render(React.createElement(TextInput, { label: "Username", required: true, onChangeText: () => { } }));
        expect(getByText('*')).toBeTruthy();
    });
});
