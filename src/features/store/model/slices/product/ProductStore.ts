import { Product } from 'src/entities/product/model/types';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from 'src/features/store/model';

type ProductStoreType = {
  products: { [productId: string]: Product };
};

const initialState = {
  products: {},
} as ProductStoreType;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products[action.payload.id] = action.payload;
    },
  },
});

export const product = productSlice.reducer;
export const { addProduct } = productSlice.actions;

const selectProductValues = (state: StoreState): Product[] => {
  return Object.values<Product>(state.product.products);
};

export const selectProducts = createSelector([selectProductValues], (products: Product[]) => [...products]);

export const selectProductById =
  (productId: string) =>
  (state: StoreState): Product | undefined => {
    return state.product.products[productId];
  };
