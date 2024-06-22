import { configureStore } from '@reduxjs/toolkit';
import { cart } from 'src/features/storeCart/model';

export const store = configureStore({
  reducer: {
    cart,
  },
});
