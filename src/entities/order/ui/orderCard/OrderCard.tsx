import React, { FC, useCallback, useState } from 'react';
import s from './OrderCard.module.scss';
import { Order } from 'src/entities/order/model/types';
import OrderDetails from 'src/entities/order/ui/orderCard/orderDetails/OrderDetails';
import OrderTitle from 'src/entities/order/ui/orderCard/orderTitle/OrderTitle';

type OrderProps = Order;

const OrderCard: FC<OrderProps> = ({ products, ...rest }) => {
  const [needShowDetails, setNeedShowDetails] = useState<boolean>(false);
  const sum = (products && products.reduce((acc, p) => acc + p.product.price * p.quantity, 0)) || 0;

  const handleShowDetails = useCallback(() => {
    setNeedShowDetails((prev) => !prev);
  }, [setNeedShowDetails]);

  return (
    <div className={s.root}>
      <div className={s.title} onClick={handleShowDetails}>
        <OrderTitle {...rest} sum={sum} />
      </div>
      {needShowDetails && <OrderDetails products={products} />}
    </div>
  );
};

export default OrderCard;
