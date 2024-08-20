import { jwtDecode } from 'jwt-decode';
import { ChangeStatus, OrderInput, OrderService } from 'src/features/orderProducts/model/orderService/OrderService';
import { Order } from 'src/entities/order/model/types';

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

  create(input: OrderInput): Promise<Order> {
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

  getOrders(): Promise<Order[]> {
    const decodedToken: { id: string } = jwtDecode(this.token);

    return fetch(
      `${this.serverUrl}/orders?${new URLSearchParams({
        sorting: JSON.stringify({ type: 'DESC', field: 'createdAt' }),
      }).toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${this.token}`,
        },
      }
    ).then((response) => {
      if (response.ok)
        return response.json().then((res) => {
          return Promise.resolve(res.data.filter((order) => order.user.id === decodedToken.id));
        });
      else return Promise.reject(response.json());
    });
  }

  changeStatus(input: ChangeStatus): Promise<Order> {
    return fetch(`${this.serverUrl}/orders/${input.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ status: input.status }),
    }).then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response.json());
    });
  }
}
