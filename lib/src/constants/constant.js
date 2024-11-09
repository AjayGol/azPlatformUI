import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const aspectRatio = height / width;
export const isWeb = Platform.OS === 'web';
export const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
export const isIpad = Platform.OS === 'ios' && !(aspectRatio > 1.6);
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('screen').width;
export const deviceHeight = Dimensions.get('screen').height;
export const CARD_WIDTH = isIpad
    ? deviceWidth * 0.29
    : isMobile
        ? deviceWidth * 0.9
        : isWeb
            ? null
            : deviceWidth * 0.29;
export const toastWidth = isMobile
    ? deviceWidth * 0.85
    : isWeb
        ? deviceWidth * 0.25
        : deviceWidth * 0.85;
export const leftPadding = isIpad
    ? deviceWidth * 0.025
    : isWeb
        ? 0
        : deviceWidth * 0.005;
export const convertBytes = (bytes) => {
    if (bytes < 1024) {
        return `${bytes} Bytes`;
    }
    else if (bytes < 1048576) {
        return `${(bytes / 1024).toFixed(2)} KB`;
    }
    else if (bytes < 1073741824) {
        return `${(bytes / 1048576).toFixed(2)} MB`;
    }
    return `${(bytes / 1073741824).toFixed(2)} GB`;
};
