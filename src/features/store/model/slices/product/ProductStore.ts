import { Product } from 'src/entities/product/model/types';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from 'src/features/store/model';
import { Category } from 'src/entities/category/model/types';

type ProductStoreType = {
  hasMoreProducts: boolean;
  products: { [productId: string]: Product };
  categories: Category[];
  error: string;
};

const initialState = {
  hasMoreProducts: true,
  products: {},
  categories: [],
} as ProductStoreType;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products[action.payload.id] = action.payload;
    },
    setHasMoreProducts: (state, action: PayloadAction<boolean>) => {
      state.hasMoreProducts = action.payload;
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

export const product = productSlice.reducer;
export const { addProduct, setHasMoreProducts, setCategories, setError, clearError } = productSlice.actions;

const selectProductValues = (state: StoreState): Product[] => {
  return Object.values<Product>(state.product.products);
};

export const selectProducts = createSelector([selectProductValues], (products: Product[]) => [...products]);

export const selectHasMoreProducts = (state: StoreState): boolean => state.product.hasMoreProducts;
export const selectCategories = (state: StoreState): Category[] => state.product.categories;
export const selectProductError = (state: StoreState): string => state.product.error;
export const selectProductById =
  (productId: string) =>
  (state: StoreState): Product | undefined => {
    return state.product.products[productId];
  };
