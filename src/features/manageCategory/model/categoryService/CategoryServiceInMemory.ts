import { CategoryService } from 'src/features/manageCategory/model/categoryService/CategoryService';
import { Category } from 'src/entities/category/model/types';

export class CategoryServiceInMemory implements CategoryService {
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

  create(category: Category): Promise<Category> {
    const nowMs = Date.now().toString();
    category.id = `product_${nowMs}`;
    return Promise.resolve(category);
  }

  edit(category: Category): Promise<Category> {
    return Promise.resolve(category);
  }
}
