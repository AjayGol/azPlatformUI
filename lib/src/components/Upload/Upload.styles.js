import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
export const styles = StyleSheet.create({
    container: {},
    dropZone: {
        width: '100%',
        height: 124,
        borderWidth: 2,
        borderColor: colors.suggestionText,
        borderStyle: 'dashed',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
    },
    titleStyle: {
        color: colors.suggestionText,
    },
    progressBar: {
        width: '100%',
        height: 4,
        backgroundColor: colors.borderCheckLight,
        marginTop: -6,
    },
    progressFill: {
        height: '100%',
        backgroundColor: colors.primaryColor,
    },
    fileChipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        marginRight: 16,
    },
    fileChip: {
        backgroundColor: colors.chipColor,
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 6,
        marginHorizontal: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    fileChipText: {
        color: colors.chipText,
        marginRight: 8,
    },
    chipButtonContainer: {
        flexDirection: 'row',
        marginTop: 4,
        flexWrap: 'wrap',
    },
    webInputContainer: {
        display: 'none',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        marginTop: 6,
    },
    clearButton: {
        marginRight: 10,
    },
    placeholderContainer: {
        alignItems: 'center',
    },
    placeholder: {
        marginTop: 10,
    },
});
