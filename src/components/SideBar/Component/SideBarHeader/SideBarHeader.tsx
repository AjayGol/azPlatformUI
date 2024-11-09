import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SideBarHeaderProps} from './SideBarHeader.types';
import {styles} from './SideBarHeader.styles';
import {colors} from '../../../../constants/colors';
import Icon from '../../../../common/Icon/Icon';

const SideBarHeader: React.FC<SideBarHeaderProps> = ({
  iconLib,
  iconName,
  iconSize,
  onPressIcon,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.headerContainer}
      onPress={onPressIcon}>
      <Icon
        lib={iconLib}
        name={iconName}
        size={iconSize || 25}
        testID={'header-icon'}
        color={colors.white}
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};

export default SideBarHeader;
