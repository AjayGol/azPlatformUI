import React from 'react';
import {ViewStyle} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {IconLibrary} from './Lib';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const iconLibraries = {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
};

interface IconProps {
  lib: IconLibrary;
  name: string;
  size?: number;
  color?: string;
  testID?: string;
  style?: ViewStyle;
  text?: string;
  onPressIcon?: () => void;
}

const Icon: React.FC<IconProps> = ({
  lib,
  name,
  color = 'black',
  size,
  testID = '',
  style = null,
  onPressIcon,
}) => {
  const IconComponent = iconLibraries[lib];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      name={name}
      size={size || 20}
      color={color}
      testID={testID}
      onPress={onPressIcon}
      style={style}
    />
  );
};

export default Icon;
