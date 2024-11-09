import React from 'react';
import { ViewStyle } from 'react-native';
interface ModalProps {
    isVisible?: boolean;
    testID?: string;
    animationOut?: any;
    position?: string;
    animationIn?: any;
    onBackdropPress?: () => void;
    style?: ViewStyle;
    backdropOpacity?: number;
    useNativeDriver?: boolean;
    hasBackdrop?: boolean;
    children: React.ReactNode;
    animationInTiming?: number;
    animationOutTiming?: number;
    hardwareAccelerated?: boolean;
    coverScreen?: boolean;
}
declare const OpticModal: React.FC<ModalProps>;
export default OpticModal;
