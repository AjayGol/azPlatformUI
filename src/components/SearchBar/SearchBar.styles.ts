import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  containerBorder: {
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: colors.borderColor,
    paddingVertical: 16,
    paddingHorizontal: 15,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  childContainer: {
    paddingHorizontal: 10,
  },
  rightContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
  speedDialContainer: {
    height: 38,
    paddingHorizontal: 5,
  },
});
