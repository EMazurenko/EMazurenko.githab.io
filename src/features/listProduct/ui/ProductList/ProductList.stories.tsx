import React from 'react';
import ProductList, { ProductListProps } from 'src/features/listProduct/ui/ProductList/ProductList';
import { Product } from 'src/entities/product/model/types';
import { createRandomProduct } from 'src/features/createRandomProduct/api';

export default {
  title: 'Product/Product list',
  component: ProductList,
  argTypes: {
    typeCard: {
      type: 'string',
      description: 'Тип карточки',
      defaultValue: 'Short',
      options: ['Short', 'InCart', 'Full'],
      control: {
        type: 'radio',
      },
    },
  },
};

const products: Product[] = [];
for (let i = 0; i < 10; i++) {
  products.push(createRandomProduct('now'));
}

export const Default = (args: ProductListProps) => <ProductList {...args} products={products} />;
