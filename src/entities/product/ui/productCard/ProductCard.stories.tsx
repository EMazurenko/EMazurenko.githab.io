import React from 'react';
import { ProductCard } from './ProductCard';
import { ProductCardContainerProps } from './ProductCard.types';

export default {
  title: 'Product/Product card',
  component: ProductCard,
  argTypes: {
    type: {
      type: 'string',
      description: 'Тип карточки',
      defaultValue: 'Short',
      options: ['Short', 'InCart', 'Full'],
      control: {
        type: 'radio',
      },
    },
    category: {
      type: 'string',
      description: 'Категория товара',
    },
    title: {
      type: 'string',
      description: 'Наименование товара',
    },
    description: {
      type: 'string',
      description: 'Описание товара',
    },
  },
};

const Template = (args: ProductCardContainerProps) => <ProductCard {...args} />;

export const Full = Template.bind({});
Full.args = {
  type: 'Full',
} as ProductCardContainerProps;

export const Short = Template.bind({});
Short.args = {
  type: 'Short',
} as ProductCardContainerProps;

export const InCart = Template.bind({});
InCart.args = {
  type: 'InCart',
} as ProductCardContainerProps;
