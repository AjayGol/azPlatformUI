import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import useHoverEffect from '../../../../hooks/useHoverEffect';
import styles from './UserProfile.styles';
const ProfileComponent = ({ userProfile, extraProfileSettings, handleLogout, userProfileArray = [], }) => {
    const firstName = String(userProfile === null || userProfile === void 0 ? void 0 : userProfile.firstName);
    const lastName = String(userProfile === null || userProfile === void 0 ? void 0 : userProfile.lastName);
    const buttonHover = useHoverEffect(styles.settingButton, styles.settingButtonHover);
    const inits = (firstName, lastName) => {
        if (!firstName || !lastName) {
            return '';
        }
        if ((firstName === null || firstName === void 0 ? void 0 : firstName.length) > 0 && (lastName === null || lastName === void 0 ? void 0 : lastName.length) > 0) {
            return firstName[0] + lastName[0];
        }
        return '';
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(View, { style: styles.profileBody },
            React.createElement(View, { style: styles.profileImage },
                React.createElement(Text, { style: styles.profileIconText }, inits(firstName, lastName))),
            React.createElement(View, { style: styles.profileInfo },
                React.createElement(Text, { style: styles.userName }, `${firstName}, ${lastName}`),
                React.createElement(Text, { style: styles.userEmail }, userProfile === null || userProfile === void 0 ? void 0 : userProfile.email),
                (userProfile === null || userProfile === void 0 ? void 0 : userProfile.prid) ? (React.createElement(Text, { style: styles.userId },
                    "ID: ", userProfile === null || userProfile === void 0 ? void 0 :
                    userProfile.prid)) : null,
                (userProfile === null || userProfile === void 0 ? void 0 : userProfile.lastVisited) ? (React.createElement(Text, { style: styles.lastVisit },
                    "Last Visited: ", userProfile === null || userProfile === void 0 ? void 0 :
                    userProfile.lastVisited)) : null)),
        React.createElement(View, { style: styles.divider }),
        Array.isArray(userProfileArray) && userProfileArray.length > 0 && (React.createElement(React.Fragment, null,
            React.createElement(View, { style: { marginVertical: 4 } }, userProfileArray.map(profile => {
                return (React.createElement(React.Fragment, null,
                    React.createElement(View, { style: [styles.profileBody, styles.proxyProfileBody] },
                        React.createElement(View, { style: [
                                styles.profileImage,
                                styles.proxyProfileImage,
                                profile.proxy ? styles.profileImageBorder : {},
                            ] },
                            React.createElement(Text, { style: [
                                    styles.profileIconText,
                                    styles.proxyProfileText,
                                ] }, inits(profile.firstName, profile.lastName))),
                        React.createElement(View, { style: styles.profileInfo },
                            React.createElement(Text, { style: styles.userName }, `${profile.firstName}, ${profile.lastName}`),
                            React.createElement(Text, { style: styles.territory }, `(${profile.territoryName || ''})`)))));
            })),
            React.createElement(View, { style: styles.divider }))),
        extraProfileSettings && Array.isArray(extraProfileSettings) && (React.createElement(React.Fragment, null,
            React.createElement(View, { style: styles.profileButtons }, extraProfileSettings.map((profile, index) => {
                return (React.createElement(TouchableOpacity, Object.assign({ testID: `profile-setting-${index + 1}`, onPress: profile.onClick, key: index }, buttonHover),
                    profile.icon,
                    React.createElement(Text, { style: styles.settingsText }, profile.label)));
            })),
            React.createElement(View, { style: styles.divider }))),
        React.createElement(TouchableOpacity, Object.assign({}, buttonHover, { onPress: handleLogout }),
            React.createElement(Icon, { name: "logout", size: 18 }),
            React.createElement(Text, { style: styles.settingsText }, "Sign Out"))));
};
export default ProfileComponent;
