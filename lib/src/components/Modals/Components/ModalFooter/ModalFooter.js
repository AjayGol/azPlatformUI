import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './ModalFooter.styles';
import Button from '../../../Button';
const ModalFooter = ({ title, onPressButton, firstButtonText, secondButtonText, }) => {
    return (React.createElement(View, { style: styles.footerContainer },
        React.createElement(Text, { style: styles.title }, title),
        React.createElement(View, { style: styles.buttonContainer },
            React.createElement(View, { style: styles.button },
                React.createElement(Button, { type: "primary", label: firstButtonText, onPress: onPressButton(firstButtonText) })),
            React.createElement(Button, { type: "primary", label: secondButtonText, onPress: onPressButton(secondButtonText) }))));
};
export default ModalFooter;
