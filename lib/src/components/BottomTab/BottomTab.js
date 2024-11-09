import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './BottomTab.styles';
import Popover from 'react-native-popover-view';
import { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import Icon from '../../common/Icon';
import { colors } from '../../constants/colors';
const BottomTab = ({ list, selectedIndex, containerStyle, }) => {
    const [selected, setSelected] = useState(selectedIndex);
    const onPress = (item, index) => {
        setSelected(index === selected ? null : index);
        item.onPress(item);
    };
    return (React.createElement(View, { style: [styles.container, containerStyle] }, list.map((item, index) => (React.createElement(View, { key: index, style: { alignItems: 'center' } },
        React.createElement(Popover, { from: React.createElement(TouchableOpacity, { style: { alignItems: 'center', justifyContent: 'center' }, onPress: () => onPress(item, index) },
                React.createElement(Icon, { lib: item === null || item === void 0 ? void 0 : item.activeIconLib, name: item.activeIcon, size: item.iconSize, color: colors.secondaryColor }),
                React.createElement(Text, { style: [styles.titleStyle, item.titleStyle] }, item.title)), popoverStyle: [styles.popOverView, item.popoverStyle], isVisible: item.isPopoverVisible && index === selected, onRequestClose: () => setSelected(-1), mode: PopoverMode.RN_MODAL, placement: item.popoverPlacement || PopoverPlacement.BOTTOM, backgroundStyle: { backgroundColor: 'transparent' } }, item.popoverView))))));
};
export default BottomTab;
