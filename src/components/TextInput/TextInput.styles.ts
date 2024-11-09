import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {HELVETICA_NEUE_BOLD, HELVETICA_NEUE_REGULAR} from '../../assets/Fonts';
import {screenHeight, screenWidth} from '../../constants/constant';

export const styles = StyleSheet.create({
  sortIconStyle: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 3,
    maxWidth: screenWidth,
    maxHeight: screenHeight,
    minHeight: 38,
  },
  label: {
    fontSize: 14,
    marginHorizontal: 5,
    marginBottom: 5,
    fontFamily: HELVETICA_NEUE_BOLD,
  },

  floatingLabel: {
    fontSize: 14,
  },

  textInput: {
    paddingVertical: 12,
    flex: 1,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  floatingTextInput: {
    backgroundColor: 'transparent',
    flex: 1,
    color: colors.black,
    borderWidth: 0,
    minHeight: 40,
    alignSelf: 'center',
    marginStart: -6,
    fontSize: 14,
  },
  floatingOutline: {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 0,
    borderColor: 'transparent',
  },

  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    marginHorizontal: 5,
    marginTop: 5,
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
  leftIconStyle: {
    paddingEnd: 10,
  },
  rightIconStyle: {
    paddingStart: 10,
  },
  required: {
    color: colors.red,
    fontFamily: HELVETICA_NEUE_BOLD,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortIcon: {
    transform: [{rotate: '180deg'}],
    paddingHorizontal: 12,
  },
  leftIcon: {
    paddingLeft: 12,
  },
  rightIcon: {
    paddingRight: 12,
  },
  verticalLine: {
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    justifyContent: 'flex-end',
    height: '100%',
  },
  rightIconContainer: {alignSelf: 'center'},
  sortOptionsWrapper: {
    borderWidth: 0.4,
    borderColor: colors.textColor,
    borderRadius: 6,
    shadowColor: colors.black,
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#FFF',
    ...Platform.select({
      web: {
        boxShadow: '0px 3px 6px #00000029',
      },
    }),
  },
  sortOption: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  selectedOption: {
    backgroundColor: colors.primaryColor,
  },
  sortOptionText: {
    color: colors.textColor,
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
  selectedOptionText: {
    color: colors.white,
  },
  leftRightContainer: {
    zIndex: 1000,
  },
});
