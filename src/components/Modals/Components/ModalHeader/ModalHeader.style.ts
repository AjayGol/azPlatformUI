import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {HELVETICA_NEUE_BOLD} from '../../../../assets/Fonts';

export const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontFamily: HELVETICA_NEUE_BOLD,
    color: colors.primaryColor,
    fontSize: 14,
    flex: 0.95,
  },
});
