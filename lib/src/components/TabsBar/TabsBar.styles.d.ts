import { ViewStyle, TextStyle } from 'react-native';
export declare const getTabStyle: (isActive: boolean) => ViewStyle;
export declare const getTabTextStyle: (isActive: boolean) => TextStyle;
export declare const styles: {
    tabBarMenu: {
        backgroundColor: string;
        elevation: number;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        flexDirection: "row";
        justifyContent: "space-between";
        alignItems: "center";
    };
    divider: {
        width: number;
        backgroundColor: string;
    };
    flexRow: {
        flexDirection: "row";
        alignItems: "center";
        maxWidth: number;
    };
};
