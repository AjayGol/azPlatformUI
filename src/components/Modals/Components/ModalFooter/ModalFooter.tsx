import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ModalFooter.styles';
import {ModalFooterProps} from './ModalFooter.types';
import Button from '../../../Button';

const ModalFooter: React.FC<ModalFooterProps> = ({
  title,
  onPressButton,
  firstButtonText,
  secondButtonText,
}) => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            type="primary"
            label={firstButtonText}
            onPress={onPressButton(firstButtonText)}
          />
        </View>
        <Button
          type="primary"
          label={secondButtonText}
          onPress={onPressButton(secondButtonText)}
        />
      </View>
    </View>
  );
};

export default ModalFooter;
