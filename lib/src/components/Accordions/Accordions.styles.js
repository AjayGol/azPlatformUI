import { StyleSheet } from 'react-native';
import { colors } from '../../../src/constants/colors';
import { HELVETICA_NEUE_MEDIUM } from '../../../src/assets/Fonts';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleTextStyle: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: HELVETICA_NEUE_MEDIUM,
    },
    mainView: {
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    childrenStyle: {
        borderWidth: 0.4,
        borderColor: colors.accordionBorderColor,
        marginBottom: 10,
        padding: 12,
        backgroundColor: colors.white,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    childrenTextStyle: {
        fontSize: 13,
        color: colors.black,
    },
    titleExpanded: {},
    titleCollapsed: {},
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
    },
    content: {
        padding: 10,
        marginBottom: 20,
    },
    accordion: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 0.4,
        paddingVertical: 6,
        borderColor: colors.accordionBorderColor,
    },
});
