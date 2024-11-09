import React from 'react';
import {render} from '@testing-library/react-native';
import Accordions from './Accordions';
import {Text} from 'react-native';

const mockData = [
  {
    title: 'Test Item 1',
    subTitle: 'Subtitle 1',
    content: 'Content 1',
  },
  {
    title: 'Test Item 2',
    subTitle: 'Subtitle 2',
    content: 'Content 2',
  },
];

const renderLeftMock = jest.fn();
const renderRightMock = jest.fn();
const renderTitleMock = jest.fn();
const onPressMock = jest.fn();

test('Accordions component renders and expands/collapses correctly', () => {
  const {queryByText} = render(
    <Accordions
      data={mockData}
      renderLeft={renderLeftMock}
      renderRight={renderRightMock}
      renderTitle={renderTitleMock}
      onPress={onPressMock}>
      <Text>{'children content'}</Text>
    </Accordions>,
  );

  expect(queryByText('children content')).toBeNull();
});
