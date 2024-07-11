import React from 'react';
import ProductForm from 'src/features/forms/ProductForm/ui/ProductForm';

const PRODUCT_ID = '1';

export default {
  title: 'UI Kit/Forms/Product form',
  component: ProductForm,
};

export const EditMode = () => <ProductForm productId={PRODUCT_ID} />;

export const CreateMode = () => <ProductForm />;
