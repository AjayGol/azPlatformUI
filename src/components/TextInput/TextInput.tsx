import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Pressable, Text, TextStyle, View} from 'react-native';
import {SortOption, TextInputProps} from './TextInput.types';
import {styles} from './TextInput.styles';
import {colors} from '../../constants/colors';
import {TextInput as FloatingInput} from 'react-native-paper';
import Icon from '../../common/Icon';
import {TouchableOpacity} from 'react-native';
import {TextInputLabelProp} from 'react-native-paper/lib/typescript/components/TextInput/types';
import Popover from 'react-native-popover-view/dist/Popover';
import {PopoverMode, PopoverPlacement} from 'react-native-popover-view';
import ToolTip from '../ToolTip';
import {isWeb} from '../../../src/constants/constant';

interface LabelProps {
  label?: TextInputLabelProp;
  required?: boolean;
  style?: TextStyle;
  focus?: boolean;
  floatingLabel?: boolean;
  leftIconName?: string;
  sortVisible?: boolean;
  sortIconName?: string;
  value?: string;
}

const LabelComponent = (props: LabelProps) => {
  const _getLabelColor = (isFocus: boolean) =>
    isFocus ? colors.primaryColor : colors.black;

  const setMarginStart = (
    isLeftIcon: boolean,
    isSortIcon: boolean,
    value: string,
    focus: boolean,
  ) => {
    if (focus || value) {
      return 0;
    } else if (isSortIcon && isLeftIcon) {
      return 80;
    } else if (isLeftIcon) {
      return 35;
    } else if (isSortIcon) {
      return 50;
    } else {
      return 0;
    }
  };

  const {
    label,
    required,
    style,
    focus,
    value,
    floatingLabel,
    leftIconName,
    sortIconName,
    sortVisible,
  } = props;
  return (
    <Text
      style={{
        ...style,
        color: _getLabelColor(focus),
        top: floatingLabel ? (focus || value ? 0 : 32) : 0,
        start: floatingLabel
          ? setMarginStart(
              leftIconName != '',
              sortVisible && sortIconName != '',
              value,
              focus,
            )
          : 0,
      }}>
      {label}
      {required && <Text style={styles.required}>*</Text>}
    </Text>
  );
};

export const TextInput = forwardRef(
  (
    {
      leftIconLib,
      leftIconName,
      leftIconClick,
      rightIconLib,
      rightIconName,
      rightIconClick,
      placeholder,
      onChangeText,
      onSortClick,
      invalid = false,
      autoFocus,
      keyboardType,
      label,
      autoCorrect,
      required,
      autoComplete = 'name',
      floatingLabel,
      leftIconSize,
      tooltip = '',
      id = '',
      tooltipPosition = 'bottom',
      rightIconSize,
      multiline = false,
      sortVisible = true,
      sortIconLib,
      sortIconName,
      sortIconSize,
      inputContainerStyle,
      disabled,
      inputHeight = 40,
      heading,
      textColor,
      onKeyPress,
      sortOptions,
      right,
      left,
      selectedSortOption,
    }: TextInputProps,
    ref,
  ) => {
    console.log('disabled 2', disabled);

    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    const [visibleSort, setVisibleSort] = useState(false);

    const _onchangeText = (val: string) => {
      setValue(val);
      if (onChangeText) {
        onChangeText(val);
      }
    };

    // Use useImperativeHandle to expose the `clear` method
    useImperativeHandle(ref, () => ({
      clear: () => setValue(''), // This clears the input field by resetting the state
    }));

    const _getInputBorderColor = (error: boolean, isFocus: boolean) =>
      error ? colors.red : isFocus ? colors.primaryColor : '#ced4da';
    const _getInputBgColor = (isDisabled: boolean) =>
      isDisabled ? colors.disable : 'transparent';

    const handleSortOptionPress = (option: SortOption) => {
      option.onPress(option);
      setVisibleSort(false);
    };

    const SortContent = props => {
      const {onPress} = props;

      return (
        <TouchableOpacity onPress={onPress} testID={'sort-icon'}>
          <Icon
            lib={sortIconLib}
            name={sortIconName}
            size={sortIconSize}
            style={styles.sortIcon}
            color={colors.primaryColor}
          />
        </TouchableOpacity>
      );
    };

    return (
      <View>
        {label && (
          <LabelComponent
            label={label}
            required={required}
            style={styles.label}
            focus={focus}
            floatingLabel={floatingLabel}
            leftIconName={leftIconName}
            sortVisible={sortVisible}
            sortIconName={sortIconName}
            value={value}
          />
        )}

        <Pressable
          testID="input-container"
          style={{
            ...styles.floatingInputContainer,
            height: multiline ? undefined : inputHeight,
            borderColor: _getInputBorderColor(invalid, focus && !disabled),
            backgroundColor: _getInputBgColor(disabled),
            ...inputContainerStyle,
          }}>
          <View style={styles.sortContainer}>
            {sortVisible && sortIconName && (
              <Popover
                from={
                  <View style={styles.sortIconStyle}>
                    {tooltip && isWeb ? (
                      <ToolTip
                        id={`ToolTip_TextInput_${id}`}
                        position={tooltipPosition}
                        tooltip={
                          <View>
                            <Text style={{color: colors.white}}>{tooltip}</Text>
                          </View>
                        }>
                        <SortContent
                          onPress={() => {
                            if (!disabled) {
                              onSortClick();
                              setVisibleSort(prev => !prev);
                            }
                          }}
                        />
                      </ToolTip>
                    ) : (
                      <SortContent
                        onPress={() => {
                          if (!disabled) {
                            onSortClick();
                            setVisibleSort(prev => !prev);
                          }
                        }}
                      />
                    )}
                  </View>
                }
                isVisible={visibleSort}
                offset={12}
                mode={PopoverMode.RN_MODAL}
                arrowSize={{height: 0, width: 0}}
                placement={PopoverPlacement.BOTTOM}
                backgroundStyle={{backgroundColor: 'transparent'}}
                popoverStyle={styles.sortOptionsWrapper}
                onRequestClose={() => {
                  setVisibleSort(false);
                }}>
                <View>
                  {sortOptions &&
                    sortOptions?.map((option, index) => {
                      const selected = option.value === selectedSortOption;
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            handleSortOptionPress(option);
                          }}
                          style={[
                            styles.sortOption,
                            selected ? styles.selectedOption : {},
                          ]}>
                          <Text
                            numberOfLines={1}
                            style={[
                              styles.sortOptionText,
                              selected ? styles.selectedOptionText : {},
                            ]}>
                            {option?.title}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              </Popover>
            )}
            {sortVisible && sortIconName && (
              <View style={styles.verticalLine} />
            )}

            {leftIconName && (
              <TouchableOpacity onPress={leftIconClick} testID={'left-icon'}>
                <Icon
                  lib={leftIconLib}
                  name={leftIconName}
                  size={leftIconSize}
                  style={styles.leftIcon}
                  color={colors.borderColor}
                />
              </TouchableOpacity>
            )}
          </View>

          {left && <View style={styles.leftRightContainer}>{left}</View>}

          <FloatingInput
            numberOfLines={1}
            value={value}
            underlineColor={'transparent'}
            activeUnderlineColor={'transparent'}
            selectionColor={colors.primaryColor}
            cursorColor={colors.primaryColor}
            placeholderTextColor={colors.borderColor}
            multiline={multiline}
            mode={'flat'}
            onKeyPress={onKeyPress}
            textColor={textColor || colors.black}
            style={{
              ...styles.floatingTextInput,
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            autoFocus={autoFocus}
            placeholder={floatingLabel ? '' : placeholder}
            disabled={disabled}
            autoCorrect={autoCorrect}
            autoComplete={autoComplete || 'name'}
            keyboardType={keyboardType ? keyboardType : 'default'}
            onChangeText={_onchangeText}
          />
          {right && <View style={styles.leftRightContainer}>{right}</View>}
          {rightIconName && (
            <TouchableOpacity
              onPress={rightIconClick}
              testID={'right-icon'}
              style={styles.rightIconContainer}>
              <Icon
                lib={rightIconLib}
                name={rightIconName}
                size={rightIconSize}
                style={styles.rightIcon}
                color={colors.borderColor}
              />
            </TouchableOpacity>
          )}
        </Pressable>
        {heading && (
          <Text
            style={{
              ...styles.heading,
              color: invalid ? colors.red : colors.black,
            }}>
            {heading}
          </Text>
        )}
      </View>
    );
  },
);

TextInput.displayName = 'TextInput';
