import React, { FC } from 'react';
import s from './AppendableProductList.module.scss';
import MoreButton from 'src/features/listProduct/ui/AppendableProductList/moreButton/MoreButton';
import ProductList, { ProductListProps } from 'src/features/listProduct/ui/ProductList/ProductList';

type AppendableProductListProps = ProductListProps & {
  onMoreProducts: () => void;
  noMoreProducts?: boolean;
};

const AppendableProductList: FC<AppendableProductListProps> = ({ onMoreProducts, noMoreProducts, ...props }) => {
  return (
    <div className={s.root}>
      <ProductList {...props} className={s.product_list} />
      {!noMoreProducts && <MoreButton onMoreProducts={onMoreProducts} />}
    </div>
  );
};

export default AppendableProductList;
