/// <reference types="react" />
import { TextStyle, ViewStyle } from 'react-native';
import { IconLibrary } from '../../../src/common/Icon/Lib';
export interface Option {
    label: string;
    value: string | number;
}
export interface DropDownProps {
    label?: string;
    type?: 'form' | 'menu';
    options: Option[];
    value?: Option[];
    placeholder?: string;
    filter?: boolean;
    showSelectAll?: boolean;
    isInvalid?: boolean;
    display?: 'comma' | 'chip';
    disabled?: boolean;
    isDropdownOpen?: () => void;
    placeholderStyle?: ViewStyle;
    customStyle?: ViewStyle;
    labelTextStyle?: TextStyle;
    labelIcon?: string;
    labelIconSize?: number;
    labelIconColor?: string;
    iconLib?: IconLibrary;
    showClear?: boolean;
    multiSelect: boolean;
    emptyFilterMessage?: string;
    selectedValues?: Option[];
    setSelectedValues?: React.Dispatch<React.SetStateAction<Option[]>>;
    panelFooterTemplate?: React.ReactNode;
    onOptionClick?: (option: Option) => void;
    onSelectAllClick?: () => void;
}
export type CustomViewStyle = ViewStyle & {
    position?: 'absolute' | 'relative' | 'fixed';
};
