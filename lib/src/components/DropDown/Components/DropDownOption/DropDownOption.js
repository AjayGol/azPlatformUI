import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './DropDownOption.styles';
import CustomCheckBox from '../CustomCheckBox';
import useHoverEffect from '../../../../hooks/useHoverEffect';
const DropDownOption = ({ option, multiSelect, selectedValues, handleOptionSelect, }) => {
    const isChecked = selectedValues.some(selected => selected.value === option.value);
    const combinedStyle = Object.assign(Object.assign({}, styles.optionWrapper), (isChecked ? styles.optionWrapperChecked : {}));
    const dropDownHover = useHoverEffect(combinedStyle, styles.optionHover);
    const handleSelection = () => {
        handleOptionSelect(option);
    };
    return (React.createElement(View, Object.assign({}, dropDownHover),
        React.createElement(TouchableOpacity, { style: styles.innerOptionWrapper, onPress: handleSelection },
            multiSelect ? (React.createElement(CustomCheckBox, { checked: isChecked, onPress: handleSelection })) : null,
            React.createElement(Text, { style: [
                    styles.optionTitle,
                    isChecked ? styles.optionTitleChecked : {},
                    { paddingLeft: multiSelect ? 8 : 0 },
                ] }, option.label))));
};
export default DropDownOption;
