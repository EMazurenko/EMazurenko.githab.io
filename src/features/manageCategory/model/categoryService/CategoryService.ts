import { Category } from 'src/entities/category/model/types';

export interface CategoryService {
  getCategories(): Promise<Category[]>;
  create(category: Category): Promise<Category>;
  edit(category: Category): Promise<Category>;
}
