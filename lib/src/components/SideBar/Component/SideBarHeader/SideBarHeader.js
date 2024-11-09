import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './SideBarHeader.styles';
import { colors } from '../../../../constants/colors';
import Icon from '../../../../common/Icon/Icon';
const SideBarHeader = ({ iconLib, iconName, iconSize, onPressIcon, }) => {
    return (React.createElement(TouchableOpacity, { activeOpacity: 0.6, style: styles.headerContainer, onPress: onPressIcon },
        React.createElement(Icon, { lib: iconLib, name: iconName, size: iconSize || 25, testID: 'header-icon', color: colors.white, style: styles.iconStyle })));
};
export default SideBarHeader;
