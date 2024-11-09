import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Pressable} from 'react-native';
import {colors} from '../../constants/colors';
import {styles} from './SideBar.styles';
import {SideBarItem, SideBarProps} from './SideBar.types';
import Icon from '../../common/Icon';

export const SideBar = ({
  list,
  onPressItem,
  selectedItem,
  disableFooter,
  disableHeader,
  header,
  footer,
  slideIn = false,
}: SideBarProps) => {
  const [selected, setSelected] = useState(selectedItem);
  const [hoverIndex, setHoveIndex] = useState(-1);
  const [toggleSlideIn, setToggleSlideIn] = useState(slideIn);

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem]);

  const selectHandler = (sideBarItem: SideBarItem) => {
    setSelected(sideBarItem);
    onPressItem(sideBarItem);
  };

  const setSelectedBorder = (flag: boolean) => {
    return flag ? colors.secondaryColor : 'transparent';
  };
  const setMenuTextStyle = (flag: boolean) => {
    return flag ? styles.textActive : null;
  };
  const setIconColor = (flag: boolean) => {
    return flag ? colors.secondaryColor : colors.textColor;
  };

  const _renderMenuItem = ({
    item,
    index,
  }: {
    item: SideBarItem;
    index: number;
  }) => {
    return (
      <Pressable
        style={styles.listContainer}
        onHoverIn={() => setHoveIndex(index)}
        onHoverOut={() => setHoveIndex(-1)}>
        <TouchableOpacity key={item?.id} onPress={() => selectHandler(item)}>
          <View style={styles.rowStyle}>
            <View
              testID={`vertical${index}`}
              style={{
                ...styles.verticalLine,
                borderColor: setSelectedBorder(selected?.id === item?.id),
              }}
            />

            <View style={styles.itemContainer}>
              <Icon
                testID={'menu-icon'}
                lib={
                  selected?.id === item.id
                    ? item.activeIconLib
                    : item.inActiveIconLib
                }
                name={
                  selected?.id === item.id ? item.activeIcon : item.inActiveIcon
                }
                size={item.iconSize}
                color={setIconColor(
                  selected?.id === item.id || hoverIndex === index,
                )}
                style={styles.iconStyle}
              />
              <Text
                numberOfLines={1}
                style={[
                  styles.text,
                  setMenuTextStyle(
                    selected?.id === item.id || hoverIndex === index,
                  ),
                ]}>
                {item.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {!toggleSlideIn && (
          <View style={styles.sideBarContainer}>
            {!disableHeader && header && <View>{header}</View>}
            <FlatList
              data={list}
              style={styles.flatList}
              showsVerticalScrollIndicator={false}
              renderItem={_renderMenuItem}
            />
            {!disableFooter && footer && <View>{footer}</View>}
          </View>
        )}

        {slideIn && (
          <TouchableOpacity
            style={styles.slideInContainer}
            onPress={() => setToggleSlideIn(!toggleSlideIn)}>
            <Icon
              lib={'MaterialIcons'}
              size={20}
              name={
                toggleSlideIn
                  ? 'keyboard-double-arrow-right'
                  : 'keyboard-double-arrow-left'
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
