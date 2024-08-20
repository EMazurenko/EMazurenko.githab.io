import React, { FC } from 'react';
import s from './OrderDetails.module.scss';
import { OrderProduct } from 'src/entities/order/model/types';
import OrderDetailsHeader from 'src/entities/order/ui/orderCard/orderDetails/orderDetailsHeader/OrderDetailsHeader';
import OrderDetailsItem from 'src/entities/order/ui/orderCard/orderDetails/orderDetailsItem/OrderDetailsItem';

type OrderDetailsProps = {
  products: OrderProduct[];
};

const OrderDetails: FC<OrderDetailsProps> = ({ products }) => {
  return (
    <div className={s.root}>
      <OrderDetailsHeader />
      {products.map(({ product, quantity }) => (
        <OrderDetailsItem
          key={product.id}
          photo={product.photo}
          name={product.name}
          price={product.price}
          quantity={quantity}
        />
      ))}
    </div>
  );
};

export default OrderDetails;
