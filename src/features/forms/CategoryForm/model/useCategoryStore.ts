import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { createCategory, editCategory, selectCategoryById } from 'src/features/store/model/slices/category';
import { Category } from 'src/entities/category/model/types';

const getOrInitCategory = (foundCategory: Category) => {
  let category: Omit<Partial<Category>, 'id'>;
  if (foundCategory) {
    category = foundCategory;
  } else {
    category = {
      name: '',
      photo: '',
    };
  }
  return category;
};

export const useCategoryStore = (categoryId: string) => {
  const foundCategory = useAppSelector(selectCategoryById(categoryId));
  const dispatch = useAppDispatch();

  const initCategory = getOrInitCategory(foundCategory);
  const saveCategory = (category: Category) => {
    if (category.id) {
      dispatch(editCategory(category));
    } else {
      dispatch(createCategory(category));
    }
  };

  return { initCategory, saveCategory };
};
