import React, { FC } from 'react';
import s from './CartedProducts.module.scss';
import { ProductList } from 'src/features/listProduct/ui';
import { OrderPanel } from 'src/features/orderProducts/ui';
import { useCartProducts } from 'src/widgets/cartedProducts/model/useCartProducts';
import { TooltipPanel } from 'src/shared/ui/tooltipPanel';

const TOOLTIP_WIDTH = 400;

const CartedProducts: FC = () => {
  const { inCartProducts, onOrderProducts, orderStatus, costCart } = useCartProducts();

  return (
    <>
      {inCartProducts.length ? (
        <>
          <ProductList typeCard={'InCart'} products={inCartProducts} />
          <div className={s.order}>
            <OrderPanel onOrderProducts={onOrderProducts} costOrder={costCart} />
          </div>
        </>
      ) : (
        <div className={s.empty_cart}>{'🙈'}</div>
      )}
      <div className={s.status}>
        <TooltipPanel text={orderStatus} tooltipWidth={TOOLTIP_WIDTH} requestRecalcPosition={inCartProducts.length} />
      </div>
    </>
  );
};

export default CartedProducts;
