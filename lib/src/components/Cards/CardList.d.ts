import React from 'react';
import { ViewStyle } from 'react-native';
import { CardsProps } from './Cards.types';
interface CardListProps {
    data: CardsProps[];
    borderRadius: boolean;
    className?: ViewStyle;
    scrollEnabled?: boolean;
}
declare const CardList: React.FC<CardListProps>;
export default CardList;
