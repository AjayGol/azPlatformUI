import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {HELVETICA_NEUE_REGULAR} from '../../../../assets/Fonts';

const styles = StyleSheet.create({
  optionWrapper: {
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  optionHover: {
    backgroundColor: '#EEEEEE',
  },
  innerOptionWrapper: {
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionWrapperChecked: {
    backgroundColor: '#eaf1fb',
  },
  optionTitle: {
    fontSize: 14,
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
  optionTitleChecked: {
    color: colors.primaryColor,
  },
});

export default styles;
