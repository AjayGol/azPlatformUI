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
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './CustomCheckBox.styles';
const CustomCheckBox = (_a) => {
    var { onPress, checked, containerStyle } = _a, props = __rest(_a, ["onPress", "checked", "containerStyle"]);
    return (React.createElement(TouchableOpacity, Object.assign({ onPress: onPress, style: [
            styles.customCheckboxWrapper,
            containerStyle,
            checked ? styles.checkedStyles : {},
        ] }, props), checked ? React.createElement(Icon, { name: "check", size: 16, color: '#FFF' }) : null));
};
export default CustomCheckBox;
