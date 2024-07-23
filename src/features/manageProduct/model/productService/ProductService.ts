import { Product } from 'src/entities/product/model/types';
import { Category } from 'src/entities/category/model/types';

export type ProductLoadOutput = {
  products: Product[];
  hasMoreProducts: boolean;
};
export interface ProductService {
  initLoad(): Promise<ProductLoadOutput>;
  loadMore(): Promise<ProductLoadOutput>;
  getCategories(): Promise<Category[]>;
  create(product: Product): Promise<Product>;
  edit(product: Product): Promise<Product>;
}
