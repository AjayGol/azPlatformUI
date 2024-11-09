import React from 'react';
import {render, screen} from '@testing-library/react-native';
import CardList from './CardList';
import {Text} from 'react-native';

const testData = [
  {
    id: '1',
    children: <Text>Strategy: Early detection...</Text>,
    header: <Text>Breast Cancer Advanced Stage</Text>,
    footer: <Text>Date: 01/30/2024</Text>,
  },
];

describe('CardList Component', () => {
  it('renders CardList with the provided data and checks for Cards', () => {
    render(<CardList data={testData} borderRadius={false} />);

    expect(screen.getByText('Breast Cancer Advanced Stage')).toBeTruthy();
    expect(screen.getByText('Date: 01/30/2024')).toBeTruthy();
    expect(screen.getByText('Strategy: Early detection...')).toBeTruthy();
  });
});
