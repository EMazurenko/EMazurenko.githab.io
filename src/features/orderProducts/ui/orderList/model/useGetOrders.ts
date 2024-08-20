import { useEffect, useState } from 'react';
import { Order } from 'src/entities/order/model/types';
import { coreService } from 'src/features/coreService/model';

export const useGetOrders = () => {
  const [orders, setOrders] = useState<Order[]>(null);
  const [error, setError] = useState<string>(null);

  useEffect(() => {
    coreService
      .getOrders()
      .then((orders) => {
        setOrders(orders);
      })
      .catch((reason) => {
        console.log(reason);
        setError(reason.message);
      });
  }, []);

  return {
    orders,
    error,
  };
};
