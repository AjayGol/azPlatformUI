import React, {useRef} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import ToastMessages from '../../components/ToastMessages';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import {ToastMessagesProps} from '../../components/ToastMessages/ToastMessages.types';
import Button from '../../components/Button';
import {useWindowDimensions, View} from 'react-native';

const meta: Meta<typeof ToastMessages> = {
  title: 'components/ToastMessages',
  component: ToastMessages,
  argTypes: {
    severity: {
      control: {type: 'select'},
      options: ['success', 'error', 'warning'],
      description: 'severity of the message',
    },
    summary: {control: 'text', description: 'summary of the message'},
    detail: {control: 'text', description: 'detail of the message'},
    content: {
      control: 'text',
      description:
        'Custom content of the message. If enabled, summary and details properties are ignored.',
    },
    style: {control: 'object', description: 'Inline style of the message'},
    contentStyle: {
      control: 'object',
      description: 'Inline style of the message content.',
    },
    closable: {
      control: 'boolean',
      description:
        'Whether the message can be closed manually using the close icon',
    },
    sticky: {
      control: 'boolean',
      description: 'When enabled, message is not removed automatically.',
    },
    life: {
      control: 'number',
      description: 'Delay in milliseconds to close the message automatically.',
    },
    position: {
      control: {type: 'select'},
      options: [
        'top-right',
        'top-left',
        'top-center',
        'center',
        'bottom-left',
        'bottom-right',
        'bottom-center',
      ],
      description: 'position of the message',
    },
    testID: {table: {disable: true}},
    toastIndex: {table: {disable: true}},
    onClose: {table: {disable: true}},
    reference: {table: {disable: true}},
  },
  decorators: [withTests({results})],
} satisfies Meta<typeof ToastMessages>;

export default meta;

const ToastComponent: React.FC<ToastMessagesProps> = props => {
  const toast = useRef(null);

  const showToast = () => {
    const toastProps = {
      ...props,
    };

    toast.current?.showToast(toastProps);
  };

  const {width, height} = useWindowDimensions();

  return (
    <View style={{width: width, height: height}}>
      <ToastMessages ref={toast} {...(props || {})} />
      <View>
        <Button label="Show Toast" onPress={showToast} />
      </View>
    </View>
  );
};

const Template: StoryObj<typeof ToastMessages> = {
  render: (args: ToastMessagesProps) => <ToastComponent {...args} />,
};

export const ToastMessage: StoryObj<typeof ToastMessages> = {
  ...Template,
  args: {
    summary: 'Success Toast',
    detail: 'Message Content Success',
    content: '',
    style: {},
    contentStyle: {},
    closable: true,
    sticky: false,
    closeIconLib: 'Ionicons',
    closeIconName: 'close-outline',
    closeIconSize: 25,
    severityIconLib: 'Ionicons',
    severityIconName: 'checkmark',
    severityIconSize: 40,
    position: 'top-left',
    visible: true,
    severity: 'success',
    life: 3400,
    toastIndex: 0,
  },
};
