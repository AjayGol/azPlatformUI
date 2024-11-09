import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {HELVETICA_REGULAR} from '../../../src/assets/Fonts';

export const styles = StyleSheet.create({
  dtContainer: {
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 0.8,
    borderColor: colors.dtBorderColor,
  },
  dtHeader: {
    backgroundColor: colors.dtBackgroundColor,
    borderWidth: 0.8,
    borderColor: colors.dtBorderColor,
    borderBottomColor: colors.dtBorderColor,
    borderBottomWidth: 0.8,
    paddingHorizontal: 0,
  },
  dtRow: {
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    borderColor: colors.dtBorderColor,
  },
  chStyle: {
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    padding: 0,
    margin: 0,
    marginTop: -10,
  },
  textStyle1: {
    maxHeight: 30,
    fontSize: 14,
    fontFamily: HELVETICA_REGULAR,
    color: '#3c5d7c',
    fontWeight: '600',
  },
});
