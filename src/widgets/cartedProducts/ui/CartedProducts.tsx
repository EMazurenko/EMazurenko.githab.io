import React, { FC } from 'react';
import s from './CartedProducts.module.scss';
import { selectCart } from 'src/features/store/model/slices/cart';
import { ProductList } from 'src/features/listProduct/ui';
import { useAppSelector } from 'src/features/store/model';
import { selectProducts } from 'src/features/store/model/slices/product';

const CartedProducts: FC = () => {
  const products = useAppSelector(selectProducts);
  const inCartProductIds = useAppSelector(selectCart).products;
  const inCartProducts = products.filter((p) => p.id in inCartProductIds);

  if (inCartProducts.length) return <ProductList typeCard={'InCart'} products={inCartProducts} />;
  else return <div className={s.empty_cart}>{'🙈'}</div>;
};

export default CartedProducts;
