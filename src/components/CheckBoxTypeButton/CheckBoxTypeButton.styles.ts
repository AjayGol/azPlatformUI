import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {HELVETICA_NEUE_BOLD, HELVETICA_NEUE_MEDIUM} from '../../assets/Fonts';
import {isWeb} from '../../constants/constant';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 19,
    height: 19,
    borderWidth: 1.5,
    borderRadius: 3,
    padding: 0,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 19,
    height: 19,
    padding: 0,
  },
  checkedCheckBoxTypeButton: {
    backgroundColor: colors.secondaryColor,
    borderColor: colors.primaryColor,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingIcon: {
    padding: 0,
    paddingLeft: 0,
  },
  uncheckedCheckBoxTypeButton: {
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderWidth: 0.4,
  },
  expandedContainer: {
    backgroundColor: colors.backgroundColor,
    margin: 20,
  },
  expandedText: {
    fontSize: 14,
    fontFamily: HELVETICA_NEUE_MEDIUM,
    flexShrink: 1,
    backgroundColor: colors.backgroundColor,
    color: colors.textColor,
  },
  mainView: {
    borderWidth: 0.4,
    borderColor: colors.borderColor,
  },
  primaryCheckBoxTypeButton: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColor,
    borderWidth: 0,
  },
  primaryUnCheckBoxTypeButton: {
    backgroundColor: colors.white,
    borderColor: colors.checkBorder,
    borderWidth: 2,
  },
  CheckBoxTypeButton: {
    backgroundColor: colors.secondaryColor,
    borderColor: colors.primaryColor,
    borderWidth: 0,
  },
  unCheckBoxTypeButton: {
    backgroundColor: colors.white,
    borderColor: colors.checkBorder,
    borderWidth: 2,
  },
  MainCheckBoxTypeButton: {
    width: 23,
    height: 23,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  mainButtonStyle: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckBoxStyle: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckBoxStyleContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckBoxTypeButtonContainer: {
    flex: 1,
  },
  hoveredCheckBoxTypeButton: {
    borderColor: colors.secondaryColor,
    borderWidth: 2,
  },
  hoveredPrimaryCheckBoxTypeButton: {
    borderColor: colors.primaryColor,
    borderWidth: 2,
  },
  CheckBoxTypeButtonComponentContainer: {
    flex: isWeb ? 1 : 0.9,
    alignSelf: 'center',
    borderWidth: 0.4,
    borderBottomWidth: 0.2,
    borderColor: colors.borderColor,
    backgroundColor: colors.backgroundColor,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  CheckBoxTypeButtonComponent: {
    backgroundColor: colors.backgroundColor,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBoxTypeButtonComponentText: {
    fontSize: 18,
    fontFamily: HELVETICA_NEUE_BOLD,
    color: colors.textColor,
  },
});
