import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './CustomCheckBox.styles';
import {CustomCheckBoxProps} from './CustomCheckBox.types';

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  onPress,
  checked,
  containerStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.customCheckboxWrapper,
        containerStyle,
        checked ? styles.checkedStyles : {},
      ]}
      {...props}>
      {checked ? <Icon name="check" size={16} color={'#FFF'} /> : null}
    </TouchableOpacity>
  );
};

export default CustomCheckBox;
