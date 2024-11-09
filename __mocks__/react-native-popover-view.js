import React from 'react';
import {View, Modal} from 'react-native';

const Popover = ({isVisible, onRequestClose, children}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Modal transparent visible={isVisible} onRequestClose={onRequestClose}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export const PopoverMode = {
  RN_MODAL: 'RN_MODAL',
};

export const PopoverPlacement = {
  BOTTOM: 'BOTTOM',
};

export default Popover;
