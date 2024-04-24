import { BaseEntity } from 'src/shared/model/types';
import { Category } from 'src/entities/category/model/types';

export interface Product extends BaseEntity {
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
}
