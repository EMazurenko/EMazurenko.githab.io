import React, { FC } from 'react';
import { useGetOrders } from 'src/features/orderProducts/ui/orderList/model/useGetOrders';
import OrderCard from 'src/entities/order/ui/orderCard/OrderCard';

const OrderList: FC = () => {
  const { orders } = useGetOrders();

  return <>{orders && orders.map((o) => <OrderCard key={o.id} {...o} />)}</>;
};

export default OrderList;
