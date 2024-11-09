import {ViewStyle} from 'react-native';
import {IconLibrary} from '../../common/Icon/Lib';

export type ButtonProps = {
  id?: string;
  onPress?: () => void | undefined;
  label?: string;
  variant?: 'filled' | 'outline';
  type?: 'primary' | 'secondary';
  icon?: string;
  badgeNumber?: number;
  isInactive?: boolean;
  disabled?: boolean;
  iconLib?: IconLibrary;
  size?: 'small' | 'large';
  imageStyle?: ViewStyle;
  tooltip?: string;
  tooltipPosition?: string;
};
