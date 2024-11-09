import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './TextInput.styles';
import { colors } from '../../constants/colors';
import { TextInput as FloatingInput } from 'react-native-paper';
import Icon from '../../common/Icon';
import { TouchableOpacity } from 'react-native';
import Popover from 'react-native-popover-view/dist/Popover';
import { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import ToolTip from '../ToolTip';
import { isWeb } from '../../../src/constants/constant';
const LabelComponent = (props) => {
    const _getLabelColor = (isFocus) => isFocus ? colors.primaryColor : colors.black;
    const setMarginStart = (isLeftIcon, isSortIcon, value, focus) => {
        if (focus || value) {
            return 0;
        }
        else if (isSortIcon && isLeftIcon) {
            return 80;
        }
        else if (isLeftIcon) {
            return 35;
        }
        else if (isSortIcon) {
            return 50;
        }
        else {
            return 0;
        }
    };
    const { label, required, style, focus, value, floatingLabel, leftIconName, sortIconName, sortVisible, } = props;
    return (React.createElement(Text, { style: Object.assign(Object.assign({}, style), { color: _getLabelColor(focus), top: floatingLabel ? (focus || value ? 0 : 32) : 0, start: floatingLabel
                ? setMarginStart(leftIconName != '', sortVisible && sortIconName != '', value, focus)
                : 0 }) },
        label,
        required && React.createElement(Text, { style: styles.required }, "*")));
};
export const TextInput = forwardRef(({ leftIconLib, leftIconName, leftIconClick, rightIconLib, rightIconName, rightIconClick, placeholder, onChangeText, onSortClick, invalid = false, autoFocus, keyboardType, label, autoCorrect, required, autoComplete = 'name', floatingLabel, leftIconSize, tooltip = '', id = '', tooltipPosition = 'bottom', rightIconSize, multiline = false, sortVisible = true, sortIconLib, sortIconName, sortIconSize, inputContainerStyle, disabled, inputHeight = 40, heading, textColor, onKeyPress, sortOptions, right, left, selectedSortOption, }, ref) => {
    console.log('disabled 2', disabled);
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    const [visibleSort, setVisibleSort] = useState(false);
    const _onchangeText = (val) => {
        setValue(val);
        if (onChangeText) {
            onChangeText(val);
        }
    };
    useImperativeHandle(ref, () => ({
        clear: () => setValue(''),
    }));
    const _getInputBorderColor = (error, isFocus) => error ? colors.red : isFocus ? colors.primaryColor : '#ced4da';
    const _getInputBgColor = (isDisabled) => isDisabled ? colors.disable : 'transparent';
    const handleSortOptionPress = (option) => {
        option.onPress(option);
        setVisibleSort(false);
    };
    const SortContent = props => {
        const { onPress } = props;
        return (React.createElement(TouchableOpacity, { onPress: onPress, testID: 'sort-icon' },
            React.createElement(Icon, { lib: sortIconLib, name: sortIconName, size: sortIconSize, style: styles.sortIcon, color: colors.primaryColor })));
    };
    return (React.createElement(View, null,
        label && (React.createElement(LabelComponent, { label: label, required: required, style: styles.label, focus: focus, floatingLabel: floatingLabel, leftIconName: leftIconName, sortVisible: sortVisible, sortIconName: sortIconName, value: value })),
        React.createElement(Pressable, { testID: "input-container", style: Object.assign(Object.assign(Object.assign({}, styles.floatingInputContainer), { height: multiline ? undefined : inputHeight, borderColor: _getInputBorderColor(invalid, focus && !disabled), backgroundColor: _getInputBgColor(disabled) }), inputContainerStyle) },
            React.createElement(View, { style: styles.sortContainer },
                sortVisible && sortIconName && (React.createElement(Popover, { from: React.createElement(View, { style: styles.sortIconStyle }, tooltip && isWeb ? (React.createElement(ToolTip, { id: `ToolTip_TextInput_${id}`, position: tooltipPosition, tooltip: React.createElement(View, null,
                            React.createElement(Text, { style: { color: colors.white } }, tooltip)) },
                        React.createElement(SortContent, { onPress: () => {
                                if (!disabled) {
                                    onSortClick();
                                    setVisibleSort(prev => !prev);
                                }
                            } }))) : (React.createElement(SortContent, { onPress: () => {
                            if (!disabled) {
                                onSortClick();
                                setVisibleSort(prev => !prev);
                            }
                        } }))), isVisible: visibleSort, offset: 12, mode: PopoverMode.RN_MODAL, arrowSize: { height: 0, width: 0 }, placement: PopoverPlacement.BOTTOM, backgroundStyle: { backgroundColor: 'transparent' }, popoverStyle: styles.sortOptionsWrapper, onRequestClose: () => {
                        setVisibleSort(false);
                    } },
                    React.createElement(View, null, sortOptions &&
                        (sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.map((option, index) => {
                            const selected = option.value === selectedSortOption;
                            return (React.createElement(TouchableOpacity, { key: index, onPress: () => {
                                    handleSortOptionPress(option);
                                }, style: [
                                    styles.sortOption,
                                    selected ? styles.selectedOption : {},
                                ] },
                                React.createElement(Text, { numberOfLines: 1, style: [
                                        styles.sortOptionText,
                                        selected ? styles.selectedOptionText : {},
                                    ] }, option === null || option === void 0 ? void 0 : option.title)));
                        }))))),
                sortVisible && sortIconName && (React.createElement(View, { style: styles.verticalLine })),
                leftIconName && (React.createElement(TouchableOpacity, { onPress: leftIconClick, testID: 'left-icon' },
                    React.createElement(Icon, { lib: leftIconLib, name: leftIconName, size: leftIconSize, style: styles.leftIcon, color: colors.borderColor })))),
            left && React.createElement(View, { style: styles.leftRightContainer }, left),
            React.createElement(FloatingInput, { numberOfLines: 1, value: value, underlineColor: 'transparent', activeUnderlineColor: 'transparent', selectionColor: colors.primaryColor, cursorColor: colors.primaryColor, placeholderTextColor: colors.borderColor, multiline: multiline, mode: 'flat', onKeyPress: onKeyPress, textColor: textColor || colors.black, style: Object.assign({}, styles.floatingTextInput), onFocus: () => setFocus(true), onBlur: () => setFocus(false), autoFocus: autoFocus, placeholder: floatingLabel ? '' : placeholder, disabled: disabled, autoCorrect: autoCorrect, autoComplete: autoComplete || 'name', keyboardType: keyboardType ? keyboardType : 'default', onChangeText: _onchangeText }),
            right && React.createElement(View, { style: styles.leftRightContainer }, right),
            rightIconName && (React.createElement(TouchableOpacity, { onPress: rightIconClick, testID: 'right-icon', style: styles.rightIconContainer },
                React.createElement(Icon, { lib: rightIconLib, name: rightIconName, size: rightIconSize, style: styles.rightIcon, color: colors.borderColor })))),
        heading && (React.createElement(Text, { style: Object.assign(Object.assign({}, styles.heading), { color: invalid ? colors.red : colors.black }) }, heading))));
});
TextInput.displayName = 'TextInput';
