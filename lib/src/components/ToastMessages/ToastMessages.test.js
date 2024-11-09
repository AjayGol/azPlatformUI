import React, { useRef } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ToastMessages from '../../components/ToastMessages';
import { View, Button } from 'react-native';
const MockComponent = () => {
    const toastRef = useRef(null);
    return (React.createElement(View, null,
        React.createElement(ToastMessages, { ref: toastRef }),
        React.createElement(Button, { title: "Show Toast", onPress: () => {
                var _a;
                (_a = toastRef.current) === null || _a === void 0 ? void 0 : _a.showToast({
                    summary: 'Test Toast',
                    detail: 'This is a test toast message.',
                    severity: 'success',
                    life: 3000,
                    visible: true,
                });
            } })));
};
test('shows a toast message on button press', () => {
    const { getByText, queryByText } = render(React.createElement(MockComponent, null));
    expect(getByText('Show Toast')).toBeTruthy();
    fireEvent.press(getByText('Show Toast'));
    waitFor(() => {
        expect(queryByText('Show Toast')).toBeTruthy();
    });
    new Promise(r => setTimeout(r, 3000));
});
