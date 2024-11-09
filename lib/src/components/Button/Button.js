import React from 'react';
import { Text, View } from 'react-native';
import { styles, getButtonStyle, getButtonTextStyle, getButtonBGColorStyle, getButtonPadding, } from './Button.styles';
import Icon from '../../common/Icon';
import { Button as ButtonComponent, IconButton } from 'react-native-paper';
import { colors } from '../../constants/colors';
import ToolTip from '../ToolTip';
import { isWeb } from '../../../src/constants/constant';
export const Button = ({ label, onPress, variant = 'filled', type = 'primary', icon, iconLib = 'FontAwesome', badgeNumber, isInactive = false, disabled = false, size = 'small', id = '', imageStyle, tooltip = '', tooltipPosition = 'bottom', }) => {
    const buttonStyle = getButtonStyle(variant, type, !!icon, !!label, size);
    const buttonPadding = getButtonPadding();
    const buttonColorStyle = getButtonBGColorStyle(variant, type, isInactive, disabled);
    const buttonTextStyle = getButtonTextStyle(variant, type, !!icon, isInactive, disabled, size);
    const buttonMainStyle = {
        borderColor: type === 'primary' ? colors.primaryColor : colors.secondaryColor,
        minWidth: 0,
    };
    const buttonOutLineStyle = {
        borderWidth: 0.5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.16,
        shadowRadius: 6,
    };
    const iconStyle = Object.assign({ paddingRight: label ? 6 : 0 }, imageStyle);
    const renderTooltipContent = () => {
        if (tooltip && isWeb) {
            return (React.createElement(ToolTip, { id: `ToolTip_Button_${id}`, position: tooltipPosition, tooltip: React.createElement(View, null,
                    React.createElement(Text, { style: { color: colors.white } }, tooltip)) }, renderButtonContent()));
        }
        return renderButtonContent();
    };
    const renderButtonContent = () => {
        if (icon && !label) {
            return (React.createElement(React.Fragment, null,
                React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(IconButton, { testID: id, icon: () => (React.createElement(Icon, { name: icon, size: size === 'small' ? 20 : 30, color: String(buttonTextStyle.color), lib: iconLib })), size: size === 'small' ? 22 : 34, onPress: onPress, style: [
                            buttonMainStyle,
                            { margin: 0 },
                            variant === 'outline' ? buttonOutLineStyle : {},
                        ], disabled: disabled, containerColor: buttonColorStyle, mode: variant === 'filled' && !isInactive ? 'contained' : 'outlined' }),
                    badgeNumber ? (React.createElement(View, { style: styles.badgeViewIcon },
                        React.createElement(Text, { style: styles.badge }, badgeNumber))) : null)));
        }
        return (React.createElement(ButtonComponent, { onPress: onPress, testID: id, style: buttonPadding, disabled: disabled, mode: variant === 'filled' && !isInactive ? 'contained' : 'outlined', buttonColor: buttonColorStyle, labelStyle: styles.labelDisableIcon, contentStyle: buttonStyle },
            React.createElement(View, { style: styles.buttonContent },
                icon && (React.createElement(View, { style: styles.icon },
                    React.createElement(Icon, { lib: iconLib, name: icon, size: size === 'small' ? 20 : 30, color: String(buttonTextStyle.color), text: label, style: iconStyle }))),
                label && React.createElement(Text, { style: buttonTextStyle }, label))));
    };
    return React.createElement(View, { style: styles.buttonContainer }, renderTooltipContent());
};
