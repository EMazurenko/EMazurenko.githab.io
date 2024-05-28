import { Product } from 'src/entities/product/model/types';

class ProductStore {
  private products = new Map<string, Product>();

  public save(product: Product) {
    this.products.set(product.id, product);
  }

  public getById(id: string): Product | undefined {
    return this.products.get(id);
  }

  public list(): Product[] {
    return Array.from<Product>(this.products.values());
  }
}

const instance = new ProductStore();

export default instance;
