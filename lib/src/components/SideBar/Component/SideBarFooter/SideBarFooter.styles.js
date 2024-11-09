import { StyleSheet } from 'react-native';
import { HELVETICA_NEUE_BOLD } from '../../../../assets/Fonts';
import { colors } from '../../../../constants/colors';
export const styles = StyleSheet.create({
    footerContainer: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    footerLogo: {
        width: 50,
        height: 25,
    },
    footerText: {
        fontFamily: HELVETICA_NEUE_BOLD,
        fontSize: 10,
        color: colors.black,
    },
});
