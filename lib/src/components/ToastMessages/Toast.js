import React, { useEffect, useRef, useState } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, } from 'react-native-reanimated';
import Icon from '../../../src/common/Icon';
import { colors } from '../../constants/colors';
import { TouchableRipple } from 'react-native-paper';
import { styles } from './ToastMessages.styles';
import { isMobile, isWeb } from '../../constants/constant';
const Toast = ({ closable, contentStyle, closeIconSize, closeIconName, closeIconLib, summary, content, severity, detail, severityIconSize, severityIconName, severityIconLib, style, position = 'top-right', visible, life, onClose, testID, sticky, toastIndex, }) => {
    const [toastHeight, setToastHeight] = useState(0);
    const toastRef = useRef(null);
    const translateY = useSharedValue(20);
    const opacity = useSharedValue(0);
    const { width, height } = useWindowDimensions();
    const verticalOffset = toastIndex * toastHeight;
    const centerHorizontal = width / 2 - width * 0.07;
    const centerVertical = height / 2 - height * 0.07;
    const getPositionStyle = position => {
        if (isMobile) {
            return { bottom: 20 + verticalOffset, left: 0, right: 0 };
        }
        else if (isWeb) {
            switch (position) {
                case 'top-right':
                    return { top: 20 + verticalOffset, right: 20 };
                case 'top-left':
                    return { top: 20 + verticalOffset, left: 20 };
                case 'bottom-right':
                    return { bottom: 20 + verticalOffset, right: 20 };
                case 'bottom-left':
                    return { bottom: 20 + verticalOffset, left: 20 };
                case 'top-center':
                    return { top: 20 + verticalOffset, left: centerHorizontal };
                case 'bottom-center':
                    return { bottom: 20 + verticalOffset, left: centerHorizontal };
                case 'center':
                    return { top: centerVertical, left: centerHorizontal };
                default:
                    return { top: 20 + verticalOffset, right: 20 };
            }
        }
        return { top: 20 + verticalOffset, right: 20 };
    };
    const positionStyle = getPositionStyle(position);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
            zIndex: toastIndex,
        };
    }, [toastIndex]);
    useEffect(() => {
        let timer = null;
        if (visible) {
            translateY.value = withTiming(0, { duration: 300 });
            opacity.value = withTiming(1, { duration: 300 });
            if (!sticky) {
                timer = setTimeout(() => {
                    opacity.value = withTiming(0, { duration: 300 }, () => {
                        translateY.value = withTiming(20, { duration: 300 });
                    });
                }, (life || 3400) + toastIndex * 500);
            }
        }
        else {
            translateY.value = 20;
            opacity.value = 0;
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [visible, toastIndex, life, sticky, opacity, translateY]);
    useEffect(() => {
        if (!visible) {
            const closeTimeout = setTimeout(() => {
                if (onClose) {
                    onClose();
                }
            }, 300);
            return () => {
                clearTimeout(closeTimeout);
            };
        }
        return () => { };
    }, [visible, onClose]);
    if (!visible) {
        return null;
    }
    const onLayout = event => {
        const { height } = event.nativeEvent.layout;
        setToastHeight(height);
    };
    const backgroundColor = (() => {
        switch (severity) {
            case 'success':
                return colors.successBgColor;
            case 'error':
                return colors.errorBgColor;
            case 'warning':
                return colors.warningBgColor;
            default:
                return colors.successBgColor;
        }
    })();
    const severityColor = (() => {
        switch (severity) {
            case 'success':
                return colors.successTextColor;
            case 'error':
                return colors.errorTextColor;
            case 'warning':
                return colors.warningTextColor;
            default:
                return colors.successTextColor;
        }
    })();
    const borderLeftColor = (() => {
        switch (severity) {
            case 'success':
                return colors.succesBorderColor;
            case 'error':
                return colors.errorBorderColor;
            case 'warning':
                return colors.warningBorderColor;
            default:
                return colors.successBgColor;
        }
    })();
    const rippleColor = isMobile ? 'rgba(255, 255, 255, 0.4)' : colors.white;
    const onCloseHandler = () => {
        if (closable) {
            onClose();
        }
    };
    return (React.createElement(Animated.View, { style: [styles.toast, positionStyle, animatedStyle], ref: toastRef, onLayout: onLayout },
        React.createElement(View, { style: [
                styles.mainContainer,
                { backgroundColor, borderLeftColor },
                style,
            ] },
            React.createElement(View, { style: styles.iconView },
                React.createElement(Icon, { testID: testID, lib: severityIconLib, name: severityIconName, size: severityIconSize, color: severityColor, style: styles.iconStyle }),
                React.createElement(View, { style: styles.titleContainer }, content ? (React.createElement(Text, { style: Object.assign(Object.assign(Object.assign({}, styles.successData), { color: severityColor }), contentStyle) }, content)) : (React.createElement(React.Fragment, null,
                    React.createElement(Text, { numberOfLines: 1, style: Object.assign(Object.assign(Object.assign({}, styles.titleText), contentStyle), { color: severityColor }) }, summary),
                    React.createElement(Text, { style: Object.assign(Object.assign(Object.assign({}, styles.successData), contentStyle), { color: severityColor }) }, detail))))),
            closable && (React.createElement(TouchableRipple, { onPress: onCloseHandler, rippleColor: rippleColor, style: styles.rippleContainer },
                React.createElement(View, { style: styles.iconBox },
                    React.createElement(Icon, { lib: closeIconLib, name: closeIconName, size: closeIconSize, color: severityColor })))))));
};
export default Toast;
