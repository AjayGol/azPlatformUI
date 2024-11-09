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
import Modal from 'react-native-modal';
const OpticModal = (_a) => {
    var { isVisible, testID, animationOut, animationIn, onBackdropPress, style, backdropOpacity, useNativeDriver = true, children, hasBackdrop, animationInTiming, animationOutTiming, hardwareAccelerated = true, coverScreen = true } = _a, otherProps = __rest(_a, ["isVisible", "testID", "animationOut", "animationIn", "onBackdropPress", "style", "backdropOpacity", "useNativeDriver", "children", "hasBackdrop", "animationInTiming", "animationOutTiming", "hardwareAccelerated", "coverScreen"]);
    const modalStyle = coverScreen
        ? style
        : [
            style,
            {
                flex: 1,
                position: coverScreen ? 'relative' : 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: 0,
            },
        ];
    return (React.createElement(Modal, Object.assign({ backdropOpacity: backdropOpacity, backdropColor: "rgba(0, 0, 0, 0.5)", style: modalStyle, hardwareAccelerated: hardwareAccelerated, coverScreen: coverScreen, useNativeDriverForBackdrop: true, useNativeDriver: useNativeDriver, onBackdropPress: onBackdropPress, animationIn: animationIn, animationOut: animationOut, hideModalContentWhileAnimating: true, testID: testID, animationInTiming: animationInTiming || 600, animationOutTiming: animationOutTiming || 600, isVisible: isVisible, hasBackdrop: hasBackdrop }, otherProps), children));
};
export default OpticModal;
