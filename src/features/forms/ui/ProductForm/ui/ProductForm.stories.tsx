import React from 'react';
import ProductForm from 'src/features/forms/ui/ProductForm/ui/ProductForm';
import { createRandomProduct } from 'src/features/createRandomProduct/api';
import ProductStore from 'src/features/storeProduct/model/ProductStore';
import photo_stub from 'src/entities/product/ui/productCard/stub.png';

const PRODUCT_ID = '1';

const addProductToStore = () => {
  const product = createRandomProduct(Date.now().toString());
  product.id = PRODUCT_ID;
  product.photo = photo_stub;
  ProductStore.save(product);
};
addProductToStore();

export default {
  title: 'UI Kit/Forms/Product form',
  component: ProductForm,
};

export const EditMode = () => <ProductForm productId={PRODUCT_ID} />;

export const CreateMode = () => <ProductForm />;
