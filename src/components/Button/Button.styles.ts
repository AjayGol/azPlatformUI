import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../constants/colors';
import {isWeb} from '../../../src/constants/constant';

const baseButtonStyle: ViewStyle = {
  alignSelf: 'flex-start',
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  paddingVertical: 0,
};

const baseTextStyle: TextStyle = {
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
  labelDisableIcon: {marginVertical: 0, marginHorizontal: 0},
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

export const getButtonPadding = (): ViewStyle => {
  return {
    paddingTop: isWeb ? 0 : 5,
  };
};

export const getButtonStyle = (
  variant: 'filled' | 'outline',
  type: 'primary' | 'secondary',
  hasIcon: boolean,
  hasLabel: boolean,
  size: 'small' | 'large',
): ViewStyle => {
  const isSmall = size === 'small';
  const vertical = hasIcon ? (hasLabel ? 6.5 : 0) : 7;

  return {
    ...baseButtonStyle,
    marginVertical: variant === 'filled' ? vertical : vertical - 1,
    marginHorizontal: hasIcon ? (hasLabel ? 10 : 0) : 16,
    width: hasIcon && !hasLabel ? (isSmall ? 38 : 50) : undefined,
    height: hasIcon && !hasLabel ? (isSmall ? 38 : 50) : undefined,
  };
};

export const getButtonBGColorStyle = (
  variant: 'filled' | 'outline',
  type: 'primary' | 'secondary',
  isInactive: boolean,
  disabled: boolean,
): string => {
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

export const getButtonTextStyle = (
  variant: 'filled' | 'outline',
  type: 'primary' | 'secondary',
  hasIcon: boolean,
  isInactive: boolean,
  disabled: boolean,
  size: 'small' | 'large',
): TextStyle => {
  let color;

  if (isInactive) {
    color = type === 'primary' ? colors.primaryColor : colors.secondaryColor;
  } else if (disabled && variant === 'outline') {
    color = colors.disabledColor;
  } else {
    color =
      variant === 'filled'
        ? '#FFFFFF'
        : type === 'primary'
        ? colors.primaryColor
        : colors.secondaryColor;
  }

  return {
    ...baseTextStyle,
    color,
    marginTop: size === 'large' && hasIcon ? 2 : 0,
  };
};
