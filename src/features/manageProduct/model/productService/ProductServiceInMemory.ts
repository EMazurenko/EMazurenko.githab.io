import { ProductLoadOutput, ProductService } from 'src/features/manageProduct/model/productService/ProductService';
import { createProductForId } from 'src/features/createRandomProduct/api';
import { Product } from 'src/entities/product/model/types';

export class ProductServiceInMemory implements ProductService {
  private static readonly MAX_PRODUCT_COUNT = 21;
  private static readonly INIT_LOAD_COUNT = 12;
  private static readonly MORE_LOAD_COUNT = 3;
  private lastIndex;

  initLoad(): Promise<ProductLoadOutput> {
    this.lastIndex = ProductServiceInMemory.INIT_LOAD_COUNT;
    return Promise.resolve({
      products: this.createProducts(ProductServiceInMemory.INIT_LOAD_COUNT),
      hasMoreProducts: true,
    });
  }

  loadMore(): Promise<ProductLoadOutput> {
    if (this.lastIndex + ProductServiceInMemory.MORE_LOAD_COUNT > ProductServiceInMemory.MAX_PRODUCT_COUNT) {
      return Promise.resolve({ products: [], hasMoreProducts: false });
    } else {
      this.lastIndex += ProductServiceInMemory.MORE_LOAD_COUNT;
      return Promise.resolve({
        products: this.createProducts(ProductServiceInMemory.MORE_LOAD_COUNT),
        hasMoreProducts: true,
      });
    }
  }

  private createProducts(count: number): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < count; i++) {
      products.push(createProductForId(i.toString()));
    }
    return products;
  }

  create(product: Product): Promise<Product> {
    const nowMs = Date.now().toString();
    product.id = `product_${nowMs}`;
    product.createdAt = nowMs;
    return Promise.resolve(product);
  }

  edit(product: Product): Promise<Product> {
    return Promise.resolve(product);
  }
}
