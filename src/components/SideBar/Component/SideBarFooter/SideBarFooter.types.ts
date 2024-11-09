import {ImageSourcePropType} from 'react-native';

export interface SideBarFooterProps {
  title?: string;
  imgSource?: ImageSourcePropType;
  onPress?: () => void;
}
