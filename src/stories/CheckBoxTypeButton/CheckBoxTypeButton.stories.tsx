import React, {useState} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import CheckBoxTypeButton from '../../components/CheckBoxTypeButton';
import {colors} from '../../constants/colors';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {CheckBoxTypeButtonStoryArgs} from '../../components/CheckBoxTypeButton/CheckBoxTypeButton.types';

const meta: Meta<typeof CheckBoxTypeButton> = {
  title: 'components/CheckBoxTypeButton',
  component: CheckBoxTypeButton,
  argTypes: {
    check: {
      description: 'This is Truthy Falsy value',
      control: {type: 'boolean'},
      defaultValue: false,
    },
    autoFocus: {
      description:
        'When present, it specifies that the component should automatically get focus on load.',
      control: {type: 'boolean'},
      defaultValue: false,
    },
    className: {
      description: 'Style class of the element.',
      control: {type: 'string'},
      defaultValue: '',
    },
    style: {
      description: 'Inline style of the element.',
      control: {type: 'object'},
      defaultValue: {},
    },
    name: {
      description: 'Name of the checkbox element.',
      control: {type: 'string'},
      defaultValue: '',
    },
    value: {
      description: 'Value of the component',
      control: {type: 'any'},
      defaultValue: '',
    },
    disabled: {
      description:
        'When present, it specifies that the element value cannot be altered.',
      control: {type: 'boolean'},
      defaultValue: false,
    },
    falseValue: {
      description: 'Value in unchecked state.',
      control: {type: 'any'},
      defaultValue: null,
    },
    borderColor: {table: {disable: true}},
    borderWidth: {table: {disable: true}},
    onPress: {table: {disable: true}},
    onHoverIn: {table: {disable: true}},
    onHoverOut: {table: {disable: true}},
    opacity: {table: {disable: true}},
    status: {table: {disable: true}},
    hover: {table: {disable: true}},
    theme: {table: {disable: true}},
    position: {table: {disable: true}},
    uncheckedColor: {table: {disable: true}},
    color: {table: {disable: true}},
  },
  decorators: [withTests({results})],
  tags: ['autodocs'],
};

export default meta;

const CheckBoxTypeButtonComponent: React.FC<
  CheckBoxTypeButtonStoryArgs
> = props => {
  const [status, setStatus] = useState<
    'checked' | 'unchecked' | 'indeterminate'
  >(props.check ? 'checked' : 'unchecked');
  const [hover, setHover] = useState(false);

  return (
    <CheckBoxTypeButton
      {...props}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      status={status}
      hover={hover}
      style={{
        ...props.style,
      }}
      theme={{
        animation: {
          scale: 0,
        },
      }}
      position={'leading'}
      borderColor={
        props.disabled === true
          ? colors.borderCheckLight
          : hover
          ? colors.secondaryColor
          : colors.checkBorder
      }
      borderWidth={props.disabled === true ? 2 : status === 'checked' ? 0 : 2}
      opacity={props.disabled === true ? 0.7 : 1}
      uncheckedColor={'transparent'}
      color={colors.secondaryColor}
      onPress={() => {
        if (props.disabled === true) {
          return null;
        } else {
          setStatus(status === 'checked' ? 'unchecked' : 'checked');
        }
      }}
    />
  );
};

const Template: StoryObj<typeof CheckBoxTypeButton> = {
  render: (args: CheckBoxTypeButtonStoryArgs) => (
    <CheckBoxTypeButtonComponent {...args} />
  ),
};

export const CheckBoxButtons: StoryObj<typeof CheckBoxTypeButton> = {
  ...Template,
  args: {
    autoFocus: false,
    className: '',
    style: {},
    name: '',
    value: '',
    disabled: false,
    falseValue: null,
    check: false,
  },
};

export const CheckBoxWithCheckButton: StoryObj<typeof CheckBoxTypeButton> = {
  ...Template,
  args: {
    autoFocus: false,
    className: '',
    style: {},
    name: '',
    value: '',
    disabled: false,
    falseValue: null,
    check: true, // Adjusted to show checked state
  },
};

export const CheckBoxWithUncheckButton: StoryObj<typeof CheckBoxTypeButton> = {
  ...Template,
  args: {
    autoFocus: false,
    className: '',
    style: {},
    name: '',
    value: '',
    disabled: false,
    falseValue: null,
    check: false,
  },
};
