import React from 'react';
import {CheckBoxTypeButtonInternalProps} from './CheckBoxTypeButton.types';
import {Checkbox} from 'react-native-paper';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import {isWeb} from '../../../src/constants/constant';

type CheckboxItemProps = Omit<
  CheckBoxTypeButtonInternalProps,
  'uncheckedColor' | 'color'
> & {
  uncheckedColor?: string;
  color?: string;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 3,
    padding: 0,
  } as ViewStyle,
});

const CheckBoxTypeButton: React.FC<CheckboxItemProps> = props => {
  const {
    onPress,
    onHoverIn,
    onHoverOut,
    borderColor,
    borderWidth,
    opacity,
    status,
    style,
    ...rest
  } = props;

  return (
    <Pressable
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onPress={onPress}
      style={[styles.container, style, {borderColor, borderWidth, opacity}]}>
      {isWeb ? (
        <Checkbox status={status} {...rest} />
      ) : (
        <Checkbox.Android status={status} {...rest} />
      )}
    </Pressable>
  );
};

export default CheckBoxTypeButton;
