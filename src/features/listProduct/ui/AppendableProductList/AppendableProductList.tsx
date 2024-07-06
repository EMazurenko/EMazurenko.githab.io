import React, { FC } from 'react';
import s from './AppendableProductList.module.scss';
import MoreButton from 'src/features/listProduct/ui/AppendableProductList/moreButton/MoreButton';
import ProductList, { ProductListProps } from 'src/features/listProduct/ui/ProductList/ProductList';

type AppendableProductListProps = ProductListProps & {
  onMoreProducts: () => void;
};

const AppendableProductList: FC<AppendableProductListProps> = ({ onMoreProducts, ...props }) => {
  return (
    <div className={s.root}>
      <ProductList {...props} className={s.product_list} />
      <MoreButton onMoreProducts={onMoreProducts} />
    </div>
  );
};

export default AppendableProductList;
