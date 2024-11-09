import React from 'react';
import { IconLibrary } from '../../common/Icon/Lib';
export type SideBarItem = {
    id?: number;
    title?: string;
    path?: string;
    iconSize?: number;
    activeIcon?: string;
    inActiveIcon?: string;
    activeIconLib?: IconLibrary;
    inActiveIconLib?: IconLibrary;
};
export interface SideBarProps {
    list?: SideBarItem[];
    selectedItem?: SideBarItem;
    disableHeader?: boolean;
    disableFooter?: boolean;
    onPressItem?: (item: SideBarItem) => void;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    slideIn?: boolean;
}
