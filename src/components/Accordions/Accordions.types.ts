import {ReactNode} from 'react';
import {View} from 'react-native';

interface AccordionItem {
  title: string;
  subTitle?: string;
  id?: string | number;
  content?: string;
}

export interface AccordionsProps {
  data: AccordionItem[];
  renderLeft?: (params: {item: AccordionItem; index: number}) => ReactNode;
  renderRight?: (params: {
    item: AccordionItem;
    index: number;
    color: string;
    text: string;
    isExpanded: boolean;
    handlePress: (index: number) => void;
  }) => ReactNode;
  renderTitle?: (params: {item: AccordionItem; index: number}) => ReactNode;
  children?: ReactNode;
  onPress?: (index: number) => void;
  containerStyles?: object;
  childrenStyle?: object;
  onLayoutChange?: (width: number) => void;
  onChildrenRef?: (ref: React.RefObject<View>) => void;
  onChildrenHeight?: (height: number, index: number) => void;
}
