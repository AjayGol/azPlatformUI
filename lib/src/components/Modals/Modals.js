import React from 'react';
import { View, SafeAreaView, ScrollView, useWindowDimensions, } from 'react-native';
import { styles } from './Modals.styles';
import { BOTTOM, LEFT, RIGHT, SLIDE_IN_DOWN, SLIDE_IN_LEFT, SLIDE_IN_RIGHT, SLIDE_IN_UP, SLIDE_OUT_DOWN, SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT, SLIDE_OUT_UP, TOP, ZOOM_IN, ZOOM_OUT, } from './Constant';
import { screenWidth } from '../../constants/constant';
import OpticModal from '../../common/Modal';
export const Modals = ({ isVisible, onClose, position = RIGHT, header, footer, children, modalWidth = screenWidth / 2, modalType = 'dialog', onBackdropPress = true, modalContainerStyle, headerContainerStyle, footerContainerStyle, childContainerStyle, hasBackdrop = true, modalStyle, coverScreen = true, }) => {
    var _a, _b;
    const _setModalAnimation = (pos) => {
        switch (pos) {
            case RIGHT:
                return {
                    animationIn: SLIDE_IN_RIGHT,
                    animationOut: SLIDE_OUT_RIGHT,
                };
            case LEFT:
                return {
                    animationIn: SLIDE_IN_LEFT,
                    animationOut: SLIDE_OUT_LEFT,
                };
            case TOP:
                return {
                    animationIn: SLIDE_IN_DOWN,
                    animationOut: SLIDE_OUT_UP,
                };
            case BOTTOM:
                return {
                    animationIn: SLIDE_IN_UP,
                    animationOut: SLIDE_OUT_DOWN,
                };
            default:
                return {
                    animationIn: SLIDE_IN_UP,
                    animationOut: SLIDE_OUT_UP,
                };
        }
    };
    const _setModalStyle = (pos, mWidth) => {
        switch (pos) {
            case RIGHT:
                return Object.assign(Object.assign({}, styles.sideBarRightContainer), { width: mWidth });
            case LEFT:
                return Object.assign(Object.assign({}, styles.sideBarLeftContainer), { width: mWidth });
            case TOP:
                return Object.assign(Object.assign({}, styles.sideBarCenterConatiner), { width: mWidth });
            case BOTTOM:
                return Object.assign(Object.assign({}, styles.sideBarCenterConatiner), { width: mWidth });
        }
        return Object.assign(Object.assign({}, styles.sideBarCenterConatiner), { width: mWidth });
    };
    const onPressClose = () => {
        onClose();
    };
    const { width, height } = useWindowDimensions();
    return (React.createElement(React.Fragment, null, isVisible && (React.createElement(View, { style: Object.assign(Object.assign({}, styles.container), { width: width, height: height }) },
        React.createElement(OpticModal, { isVisible: isVisible, testID: modalType, position: position, coverScreen: coverScreen, animationOut: modalType === 'dialog'
                ? ZOOM_OUT
                : (_a = _setModalAnimation(position)) === null || _a === void 0 ? void 0 : _a.animationOut, animationIn: modalType === 'dialog'
                ? ZOOM_IN
                : (_b = _setModalAnimation(position)) === null || _b === void 0 ? void 0 : _b.animationIn, onBackdropPress: onBackdropPress ? onPressClose : undefined, style: modalType === 'dialog'
                ? styles.dialogModal
                : Object.assign(Object.assign({}, styles.sideBarModal), modalStyle), hasBackdrop: hasBackdrop, backdropOpacity: 0.5, useNativeDriver: true }, modalType === 'dialog' ? (React.createElement(SafeAreaView, { style: [
                styles.dialogModalContainer,
                Object.assign({ width: modalWidth }, modalContainerStyle),
            ] },
            header && (React.createElement(View, { style: [styles.headerContainer, Object.assign({}, headerContainerStyle)] }, header)),
            children && (React.createElement(ScrollView, { style: [styles.childContainer, Object.assign({}, childContainerStyle)], showsVerticalScrollIndicator: false }, children)),
            footer && (React.createElement(View, { style: [styles.footerContainer, Object.assign({}, footerContainerStyle)] }, footer)))) : (React.createElement(SafeAreaView, { style: [
                _setModalStyle(position, modalWidth),
                Object.assign({}, modalContainerStyle),
            ] },
            header && (React.createElement(View, { style: [styles.headerContainer, Object.assign({}, headerContainerStyle)] }, header)),
            children && (React.createElement(ScrollView, { style: [styles.childContainer, Object.assign({}, childContainerStyle)], showsVerticalScrollIndicator: false },
                React.createElement(View, { style: { flex: 1 } }, children))),
            footer && (React.createElement(View, { style: [styles.footerContainer, Object.assign({}, footerContainerStyle)] }, footer)))))))));
};
