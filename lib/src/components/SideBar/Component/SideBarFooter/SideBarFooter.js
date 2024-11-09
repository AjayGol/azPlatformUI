import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { FX_HUB_LOGO } from '../../../../assets/Images';
import { styles } from './SideBarFooter.styles';
const SideBarFooter = ({ imgSource, onPress, title, }) => {
    return (React.createElement(TouchableOpacity, { activeOpacity: 0.6, testID: 'footer', style: styles.footerContainer, onPress: onPress },
        React.createElement(Text, { style: styles.footerText }, title),
        React.createElement(Image, { source: imgSource || FX_HUB_LOGO, style: styles.footerLogo, resizeMode: 'contain' })));
};
export default SideBarFooter;
