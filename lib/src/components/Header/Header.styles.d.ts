declare const styles: {
    header: {
        flexDirection: "row";
        width: "100%";
        height: number;
        elevation: number;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        overflow: "visible";
        zIndex: number;
    };
    headerSection: {
        flexDirection: "row";
        flexWrap: "wrap";
        flex: number;
    };
    headerImgCon: {
        width: number;
        position: "relative";
        backgroundColor: string;
        justifyContent: "center";
        paddingLeft: number;
        height: "100%";
    };
    logoImage: {
        width: number;
        height: number;
        resizeMode: "contain";
    };
    slantBox: {
        position: "absolute";
        bottom: number;
        right: number;
        borderLeftWidth: number;
        borderLeftColor: string;
        borderBottomWidth: number;
        borderBottomColor: string;
    };
    titleContainer: {
        marginRight: number;
        flexDirection: "row";
        alignItems: "center";
    };
    headerTitle: {
        fontSize: number;
        color: string;
        letterSpacing: number;
        fontWeight: "500";
        fontFamily: string;
    };
    childWrapper: {
        justifyContent: "center";
        flex: number;
    };
    rightIconStyle: {
        marginRight: number;
        alignItems: "center";
        justifyContent: "center";
    };
    iconView: {
        flexDirection: "row";
        alignItems: "center";
    };
    icon: {
        marginRight: number;
        marginLeft: number;
    };
    profileDivier: {
        marginVertical: number;
        marginLeft: number;
        width: number;
        backgroundColor: string;
    };
};
export default styles;
