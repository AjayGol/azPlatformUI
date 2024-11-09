import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {isWeb} from '../../constants/constant';
import {HELVETICA_NEUE_REGULAR} from '../../../src/assets/Fonts';

const styles = StyleSheet.create({
  label: {
    marginLeft: 10,
    fontSize: 14,
    color: '#495057',
  },
  dropDownContainer: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  inputBox: {
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuStyles: {
    backgroundColor: 'transparent',
    padding: 8,
    borderWidth: 0,
    borderColor: 'transparent',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    alignItems: 'center',
  },
  invalidStyles: {
    borderColor: '#ff0000',
  },
  selectionBox: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#F7F8FA',
    ...(isWeb ? {boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'} : {}),
  },
  inputWrapper: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  dropDownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  selectAllWrapper: {
    marginRight: 10,
  },
  searchInput: {
    backgroundColor: '#FFF',
    color: '#495058',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 3,
    paddingRight: 30,
    position: 'relative',
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  closeIcon: {
    marginLeft: 10,
  },
  flex: {
    flex: 1,
  },
  optionsView: {
    backgroundColor: '#FFF',
    maxHeight: 160,
  },
  optionsContainer: {
    flexGrow: 0,
  },
  chipContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    gap: 8,
  },
  chip: {
    backgroundColor: colors.lightBgPrimaryColor,
  },
  chipText: {
    color: colors.secondaryColor,
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
  placeholderText: {
    color: '#999',
  },
  labelText: {
    color: '#FFF',
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
  commaText: {
    color: '#495057',
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
  menuCommaText: {
    color: '#FFF',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
  noRecord: {
    paddingVertical: 10,
    marginLeft: 10,
    color: '#495057',
    fontSize: 14,
    fontFamily: HELVETICA_NEUE_REGULAR,
  },
});

export default styles;
