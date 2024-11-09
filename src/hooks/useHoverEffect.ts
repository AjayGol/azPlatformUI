/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useCallback} from 'react';
import {isWeb} from '../constants/constant';
import {StyleProp} from 'react-native';

type Style = React.CSSProperties | StyleProp<any>;

interface HoverProps {
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style: Style;
}

const useHoverEffect = (defaultStyle: Style, hoverStyle: Style): HoverProps => {
  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isWeb) {
        const target = event.currentTarget as HTMLDivElement;
        Object.assign(target.style, hoverStyle);
      }
    },
    [hoverStyle],
  );

  const handleMouseLeave = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isWeb) {
        const target = event.currentTarget;
        Object.assign(target.style, defaultStyle);
      }
    },
    [defaultStyle],
  );

  return {
    style: defaultStyle,
    ...(isWeb && {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    }),
  };
};

export default useHoverEffect;
