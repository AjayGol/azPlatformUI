import React, { useState, useMemo, useCallback } from 'react';
import { Text, TouchableOpacity, View, FlatList, TextInput, Pressable, Platform, } from 'react-native';
import VectorIcon from '../../common/Icon/Icon';
import Icon from 'react-native-vector-icons/EvilIcons';
import CustomCheckBox from './Components/CustomCheckBox';
import styles from './DropDown.styles';
import CustomChip from './Components/CustomChip';
import DropDownOption from './Components/DropDownOption';
import { screenHeight, screenWidth } from '../../constants/constant';
const DropDown = ({ label = '', placeholder = '', options = [], showSelectAll = false, selectedValues = [], setSelectedValues, filter, display = 'comma', isInvalid, emptyFilterMessage, disabled, multiSelect, type = 'form', showClear = false, panelFooterTemplate, isDropdownOpen, placeholderStyle, customStyle, labelTextStyle, labelIcon, labelIconSize, labelIconColor, iconLib, onOptionClick, onSelectAllClick, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const selectedValuesSet = useMemo(() => new Set(selectedValues.map(option => option.value)), [selectedValues]);
    const toggleOpen = () => {
        if (isDropdownOpen && !isOpen) {
            isDropdownOpen();
        }
        setIsOpen(prev => !prev);
    };
    const handleSelectAll = () => {
        if (setSelectedValues) {
            setSelectedValues(prevValues => {
                if (prevValues.length === filteredOptions.length) {
                    return [];
                }
                else {
                    return [...filteredOptions];
                }
            });
        }
        onSelectAllClick();
    };
    const filteredOptions = useMemo(() => {
        if (!searchQuery.trim()) {
            return options;
        }
        return options.filter(option => option.label.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, options]);
    const isAllOptionsSelected = useMemo(() => {
        return (filteredOptions.length > 0 &&
            filteredOptions.every(option => selectedValuesSet.has(option.value)));
    }, [filteredOptions, selectedValuesSet]);
    const handleSearchChange = useCallback((text) => {
        setSearchQuery(text);
    }, []);
    const handleClose = () => {
        setSearchQuery('');
        setIsOpen(false);
    };
    const handleChipRemove = (value) => {
        if (setSelectedValues) {
            setSelectedValues(prevValues => prevValues.filter(item => item.value !== value));
        }
    };
    const handleOptionSelect = (option) => {
        if (setSelectedValues) {
            if (multiSelect) {
                setSelectedValues(prevValues => {
                    if (prevValues.some(selected => selected.value === option.value)) {
                        return prevValues.filter(selected => selected.value !== option.value);
                    }
                    else {
                        return [...prevValues, option];
                    }
                });
            }
            else {
                setSelectedValues([option]);
                setIsOpen(false);
            }
        }
        onOptionClick(option);
    };
    const renderDisplay = () => {
        if (selectedValues.length === 0) {
            if (type === 'menu') {
                return React.createElement(Text, { style: styles.labelText }, label);
            }
            return (React.createElement(Text, { style: Object.assign(Object.assign({}, styles.placeholderText), placeholderStyle) }, placeholder));
        }
        if (display === 'comma') {
            return (React.createElement(Text, { numberOfLines: 1, style: [
                    styles.commaText,
                    type === 'menu' ? styles.menuCommaText : null,
                    labelTextStyle,
                ] }, selectedValues.map(v => v.label).join(', ')));
        }
        if (display === 'chip') {
            return (React.createElement(View, { style: styles.chipContainer }, selectedValues.map(value => (React.createElement(CustomChip, { key: value.value, label: value.label, value: value.value, icon: "close", iconLib: "Fontisto", iconSize: 16, onPressIcon: handleChipRemove })))));
        }
        return null;
    };
    const handleOutsidePress = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(View, { style: { flex: 1 } },
            isOpen && (React.createElement(Pressable, { onPress: handleOutsidePress, style: [
                    Platform.OS === 'web'
                        ? { position: 'fixed' }
                        : { position: 'absolute' },
                    {
                        height: screenHeight,
                        width: screenWidth,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    },
                ] })),
            type === 'form' ? React.createElement(Text, { style: styles.label }, label) : null,
            React.createElement(View, { style: [
                    styles.dropDownContainer,
                    { width: type === 'form' ? 320 : 'auto' },
                    customStyle,
                ] },
                React.createElement(TouchableOpacity, { style: type === 'form'
                        ? Object.assign(Object.assign({}, styles.inputBox), (isInvalid ? styles.invalidStyles : {})) : styles.menuStyles, activeOpacity: 1, disabled: disabled, onPress: toggleOpen },
                    renderDisplay(),
                    React.createElement(View, { style: { flexDirection: 'row', gap: 10 } },
                        (!multiSelect && selectedValues.length > 0 && showClear && (React.createElement(TouchableOpacity, { onPress: () => {
                                setSelectedValues([]);
                            }, style: styles.closeIcon },
                            React.createElement(Icon, { name: "close", size: 20, color: '#495058' })))) ||
                            null,
                        React.createElement(VectorIcon, { lib: iconLib ? iconLib : 'Entypo', name: labelIcon ? labelIcon : 'chevron-thin-down', size: labelIconSize ? labelIconSize : 16, color: disabled
                                ? '#CCCCCC'
                                : type === 'menu'
                                    ? labelIconColor || '#FFF'
                                    : '#6C757D' }))),
                isOpen && (React.createElement(View, { style: [
                        styles.selectionBox,
                        {
                            width: 'auto',
                        },
                    ] },
                    React.createElement(View, { style: [
                            styles.dropDownHeader,
                            { paddingVertical: multiSelect ? 10 : 0 },
                        ] },
                        showSelectAll && multiSelect && (React.createElement(View, { style: styles.selectAllWrapper },
                            React.createElement(CustomCheckBox, { onPress: handleSelectAll, checked: isAllOptionsSelected }))),
                        filter && (React.createElement(View, { style: styles.inputWrapper },
                            React.createElement(TextInput, { style: styles.searchInput, value: searchQuery, onChangeText: handleSearchChange, placeholderTextColor: "#495057" }))),
                        !showSelectAll && multiSelect && !filter && (React.createElement(View, { style: styles.flex })),
                        multiSelect && (React.createElement(TouchableOpacity, { onPress: handleClose, style: styles.closeIcon },
                            React.createElement(Icon, { name: "close", size: 22, color: '#495058' })))),
                    React.createElement(View, { style: styles.optionsView },
                        searchQuery.trim() && filteredOptions.length === 0 && (React.createElement(Text, { style: styles.noRecord }, emptyFilterMessage || 'No records found')),
                        React.createElement(FlatList, { data: filteredOptions, keyExtractor: item => item.value.toString(), renderItem: ({ item }) => (React.createElement(DropDownOption, { option: item, selectedValues: selectedValues, handleOptionSelect: handleOptionSelect, multiSelect: multiSelect })), style: styles.optionsContainer }),
                        panelFooterTemplate ? panelFooterTemplate : null)))))));
};
export default DropDown;
