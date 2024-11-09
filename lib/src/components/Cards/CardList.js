import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Cards from './Cards';
import { deviceWidth, isIpad, isMobile, isWeb } from '../../constants/constant';
const renderItem = ({ item, index, borderRadius, }) => React.createElement(Cards, Object.assign({}, item, { index: index, borderRadius: borderRadius }));
const CardList = ({ data, borderRadius, scrollEnabled = true, }) => {
    if (isWeb) {
        return (React.createElement(View, { style: CardListStyles.gridContainer }, data.map((item, index) => (React.createElement(Cards, Object.assign({ key: index }, item, { index: index, borderRadius: borderRadius, className: item.className }))))));
    }
    return (React.createElement(FlatList, { showsVerticalScrollIndicator: false, scrollEnabled: scrollEnabled, showsHorizontalScrollIndicator: false, data: data, style: CardListStyles.list, contentContainerStyle: CardListStyles.contentContainer, numColumns: 3, renderItem: item => renderItem(Object.assign(Object.assign({}, item), { borderRadius })), keyExtractor: (item, index) => index.toString() }));
};
const CardListStyles = StyleSheet.create({
    list: {
        flex: 1,
    },
    contentContainer: {
        justifyContent: isMobile && !isIpad ? 'center' : 'flex-start',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 20,
    },
});
const webStyles = StyleSheet.create({
    gridContainer: {
        gridTemplateColumns: `repeat(auto-fill, minmax(${deviceWidth * 0.25}px, 1fr))`,
        gap: 20,
        padding: 20,
        display: 'grid',
        boxSizing: 'border-box',
    },
});
const applyWebStyles = (styles) => {
    if (isWeb) {
        return Object.assign(Object.assign({}, styles), webStyles.gridContainer);
    }
    return styles;
};
const finalStyles = Object.assign({}, applyWebStyles(CardListStyles.gridContainer));
CardListStyles.gridContainer = finalStyles;
export default CardList;
