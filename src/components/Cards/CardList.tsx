import React from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import {CardsProps} from './Cards.types';
import Cards from './Cards';
import {deviceWidth, isIpad, isMobile, isWeb} from '../../constants/constant';

const renderItem = ({
  item,
  index,
  borderRadius,
}: {
  item: CardsProps;
  index: number;
  borderRadius: boolean;
}) => <Cards {...item} index={index} borderRadius={borderRadius} />;

interface CardListProps {
  data: CardsProps[];
  borderRadius: boolean;
  className?: ViewStyle;
  scrollEnabled?: boolean;
}

const CardList: React.FC<CardListProps> = ({
  data,
  borderRadius,
  scrollEnabled = true,
}) => {
  if (isWeb) {
    return (
      <View style={CardListStyles.gridContainer}>
        {data.map((item, index) => (
          <Cards
            key={index}
            {...item}
            index={index}
            borderRadius={borderRadius}
            className={item.className}
          />
        ))}
      </View>
    );
  }
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      scrollEnabled={scrollEnabled}
      showsHorizontalScrollIndicator={false}
      data={data}
      style={CardListStyles.list}
      contentContainerStyle={CardListStyles.contentContainer}
      numColumns={3}
      renderItem={item => renderItem({...item, borderRadius})}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const CardListStyles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: isMobile && !isIpad ? 'center' : 'flex-start',
  },
  gridContainer: {
    // Default style (for mobile fallback)
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 20,
  } as ViewStyle,
});

// Separate styles for web
const webStyles = StyleSheet.create({
  gridContainer: {
    // Use web-specific styles
    // gridTemplateColumns: 'repeat(auto-fill, minmax(375px, 1fr))',
    gridTemplateColumns: `repeat(auto-fill, minmax(${
      deviceWidth * 0.25
    }px, 1fr))`,
    gap: 20,
    padding: 20,
    display: 'grid',
    boxSizing: 'border-box',
  } as unknown as ViewStyle,
});

// Apply web styles conditionally
const applyWebStyles = (styles: ViewStyle) => {
  if (isWeb) {
    return {...styles, ...webStyles.gridContainer};
  }
  return styles;
};

const finalStyles = {
  ...applyWebStyles(CardListStyles.gridContainer),
};

CardListStyles.gridContainer = finalStyles;

export default CardList;
