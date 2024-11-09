import React from 'react';
import { ButtonProps } from '../Button/Button.types';
export interface SearchBarProps {
    left?: ButtonProp[];
    right?: ButtonProp[];
    children?: React.ReactNode;
    selectedLeftItem?: ButtonProp;
    selectedRightItem?: ButtonProp;
    position?: 'center' | 'flex-end' | 'flex-start';
    extreamLeft?: React.ReactNode;
    extreamRight?: React.ReactNode;
    showContainerBorder?: boolean;
}
export interface ButtonProp extends ButtonProps {
    shouldNotFillColor?: boolean;
}
