import { CartButton } from './CartButton';

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

const Template = (args) => <CartButton {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  isFromCart: false,
  initCountItems: 0,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  isFromCart: false,
  initCountItems: 0,
};

export const FromCart = Template.bind({});
FromCart.args = {
  size: 'medium',
  isFromCart: true,
  initCountItems: 1,
};
