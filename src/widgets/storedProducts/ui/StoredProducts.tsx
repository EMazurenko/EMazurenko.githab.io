import React, { FC } from 'react';
import { useProductContext } from 'src/features/storeProduct/ui';
import { AppendableProductList } from 'src/features/listProduct/ui';

const StoredProducts: FC = () => {
  const { products, callbacks } = useProductContext();

  return <AppendableProductList typeCard="Short" products={products} onMoreProducts={callbacks.addMore} />;
};

export default StoredProducts;
