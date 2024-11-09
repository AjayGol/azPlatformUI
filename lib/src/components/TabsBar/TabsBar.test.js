import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TabsBar from '../../components/TabsBar';
import { colors } from '../../constants/colors';
const tabs = [
    { id: 1, title: 'Tab 1' },
    { id: 2, title: 'Tab 2' },
    { id: 3, title: 'Tab 3' },
];
const onClickMock = jest.fn();
describe('TabsBar', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('renders correctly with default props', () => {
        const { getByText } = render(React.createElement(TabsBar, { links: tabs, selectedLink: tabs[0], onClick: onClickMock }));
        expect(getByText('Tab 1')).toBeTruthy();
        expect(getByText('Tab 2')).toBeTruthy();
        expect(getByText('Tab 3')).toBeTruthy();
    });
    test('calls onClick with the correct tab when a tab is clicked', () => {
        const { getByText } = render(React.createElement(TabsBar, { links: tabs, selectedLink: tabs[0], onClick: onClickMock }));
        fireEvent.press(getByText('Tab 2'));
        expect(onClickMock).toHaveBeenCalledWith(tabs[1]);
    });
    test('shows the correct active tab styling', () => {
        const { getByText } = render(React.createElement(TabsBar, { links: tabs, selectedLink: tabs[1], onClick: onClickMock }));
        let tabStyle = getByText('Tab 2').parent.parent.props.style;
        expect(tabStyle).toMatchObject({
            borderBottomColor: colors.secondaryColor,
        });
    });
    test('updates selected tab when a new tab is clicked', () => {
        const { getByText, rerender } = render(React.createElement(TabsBar, { links: tabs, selectedLink: tabs[0], onClick: onClickMock }));
        fireEvent.press(getByText('Tab 2').parent.parent);
        rerender(React.createElement(TabsBar, { links: tabs, selectedLink: tabs[1], onClick: onClickMock }));
        expect(getByText('Tab 2').parent.parent.props.style).toMatchObject({
            borderBottomColor: colors.secondaryColor,
        });
        expect(getByText('Tab 1').parent.parent.props.style).toMatchObject({
            borderBottomColor: 'transparent',
        });
        expect(getByText('Tab 3').parent.parent.props.style).toMatchObject({
            borderBottomColor: 'transparent',
        });
    });
});
