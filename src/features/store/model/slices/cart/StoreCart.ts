import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from 'src/features/store/model';

type CartStoreType = {
  products: { [productId: string]: number };
};

const initialState = {
  products: {},
} as CartStoreType;

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
    clearCart: (state) => {
      state.products = {};
    },
  },
});

export const cart = cartSlice.reducer;
export const { setProductCount, removeProduct, clearCart } = cartSlice.actions;

export const selectCart = (state: StoreState): CartStoreType => state.cart;
export const selectCountProduct =
  (id: string) =>
  (state: StoreState): number =>
    state.cart.products[id] || 0;
