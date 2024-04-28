import React, { useCallback, useState } from 'react';
import ProductList from 'src/features/listProduct/ui/ProductList';
import { Product } from 'src/entities/product/model/types';
import { createRandomProduct } from 'src/features/createRandomProduct/api';

export default {
  title: 'Product/Product list',
  component: ProductList,
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

  return <ProductList products={products} onMoreProducts={handleMoreProducts} />;
};
