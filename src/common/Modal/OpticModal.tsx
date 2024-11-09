/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';

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

const OpticModal: React.FC<ModalProps> = ({
  isVisible,
  testID,
  animationOut,
  animationIn,
  onBackdropPress,
  style,
  backdropOpacity,
  useNativeDriver = true,
  children,
  hasBackdrop,
  animationInTiming,
  animationOutTiming,
  hardwareAccelerated = true,
  coverScreen = true,
  ...otherProps
}) => {
  const modalStyle: StyleProp<ViewStyle> = coverScreen
    ? style
    : ([
        style,
        {
          flex: 1,
          position: coverScreen ? 'relative' : 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: 0,
        },
      ] as StyleProp<ViewStyle>);

  return (
    <Modal
      backdropOpacity={backdropOpacity}
      backdropColor="rgba(0, 0, 0, 0.5)"
      style={modalStyle}
      hardwareAccelerated={hardwareAccelerated}
      coverScreen={coverScreen}
      useNativeDriverForBackdrop={true}
      useNativeDriver={useNativeDriver}
      onBackdropPress={onBackdropPress}
      animationIn={animationIn}
      animationOut={animationOut}
      hideModalContentWhileAnimating
      testID={testID}
      animationInTiming={animationInTiming || 600}
      animationOutTiming={animationOutTiming || 600}
      isVisible={isVisible}
      hasBackdrop={hasBackdrop}
      {...otherProps}>
      {children}
    </Modal>
  );
};

export default OpticModal;
