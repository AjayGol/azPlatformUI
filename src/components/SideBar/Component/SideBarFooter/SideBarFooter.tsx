import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {SideBarFooterProps} from './SideBarFooter.types';
import {FX_HUB_LOGO} from '../../../../assets/Images';
import {styles} from './SideBarFooter.styles';

const SideBarFooter: React.FC<SideBarFooterProps> = ({
  imgSource,
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      testID={'footer'}
      style={styles.footerContainer}
      onPress={onPress}>
      <Text style={styles.footerText}>{title}</Text>
      <Image
        source={imgSource || FX_HUB_LOGO}
        style={styles.footerLogo}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

export default SideBarFooter;
