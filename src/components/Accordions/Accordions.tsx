import React, {useState, useRef} from 'react';
import {LayoutChangeEvent, Text, View} from 'react-native';
import {List} from 'react-native-paper';
import {AccordionsProps} from './Accordions.types';
import {styles} from './Accordions.styles';
import {colors} from '../../../src/constants/colors';

const Accordions: React.FC<AccordionsProps> = ({
  data,
  renderLeft,
  renderRight,
  children,
  renderTitle,
  onPress,
  containerStyles,
  childrenStyle,
  onLayoutChange,
  onChildrenRef,
  onChildrenHeight,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const childrenRef = useRef<View | null>(null);

  const handlePress = (index: number) => {
    const newIndex = expandedIndex === index ? null : index;
    setExpandedIndex(newIndex);
    onPress(newIndex);

    if (onChildrenRef && newIndex !== null) {
      onChildrenRef(childrenRef);
    }
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    if (onLayoutChange) {
      onLayoutChange(width);
    }
  };

  const handleChildrenLayout = (event: LayoutChangeEvent, index: number) => {
    const {height} = event.nativeEvent.layout;
    if (onChildrenHeight) {
      onChildrenHeight(height, index);
    }
  };

  return (
    <View onLayout={handleLayout} style={styles.container}>
      {data?.map((item, index) => {
        const isExpanded = expandedIndex === index;
        console.log('item list accordion', item);

        const uniqueKey = `${item?.id || item?.title}-${index}`; // Use a unique key based on `item.id` or `item.title` and `index`
        return (
          <View
            key={uniqueKey}
            style={{
              ...styles.mainView,
              marginBottom: isExpanded ? 0 : 10,
              borderBottomLeftRadius: isExpanded ? 0 : 10,
              borderBottomRightRadius: isExpanded ? 0 : 10,
            }}>
            <List.Accordion
              key={uniqueKey}
              left={() => {
                if (renderLeft) {
                  return (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 20,
                      }}>
                      {renderLeft({item, index})}
                    </View>
                  );
                }
                return null;
              }}
              right={() =>
                renderRight
                  ? renderRight({
                      item,
                      index,
                      isExpanded,
                      handlePress,
                      color: colors.primaryColor,
                      text: '',
                    })
                  : null
              }
              titleStyle={{
                ...styles.titleTextStyle,
                color: isExpanded
                  ? colors.accordionTextColor
                  : colors.accordionCloseColor,
              }}
              title={renderTitle ? renderTitle({item, index}) : item.title}
              expanded={isExpanded}
              onPress={() => handlePress(index)}
              rippleColor={'transparent'}
              style={{
                ...styles.accordion,
                backgroundColor: isExpanded
                  ? colors.accordionBgColor
                  : colors.accordionMainBgColor,
                borderBottomLeftRadius: isExpanded ? 0 : 10,
                borderBottomRightRadius: isExpanded ? 0 : 10,
                borderBottomWidth: isExpanded ? 0 : 0.4,
                ...containerStyles,
              }}>
              <View
                ref={isExpanded ? childrenRef : null}
                testID="children-content"
                onLayout={event => handleChildrenLayout(event, index)}
                style={{
                  ...styles.childrenStyle,
                  borderBottomLeftRadius: isExpanded ? 10 : 0,
                  borderBottomRightRadius: isExpanded ? 10 : 0,
                  ...childrenStyle,
                }}>
                <Text style={styles.childrenTextStyle}>{children}</Text>
              </View>
            </List.Accordion>
          </View>
        );
      })}
    </View>
  );
};

export default Accordions;
