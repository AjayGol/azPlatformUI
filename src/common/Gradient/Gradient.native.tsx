import React from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps {
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  colors: string[];
  style?: ViewStyle;
  children?: React.ReactNode;
}

const Gradient: React.FC<GradientProps> = ({
  start = {x: 0.5, y: 0},
  end = {x: 0.5, y: 1},
  colors,
  style,
  children,
  ...otherProps
}) => (
  <LinearGradient
    start={start}
    end={end}
    colors={colors}
    style={style}
    {...otherProps}>
    {children}
  </LinearGradient>
);

export default Gradient;
