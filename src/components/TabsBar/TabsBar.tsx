import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles, getTabStyle, getTabTextStyle} from './TabsBar.styles';
import {Tab, TabBarProps} from './TabsBar.types';
import {isWeb} from '../../constants/constant';
import {colors} from '../../constants/colors';
import ToolTip from '../ToolTip';

export const TabsBar: React.FC<TabBarProps> = ({
  links,
  selectedLink,
  onClick,
  isFilesTab,
  rightIcons,
  maxWidth,
  tabContainer,
  tabTextStyles,
  tabTouchableOpacity,
  showToolTip,
  tooltipPosition = 'bottom',
}) => {
  const [selected, setSelected] = useState(selectedLink);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    setSelected(selectedLink);
  }, [selectedLink]);

  const selectHandler = (tab: Tab) => {
    setSelected(tab);
    onClick(tab);
  };

  const renderTab = (tab: Tab, isSelected: boolean) => {
    const tabContent = (
      <TouchableOpacity
        key={tab.id}
        style={[
          getTabStyle(isSelected),
          isWeb ? {} : {height: isWeb ? 40 : 55, marginHorizontal: 10},
          tabTouchableOpacity,
        ]}
        onPress={() => selectHandler(tab)}>
        <View style={styles.flexRow}>
          {isFilesTab && tab?.fileIcon ? tab?.fileIcon : null}

          <Text
            style={[
              getTabTextStyle(isSelected),
              {maxWidth: maxWidth ? maxWidth : 'auto'},
              isWeb
                ? {}
                : {
                    color: isSelected
                      ? colors.secondaryColor
                      : colors.textColor,
                    height: 40,
                    marginTop: 15,
                    zIndex: 99,
                    alignSelf: 'center',
                  },
              tabTextStyles,
            ]}
            numberOfLines={1}>
            {tab.title}
          </Text>

          {isFilesTab && tab?.closeIcon ? tab?.closeIcon : null}
        </View>
      </TouchableOpacity>
    );

    if (showToolTip) {
      return (
        <ToolTip
          position={tooltipPosition}
          key={tab.id}
          id={`TabsBar_${tab.id}`}
          tooltip={
            <View style={{flex: 1, maxWidth: 'auto', width: '100%'}}>
              <Text style={{color: colors.white}}>{tab.title}</Text>
            </View>
          }>
          {tabContent}
        </ToolTip>
      );
    }

    return tabContent;
  };

  return (
    <View style={[styles.tabBarMenu, tabContainer]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        {links.map((tab, index) => (
          <View key={index}>
            {index !== 0 && isFilesTab ? <View style={styles.divider} /> : null}
            {renderTab(tab, selected.id === tab.id)}
          </View>
        ))}
      </ScrollView>
      {rightIcons && isFilesTab ? rightIcons : null}
    </View>
  );
};
