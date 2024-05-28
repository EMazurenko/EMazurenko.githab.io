import { Category } from 'src/entities/category/model/types';

export const defaultCategory: Category = { id: '1', name: 'cat_1', photo: 'file://photo_cat_1' };

const Categories: Category[] = [
  defaultCategory,
  { id: '2', name: 'cat_2' },
  { id: '3', name: 'cat_3', photo: 'file://photo_cat_3' },
  { id: '4', name: 'cat_4' },
  { id: '5', name: 'cat_5', photo: 'file://photo_cat_5' },
  { id: '6', name: 'cat_6' },
  { id: '7', name: 'cat_7' },
  { id: '8', name: 'cat_8' },
  { id: '9', name: 'cat_9' },
  { id: '10', name: 'cat_10' },
];

export default Categories;
