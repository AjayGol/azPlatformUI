import {TextStyle, ViewStyle} from 'react-native';

export interface Tab {
  id: number;
  title: string;
  path?: string;
  fileIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

export interface TabBarProps {
  links: Tab[];
  selectedLink: Tab;
  onClick: (tab: Tab) => void;
  isFilesTab?: boolean;
  rightIcons?: React.ReactNode;
  maxWidth?: number;
  tabContainer: ViewStyle;
  tabTextStyles: TextStyle;
  tabTouchableOpacity: ViewStyle;
  showToolTip?: boolean;
  tooltipPosition: string;
}
