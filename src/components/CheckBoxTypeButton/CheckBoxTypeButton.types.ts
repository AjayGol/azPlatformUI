import {ColorValue, ViewStyle} from 'react-native';

type CheckBoxValue = string | number | boolean | null;

export interface CheckBoxTypeButtonInternalProps {
  onPress?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  borderColor?: string;
  borderWidth?: number;
  autoFocus?: boolean;
  className?: string;
  name?: string;
  value?: CheckBoxValue;
  opacity?: number;
  disabled?: boolean;
  falseValue?: CheckBoxValue;
  check?: boolean;
  status?: 'checked' | 'unchecked' | 'indeterminate';
  style?: ViewStyle;
  hover?: boolean;
  theme?: {
    animation?: {
      scale?: number;
    };
  };
  position?: 'leading' | 'trailing';
  uncheckedColor?: ColorValue;
  color?: ColorValue;
  size?: number;
  checkboxColor?: string;
}

export interface CheckBoxTypeButtonStoryArgs {
  autoFocus?: boolean;
  style?: ViewStyle;
  className?: string;
  name?: string;
  value?: CheckBoxValue;
  disabled?: boolean;
  falseValue?: CheckBoxValue;
  check?: boolean;
}
