import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { screenHeight, screenWidth } from '../../constants/constant';
export const styles = StyleSheet.create({
    toolTipContainer: {
        flexDirection: 'row',
    },
    contentStyle: {
        backgroundColor: colors.tooltipBg,
        maxWidth: screenWidth,
        maxHeight: screenHeight,
        width: '100%',
    },
});
