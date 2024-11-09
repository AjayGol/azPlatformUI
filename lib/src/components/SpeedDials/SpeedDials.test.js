import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SpeedDials from '../../components/SpeedDials';
const defaultProps = {
    direction: 'up',
    transitionDelay: 250,
    disabled: false,
    showIcon: {
        icon: 'reorder-three-outline',
        size: 'small',
        iconLib: 'Ionicons',
        badgeNumber: 10,
        variant: 'filled',
        shouldNotFillColor: true,
    },
    hideIcon: {
        icon: 'close-outline',
        size: 'small',
        iconLib: 'Ionicons',
        badgeNumber: 10,
        variant: 'filled',
        shouldNotFillColor: true,
    },
    items: [
        {
            onPress: () => alert('Pressed 1'),
            icon: 'refresh',
            size: 'small',
            iconLib: 'Ionicons',
            badgeNumber: 10,
            variant: 'filled',
            shouldNotFillColor: true,
        },
        {
            onPress: () => alert('Pressed 2'),
            icon: 'edit-2',
            size: 'small',
            iconLib: 'Feather',
            badgeNumber: 10,
            variant: 'filled',
            shouldNotFillColor: true,
        },
        {
            onPress: () => alert('Pressed 3'),
            icon: 'trash-2',
            size: 'small',
            iconLib: 'Feather',
            badgeNumber: 10,
            variant: 'filled',
            shouldNotFillColor: true,
        },
    ],
};
describe('SpeedDials Component', () => {
    it('should render correctly with given props', () => {
        const { getByTestId } = render(React.createElement(SpeedDials, Object.assign({}, defaultProps)));
        const mainFab = getByTestId('main-fab');
        expect(mainFab).toBeTruthy();
        defaultProps.items.forEach((item, index) => {
            const itemFab = getByTestId(`item-fab-${index}`);
            expect(itemFab).toBeTruthy();
        });
    });
    it('should handle press events', () => {
        const { getByTestId } = render(React.createElement(SpeedDials, Object.assign({}, defaultProps)));
        const mainFab = getByTestId('main-fab');
        fireEvent.press(mainFab);
        defaultProps.items.forEach((item, index) => {
            const itemFab = getByTestId(`item-fab-${index}`);
            fireEvent.press(itemFab);
        });
    });
});
