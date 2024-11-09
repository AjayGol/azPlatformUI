import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles, getTabStyle, getTabTextStyle } from './TabsBar.styles';
import { isWeb } from '../../constants/constant';
import { colors } from '../../constants/colors';
import ToolTip from '../ToolTip';
export const TabsBar = ({ links, selectedLink, onClick, isFilesTab, rightIcons, maxWidth, tabContainer, tabTextStyles, tabTouchableOpacity, showToolTip, tooltipPosition = 'bottom', }) => {
    const [selected, setSelected] = useState(selectedLink);
    const scrollViewRef = useRef(null);
    useEffect(() => {
        setSelected(selectedLink);
    }, [selectedLink]);
    const selectHandler = (tab) => {
        setSelected(tab);
        onClick(tab);
    };
    const renderTab = (tab, isSelected) => {
        const tabContent = (React.createElement(TouchableOpacity, { key: tab.id, style: [
                getTabStyle(isSelected),
                isWeb ? {} : { height: isWeb ? 40 : 55, marginHorizontal: 10 },
                tabTouchableOpacity,
            ], onPress: () => selectHandler(tab) },
            React.createElement(View, { style: styles.flexRow },
                isFilesTab && (tab === null || tab === void 0 ? void 0 : tab.fileIcon) ? tab === null || tab === void 0 ? void 0 : tab.fileIcon : null,
                React.createElement(Text, { style: [
                        getTabTextStyle(isSelected),
                        { maxWidth: maxWidth ? maxWidth : 'auto' },
                        isWeb
                            ? {}
                            : {
                                color: isSelected
                                    ? colors.secondaryColor
                                    : colors.textColor,
                                height: 40,
                                marginTop: 15,
                                zIndex: 99,
                                alignSelf: 'center',
                            },
                        tabTextStyles,
                    ], numberOfLines: 1 }, tab.title),
                isFilesTab && (tab === null || tab === void 0 ? void 0 : tab.closeIcon) ? tab === null || tab === void 0 ? void 0 : tab.closeIcon : null)));
        if (showToolTip) {
            return (React.createElement(ToolTip, { position: tooltipPosition, key: tab.id, id: `TabsBar_${tab.id}`, tooltip: React.createElement(View, { style: { flex: 1, maxWidth: 'auto', width: '100%' } },
                    React.createElement(Text, { style: { color: colors.white } }, tab.title)) }, tabContent));
        }
        return tabContent;
    };
    return (React.createElement(View, { style: [styles.tabBarMenu, tabContainer] },
        React.createElement(ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, ref: scrollViewRef }, links.map((tab, index) => (React.createElement(View, { key: index },
            index !== 0 && isFilesTab ? React.createElement(View, { style: styles.divider }) : null,
            renderTab(tab, selected.id === tab.id))))),
        rightIcons && isFilesTab ? rightIcons : null));
};
