import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../constants/constant';
import {
  DIALOG_MAX_HEIGHT,
  DIALOG_MIN_HEIGHT,
  DIALOG_MIN_WIDTH,
  SIDE_MODAL_MAX_HEIGHT,
  SIDE_MODAL_MIN_WIDTH,
} from './Constant';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1e10,
    padding: 0,
    margin: 0,
  },
  sideBarModal: {
    margin: 0,
    height: screenHeight,
  },

  dialogModal: {
    margin: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dialogModalContainer: {
    backgroundColor: colors.white,
    maxWidth: screenWidth,
    maxHeight: DIALOG_MAX_HEIGHT,
    minHeight: DIALOG_MIN_HEIGHT,
    minWidth: DIALOG_MIN_WIDTH,
    borderRadius: 10,
  },

  sideBarRightContainer: {
    backgroundColor: colors.white,
    maxWidth: screenWidth,
    minWidth: SIDE_MODAL_MIN_WIDTH,
    height: screenHeight,
    maxHeight: screenHeight,
    alignSelf: 'flex-end',
    flex: 1,
    borderRadius: 10,
  },

  sideBarLeftContainer: {
    backgroundColor: colors.white,
    maxWidth: screenWidth,
    minWidth: SIDE_MODAL_MIN_WIDTH,
    height: screenHeight,
    maxHeight: screenHeight,
    alignSelf: 'flex-start',
    flex: 1,
    borderRadius: 10,
  },

  sideBarCenterConatiner: {
    backgroundColor: colors.white,
    height: screenHeight,
    maxWidth: screenWidth,
    maxHeight: SIDE_MODAL_MAX_HEIGHT,
    minWidth: SIDE_MODAL_MIN_WIDTH,
    alignSelf: 'center',
    borderRadius: 10,
    flex: 1,
  },
  headerContainer: {
    maxHeight: screenHeight / 8,
    borderWidth: 0.8,
    borderColor: colors.borderColor,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: colors.backgroundColor,
  },
  footerContainer: {
    maxHeight: screenHeight / 8,
    backgroundColor: colors.backgroundColor,
    borderWidth: 0.8,
    borderColor: colors.borderColor,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  childContainer: {
    padding: 10,
  },
});
