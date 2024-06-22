import React from 'react';
import ProductForm from 'src/features/forms/ui/ProductForm/ui/ProductForm';
import { createProductForId } from 'src/features/createRandomProduct/api';
import ProductStore from 'src/features/storeProduct/model/ProductStore';

const PRODUCT_ID = '1';

const addProductToStore = () => {
  ProductStore.save(createProductForId(PRODUCT_ID));
};
addProductToStore();

export default {
  title: 'UI Kit/Forms/Product form',
  component: ProductForm,
};

export const EditMode = () => <ProductForm productId={PRODUCT_ID} />;

export const CreateMode = () => <ProductForm />;
