import React from 'react';
import {View} from 'react-native';
import {styles} from './Cards.styles';
import {CardsProps} from './Cards.types';
import {CARD_WIDTH} from '../../constants/constant';

const Cards: React.FC<CardsProps & {itemCount?: number}> = ({
  header,
  children,
  footer,
  borderRadius,
  className,
}) => {
  const cardWidth = CARD_WIDTH;

  const customHeader = () => {
    if (header) {
      return header;
    }
    return null;
  };

  const customFooter = () => {
    if (footer) {
      return footer;
    }
    return null;
  };

  return (
    <View
      style={{
        ...styles.CardsContainer,
        borderBottomLeftRadius: borderRadius ? 8 : 0,
        borderBottomRightRadius: borderRadius ? 8 : 0,
        width: cardWidth,
        ...className,
      }}>
      {customHeader()}
      {children}
      {customFooter()}
    </View>
  );
};

export default Cards;
