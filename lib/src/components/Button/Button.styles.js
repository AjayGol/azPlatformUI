import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { isWeb } from '../../../src/constants/constant';
const baseButtonStyle = {
    alignSelf: 'flex-start',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 0,
};
const baseTextStyle = {
    fontSize: 14,
    fontWeight: '400',
};
export const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
    },
    icon: {
        margin: 0,
    },
    labelDisableIcon: { marginVertical: 0, marginHorizontal: 0 },
    badgeView: {
        backgroundColor: '#F66565',
        borderRadius: 40,
        position: 'absolute',
        right: -5,
        top: -5,
        minWidth: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeViewIcon: {
        backgroundColor: '#F66565',
        borderRadius: 40,
        position: 'absolute',
        left: 24,
        top: -5,
        minWidth: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        fontSize: 10,
        fontWeight: '500',
        color: '#FFF',
        bottom: 1,
        padding: 3,
    },
});
export const getButtonPadding = () => {
    return {
        paddingTop: isWeb ? 0 : 5,
    };
};
export const getButtonStyle = (variant, type, hasIcon, hasLabel, size) => {
    const isSmall = size === 'small';
    const vertical = hasIcon ? (hasLabel ? 6.5 : 0) : 7;
    return Object.assign(Object.assign({}, baseButtonStyle), { marginVertical: variant === 'filled' ? vertical : vertical - 1, marginHorizontal: hasIcon ? (hasLabel ? 10 : 0) : 16, width: hasIcon && !hasLabel ? (isSmall ? 38 : 50) : undefined, height: hasIcon && !hasLabel ? (isSmall ? 38 : 50) : undefined });
};
export const getButtonBGColorStyle = (variant, type, isInactive, disabled) => {
    if (isInactive) {
        return '#FFFFFF';
    }
    if (disabled && variant === 'filled') {
        return colors.disabledColor;
    }
    return variant === 'filled'
        ? type === 'primary'
            ? colors.primaryColor
            : colors.secondaryColor
        : 'transparent';
};
export const getButtonTextStyle = (variant, type, hasIcon, isInactive, disabled, size) => {
    let color;
    if (isInactive) {
        color = type === 'primary' ? colors.primaryColor : colors.secondaryColor;
    }
    else if (disabled && variant === 'outline') {
        color = colors.disabledColor;
    }
    else {
        color =
            variant === 'filled'
                ? '#FFFFFF'
                : type === 'primary'
                    ? colors.primaryColor
                    : colors.secondaryColor;
    }
    return Object.assign(Object.assign({}, baseTextStyle), { color, marginTop: size === 'large' && hasIcon ? 2 : 0 });
};
