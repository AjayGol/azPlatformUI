import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { colors } from '../../constants/colors';
import { styles } from './SideBar.styles';
import Icon from '../../common/Icon';
export const SideBar = ({ list, onPressItem, selectedItem, disableFooter, disableHeader, header, footer, slideIn = false, }) => {
    const [selected, setSelected] = useState(selectedItem);
    const [hoverIndex, setHoveIndex] = useState(-1);
    const [toggleSlideIn, setToggleSlideIn] = useState(slideIn);
    useEffect(() => {
        setSelected(selectedItem);
    }, [selectedItem]);
    const selectHandler = (sideBarItem) => {
        setSelected(sideBarItem);
        onPressItem(sideBarItem);
    };
    const setSelectedBorder = (flag) => {
        return flag ? colors.secondaryColor : 'transparent';
    };
    const setMenuTextStyle = (flag) => {
        return flag ? styles.textActive : null;
    };
    const setIconColor = (flag) => {
        return flag ? colors.secondaryColor : colors.textColor;
    };
    const _renderMenuItem = ({ item, index, }) => {
        return (React.createElement(Pressable, { style: styles.listContainer, onHoverIn: () => setHoveIndex(index), onHoverOut: () => setHoveIndex(-1) },
            React.createElement(TouchableOpacity, { key: item === null || item === void 0 ? void 0 : item.id, onPress: () => selectHandler(item) },
                React.createElement(View, { style: styles.rowStyle },
                    React.createElement(View, { testID: `vertical${index}`, style: Object.assign(Object.assign({}, styles.verticalLine), { borderColor: setSelectedBorder((selected === null || selected === void 0 ? void 0 : selected.id) === (item === null || item === void 0 ? void 0 : item.id)) }) }),
                    React.createElement(View, { style: styles.itemContainer },
                        React.createElement(Icon, { testID: 'menu-icon', lib: (selected === null || selected === void 0 ? void 0 : selected.id) === item.id
                                ? item.activeIconLib
                                : item.inActiveIconLib, name: (selected === null || selected === void 0 ? void 0 : selected.id) === item.id ? item.activeIcon : item.inActiveIcon, size: item.iconSize, color: setIconColor((selected === null || selected === void 0 ? void 0 : selected.id) === item.id || hoverIndex === index), style: styles.iconStyle }),
                        React.createElement(Text, { numberOfLines: 1, style: [
                                styles.text,
                                setMenuTextStyle((selected === null || selected === void 0 ? void 0 : selected.id) === item.id || hoverIndex === index),
                            ] }, item.title))))));
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(View, { style: styles.rowContainer },
            !toggleSlideIn && (React.createElement(View, { style: styles.sideBarContainer },
                !disableHeader && header && React.createElement(View, null, header),
                React.createElement(FlatList, { data: list, style: styles.flatList, showsVerticalScrollIndicator: false, renderItem: _renderMenuItem }),
                !disableFooter && footer && React.createElement(View, null, footer))),
            slideIn && (React.createElement(TouchableOpacity, { style: styles.slideInContainer, onPress: () => setToggleSlideIn(!toggleSlideIn) },
                React.createElement(Icon, { lib: 'MaterialIcons', size: 20, name: toggleSlideIn
                        ? 'keyboard-double-arrow-right'
                        : 'keyboard-double-arrow-left' }))))));
};
