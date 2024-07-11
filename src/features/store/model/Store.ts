import { configureStore } from '@reduxjs/toolkit';
import { cart } from 'src/features/store/model/slices/cart';
import { init } from 'src/features/store/model/slices/init';
import { profile } from 'src/features/store/model/slices/profile';
import { token } from 'src/features/store/model/slices/token';
import { product } from 'src/features/store/model/slices/product';

export const store = configureStore({
  reducer: {
    cart,
    init,
    profile,
    token,
    product,
  },
});
