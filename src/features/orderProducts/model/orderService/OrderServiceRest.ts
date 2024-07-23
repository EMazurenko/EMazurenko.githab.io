import { OrderInput, OrderService } from 'src/features/orderProducts/model/orderService/OrderService';
import { Order } from 'src/features/coreService/model/types';

export class OrderServiceRest implements OrderService {
  private readonly serverUrl: string;
  private readonly commandId: string;
  private token: string;

  constructor(serverUrl: string, commandId: string) {
    this.serverUrl = serverUrl;
    this.commandId = commandId;
  }

  setToken(token: string) {
    this.token = token;
  }

  order(input: OrderInput): Promise<Order> {
    return fetch(`${this.serverUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ ...input }),
    }).then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response.json());
    });
  }
}
