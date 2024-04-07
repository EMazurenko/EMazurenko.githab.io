import React from 'react';
import { CartButton } from './CartButton';
import { CartButtonContainerProps } from './CartButton.types';

export default {
  title: 'UI/Shop/Cart button',
  component: CartButton,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер кнопки корзины',
      defaultValue: 'medium',
      options: ['medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    isFromCart: {
      type: 'boolean',
      description: 'Режим кнопки при нахождении товара в корзине',
      defaultValue: false,
    },
    initCountItems: {
      type: 'number',
      description: 'Начальное значение товара в корзине',
      defaultValue: 0,
    },
  },
};

const Template = (args: CartButtonContainerProps) => <CartButton {...args} />;

export const Medium = Template.bind({});
const mediumArgs: CartButtonContainerProps = {
  size: 'medium',
  isFromCart: false,
  initCountItems: 0,
};
Medium.args = mediumArgs;

export const Large = Template.bind({});
const largeArgs: CartButtonContainerProps = {
  size: 'large',
  isFromCart: false,
  initCountItems: 0,
};
Large.args = largeArgs;

export const FromCart = Template.bind({});
const fromCartArgs = {
  size: 'medium',
  isFromCart: true,
  initCountItems: 1,
};
FromCart.args = fromCartArgs;
