declare module 'react-native-web-linear-gradient' {
    import * as React from 'react';
    import { ViewStyle, StyleProp } from 'react-native';
  
    interface LinearGradientProps {
      colors: string[];
      start?: { x: number; y: number };
      end?: { x: number; y: number };
      locations?: number[];
      style?: StyleProp<ViewStyle>;
      [key: string]: any; 
    }
  
    const LinearGradient: React.FC<LinearGradientProps>;
  
    export default LinearGradient;
  }
  