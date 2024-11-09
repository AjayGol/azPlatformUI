var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Checkbox } from 'react-native-paper';
import { Pressable, StyleSheet } from 'react-native';
import { isWeb } from '../../../src/constants/constant';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 3,
        padding: 0,
    },
});
const CheckBoxTypeButton = props => {
    const { onPress, onHoverIn, onHoverOut, borderColor, borderWidth, opacity, status, style } = props, rest = __rest(props, ["onPress", "onHoverIn", "onHoverOut", "borderColor", "borderWidth", "opacity", "status", "style"]);
    return (React.createElement(Pressable, { onHoverIn: onHoverIn, onHoverOut: onHoverOut, onPress: onPress, style: [styles.container, style, { borderColor, borderWidth, opacity }] }, isWeb ? (React.createElement(Checkbox, Object.assign({ status: status }, rest))) : (React.createElement(Checkbox.Android, Object.assign({ status: status }, rest)))));
};
export default CheckBoxTypeButton;
