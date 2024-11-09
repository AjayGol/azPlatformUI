declare const styles: {
    label: {
        marginLeft: number;
        fontSize: number;
        color: string;
    };
    dropDownContainer: {
        alignSelf: "flex-start";
        marginTop: number;
    };
    inputBox: {
        backgroundColor: string;
        padding: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        overflow: "hidden";
        flexDirection: "row";
        justifyContent: "space-between";
        alignItems: "center";
    };
    menuStyles: {
        backgroundColor: string;
        padding: number;
        borderWidth: number;
        borderColor: string;
        overflow: "hidden";
        flexDirection: "row";
        justifyContent: "flex-end";
        gap: number;
        alignItems: "center";
    };
    invalidStyles: {
        borderColor: string;
    };
    selectionBox: {
        boxShadow?: string;
        position: "absolute";
        top: number;
        left: number;
        right: number;
        borderRadius: number;
        borderWidth: number;
        borderColor: string;
        elevation: number;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        backgroundColor: string;
    };
    inputWrapper: {
        flex: number;
        position: "relative";
        justifyContent: "center";
    };
    dropDownHeader: {
        flexDirection: "row";
        justifyContent: "space-between";
        alignItems: "center";
        paddingHorizontal: number;
    };
    selectAllWrapper: {
        marginRight: number;
    };
    searchInput: {
        backgroundColor: string;
        color: string;
        padding: number;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        paddingRight: number;
        position: "relative";
        fontFamily: string;
    };
    searchIcon: {
        position: "absolute";
        right: number;
    };
    closeIcon: {
        marginLeft: number;
    };
    flex: {
        flex: number;
    };
    optionsView: {
        backgroundColor: string;
        maxHeight: number;
    };
    optionsContainer: {
        flexGrow: number;
    };
    chipContainer: {
        flexDirection: "row";
        overflow: "hidden";
        gap: number;
    };
    chip: {
        backgroundColor: string;
    };
    chipText: {
        color: string;
        fontFamily: string;
    };
    placeholderText: {
        color: string;
    };
    labelText: {
        color: string;
        fontFamily: string;
    };
    commaText: {
        color: string;
        fontFamily: string;
    };
    menuCommaText: {
        color: string;
        alignSelf: "flex-end";
        alignItems: "flex-end";
        justifyContent: "flex-end";
        fontFamily: string;
    };
    noRecord: {
        paddingVertical: number;
        marginLeft: number;
        color: string;
        fontSize: number;
        fontFamily: string;
    };
};
export default styles;
