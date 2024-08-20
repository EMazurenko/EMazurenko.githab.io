import React from 'react';
import OrderCard from 'src/entities/order/ui/orderCard/OrderCard';
import { OrderProduct, OrderStatus } from 'src/entities/order/model/types';
import { createProductForId } from 'src/features/createRandomProduct/api';
import { dateFormatter } from 'src/shared/utils/FormatUtils';

export default {
  title: 'Order/Order card',
  component: OrderCard,
};

export const Default = () => {
  const products: OrderProduct[] = [];
  for (let i = 1; i < 4; i++) {
    products.push({ product: createProductForId(i.toString()), quantity: i });
  }
  return (
    <OrderCard
      id="1"
      products={products}
      status={OrderStatus.PendingConfirmation}
      createdAt={dateFormatter(new Date())}
    />
  );
};
