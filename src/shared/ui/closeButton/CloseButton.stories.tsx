import React from 'react';
import { CloseButton, CloseButtonProps } from './CloseButton';

export default {
  title: 'UI Kit/Close button',
  component: CloseButton,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер кнопки закрытия окна',
      defaultValue: 'small',
      options: ['small', 'large'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: CloseButtonProps) => <CloseButton {...args} />;

const handleClose = () => console.log('Click button close!');

export const Small = Template.bind({});
const smallArgs: CloseButtonProps = {
  size: 'small',
  onClose: handleClose,
};
Small.args = smallArgs;

export const Large = Template.bind({});
const largeArgs: CloseButtonProps = {
  size: 'large',
  onClose: handleClose,
};
Large.args = largeArgs;
