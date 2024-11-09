import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Animated,
  Easing,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {SpeedDialProps} from './SpeedDials.types';
import {styles} from './SpeedDials.styles';
import Button from '../Button';
import {ButtonProp} from '../SearchBar/SearchBar.types';

const SpeedDials: React.FC<SpeedDialProps> = ({
  transitionDelay,
  items,
  direction = 'right',
  showIcon,
  hideIcon,
  selectedItem,
}) => {
  const [open, setOpen] = useState(false);
  const animations = useRef(items.map(() => new Animated.Value(0))).current;
  const [itemSelected, setItemSelected] = useState<ButtonProp>(selectedItem);

  useEffect(() => {
    const animationsList = animations.map((anim, index) =>
      Animated.timing(anim, {
        toValue: open ? 1 : 0,
        duration: transitionDelay ? transitionDelay : 200,
        delay: open ? index * 50 : (items.length - index - 1) * 50,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    );
    Animated.parallel(animationsList).start();
  }, [open, animations, items.length, transitionDelay]);

  const handleIconPress = (item: ButtonProp) => {
    setItemSelected(item);
    item.onPress();
  };

  const getPadding = () => {
    switch (direction) {
      case 'left':
        return {paddingHorizontal: 2.5};
      case 'up':
        return {paddingVertical: 2.5};
      case 'right':
        return {paddingHorizontal: 2.5};
      case 'down':
        return {paddingVertical: 2.5};
    }
  };
  const renderIcon = useCallback(
    (item: ButtonProp, type: string, index?: number) => (
      <View
        style={type === 'renderIcon' ? {...getPadding()} : null}
        testID={type === 'renderIcon' ? `item-fab-${index}` : 'main-fab'}>
        <Button
          id={item.id}
          label={item.label}
          isInactive={item.isInactive}
          iconLib={item.iconLib}
          icon={item.icon}
          disabled={item.disabled}
          variant={determineButtonVariant(
            item.shouldNotFillColor,
            item,
            itemSelected?.id,
          )}
          type={determineButtonType(
            item.shouldNotFillColor,
            item,
            itemSelected?.id,
          )}
          imageStyle={item.imageStyle}
          size={item.size}
          badgeNumber={item.badgeNumber}
          onPress={
            type === 'mainIcon'
              ? () => setOpen(!open)
              : () => handleIconPress(item)
          }
        />
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [itemSelected?.id, open],
  );

  const determineButtonVariant = (
    shouldNotFillColor: boolean,
    item: ButtonProp,
    id: string,
  ) =>
    shouldNotFillColor ? item.variant : id === item.id ? 'filled' : 'outline';

  const determineButtonType = (
    shouldNotFillColor: boolean,
    item: ButtonProp,
    id: string,
  ) =>
    shouldNotFillColor ? item.type : id === item.id ? 'secondary' : 'primary';
  const getContainerStyle = useCallback(
    (direction: 'left' | 'right' | 'up' | 'down'): ViewStyle => {
      switch (direction) {
        case 'left':
          return {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            paddingLeft: 10,
          };
        case 'right':
          return {flexDirection: 'row', alignItems: 'center', paddingRight: 10};
        case 'up':
          return {
            flexDirection: 'column-reverse',
            alignItems: 'center',
            paddingTop: 10,
          };
        case 'down':
        default:
          return {
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 10,
          };
      }
    },
    [],
  );

  const getItemStyle = useCallback(() => {
    const margin = 5;
    switch (direction) {
      case 'left':
        return {marginRight: margin};
      case 'right':
        return {marginLeft: margin};
      case 'up':
        return {marginBottom: margin};
      case 'down':
      default:
        return {marginTop: margin};
    }
  }, [direction]);

  const getAnimatedStyle = useCallback(
    anim => ({
      opacity: anim,
      transform: [
        {
          scale: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ],
    }),
    [],
  );

  const handlePressOutside = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.mainContainer}
      onPress={handlePressOutside}>
      <View style={[{...styles.container}, getContainerStyle(direction)]}>
        {renderIcon(open ? hideIcon : showIcon, 'mainIcon')}
        {items.map((item, index) => (
          <Animated.View
            key={index}
            style={[getAnimatedStyle(animations[index]), getItemStyle()]}>
            {renderIcon(item, 'renderIcon', index)}
          </Animated.View>
        ))}
      </View>
    </TouchableOpacity>
  );
};
export default SpeedDials;
