import React from 'react';
import {ModalHeaderProps} from './ModalHeader.types';
import Icon from '../../../../common/Icon';
import {Text, View} from 'react-native';
import {colors} from '../../../../constants/colors';
import {styles} from './ModalHeader.style';

const ModalHeader: React.FC<ModalHeaderProps> = ({
  iconColor,
  iconLib,
  iconName,
  iconSize,
  title,
  onPressIcon,
}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Icon
        name={iconName}
        onPressIcon={onPressIcon}
        lib={iconLib}
        size={iconSize}
        color={iconColor || colors.borderColor}
      />
    </View>
  );
};

export default ModalHeader;
