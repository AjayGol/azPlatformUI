import React, {useState, useMemo, useCallback} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  Pressable,
  Platform,
} from 'react-native';
import VectorIcon from '../../common/Icon/Icon';
import Icon from 'react-native-vector-icons/EvilIcons';
import CustomCheckBox from './Components/CustomCheckBox';
import styles from './DropDown.styles';
import CustomChip from './Components/CustomChip';
import {CustomViewStyle, DropDownProps, Option} from './DropDown.types';
import DropDownOption from './Components/DropDownOption';
import {screenHeight, screenWidth} from '../../constants/constant';

const DropDown: React.FC<DropDownProps> = ({
  label = '',
  placeholder = '',
  options = [],
  showSelectAll = false,
  selectedValues = [],
  setSelectedValues,
  filter,
  display = 'comma',
  isInvalid,
  emptyFilterMessage,
  disabled,
  multiSelect,
  type = 'form',
  showClear = false,
  panelFooterTemplate,
  isDropdownOpen,
  placeholderStyle,
  customStyle,
  labelTextStyle,
  labelIcon,
  labelIconSize,
  labelIconColor,
  iconLib,
  onOptionClick,
  onSelectAllClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const selectedValuesSet = useMemo(
    () => new Set(selectedValues.map(option => option.value)),
    [selectedValues],
  );

  const toggleOpen = () => {
    if (isDropdownOpen && !isOpen) {
      isDropdownOpen();
    }
    setIsOpen(prev => !prev);
  };

  const handleSelectAll = () => {
    if (setSelectedValues) {
      setSelectedValues(prevValues => {
        if (prevValues.length === filteredOptions.length) {
          return [];
        } else {
          return [...filteredOptions];
        }
      });
    }
    onSelectAllClick();
  };

  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) {
      return options;
    }
    return options.filter(option =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, options]);

  const isAllOptionsSelected = useMemo(() => {
    return (
      filteredOptions.length > 0 &&
      filteredOptions.every(option => selectedValuesSet.has(option.value))
    );
  }, [filteredOptions, selectedValuesSet]);

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const handleClose = () => {
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleChipRemove = (value: string | number) => {
    if (setSelectedValues) {
      setSelectedValues(prevValues =>
        prevValues.filter(item => item.value !== value),
      );
    }
  };

  const handleOptionSelect = (option: Option) => {
    if (setSelectedValues) {
      if (multiSelect) {
        setSelectedValues(prevValues => {
          if (prevValues.some(selected => selected.value === option.value)) {
            return prevValues.filter(
              selected => selected.value !== option.value,
            );
          } else {
            return [...prevValues, option];
          }
        });
      } else {
        setSelectedValues([option]);
        setIsOpen(false); // Close the dropdown after selection
      }
    }

    onOptionClick(option);
  };

  const renderDisplay = () => {
    if (selectedValues.length === 0) {
      if (type === 'menu') {
        return <Text style={styles.labelText}>{label}</Text>;
      }

      return (
        <Text style={{...styles.placeholderText, ...placeholderStyle}}>
          {placeholder}
        </Text>
      );
    }

    if (display === 'comma') {
      return (
        <Text
          numberOfLines={1}
          style={[
            styles.commaText,
            type === 'menu' ? styles.menuCommaText : null,
            labelTextStyle,
          ]}>
          {selectedValues.map(v => v.label).join(', ')}
        </Text>
      );
    }

    if (display === 'chip') {
      return (
        <View style={styles.chipContainer}>
          {selectedValues.map(value => (
            <CustomChip
              key={value.value}
              label={value.label}
              value={value.value}
              icon="close"
              iconLib="Fontisto"
              iconSize={16}
              onPressIcon={handleChipRemove}
            />
          ))}
        </View>
      );
    }

    return null;
  };

  const handleOutsidePress = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
        {isOpen && (
          <Pressable
            onPress={handleOutsidePress}
            style={[
              Platform.OS === 'web'
                ? ({position: 'fixed'} as CustomViewStyle)
                : {position: 'absolute'},
              {
                height: screenHeight,
                width: screenWidth,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              },
            ]}
          />
        )}
        {type === 'form' ? <Text style={styles.label}>{label}</Text> : null}
        <View
          style={[
            styles.dropDownContainer,
            {width: type === 'form' ? 320 : 'auto'},
            customStyle,
          ]}>
          <TouchableOpacity
            style={
              type === 'form'
                ? {
                    ...styles.inputBox,
                    ...(isInvalid ? styles.invalidStyles : {}),
                  }
                : styles.menuStyles
            }
            activeOpacity={1}
            disabled={disabled}
            onPress={toggleOpen}>
            {renderDisplay()}

            <View style={{flexDirection: 'row', gap: 10}}>
              {(!multiSelect && selectedValues.length > 0 && showClear && (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedValues([]);
                  }}
                  style={styles.closeIcon}>
                  <Icon name="close" size={20} color={'#495058'} />
                </TouchableOpacity>
              )) ||
                null}
              <VectorIcon
                lib={iconLib ? iconLib : 'Entypo'}
                name={labelIcon ? labelIcon : 'chevron-thin-down'}
                size={labelIconSize ? labelIconSize : 16}
                color={
                  disabled
                    ? '#CCCCCC'
                    : type === 'menu'
                    ? labelIconColor || '#FFF'
                    : '#6C757D'
                }
              />
            </View>
          </TouchableOpacity>

          {isOpen && (
            <View
              style={[
                styles.selectionBox,
                {
                  width: 'auto',
                },
              ]}>
              <View
                style={[
                  styles.dropDownHeader,
                  {paddingVertical: multiSelect ? 10 : 0},
                ]}>
                {showSelectAll && multiSelect && (
                  <View style={styles.selectAllWrapper}>
                    <CustomCheckBox
                      onPress={handleSelectAll}
                      checked={isAllOptionsSelected}
                    />
                  </View>
                )}

                {filter && (
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={styles.searchInput}
                      value={searchQuery}
                      onChangeText={handleSearchChange}
                      placeholderTextColor="#495057"
                    />
                  </View>
                )}

                {!showSelectAll && multiSelect && !filter && (
                  <View style={styles.flex} />
                )}

                {multiSelect && (
                  <TouchableOpacity
                    onPress={handleClose}
                    style={styles.closeIcon}>
                    <Icon name="close" size={22} color={'#495058'} />
                  </TouchableOpacity>
                )}
              </View>

              <View style={styles.optionsView}>
                {searchQuery.trim() && filteredOptions.length === 0 && (
                  <Text style={styles.noRecord}>
                    {emptyFilterMessage || 'No records found'}
                  </Text>
                )}

                <FlatList
                  data={filteredOptions}
                  keyExtractor={item => item.value.toString()}
                  renderItem={({item}) => (
                    <DropDownOption
                      option={item}
                      selectedValues={selectedValues}
                      handleOptionSelect={handleOptionSelect}
                      multiSelect={multiSelect}
                    />
                  )}
                  style={styles.optionsContainer}
                />

                {panelFooterTemplate ? panelFooterTemplate : null}
              </View>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default DropDown;
