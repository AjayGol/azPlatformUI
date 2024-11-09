import {StyleSheet} from 'react-native';
import {isWeb, screenHeight} from '../../constants/constant';
import {colors} from '../../constants/colors';
import {HELVETICA_REGULAR} from '../../assets/Fonts';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    height: screenHeight,
  },
  sideBarContainer: {
    width: 70,
    backgroundColor: colors.sidebarBg,
    shadowColor: colors.borderColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },

  listContainer: {
    flex: isWeb ? undefined : 1, // Auto manage device width on mobile
    paddingVertical: 10,
    paddingRight: 5,
  },
  text: {
    fontSize: 12,
    color: colors.textColor,
    marginTop: 5,
    width: 60,
    textAlign: 'center',
    fontFamily: HELVETICA_REGULAR,
  },
  textActive: {
    color: colors.secondaryColor,
    fontFamily: HELVETICA_REGULAR,
  },
  verticalLine: {
    borderWidth: 1.5,
  },
  itemContainer: {
    alignItems: 'center',
    flex: 1,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  flatList: {
    marginTop: 10,
  },
  iconStyle: {
    padding: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  slideInContainer: {
    marginStart: 5,
  },
});
