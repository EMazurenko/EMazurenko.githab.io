import { ProductLoadOutput, ProductService } from 'src/features/manageProduct/model/productService/ProductService';
import { Category } from 'src/entities/category/model/types';
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

  getCategories(): Promise<Category[]> {
    return Promise.resolve([
      { id: '1', name: 'cat_1', photo: 'file://photo_cat_1' },
      { id: '2', name: 'cat_2' },
      { id: '3', name: 'cat_3', photo: 'file://photo_cat_3' },
      { id: '4', name: 'cat_4' },
      { id: '5', name: 'cat_5', photo: 'file://photo_cat_5' },
      { id: '6', name: 'cat_6' },
      { id: '7', name: 'cat_7' },
      { id: '8', name: 'cat_8' },
      { id: '9', name: 'cat_9' },
      { id: '10', name: 'cat_10' },
    ]);
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
