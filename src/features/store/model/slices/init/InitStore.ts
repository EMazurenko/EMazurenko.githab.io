import { createSlice } from '@reduxjs/toolkit';
import { StoreState } from 'src/features/store/model';

type InitStoreType = {
  isInit: boolean;
};

const initialState = {
  isInit: false,
} as InitStoreType;

const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    initialize: (state) => {
      state.isInit = true;
    },
  },
});

export const init = initSlice.reducer;
export const { initialize } = initSlice.actions;
export const selectIsInit = (state: StoreState): boolean => state.init.isInit;
