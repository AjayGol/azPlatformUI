import React from 'react';
import Icon from '../../../../common/Icon';
import { Text, View } from 'react-native';
import { colors } from '../../../../constants/colors';
import { styles } from './ModalHeader.style';
const ModalHeader = ({ iconColor, iconLib, iconName, iconSize, title, onPressIcon, }) => {
    return (React.createElement(View, { style: styles.headerContainer },
        React.createElement(Text, { style: styles.title }, title),
        React.createElement(Icon, { name: iconName, onPressIcon: onPressIcon, lib: iconLib, size: iconSize, color: iconColor || colors.borderColor })));
};
export default ModalHeader;
