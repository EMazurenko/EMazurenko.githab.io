import { CategoryService } from 'src/features/manageCategory/model/categoryService/CategoryService';
import { Category } from 'src/entities/category/model/types';

export class CategoryServiceRest implements CategoryService {
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

  create(category: Category): Promise<Category> {
    return fetch(`${this.serverUrl}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(category),
    }).then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response.json());
    });
  }

  edit(category: Category): Promise<Category> {
    return fetch(`${this.serverUrl}/categories/${category.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(category),
    }).then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response.json());
    });
  }

  getCategories(): Promise<Category[]> {
    return fetch(`${this.serverUrl}/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then((response) => {
      if (response.ok)
        return response.json().then((res) => {
          return Promise.resolve(res.data.filter((c) => c.commandId === this.commandId));
        });
      else return Promise.reject(response.json());
    });
  }
}
