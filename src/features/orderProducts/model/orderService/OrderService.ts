import { Order, OrderStatus } from 'src/entities/order/model/types';

export type OrderInput = {
  products: [
    {
      id: string;
      quantity: number;
    }
  ];
};

export type ChangeStatus = {
  id: string;
  status: OrderStatus;
};

export interface OrderService {
  create(input: OrderInput): Promise<Order>;
  changeStatus(input: ChangeStatus): Promise<Order>;
  getOrders(): Promise<Order[]>;
}
