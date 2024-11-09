import { RefObject } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { IconLibrary } from 'src/common/Icon/Lib';
import { ToastMessagesRef } from './ToastMessagesRef';
export interface ToastMessagesProps {
    visible?: boolean;
    reference?: RefObject<ToastMessagesRef>;
    closeIconLib?: IconLibrary;
    severityIconLib?: IconLibrary;
    severityIconName?: string;
    severityIconSize?: number;
    closeIconName?: string;
    closeIconSize?: number;
    life?: number;
    style?: ViewStyle;
    contentStyle?: TextStyle;
    closable?: boolean;
    sticky?: boolean;
    onClose?: () => void;
    toastIndex: number;
    testID?: string;
    position?: 'top-right' | 'top-left' | 'top-center' | 'center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    severity?: 'success' | 'error' | 'warning';
    summary?: string;
    detail?: string;
    content?: string;
}
