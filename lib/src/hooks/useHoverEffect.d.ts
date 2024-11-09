import React from 'react';
import { StyleProp } from 'react-native';
type Style = React.CSSProperties | StyleProp<any>;
interface HoverProps {
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    style: Style;
}
declare const useHoverEffect: (defaultStyle: Style, hoverStyle: Style) => HoverProps;
export default useHoverEffect;
