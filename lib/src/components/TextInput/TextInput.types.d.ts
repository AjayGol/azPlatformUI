/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { IconLibrary } from '../../common/Icon/Lib';
import { TextInputProps as PaperTextInputProps } from 'react-native-paper';
export interface SortOption {
    title: string;
    value: string;
    onPress?: (option: SortOption) => void;
}
export interface TextInputProps extends PaperTextInputProps {
    left?: React.ReactNode;
    right?: React.ReactNode;
    underlineStyle?: StyleProp<ViewStyle>;
    leftIconLib?: IconLibrary;
    leftIconName?: string;
    leftIconClick?: () => void;
    rightIconLib?: IconLibrary;
    rightIconName?: string;
    rightIconClick?: () => void;
    onSortClick?: () => void;
    sortOptions?: SortOption[];
    selectedSortOption?: string;
    invalid?: boolean;
    required?: boolean;
    floatingLabel?: boolean;
    leftIconSize?: number;
    tooltip?: string;
    tooltipPosition?: string;
    rightIconSize?: number;
    multiline?: boolean;
    sortIconName?: string;
    sortVisible?: boolean;
    sortIconLib?: IconLibrary;
    sortIconSize?: number;
    heading?: string;
    inputContainerStyle?: ViewStyle;
    inputHeight?: number;
    disabled?: boolean;
    textColor?: string;
}
