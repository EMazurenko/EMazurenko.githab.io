import { OrderInput, OrderService } from 'src/features/orderProducts/model/orderService/OrderService';
import { Order, OrderStatus } from 'src/features/coreService/model/types';

export class OrderServiceInMemory implements OrderService {
  order(input: OrderInput): Promise<Order> {
    return Promise.resolve({
      status: OrderStatus.Processing,
    } as Order);
  }
}
