import { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
export interface CustomCheckBoxProps extends TouchableOpacityProps {
    onPress: () => void;
    checked: boolean;
    containerStyle?: ViewStyle;
    checkboxStyle?: TextStyle;
}
