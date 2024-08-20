import { Category } from 'src/entities/category/model/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from 'src/features/store/model';

type CategoryStoreType = {
  categories: Category[];
  error: string;
};

const initialState = {
  categories: [],
} as CategoryStoreType;

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const updatedCategory = action.payload;
      state.categories.map((category) => (category.id === updatedCategory.id ? updatedCategory : category));
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    },
  },
});

export const category = categorySlice.reducer;
export const { addCategory, updateCategory, setCategories, setError, clearError } = categorySlice.actions;

export const selectCategories = (state: StoreState): Category[] => state.category.categories;
export const selectCategoryError = (state: StoreState): string => state.category.error;
export const selectCategoryById =
  (categoryId: string) =>
  (state: StoreState): Category | undefined => {
    return state.category.categories.find((c) => c.id === categoryId);
  };
