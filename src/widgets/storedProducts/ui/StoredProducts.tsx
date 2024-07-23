import React, { FC, useCallback } from 'react';
import s from './StoredProducts.module.scss';
import { AppendableProductList } from 'src/features/listProduct/ui';
import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import {
  addMoreProducts,
  selectHasMoreProducts,
  selectProductError,
  selectProducts,
} from 'src/features/store/model/slices/product';
import { TooltipPanel } from 'src/shared/ui/tooltipPanel';

const TOOLTIP_WIDTH = 400;

const StoredProducts: FC = () => {
  const products = useAppSelector(selectProducts);
  const productError = useAppSelector(selectProductError);
  const hasMoreProducts = useAppSelector(selectHasMoreProducts);
  const dispatch = useAppDispatch();

  const handleMoreProducts = useCallback(() => {
    dispatch(addMoreProducts());
  }, [dispatch]);

  return (
    <>
      <div className={s.error}>
        <TooltipPanel text={productError} tooltipWidth={TOOLTIP_WIDTH} />
      </div>
      <AppendableProductList
        typeCard="Short"
        products={products}
        onMoreProducts={handleMoreProducts}
        noMoreProducts={!hasMoreProducts}
      />
    </>
  );
};

export default StoredProducts;
