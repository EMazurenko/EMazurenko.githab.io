import { Order } from 'src/features/coreService/model/types';

export type OrderInput = {
  products: [
    {
      id: string;
      quantity: number;
    }
  ];
};

export interface OrderService {
  order(input: OrderInput): Promise<Order>;
}
