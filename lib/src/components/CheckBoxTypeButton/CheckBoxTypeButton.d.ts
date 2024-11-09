import React from 'react';
import { CheckBoxTypeButtonInternalProps } from './CheckBoxTypeButton.types';
type CheckboxItemProps = Omit<CheckBoxTypeButtonInternalProps, 'uncheckedColor' | 'color'> & {
    uncheckedColor?: string;
    color?: string;
};
declare const CheckBoxTypeButton: React.FC<CheckboxItemProps>;
export default CheckBoxTypeButton;
