import React, { FC, useCallback } from 'react';
import { AppendableProductList } from 'src/features/listProduct/ui';
import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { addRandomProducts, selectProducts } from 'src/features/store/model/slices/product';

const COUNT_MORE_PRODUCTS = 3;

const StoredProducts: FC = () => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  const handleMoreProducts = useCallback(() => {
    dispatch(addRandomProducts(COUNT_MORE_PRODUCTS));
  }, [dispatch]);

  return <AppendableProductList typeCard="Short" products={products} onMoreProducts={handleMoreProducts} />;
};

export default StoredProducts;
