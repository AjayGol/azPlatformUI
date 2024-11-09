import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {ModalProps} from './Modals.types';
import {styles} from './Modals.styles';
import {
  BOTTOM,
  LEFT,
  RIGHT,
  SLIDE_IN_DOWN,
  SLIDE_IN_LEFT,
  SLIDE_IN_RIGHT,
  SLIDE_IN_UP,
  SLIDE_OUT_DOWN,
  SLIDE_OUT_LEFT,
  SLIDE_OUT_RIGHT,
  SLIDE_OUT_UP,
  TOP,
  ZOOM_IN,
  ZOOM_OUT,
} from './Constant';
import {screenWidth} from '../../constants/constant';
import OpticModal from '../../common/Modal';

export const Modals: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  position = RIGHT,
  header,
  footer,
  children,
  modalWidth = screenWidth / 2,
  modalType = 'dialog',
  onBackdropPress = true,
  modalContainerStyle,
  headerContainerStyle,
  footerContainerStyle,
  childContainerStyle,
  hasBackdrop = true,
  modalStyle,
  coverScreen = true,
}) => {
  const _setModalAnimation = (pos: string) => {
    switch (pos) {
      case RIGHT:
        return {
          animationIn: SLIDE_IN_RIGHT,
          animationOut: SLIDE_OUT_RIGHT,
        };
      case LEFT:
        return {
          animationIn: SLIDE_IN_LEFT,
          animationOut: SLIDE_OUT_LEFT,
        };
      case TOP:
        return {
          animationIn: SLIDE_IN_DOWN,
          animationOut: SLIDE_OUT_UP,
        };
      case BOTTOM:
        return {
          animationIn: SLIDE_IN_UP,
          animationOut: SLIDE_OUT_DOWN,
        };

      default:
        return {
          animationIn: SLIDE_IN_UP,
          animationOut: SLIDE_OUT_UP,
        };
    }
  };

  const _setModalStyle = (pos: string, mWidth: number) => {
    switch (pos) {
      case RIGHT:
        return {...styles.sideBarRightContainer, width: mWidth};
      case LEFT:
        return {...styles.sideBarLeftContainer, width: mWidth};
      case TOP:
        return {...styles.sideBarCenterConatiner, width: mWidth};
      case BOTTOM:
        return {...styles.sideBarCenterConatiner, width: mWidth};
    }
    return {...styles.sideBarCenterConatiner, width: mWidth};
  };

  const onPressClose = () => {
    onClose();
  };

  const {width, height} = useWindowDimensions();

  return (
    <>
      {isVisible && (
        <View
          style={{
            ...styles.container,
            width: width,
            height: height,
          }}>
          <OpticModal
            isVisible={isVisible}
            testID={modalType}
            position={position}
            coverScreen={coverScreen}
            animationOut={
              modalType === 'dialog'
                ? ZOOM_OUT
                : _setModalAnimation(position)?.animationOut
            }
            animationIn={
              modalType === 'dialog'
                ? ZOOM_IN
                : _setModalAnimation(position)?.animationIn
            }
            onBackdropPress={onBackdropPress ? onPressClose : undefined}
            style={
              modalType === 'dialog'
                ? styles.dialogModal
                : {...styles.sideBarModal, ...modalStyle}
            }
            hasBackdrop={hasBackdrop}
            backdropOpacity={0.5}
            useNativeDriver>
            {modalType === 'dialog' ? (
              <SafeAreaView
                style={[
                  styles.dialogModalContainer,
                  {width: modalWidth, ...modalContainerStyle},
                ]}>
                {header && (
                  <View
                    style={[styles.headerContainer, {...headerContainerStyle}]}>
                    {header}
                  </View>
                )}
                {children && (
                  <ScrollView
                    style={[styles.childContainer, {...childContainerStyle}]}
                    showsVerticalScrollIndicator={false}>
                    {children}
                  </ScrollView>
                )}
                {footer && (
                  <View
                    style={[styles.footerContainer, {...footerContainerStyle}]}>
                    {footer}
                  </View>
                )}
              </SafeAreaView>
            ) : (
              <SafeAreaView
                style={[
                  _setModalStyle(position, modalWidth),
                  {...modalContainerStyle},
                ]}>
                {header && (
                  <View
                    style={[styles.headerContainer, {...headerContainerStyle}]}>
                    {header}
                  </View>
                )}
                {children && (
                  <ScrollView
                    style={[styles.childContainer, {...childContainerStyle}]}
                    showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1}}>{children}</View>
                  </ScrollView>
                )}
                {footer && (
                  <View
                    style={[styles.footerContainer, {...footerContainerStyle}]}>
                    {footer}
                  </View>
                )}
              </SafeAreaView>
            )}
          </OpticModal>
        </View>
      )}
    </>
  );
};
