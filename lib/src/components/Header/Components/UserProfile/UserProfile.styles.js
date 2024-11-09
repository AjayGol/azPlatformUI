import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';
import { isWeb } from '../../../../constants/constant';
import { HELVETICA_NEUE_BOLD, HELVETICA_NEUE_MEDIUM, HELVETICA_NEUE_REGULAR, } from '../../../../assets/Fonts';
const styles = StyleSheet.create({
    userProfile: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        cursor: isWeb ? 'pointer' : 'default',
    },
    profileIconView: {
        backgroundColor: colors.primaryColor,
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#FFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    profileIcon: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        fontFamily: HELVETICA_NEUE_BOLD,
    },
    popOverView: Object.assign(Object.assign({ backgroundColor: '#FFF', borderWidth: 0.4, borderColor: '#a0aec0', borderRadius: 12, elevation: 3, shadowColor: colors.black, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.2, shadowRadius: 8 }, (isWeb ? { boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' } : {})), { right: isWeb ? 20 : 'auto' }),
    popOverOverlay: {
        backgroundColor: 'transparent',
    },
    profileBody: Object.assign({ flexGrow: 1, flexDirection: 'row', marginVertical: 16, marginHorizontal: 7 }, (isWeb ? { cursor: 'pointer' } : {})),
    proxyProfileBody: {
        marginVertical: 8,
    },
    profileImage: {
        alignSelf: 'flex-start',
        backgroundColor: colors.primaryColor,
        height: 64,
        width: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    proxyProfileImage: {
        height: 48,
        width: 48,
    },
    profileImageBorder: {
        borderColor: '#68d2df',
        borderWidth: 2,
    },
    profileIconText: {
        fontSize: 32,
        fontWeight: '600',
        color: '#FFF',
        fontFamily: HELVETICA_NEUE_BOLD,
    },
    proxyProfileText: {
        fontSize: 24,
    },
    profileInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: HELVETICA_NEUE_MEDIUM,
    },
    territory: {
        fontWeight: '300',
        fontSize: 14,
        marginTop: 5,
        fontFamily: HELVETICA_NEUE_REGULAR,
    },
    userEmail: {
        fontSize: 14,
        fontWeight: '300',
        marginTop: 4,
        fontFamily: HELVETICA_NEUE_REGULAR,
    },
    userId: {
        fontSize: 14,
        fontWeight: '300',
        color: '#9E9E9E',
        fontStyle: 'italic',
        marginTop: 4,
        fontFamily: HELVETICA_NEUE_REGULAR,
    },
    lastVisit: {
        marginTop: 4,
        color: '#495057',
        fontWeight: '300',
        fontFamily: HELVETICA_NEUE_REGULAR,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(161, 174, 193,0.5)',
    },
    profileButtons: {
        marginVertical: 8,
    },
    settingButton: {
        paddingVertical: 9,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#FFF',
    },
    settingsText: {
        fontSize: 14,
        color: '#212121',
        fontFamily: HELVETICA_NEUE_REGULAR,
    },
    settingButtonHover: {
        backgroundColor: '#EEEEEE',
    },
    arrow: {
        height: 10,
        width: 10,
        right: 20,
        top: -5,
        backgroundColor: 'red',
        position: 'absolute',
    },
});
export default styles;
