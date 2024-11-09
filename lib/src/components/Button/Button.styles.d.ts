import { ViewStyle, TextStyle } from 'react-native';
export declare const styles: {
    buttonContainer: {
        alignItems: "flex-start";
        flexDirection: "row";
    };
    buttonContent: {
        flexDirection: "row";
        alignItems: "center";
        position: "relative";
        justifyContent: "center";
    };
    icon: {
        margin: number;
    };
    labelDisableIcon: {
        marginVertical: number;
        marginHorizontal: number;
    };
    badgeView: {
        backgroundColor: string;
        borderRadius: number;
        position: "absolute";
        right: number;
        top: number;
        minWidth: number;
        justifyContent: "center";
        alignItems: "center";
    };
    badgeViewIcon: {
        backgroundColor: string;
        borderRadius: number;
        position: "absolute";
        left: number;
        top: number;
        minWidth: number;
        justifyContent: "center";
        alignItems: "center";
    };
    badge: {
        fontSize: number;
        fontWeight: "500";
        color: string;
        bottom: number;
        padding: number;
    };
};
export declare const getButtonPadding: () => ViewStyle;
export declare const getButtonStyle: (variant: 'filled' | 'outline', type: 'primary' | 'secondary', hasIcon: boolean, hasLabel: boolean, size: 'small' | 'large') => ViewStyle;
export declare const getButtonBGColorStyle: (variant: 'filled' | 'outline', type: 'primary' | 'secondary', isInactive: boolean, disabled: boolean) => string;
export declare const getButtonTextStyle: (variant: 'filled' | 'outline', type: 'primary' | 'secondary', hasIcon: boolean, isInactive: boolean, disabled: boolean, size: 'small' | 'large') => TextStyle;
