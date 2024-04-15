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

const handlerClose = () => console.log('Click button close!');

export const Small = Template.bind({});
const smallArgs: CloseButtonProps = {
  size: 'small',
  handlerClose,
};
Small.args = smallArgs;

export const Large = Template.bind({});
const largeArgs: CloseButtonProps = {
  size: 'large',
  handlerClose,
};
Large.args = largeArgs;
