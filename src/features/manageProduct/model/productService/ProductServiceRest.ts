import { ProductLoadOutput, ProductService } from 'src/features/manageProduct/model/productService/ProductService';
import { Product } from 'src/entities/product/model/types';

export class ProductServiceRest implements ProductService {
  private static readonly INIT_LOAD_COUNT = 6;
  private static readonly MORE_LOAD_COUNT = 3;
  private readonly serverUrl: string;
  private readonly commandId: string;
  private token: string;
  private products: Product[];
  private lastIndex: number;

  constructor(serverUrl: string, commandId: string) {
    this.serverUrl = serverUrl;
    this.commandId = commandId;
  }

  setToken(token: string) {
    this.token = token;
  }

  create(product: Product): Promise<Product> {
    return fetch(`${this.serverUrl}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ ...product, categoryId: product.category.id }),
    }).then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response.json());
    });
  }

  edit(product: Product): Promise<Product> {
    return fetch(`${this.serverUrl}/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ ...product, categoryId: product.category.id }),
    }).then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response.json());
    });
  }

  initLoad(): Promise<ProductLoadOutput> {
    return fetch(
      `${this.serverUrl}/products?${new URLSearchParams({
        sorting: JSON.stringify({ type: 'DESC', field: 'createdAt' }),
      }).toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    ).then((response) => {
      if (response.ok)
        return response.json().then((res) => {
          //Принял решение не использовать честную паджинацию, чтобы не пересчитывать в хранилище коллекцию продуктов после авторизации
          this.products = res.data.filter((c) => c.commandId === this.commandId);
          this.lastIndex = Math.min(this.products.length, ProductServiceRest.INIT_LOAD_COUNT);

          return Promise.resolve({
            products: this.products.slice(0, this.lastIndex),
            hasMoreProducts: this.hasMoreProducts(),
          });
        });
      else return Promise.reject(response.json());
    });
  }

  loadMore(): Promise<ProductLoadOutput> {
    if (this.products) {
      const newLastIndex = Math.min(this.products.length, this.lastIndex + ProductServiceRest.MORE_LOAD_COUNT);
      const products = this.products.slice(this.lastIndex, newLastIndex);
      this.lastIndex = newLastIndex;

      return Promise.resolve({
        products,
        hasMoreProducts: this.hasMoreProducts(),
      });
    } else {
      return Promise.resolve({
        products: [],
        hasMoreProducts: false,
      });
    }
  }

  private hasMoreProducts(): boolean {
    return this.lastIndex < this.products.length;
  }
}
