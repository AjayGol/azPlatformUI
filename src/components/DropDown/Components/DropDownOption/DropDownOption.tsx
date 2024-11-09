import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './DropDownOption.styles';
import {OptionComponentProps} from './DropDownOption.types';
import CustomCheckBox from '../CustomCheckBox';
import useHoverEffect from '../../../../hooks/useHoverEffect';

const DropDownOption: React.FC<OptionComponentProps> = ({
  option,
  multiSelect,
  selectedValues,
  handleOptionSelect,
}) => {
  const isChecked = selectedValues.some(
    selected => selected.value === option.value,
  );

  const combinedStyle = {
    ...styles.optionWrapper,
    ...(isChecked ? styles.optionWrapperChecked : {}),
  };

  const dropDownHover = useHoverEffect(combinedStyle, styles.optionHover);

  const handleSelection = () => {
    handleOptionSelect(option);
  };

  return (
    <View {...dropDownHover}>
      <TouchableOpacity
        style={styles.innerOptionWrapper}
        onPress={handleSelection}>
        {multiSelect ? (
          <CustomCheckBox checked={isChecked} onPress={handleSelection} />
        ) : null}

        <Text
          style={[
            styles.optionTitle,
            isChecked ? styles.optionTitleChecked : {},
            {paddingLeft: multiSelect ? 8 : 0},
          ]}>
          {option.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropDownOption;
