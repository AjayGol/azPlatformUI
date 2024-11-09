import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';

const styles = StyleSheet.create({
  customCheckboxWrapper: {
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ced4da',
    borderWidth: 2,
  },
  checkedStyles: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColor,
  },
});

export default styles;
