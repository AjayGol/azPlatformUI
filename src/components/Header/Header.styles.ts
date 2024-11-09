import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {isWeb} from '../../constants/constant';
import {HELVETICA_NEUE_MEDIUM} from '../../../src/assets/Fonts';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.24,
    shadowRadius: 4,
    overflow: 'visible',
    zIndex: 2,
  },
  headerSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  headerImgCon: {
    width: 110,
    position: 'relative',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingLeft: 10,
    height: '100%',
  },
  logoImage: {
    width: 70,
    height: 32,
    resizeMode: 'contain',
  },
  slantBox: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderLeftWidth: 32,
    borderLeftColor: 'transparent',
    borderBottomWidth: 48,
    borderBottomColor: isWeb ? '#B6256A' : '#AD2366',
  },
  titleContainer: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFF',
    letterSpacing: 0,
    fontWeight: '500',
    fontFamily: HELVETICA_NEUE_MEDIUM,
  },
  childWrapper: {
    justifyContent: 'center',
    flex: 1,
  },
  rightIconStyle: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
    marginLeft: 16,
  },
  profileDivier: {
    marginVertical: 4,
    marginLeft: 16,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#FFF',
  },
});

export default styles;
