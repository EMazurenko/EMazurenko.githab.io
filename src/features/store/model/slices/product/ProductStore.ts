import { Product } from 'src/entities/product/model/types';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from 'src/features/store/model';

type ProductStoreType = {
  hasMoreProducts: boolean;
  products: { [productId: string]: Product };
  error: string;
};

const initialState = {
  hasMoreProducts: true,
  products: {},
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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    },
  },
});

export const product = productSlice.reducer;
export const { addProduct, setHasMoreProducts, setError, clearError } = productSlice.actions;

const selectProductValues = (state: StoreState): Product[] => {
  return Object.values<Product>(state.product.products).sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
};

export const selectProducts = createSelector([selectProductValues], (products: Product[]) => [...products]);

export const selectHasMoreProducts = (state: StoreState): boolean => state.product.hasMoreProducts;
export const selectProductError = (state: StoreState): string => state.product.error;
export const selectProductById =
  (productId: string) =>
  (state: StoreState): Product | undefined => {
    return state.product.products[productId];
  };
