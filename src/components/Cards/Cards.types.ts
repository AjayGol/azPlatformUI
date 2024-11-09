import {ViewStyle} from 'react-native';
import {IconLibrary} from '../../common/Icon/Lib';

export interface CardsProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  borderRadius?: boolean;
  index?: number;
  className?: ViewStyle;
  data?: Array<{
    header: React.ReactNode;
    footer: React.ReactNode;
    children: React.ReactNode;
    style?: ViewStyle;
  }>;
}

export interface ActionButtonProps {
  id: number;
  iconAction: string;
  iconLibrary: IconLibrary;
  iconName: string;
  color: string;
  backgroundColor: string;
  disabled: boolean;
}

export interface CardHeaderProps {
  text: string;
  textColor?: string;
  date?: string;
  checkIconLib?: IconLibrary;
  checkIconName?: string;
  checkIconColor?: string;
  checkIconBgColor?: string;
  checkedIconSize?: number;
  status?: string;
  checked?: boolean;
  onCheckboxPress?: () => void;
}

export interface CardFooterProps {
  heartClicked?: boolean;
  onPressItem?: (item: ActionButtonProps) => void;
  fileImage?: {uri: string};
  disableButtons?: boolean;
  actionIconSize?: number;
  borderRadius?: boolean;
  date?: string;
}

export interface CardChildrenProps {
  imageSource?: {uri: string};
  IconName?: string;
  IconLib?: IconLibrary;
  IconSize?: number;
  IconColor?: string;
  locationIconName?: string;
  locationIconLib?: IconLibrary;
  locationIconSize?: number;
  description?: string;
}
