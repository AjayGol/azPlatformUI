import React from 'react';
import {View} from 'react-native';

// Mock implementation for react-native-modal
const Modal = ({children, ...props}) => {
  return <View {...props}>{children}</View>;
};

export default Modal;
