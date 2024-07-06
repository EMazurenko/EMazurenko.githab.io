import React, { FC, useCallback } from 'react';
import { ProductCard, ProductCardContainerProps } from 'src/entities/product/ui/productCard';
import { removeProduct, selectCountProduct, setProductCount, useCartDispatch } from 'src/features/storeCart/model';
import { useSelector } from 'react-redux';

type ProductItemProps = { id: string } & Omit<ProductCardContainerProps, 'initCountItems'>;

const ProductItem: FC<ProductItemProps> = ({ id, ...rest }) => {
  const dispatch = useCartDispatch();
  const count = useSelector(selectCountProduct(id));

  const handleChangeCountItems = useCallback(
    (count: number) => {
      dispatch(setProductCount({ productId: id, count }));
      if (count <= 0) {
        dispatch(removeProduct({ productId: id }));
      }
    },
    [id, dispatch]
  );

  return <ProductCard {...rest} initCountItems={count} onChangeCountItems={handleChangeCountItems} />;
};

export default ProductItem;
