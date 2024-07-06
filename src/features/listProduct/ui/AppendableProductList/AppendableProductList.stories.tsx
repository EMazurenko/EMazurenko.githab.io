import React, { useCallback, useState } from 'react';
import { Product } from 'src/entities/product/model/types';
import { createRandomProduct } from 'src/features/createRandomProduct/api';
import AppendableProductList from 'src/features/listProduct/ui/AppendableProductList/AppendableProductList';

export default {
  title: 'Product/Appendable product list',
  component: AppendableProductList,
};

const initProducts = () => {
  const products: Product[] = [];
  for (let i = 0; i < 10; i++) {
    products.push(createRandomProduct('now'));
  }
  return products;
};

export const Default = () => {
  const [products, setProducts] = useState(() => initProducts());

  const handleMoreProducts = useCallback(() => {
    setProducts((prevProducts) => [...prevProducts, createRandomProduct('now'), createRandomProduct('now')]);
  }, []);

  return <AppendableProductList typeCard="Full" products={products} onMoreProducts={handleMoreProducts} />;
};
