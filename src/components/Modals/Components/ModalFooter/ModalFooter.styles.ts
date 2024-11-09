import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {HELVETICA_REGULAR} from '../../../../assets/Fonts';

export const styles = StyleSheet.create({
  footerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontFamily: HELVETICA_REGULAR,
    color: colors.textColor,
    fontSize: 12,
    flex: 0.95,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginEnd: 2,
  },
});
