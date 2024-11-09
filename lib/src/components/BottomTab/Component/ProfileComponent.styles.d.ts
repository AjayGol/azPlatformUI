import { ViewStyle } from 'react-native';
declare const styles: {
    userProfile: ViewStyle;
    profileIconView: {
        backgroundColor: string;
        height: number;
        width: number;
        borderRadius: number;
        justifyContent: "center";
        alignItems: "center";
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
    };
    profileIcon: {
        fontSize: number;
        fontWeight: "600";
        color: string;
        fontFamily: string;
    };
    popOverView: ViewStyle;
    popOverOverlay: {
        backgroundColor: string;
    };
    profileBody: {
        cursor?: string;
        flexGrow: number;
        flexDirection: "row";
        marginVertical: number;
        marginHorizontal: number;
    };
    proxyProfileBody: {
        marginVertical: number;
    };
    profileImage: {
        alignSelf: "flex-start";
        backgroundColor: string;
        height: number;
        width: number;
        borderRadius: number;
        justifyContent: "center";
        alignItems: "center";
        marginRight: number;
    };
    proxyProfileImage: {
        height: number;
        width: number;
    };
    profileImageBorder: {
        borderColor: string;
        borderWidth: number;
    };
    profileIconText: {
        fontSize: number;
        fontWeight: "600";
        color: string;
        fontFamily: string;
    };
    proxyProfileText: {
        fontSize: number;
    };
    profileInfo: {
        flex: number;
    };
    userName: {
        fontSize: number;
        fontWeight: "500";
        fontFamily: string;
    };
    territory: {
        fontWeight: "300";
        fontSize: number;
        marginTop: number;
        fontFamily: string;
    };
    userEmail: {
        fontSize: number;
        fontWeight: "300";
        marginTop: number;
        fontFamily: string;
    };
    userId: {
        fontSize: number;
        fontWeight: "300";
        color: string;
        fontStyle: "italic";
        marginTop: number;
        fontFamily: string;
    };
    lastVisit: {
        marginTop: number;
        color: string;
        fontWeight: "300";
        fontFamily: string;
    };
    divider: {
        width: "100%";
        height: number;
        backgroundColor: string;
    };
    profileButtons: {
        marginVertical: number;
    };
    settingButton: {
        paddingVertical: number;
        paddingHorizontal: number;
        flexDirection: "row";
        alignItems: "center";
        gap: number;
        backgroundColor: string;
    };
    settingsText: {
        fontSize: number;
        color: string;
        fontFamily: string;
    };
    settingButtonHover: {
        backgroundColor: string;
    };
    arrow: {
        height: number;
        width: number;
        right: number;
        top: number;
        backgroundColor: string;
        position: "absolute";
    };
};
export default styles;
