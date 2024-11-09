import {ViewStyle} from 'react-native';
import {Placement} from 'react-native-popover-view/dist/Types';
import {IconLibrary} from '../../common/Icon/Lib';

export interface TabList {
  id?: string | number;
  activeIcon?: string;
  inActiveIcon?: string;
  activeIconLib?: IconLibrary;
  inActiveIconLib?: string;
  iconSize?: number;
  title?: string;
  isPopoverVisible?: boolean;
  popoverView?: React.ReactNode;
  popoverPlacement?: Placement;
  titleStyle?: ViewStyle;
  popoverStyle?: ViewStyle;
  onPress?: (item: unknown) => void;
}
export interface BottomTabProps {
  list?: TabList[];
  selectedIndex?: number;
  containerStyle?: ViewStyle;
}
