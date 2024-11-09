import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react-native';
import Accordions from '../../components/Accordions/Accordions';
import {AccordionsProps} from '../../components/Accordions/Accordions.types';
import {Text} from 'react-native';
import CheckBoxTypeButton from '../../components/CheckBoxTypeButton';
import Icon from '../../common/Icon';
import {colors} from '../../constants/colors';

export default {
  title: 'Accordions',
  component: Accordions,
} as Meta;

const Template: Story<AccordionsProps> = args => {
  const [checkboxStates, setCheckboxStates] = useState(
    args.data.map(() => 'unchecked'),
  );

  const [hoverStates, setHoverStates] = useState(args.data.map(() => false));

  const handleCheckboxChange = (index: number) => {
    setCheckboxStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] =
        newStates[index] === 'checked' ? 'unchecked' : 'checked';
      return newStates;
    });
  };

  const handleHover = (index: number, isHovering: boolean) => {
    setHoverStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = isHovering;
      return newStates;
    });
  };

  const handleLayoutChange = (width: number) => {
    console.log('Accordion Width:', width);
  };

  return (
    <Accordions
      {...args}
      onPress={() => {}}
      renderLeft={({index}) => (
        <CheckBoxTypeButton
          status={checkboxStates[index]}
          onHoverIn={() => handleHover(index, true)}
          onHoverOut={() => handleHover(index, false)}
          hover={hoverStates[index]}
          theme={{
            animation: {
              scale: 0,
            },
          }}
          position={'leading'}
          borderColor={
            checkboxStates[index] === 'unchecked' && hoverStates[index]
              ? colors.primaryColor
              : colors.checkBorder
          }
          borderWidth={checkboxStates[index] === 'checked' ? 0 : 1.5}
          opacity={1}
          style={{backgroundColor: colors.white}}
          uncheckedColor={'transparent'}
          color={colors.primaryColor}
          onPress={() => handleCheckboxChange(index)}
        />
      )}
      onLayoutChange={handleLayoutChange}
      onChildrenHeight={(height, index) => {
        console.log(`Height of children at index ${index}: ${height}`);
      }}
      renderRight={({isExpanded, color, text}) => (
        <Icon
          size={25}
          color={color}
          text={text}
          lib={'Ionicons'}
          name={isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'}
        />
      )}
      renderTitle={({item}) => <Text>{item.title}</Text>}>
      <Text>{'Children List Date'}</Text>
    </Accordions>
  );
};

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      title: 'Breast Cancer (9)',
      subTitle: '116895806 | Down town, 7th avenue, NY 322',
      content:
        'Body Content.\n Props used: leftTemplate(icon, title, subtitle), rightTemplate(icon,title, onClick), bodyTemplate',
    },
    {
      title: 'Breast Cancer (9)',
      subTitle: '116895806 | Down town, 7th avenue, NY 322',
      content: 'Body Content.\n Props used: headerTemplate, bodyTemplate',
    },
    {
      title: 'Breast Cancer (9)',
      subTitle: '116895806 | Down town, 7th avenue, NY 322',
      content: 'Body Content.\n Props used: headerTemplate, bodyTemplate',
    },
  ],
};
