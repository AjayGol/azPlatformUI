import { IconLibrary } from '../../../../common/Icon/Lib';
export interface ModalHeaderProps {
    title: string;
    iconName: string;
    iconLib: IconLibrary;
    iconSize: number;
    iconColor: string;
    onPressIcon: () => void;
}
