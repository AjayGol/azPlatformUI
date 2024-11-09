import React from 'react';
import { ViewStyle } from 'react-native';
interface GradientProps {
    start?: {
        x: number;
        y: number;
    };
    end?: {
        x: number;
        y: number;
    };
    colors: string[];
    style?: ViewStyle;
    children?: React.ReactNode;
}
declare const Gradient: React.FC<GradientProps>;
export default Gradient;
