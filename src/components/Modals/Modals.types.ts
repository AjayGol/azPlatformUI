import React from 'react';
import {ViewStyle} from 'react-native';

export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  position?: string;
  modalType: 'dialog' | 'sidebar';
  header: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  modalWidth: number;
  onBackdropPress?: boolean;
  modalStyle?: ViewStyle;
  modalContainerStyle?: ViewStyle;
  headerContainerStyle?: ViewStyle;
  footerContainerStyle?: ViewStyle;
  childContainerStyle?: ViewStyle;
  hasBackdrop?: boolean;
  animationInTiming?: number;
  animationOutTiming?: number;
  hardwareAccelerated?: boolean;
  coverScreen?: boolean;
}
