import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from 'src/features/store/model';

type CartSliceType = {
  products: { [productId: string]: number };
};

const initialState = {
  products: {},
} as CartSliceType;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProductCount: (state, action: PayloadAction<{ productId: string; count: number }>) => {
      state.products[action.payload.productId] = action.payload.count;
    },
    removeProduct: (state, action: PayloadAction<{ productId: string }>) => {
      delete state.products[action.payload.productId];
    },
  },
});

export const cart = cartSlice.reducer;
export const { setProductCount, removeProduct } = cartSlice.actions;

export const selectCart = (state: StoreState): CartSliceType => state.cart;
export const selectCountProduct =
  (id: string) =>
  (state: StoreState): number =>
    state.cart.products[id] || 0;
