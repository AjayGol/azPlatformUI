import { IconLibrary } from '../../../../common/Icon/Lib';
export interface CustomChipProps {
    label: string;
    value: string | number;
    iconLib: IconLibrary;
    icon: string;
    iconSize?: number;
    iconColor?: string;
    onPressIcon: (value: string | number) => void;
}
