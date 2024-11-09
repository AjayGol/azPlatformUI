import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';

const styles = StyleSheet.create({
  chipContainer: {
    backgroundColor: colors.lightBgPrimaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 3,
  },
  label: {
    color: colors.secondaryColor,
    fontSize: 12,
  },
});

export default styles;
