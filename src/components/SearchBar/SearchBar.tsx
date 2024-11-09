import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SearchBarProps} from './SearchBar.types';
import {styles} from './SearchBar.styles';
import Button from '../Button';
import {ButtonProp} from './SearchBar.types';
import {DynamicDimension} from '../../constants/DynamicDimension';
import SpeedDials from '../SpeedDials';
import ToolTip from '../ToolTip';
import {colors} from '../../../src/constants/colors';

export const SearchBar: React.FC<SearchBarProps> = ({
  left = [],
  children,
  selectedLeftItem,
  selectedRightItem,
  position = 'center',
  extreamLeft,
  extreamRight,
  showContainerBorder = true,
  right = [],
}) => {
  const [leftSelected, setLeftSelected] = useState<ButtonProp | undefined>(
    selectedLeftItem,
  );
  const [rightSelected, setRightSelected] = useState<ButtonProp | undefined>(
    selectedRightItem,
  );

  const {isMobileView} = DynamicDimension();

  const handleIconPress = (item: ButtonProp, side: 'left' | 'right') => {
    if (side === 'left') {
      setLeftSelected(item);
      item.onPress();
    } else {
      setRightSelected(item);
      item.onPress();
    }
  };

  const getButtonProps = (
    item: ButtonProp,
    selectedId: string | undefined,
  ) => ({
    variant: item.shouldNotFillColor
      ? item.variant
      : item.id === selectedId
      ? 'filled'
      : 'outline',
    type: item.shouldNotFillColor
      ? item.type
      : item.id === selectedId
      ? 'secondary'
      : 'primary',
  });

  const visibleRightButtons = isMobileView ? right.slice(0, 1) : right;
  const speedDialItems = isMobileView ? right.slice(1) : right;

  const renderButtonWithTooltip = (
    item: ButtonProp,
    side: 'left' | 'right',
  ) => {
    const {tooltip, tooltipPosition, ...rest} = item;

    const buttonContent = (
      <Button
        {...rest}
        variant={
          getButtonProps(
            item,
            side === 'left' ? leftSelected?.id : rightSelected?.id,
          ).variant
        }
        type={
          getButtonProps(
            item,
            side === 'left' ? leftSelected?.id : rightSelected?.id,
          ).type
        }
        onPress={() => handleIconPress(item, side)}
      />
    );
    return tooltip ? (
      <View key={item.id}>
        <ToolTip
          id={item.id}
          key={item.id}
          position={tooltipPosition}
          tooltip={
            <View>
              <Text style={{color: colors.white}}>{tooltip}</Text>
            </View>
          }>
          {buttonContent}
        </ToolTip>
      </View>
    ) : (
      buttonContent
    );
  };

  return (
    <View
      style={[styles.container, showContainerBorder && styles.containerBorder]}>
      {extreamLeft && <View>{extreamLeft}</View>}
      <View style={[styles.innerContainer, {justifyContent: position}]}>
        {left.length > 0 && (
          <View style={styles.leftContainer} testID="left-button">
            {left.map((item, index) => (
              <View key={index} style={styles.iconContainer}>
                {renderButtonWithTooltip(item, 'left')}
              </View>
            ))}
          </View>
        )}
        {children && <View style={styles.childContainer}>{children}</View>}
        <View style={styles.rightContainer} testID="right-button">
          {visibleRightButtons.map((item, index) => (
            <View key={index} style={styles.iconContainer}>
              {renderButtonWithTooltip(item, 'right')}
            </View>
          ))}
          {isMobileView && (
            <View style={styles.speedDialContainer} testID="speed-dial">
              <SpeedDials
                direction="down"
                transitionDelay={250}
                items={speedDialItems}
                disabled={false}
                showIcon={{
                  icon: 'reorder-three-outline',
                  size: 'small',
                  iconLib: 'Ionicons',
                  badgeNumber: 10,
                  variant: 'filled',
                  shouldNotFillColor: true,
                }}
                hideIcon={{
                  icon: 'close-outline',
                  size: 'small',
                  iconLib: 'Ionicons',
                  badgeNumber: 10,
                  variant: 'filled',
                  shouldNotFillColor: true,
                }}
              />
            </View>
          )}
        </View>
      </View>
      {extreamRight && <View>{extreamRight}</View>}
    </View>
  );
};
