import { ChangeStatus, OrderInput, OrderService } from 'src/features/orderProducts/model/orderService/OrderService';
import { OrderStatus, Order } from 'src/entities/order/model/types';
import { createProductForId } from 'src/features/createRandomProduct/api';
import { dateFormatter } from 'src/shared/utils/FormatUtils';

export class OrderServiceInMemory implements OrderService {
  private orders: Order[] = [];

  create(input: OrderInput): Promise<Order> {
    const nowDate = new Date();
    const order: Order = {
      id: `product_${nowDate.getMilliseconds()}`,
      createdAt: dateFormatter(nowDate),
      status: OrderStatus.PendingConfirmation,
      products: input.products.map((p) => ({
        product: createProductForId(p.id),
        quantity: p.quantity,
      })),
    };
    this.orders.push(order);
    return Promise.resolve(order);
  }

  getOrders(): Promise<Order[]> {
    return Promise.resolve(this.orders);
  }

  changeStatus(input: ChangeStatus): Promise<Order> {
    let targetOrder: Order;

    this.orders = this.orders.map((o) => {
      if (o.id === input.id) {
        targetOrder = o;
        targetOrder.status = input.status;
        return targetOrder;
      } else {
        return o;
      }
    });
    return Promise.resolve(targetOrder);
  }
}
