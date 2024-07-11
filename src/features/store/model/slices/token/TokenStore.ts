import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState, StoreThunk } from 'src/features/store/model';

type TokenStoreType = {
  value: string;
};

const initialState = {
  value: null,
} as TokenStoreType;

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

const generateToken = (): StoreThunk => (dispatch) => {
  const token = Math.random().toString(16);
  dispatch(setToken(token));
  localStorage.setItem('token', token);
};

const clearToken = (): StoreThunk => (dispatch) => {
  const token = null;
  dispatch(setToken(token));
  localStorage.setItem('token', token);
};

export const token = tokenSlice.reducer;
export const { setToken } = tokenSlice.actions;
export const tokenThunks = {
  generateToken,
  clearToken,
};
export const selectToken = (state: StoreState): string => state.token.value;
export const selectHasToken = (state: StoreState): boolean => !!selectToken(state);
