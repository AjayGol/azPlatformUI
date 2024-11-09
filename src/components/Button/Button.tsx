/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text, View, ViewStyle, TextStyle} from 'react-native';
import {ButtonProps} from './Button.types';
import {
  styles,
  getButtonStyle,
  getButtonTextStyle,
  getButtonBGColorStyle,
  getButtonPadding,
} from './Button.styles';
import Icon from '../../common/Icon';
import {Button as ButtonComponent, IconButton} from 'react-native-paper';
import {colors} from '../../constants/colors';
import ToolTip from '../ToolTip';
import {isWeb} from '../../../src/constants/constant';

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'filled',
  type = 'primary',
  icon,
  iconLib = 'FontAwesome',
  badgeNumber,
  isInactive = false,
  disabled = false,
  size = 'small',
  id = '',
  imageStyle,
  tooltip = '',
  tooltipPosition = 'bottom',
}) => {
  const buttonStyle: ViewStyle = getButtonStyle(
    variant,
    type,
    !!icon,
    !!label,
    size,
  );
  const buttonPadding: ViewStyle = getButtonPadding();
  const buttonColorStyle: string = getButtonBGColorStyle(
    variant,
    type,
    isInactive,
    disabled,
  );
  const buttonTextStyle: TextStyle = getButtonTextStyle(
    variant,
    type,
    !!icon,
    isInactive,
    disabled,
    size,
  );

  const buttonMainStyle: ViewStyle = {
    borderColor:
      type === 'primary' ? colors.primaryColor : colors.secondaryColor,
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

  const iconStyle: ViewStyle = {
    paddingRight: label ? 6 : 0,
    ...imageStyle,
  };

  const renderTooltipContent = () => {
    if (tooltip && isWeb) {
      return (
        <ToolTip
          id={`ToolTip_Button_${id}`}
          position={tooltipPosition}
          tooltip={
            <View>
              <Text style={{color: colors.white}}>{tooltip}</Text>
            </View>
          }>
          {renderButtonContent()}
        </ToolTip>
      );
    }
    return renderButtonContent();
  };

  const renderButtonContent = () => {
    if (icon && !label) {
      return (
        <>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton
              testID={id}
              icon={() => (
                <Icon
                  name={icon}
                  size={size === 'small' ? 20 : 30}
                  color={String(buttonTextStyle.color)}
                  lib={iconLib}
                />
              )}
              size={size === 'small' ? 22 : 34}
              onPress={onPress}
              style={[
                buttonMainStyle,
                {margin: 0},
                variant === 'outline' ? buttonOutLineStyle : {},
              ]}
              disabled={disabled}
              containerColor={buttonColorStyle}
              mode={
                variant === 'filled' && !isInactive ? 'contained' : 'outlined'
              }
            />
            {badgeNumber ? (
              <View style={styles.badgeViewIcon}>
                <Text style={styles.badge}>{badgeNumber}</Text>
              </View>
            ) : null}
          </View>
        </>
      );
    }

    return (
      <ButtonComponent
        onPress={onPress}
        testID={id}
        style={buttonPadding}
        disabled={disabled}
        mode={variant === 'filled' && !isInactive ? 'contained' : 'outlined'}
        buttonColor={buttonColorStyle}
        labelStyle={styles.labelDisableIcon}
        contentStyle={buttonStyle}>
        <View style={styles.buttonContent}>
          {icon && (
            <View style={styles.icon}>
              <Icon
                lib={iconLib}
                name={icon}
                size={size === 'small' ? 20 : 30}
                color={String(buttonTextStyle.color)}
                text={label}
                style={iconStyle}
              />
            </View>
          )}
          {label && <Text style={buttonTextStyle}>{label}</Text>}
        </View>
      </ButtonComponent>
    );
  };

  return <View style={styles.buttonContainer}>{renderTooltipContent()}</View>;
};
