import React, { useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { styles } from './Accordions.styles';
import { colors } from '../../../src/constants/colors';
const Accordions = ({ data, renderLeft, renderRight, children, renderTitle, onPress, containerStyles, childrenStyle, onLayoutChange, onChildrenRef, onChildrenHeight, }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const childrenRef = useRef(null);
    const handlePress = (index) => {
        const newIndex = expandedIndex === index ? null : index;
        setExpandedIndex(newIndex);
        onPress(newIndex);
        if (onChildrenRef && newIndex !== null) {
            onChildrenRef(childrenRef);
        }
    };
    const handleLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        if (onLayoutChange) {
            onLayoutChange(width);
        }
    };
    const handleChildrenLayout = (event, index) => {
        const { height } = event.nativeEvent.layout;
        if (onChildrenHeight) {
            onChildrenHeight(height, index);
        }
    };
    return (React.createElement(View, { onLayout: handleLayout, style: styles.container }, data === null || data === void 0 ? void 0 : data.map((item, index) => {
        const isExpanded = expandedIndex === index;
        console.log('item list accordion', item);
        const uniqueKey = `${(item === null || item === void 0 ? void 0 : item.id) || (item === null || item === void 0 ? void 0 : item.title)}-${index}`;
        return (React.createElement(View, { key: uniqueKey, style: Object.assign(Object.assign({}, styles.mainView), { marginBottom: isExpanded ? 0 : 10, borderBottomLeftRadius: isExpanded ? 0 : 10, borderBottomRightRadius: isExpanded ? 0 : 10 }) },
            React.createElement(List.Accordion, { key: uniqueKey, left: () => {
                    if (renderLeft) {
                        return (React.createElement(View, { style: {
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 20,
                            } }, renderLeft({ item, index })));
                    }
                    return null;
                }, right: () => renderRight
                    ? renderRight({
                        item,
                        index,
                        isExpanded,
                        handlePress,
                        color: colors.primaryColor,
                        text: '',
                    })
                    : null, titleStyle: Object.assign(Object.assign({}, styles.titleTextStyle), { color: isExpanded
                        ? colors.accordionTextColor
                        : colors.accordionCloseColor }), title: renderTitle ? renderTitle({ item, index }) : item.title, expanded: isExpanded, onPress: () => handlePress(index), rippleColor: 'transparent', style: Object.assign(Object.assign(Object.assign({}, styles.accordion), { backgroundColor: isExpanded
                        ? colors.accordionBgColor
                        : colors.accordionMainBgColor, borderBottomLeftRadius: isExpanded ? 0 : 10, borderBottomRightRadius: isExpanded ? 0 : 10, borderBottomWidth: isExpanded ? 0 : 0.4 }), containerStyles) },
                React.createElement(View, { ref: isExpanded ? childrenRef : null, testID: "children-content", onLayout: event => handleChildrenLayout(event, index), style: Object.assign(Object.assign(Object.assign({}, styles.childrenStyle), { borderBottomLeftRadius: isExpanded ? 10 : 0, borderBottomRightRadius: isExpanded ? 10 : 0 }), childrenStyle) },
                    React.createElement(Text, { style: styles.childrenTextStyle }, children)))));
    })));
};
export default Accordions;
