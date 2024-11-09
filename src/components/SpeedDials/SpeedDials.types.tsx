import {IconLibrary} from 'src/common/Icon/Lib';
import {ButtonProp} from '../SearchBar/SearchBar.types';

export interface SpeedDialItem {
  onPress: () => void;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  iconLib?: IconLibrary;
}

export interface SpeedDialProps {
  items: ButtonProp[];
  showIcon: ButtonProp;
  disabled?: boolean;
  hideIcon: ButtonProp;
  selectedItem?: ButtonProp;
  direction?: 'left' | 'up' | 'right' | 'down';
  transitionDelay?: number;
}
