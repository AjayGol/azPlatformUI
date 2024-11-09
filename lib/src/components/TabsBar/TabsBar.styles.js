import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { HELVETICA_NEUE_MEDIUM } from '../../../src/assets/Fonts';
import { isWeb } from '../../../src/constants/constant';
const baseTabStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 12,
};
const baseTextStyle = {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 12,
    textAlign: 'center',
    fontFamily: HELVETICA_NEUE_MEDIUM,
};
export const getTabStyle = (isActive) => {
    return Object.assign(Object.assign({}, baseTabStyle), { borderBottomColor: isActive ? colors.secondaryColor : 'transparent', backgroundColor: 'transparent' });
};
export const getTabTextStyle = (isActive) => {
    return Object.assign(Object.assign({}, baseTextStyle), { color: isActive ? colors.secondaryColor : colors.textColor, fontWeight: isActive ? '600' : '500' });
};
export const styles = StyleSheet.create({
    tabBarMenu: {
        backgroundColor: colors.backgroundColor,
        elevation: 3,
        shadowColor: colors.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    divider: {
        width: 0.4,
        backgroundColor: colors.textColor,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: isWeb ? 300 : 220,
    },
});
