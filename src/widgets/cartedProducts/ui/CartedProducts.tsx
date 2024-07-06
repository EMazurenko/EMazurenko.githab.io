import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import s from './CartedProducts.module.scss';
import { selectCart } from 'src/features/storeCart/model';
import { useProductContext } from 'src/features/storeProduct/ui';
import { ProductList } from 'src/features/listProduct/ui';

const CartedProducts: FC = () => {
  const { products } = useProductContext();
  const inCartProductIds = useSelector(selectCart).products;
  const inCartProducts = products.filter((p) => p.id in inCartProductIds);

  if (inCartProducts.length) return <ProductList typeCard={'InCart'} products={inCartProducts} />;
  else return <div className={s.empty_cart}>{'🙈'}</div>;
};

export default CartedProducts;
