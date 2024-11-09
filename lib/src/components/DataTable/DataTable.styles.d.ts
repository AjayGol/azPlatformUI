import { StyleSheet } from 'react-native';
export declare const styles: StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<{
    dtContainer: {
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        borderWidth: number;
        borderColor: string;
    };
    dtHeader: {
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
        borderBottomColor: string;
        borderBottomWidth: number;
        paddingHorizontal: number;
    };
    dtRow: {
        borderBottomWidth: number;
        paddingHorizontal: number;
        borderColor: string;
    };
    chStyle: {
        transform: ({
            scaleX: number;
            scaleY?: undefined;
        } | {
            scaleY: number;
            scaleX?: undefined;
        })[];
        padding: number;
        margin: number;
        marginTop: number;
    };
    textStyle1: {
        maxHeight: number;
        fontSize: number;
        fontFamily: string;
        color: string;
        fontWeight: "600";
    };
}>;
