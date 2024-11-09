import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BottomTabProps, TabList} from './BottomTab.types';
import {styles} from './BottomTab.styles';
import Popover from 'react-native-popover-view';
import {PopoverMode, PopoverPlacement} from 'react-native-popover-view';
import Icon from '../../common/Icon';
import {colors} from '../../constants/colors';

const BottomTab: React.FC<BottomTabProps> = ({
  list,
  selectedIndex,
  containerStyle,
}) => {
  const [selected, setSelected] = useState(selectedIndex);

  const onPress = (item: TabList, index: number) => {
    setSelected(index === selected ? null : index);
    item.onPress(item);
  };
  return (
    <View style={[styles.container, containerStyle]}>
      {list.map((item, index) => (
        <View key={index} style={{alignItems: 'center'}}>
          <Popover
            from={
              <TouchableOpacity
                style={{alignItems: 'center', justifyContent: 'center'}}
                onPress={() => onPress(item, index)}>
                <Icon
                  lib={item?.activeIconLib}
                  name={item.activeIcon}
                  size={item.iconSize}
                  color={colors.secondaryColor}
                />
                <Text style={[styles.titleStyle, item.titleStyle]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            }
            popoverStyle={[styles.popOverView, item.popoverStyle]}
            isVisible={item.isPopoverVisible && index === selected}
            onRequestClose={() => setSelected(-1)}
            mode={PopoverMode.RN_MODAL}
            placement={item.popoverPlacement || PopoverPlacement.BOTTOM}
            backgroundStyle={{backgroundColor: 'transparent'}}>
            {item.popoverView}
          </Popover>
        </View>
      ))}
    </View>
  );
};

export default BottomTab;
