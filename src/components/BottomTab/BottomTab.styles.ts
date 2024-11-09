import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../constants/colors';
import {HELVETICA_NEUE_MEDIUM} from '../../assets/Fonts';
import {isWeb} from '../../constants/constant';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backgroundColor: colors.white,
  },
  titleStyle: {
    color: colors.secondaryColor,
    fontSize: 12,
    fontFamily: HELVETICA_NEUE_MEDIUM,
  },
  // Popover
  popOverView: {
    backgroundColor: '#FFF',
    borderWidth: 0.4,
    borderColor: colors.textColor,
    borderRadius: 5,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    ...(isWeb ? {boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'} : {}),
    right: isWeb ? 20 : 'auto',
  } as ViewStyle,
});
