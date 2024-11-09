import React from 'react';
import { ViewStyle } from 'react-native';
import { IconLibrary } from './Lib';
interface IconProps {
    lib: IconLibrary;
    name: string;
    size?: number;
    color?: string;
    testID?: string;
    style?: ViewStyle;
    text?: string;
    onPressIcon?: () => void;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
