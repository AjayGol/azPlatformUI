import React, {useRef} from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import ToastMessages from '../../components/ToastMessages';
import {View, Button} from 'react-native';

const MockComponent = () => {
  const toastRef = useRef(null);

  return (
    <View>
      <ToastMessages ref={toastRef} />
      <Button
        title="Show Toast"
        onPress={() => {
          toastRef.current?.showToast({
            summary: 'Test Toast',
            detail: 'This is a test toast message.',
            severity: 'success',
            life: 3000,
            visible: true,
          });
        }}
      />
    </View>
  );
};

test('shows a toast message on button press', () => {
  const {getByText, queryByText} = render(<MockComponent />);

  expect(getByText('Show Toast')).toBeTruthy();

  fireEvent.press(getByText('Show Toast'));

  waitFor(() => {
    expect(queryByText('Show Toast')).toBeTruthy();
  });

  new Promise(r => setTimeout(r, 3000));
});
