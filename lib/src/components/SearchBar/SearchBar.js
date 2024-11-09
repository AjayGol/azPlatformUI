var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './SearchBar.styles';
import Button from '../Button';
import { DynamicDimension } from '../../constants/DynamicDimension';
import SpeedDials from '../SpeedDials';
import ToolTip from '../ToolTip';
import { colors } from '../../../src/constants/colors';
export const SearchBar = ({ left = [], children, selectedLeftItem, selectedRightItem, position = 'center', extreamLeft, extreamRight, showContainerBorder = true, right = [], }) => {
    const [leftSelected, setLeftSelected] = useState(selectedLeftItem);
    const [rightSelected, setRightSelected] = useState(selectedRightItem);
    const { isMobileView } = DynamicDimension();
    const handleIconPress = (item, side) => {
        if (side === 'left') {
            setLeftSelected(item);
            item.onPress();
        }
        else {
            setRightSelected(item);
            item.onPress();
        }
    };
    const getButtonProps = (item, selectedId) => ({
        variant: item.shouldNotFillColor
            ? item.variant
            : item.id === selectedId
                ? 'filled'
                : 'outline',
        type: item.shouldNotFillColor
            ? item.type
            : item.id === selectedId
                ? 'secondary'
                : 'primary',
    });
    const visibleRightButtons = isMobileView ? right.slice(0, 1) : right;
    const speedDialItems = isMobileView ? right.slice(1) : right;
    const renderButtonWithTooltip = (item, side) => {
        const { tooltip, tooltipPosition } = item, rest = __rest(item, ["tooltip", "tooltipPosition"]);
        const buttonContent = (React.createElement(Button, Object.assign({}, rest, { variant: getButtonProps(item, side === 'left' ? leftSelected === null || leftSelected === void 0 ? void 0 : leftSelected.id : rightSelected === null || rightSelected === void 0 ? void 0 : rightSelected.id).variant, type: getButtonProps(item, side === 'left' ? leftSelected === null || leftSelected === void 0 ? void 0 : leftSelected.id : rightSelected === null || rightSelected === void 0 ? void 0 : rightSelected.id).type, onPress: () => handleIconPress(item, side) })));
        return tooltip ? (React.createElement(View, { key: item.id },
            React.createElement(ToolTip, { id: item.id, key: item.id, position: tooltipPosition, tooltip: React.createElement(View, null,
                    React.createElement(Text, { style: { color: colors.white } }, tooltip)) }, buttonContent))) : (buttonContent);
    };
    return (React.createElement(View, { style: [styles.container, showContainerBorder && styles.containerBorder] },
        extreamLeft && React.createElement(View, null, extreamLeft),
        React.createElement(View, { style: [styles.innerContainer, { justifyContent: position }] },
            left.length > 0 && (React.createElement(View, { style: styles.leftContainer, testID: "left-button" }, left.map((item, index) => (React.createElement(View, { key: index, style: styles.iconContainer }, renderButtonWithTooltip(item, 'left')))))),
            children && React.createElement(View, { style: styles.childContainer }, children),
            React.createElement(View, { style: styles.rightContainer, testID: "right-button" },
                visibleRightButtons.map((item, index) => (React.createElement(View, { key: index, style: styles.iconContainer }, renderButtonWithTooltip(item, 'right')))),
                isMobileView && (React.createElement(View, { style: styles.speedDialContainer, testID: "speed-dial" },
                    React.createElement(SpeedDials, { direction: "down", transitionDelay: 250, items: speedDialItems, disabled: false, showIcon: {
                            icon: 'reorder-three-outline',
                            size: 'small',
                            iconLib: 'Ionicons',
                            badgeNumber: 10,
                            variant: 'filled',
                            shouldNotFillColor: true,
                        }, hideIcon: {
                            icon: 'close-outline',
                            size: 'small',
                            iconLib: 'Ionicons',
                            badgeNumber: 10,
                            variant: 'filled',
                            shouldNotFillColor: true,
                        } }))))),
        extreamRight && React.createElement(View, null, extreamRight)));
};
