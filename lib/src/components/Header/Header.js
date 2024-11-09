import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Header.styles';
import UserProfile from './Components/UserProfile';
import Gradient from '../../common/Gradient';
import DeviceInfo from 'react-native-device-info';
const Header = ({ logo, title, icons, children, disableProfile = false, userProfile, handleLogout, extraProfileSettings, userProfileArray, rightIcon, }) => {
    const appLogo = logo ? logo : { uri: './Images/fxhub_logo.png' };
    return (React.createElement(Gradient, { colors: ['#BF286E', '#78154F'], start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: styles.header },
        React.createElement(View, { style: styles.headerSection },
            React.createElement(View, { style: styles.headerImgCon },
                React.createElement(View, { style: styles.slantBox }),
                React.createElement(Image, { source: appLogo, style: styles.logoImage })),
            React.createElement(View, { style: styles.titleContainer },
                React.createElement(Text, { style: styles.headerTitle, numberOfLines: 1 }, title)),
            (children && (React.createElement(View, { style: [
                    styles.childWrapper,
                    {
                        marginRight: disableProfile ? 16 : 0,
                        alignItems: DeviceInfo.isTablet() ? 'center' : 'flex-end',
                    },
                ] }, children))) ||
                null,
            rightIcon && DeviceInfo.isTablet() ? (React.createElement(View, { style: styles.rightIconStyle }, rightIcon)) : null,
            !(rightIcon && DeviceInfo.isTablet()) ? (!disableProfile ? (React.createElement(View, { style: styles.profileDivier })) : null) : null,
            !(rightIcon && DeviceInfo.isTablet()) && icons && !disableProfile ? (React.createElement(View, { style: styles.iconView },
                icons && !Array.isArray(icons) && (React.createElement(View, { style: { marginLeft: 16 } }, icons)),
                (icons &&
                    Array.isArray(icons) &&
                    icons.map((icon, index) => {
                        const isLast = index === icons.length - 1;
                        return (React.createElement(TouchableOpacity, { style: [styles.icon, { marginRight: isLast ? 0 : 16 }], key: icon.id, onPress: icon.onClick }, React.cloneElement(icon.icon, { color: '#FFF' })));
                    })) ||
                    null)) : null,
            !(rightIcon && DeviceInfo.isTablet()) && !disableProfile ? (React.createElement(UserProfile, { userProfile: userProfile, extraProfileSettings: extraProfileSettings, handleLogout: handleLogout, userProfileArray: userProfileArray })) : null)));
};
export default Header;
