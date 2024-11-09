import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ToolTip } from './ToolTip';
import { Text } from 'react-native';
import { colors } from '../../constants/colors';
jest.mock('../../constants/constant', () => ({
    isWeb: false,
}));
describe('ToolTip Component', () => {
    const mockTooltipContent = (React.createElement(Text, { style: { color: colors.red } }, "Tooltip Content"));
    const mockChild = React.createElement(Text, null, "Child Content");
    it('should render the tooltip when pressed on native environment', () => {
        const { getByText, queryByText } = render(React.createElement(ToolTip, { tooltip: mockTooltipContent }, mockChild));
        expect(queryByText('Tooltip Content')).toBeNull();
        fireEvent.press(getByText('Child Content'));
        expect(getByText('Tooltip Content')).toBeTruthy();
    });
    it('should not render the tooltip when no tooltip content is provided', () => {
        const { queryByText, getByText } = render(React.createElement(ToolTip, null, mockChild));
        fireEvent.press(getByText('Child Content'));
        expect(queryByText('Tooltip Content')).toBeNull();
    });
    it('should handle hover events correctly on web', () => {
        jest.mock('../../constants/constant', () => ({
            isWeb: true,
        }));
        const { getByText, queryByText } = render(React.createElement(ToolTip, { tooltip: mockTooltipContent }, mockChild));
        expect(queryByText('Tooltip Content')).toBeNull();
        fireEvent(getByText('Child Content'), 'onHoverIn');
        expect(getByText('Tooltip Content')).toBeTruthy();
    });
    it('should apply correct positioning and styles', () => {
        const { getByText } = render(React.createElement(ToolTip, { tooltip: mockTooltipContent, position: "top", contentStyle: { color: colors.black }, backgroundColor: "blue", disableShadow: false }, mockChild));
        fireEvent.press(getByText('Child Content'));
        const tooltipContent = getByText('Tooltip Content');
        expect(tooltipContent).toBeTruthy();
        expect(tooltipContent.props.style).toEqual(expect.objectContaining({ color: colors.red }));
    });
});
