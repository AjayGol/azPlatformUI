import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from '../../../../common/Icon';
import { colors } from '../../../../constants/colors';
const CustomChip = ({ label, icon, iconLib, iconSize, onPressIcon, value, iconColor, }) => {
    return (React.createElement(View, { style: styles.chipContainer },
        React.createElement(Text, { style: styles.label }, label),
        React.createElement(TouchableOpacity, { onPress: () => {
                onPressIcon(value);
            }, activeOpacity: 0.5 },
            React.createElement(Icon, { name: icon, lib: iconLib, size: iconSize || 20, color: iconColor || colors.primaryColor, style: { marginLeft: 7, padding: 3 } }))));
};
const styles = StyleSheet.create({
    chipContainer: {
        backgroundColor: colors.lightBgPrimaryColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        borderRadius: 3,
    },
    label: {
        color: colors.primaryColor,
        fontSize: 12,
    },
});
export default CustomChip;
